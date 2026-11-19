<?php
/**
 * Eduflair contact form — Hostinger
 * Creates a lead in GetLead CRM + emails info@eduflair.com
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  $data = $_POST;
}

$name    = trim((string)($data['name'] ?? ''));
$email   = trim((string)($data['email'] ?? ''));
$phone   = trim((string)($data['phone'] ?? ''));
$service = trim((string)($data['service'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $phone === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Name, email, and phone are required.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.']);
  exit;
}

// Honeypot — bots fill this; real users leave it empty
if (!empty($data['website'])) {
  echo json_encode(['ok' => true]);
  exit;
}

// ── Parse phone → country code + mobile digits ───────────────────────────────
$digits = preg_replace('/\D+/', '', $phone);
$countryCode = '91';
$mobileNo = $digits;

if (strlen($digits) > 10 && str_starts_with($digits, '91')) {
  $countryCode = '91';
  $mobileNo = substr($digits, 2);
} elseif (strlen($digits) > 10 && str_starts_with($digits, '0')) {
  $mobileNo = ltrim($digits, '0');
}

if (strlen($mobileNo) < 8 || strlen($mobileNo) > 14) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Please enter a valid mobile number.']);
  exit;
}

$feedbackParts = [];
if ($service !== '') {
  $feedbackParts[] = 'Service: ' . $service;
}
if ($message !== '') {
  $feedbackParts[] = $message;
}
$feedback = implode("\n", $feedbackParts);

// ── GetLead CRM (token stays server-side only) ───────────────────────────────
$GETLEAD_TOKEN = 'gl_6a3daeda97dae6d679cf';
$params = [
  'token'       => $GETLEAD_TOKEN,
  'name'        => $name,
  'email'       => $email,
  'countrycode' => $countryCode,
  'mobileno'    => $mobileNo,
  'source'      => 'eduflair.com',
  'purpose'     => $service !== '' ? $service : 'Website enquiry',
  'feedback'    => $feedback !== '' ? $feedback : 'Website contact form',
];

$crmUrl = 'https://app.getleadcrm.com/api/gl-website-contacts?' . http_build_query($params);
$crmOk = false;
$crmMessage = '';

if (function_exists('curl_init')) {
  $ch = curl_init($crmUrl);
  curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_HTTPHEADER     => ['Accept: application/json'],
  ]);
  $crmRaw = curl_exec($ch);
  $crmCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);

  $crmJson = json_decode((string) $crmRaw, true);
  $crmOk = is_array($crmJson)
    && strtolower((string)($crmJson['status'] ?? '')) === 'success';
  $crmMessage = is_array($crmJson)
    ? (string)($crmJson['message'] ?? '')
    : 'CRM request failed';
  if (!$crmOk && $crmCode >= 200 && $crmCode < 300 && stripos((string) $crmRaw, 'success') !== false) {
    $crmOk = true;
  }
} else {
  $crmMessage = 'cURL not available on server';
}

// ── Also email info@eduflair.com (backup notification) ───────────────────────
$to      = 'info@eduflair.com';
$subject = 'New website enquiry from ' . $name;
$body    = "New contact form submission from eduflair.com\n\n"
  . "Name:    {$name}\n"
  . "Email:   {$email}\n"
  . "Phone:   {$phone}\n"
  . "Service: " . ($service !== '' ? $service : 'Not specified') . "\n\n"
  . "Message:\n" . ($message !== '' ? $message : '(no message)') . "\n\n"
  . "GetLead CRM: " . ($crmOk ? 'Lead created' : 'Failed — ' . $crmMessage) . "\n"
  . "---\nSent: " . date('Y-m-d H:i:s T') . "\n";

$headers = [
  'From: Eduflair Website <noreply@eduflair.com>',
  'Reply-To: ' . $name . ' <' . $email . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];
@mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$crmOk) {
  http_response_code(502);
  echo json_encode([
    'ok' => false,
    'error' => 'Unable to submit your enquiry right now. Please WhatsApp us or email info@eduflair.com.',
  ]);
  exit;
}

echo json_encode(['ok' => true]);
