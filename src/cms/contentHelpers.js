/**
 * Helpers for CMS field values (especially repeatable lists stored as JSON).
 */

export function asList(value, fallback = []) {
  if (Array.isArray(value)) return value;
  if (value == null || value === '') return fallback;
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

export function toStoredValue(fieldType, value) {
  if (fieldType === 'list' || fieldType === 'json') {
    if (typeof value === 'string') return value;
    return JSON.stringify(value ?? (fieldType === 'list' ? [] : {}));
  }
  return value == null ? '' : String(value);
}

export function fromStoredValue(fieldType, value, fallback) {
  if (fieldType === 'list') return asList(value, Array.isArray(fallback) ? fallback : []);
  if (fieldType === 'json') {
    if (value && typeof value === 'object') return value;
    if (typeof value === 'string' && value.trim()) {
      try {
        return JSON.parse(value);
      } catch {
        return fallback ?? null;
      }
    }
    return fallback ?? null;
  }
  return value ?? fallback ?? '';
}

/** Normalize content map after API load — parse list/json strings when defaults are arrays/objects */
export function mergeContent(defaults, fields) {
  const merged = { ...defaults };
  Object.entries(fields || {}).forEach(([key, field]) => {
    const raw = field?.value;
    if (raw == null || raw === '') return;
    const def = defaults[key];
    if (Array.isArray(def) || (typeof raw === 'string' && raw.trim().startsWith('['))) {
      const list = asList(raw, Array.isArray(def) ? def : []);
      // Empty saved lists fall back to live defaults so the site never looks blank
      merged[key] = list.length ? list : (Array.isArray(def) ? def : list);
    } else if (def && typeof def === 'object' && !Array.isArray(def)) {
      merged[key] = fromStoredValue('json', raw, def);
    } else {
      merged[key] = raw;
    }
  });
  return merged;
}
