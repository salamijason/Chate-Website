/**
 * @file hash-routing.js
 * @description Resolves the current URL hash to a valid content key, falling back to a default when the hash is missing or not recognized.
 * @module utils/hash-routing.js
 */

export function resolveActiveKey(validKeys, defaultKey) {
  const hash = location.hash.replace("#", "");
  return validKeys.has(hash) ? hash : defaultKey;
}
