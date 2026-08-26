/**
 * @file loading-overlay.js
 * @description Controls the shared full-page loading overlay.
 * @module components/loading-overlay
 */

const OVERLAY_ID = "page-loading-overlay";

export function showLoadingOverlay() {
  let overlay = document.getElementById(OVERLAY_ID);

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.className = "page-loading-overlay";
    overlay.setAttribute("role", "status");
    overlay.setAttribute("aria-live", "polite");
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
      <span class="page-loading-overlay__spinner" aria-hidden="true"></span>
  `;
  overlay.hidden = false;
}

export function hideLoadingOverlay() {
  document.getElementById(OVERLAY_ID)?.setAttribute("hidden", "");
}
