/**
 * @file series-controller.js
 * @description Controller for managing the active series based on URL hash and rendering the corresponding content.
 * @module controllers/series-controller
 */

import { initializeLazyIframes } from "../utils/lazy-load.js";
import { resolveActiveKey } from "../utils/hash-routing.js";

export function initializeSeriesController({
  defaultKey,
  validKeys,
  buttons = {},
  series,
  container,
  renderSeries,
  getButtons,
}) {
  if (!container) return;

  let resolvedButtons = buttons; // Buttons currently used by the controller

  function update() {
    const activeKey = resolveActiveKey(validKeys, defaultKey);
    container.innerHTML = renderSeries(series[activeKey]);
    resolvedButtons = getButtons?.() ?? buttons;

    Object.entries(resolvedButtons).forEach(([key, button]) => {
      button?.classList.toggle("clicked", key === activeKey);
      button?.addEventListener("click", () => {
        location.hash = key;
      });
    });

    initializeLazyIframes();
  }

  window.addEventListener("hashchange", update);
  update();
}
