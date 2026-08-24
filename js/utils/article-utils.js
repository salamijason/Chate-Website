/**
 * @file article-utils.js
 * @description Utility functions for Blogger articles.
 * @module utils/article-utils
 */

export const formatLabels = (labels = []) => labels.join(", ");

export function formatDate(date) {
  return date?.substring(0, 10) ?? "";
}

export function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character],
  );
}

export function extractThumbnail(html) {
  const documentFragment = new DOMParser().parseFromString(html, "text/html");

  return documentFragment.querySelector("img")?.src ?? "";
}
