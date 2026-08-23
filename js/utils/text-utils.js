/**
 * @file text-utils.js
 * @description Wraps any Myanmar-script substrings in a given string with <span lang="my">...</span> so Myanmar Sagar renders correctly.
 * @module utils/text-utils
 */

const MYANMAR_SCRIPT_PATTERN = /[\u1000-\u109F]+/g;

export function wrapMyanmarScript(text) {
  if (!text) return "";
  return text.replace(
    MYANMAR_SCRIPT_PATTERN,
    (match) => `<span lang="my">${match}</span>`,
  );
}
