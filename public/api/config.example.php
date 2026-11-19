<?php
/**
 * Copy this file to config.php and fill in Hostinger MySQL details.
 * Do NOT commit config.php with real passwords.
 */
return [
  'db_host' => 'localhost',
  'db_name' => 'YOUR_DATABASE_NAME',
  'db_user' => 'YOUR_DATABASE_USER',
  'db_pass' => 'YOUR_DATABASE_PASSWORD',
  'db_charset' => 'utf8mb4',

  // Session cookie settings
  'session_name' => 'eduflair_admin',
  'secure_cookies' => true, // set false only for local HTTP testing
];
