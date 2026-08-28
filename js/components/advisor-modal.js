/**
 * @file advisor-modal.js
 * @description Renders a single advisor's detail modal — full bio content with optional subheadings, plus a Calendly booking button.
 * @module components/advisor-modal
 */

import { escapeHtml } from "../utils/article-utils.js";
import { wrapMyanmarScript } from "../utils/text-utils.js";

function renderModalBlock(block) {
  const text = wrapMyanmarScript(escapeHtml(block.text));

  if (block.type === "heading") {
    return `<h4 class="advisor-modal__subheading">${text}</h4>`;
  }

  return `<p class="advisor-modal__paragraph">${text}</p>`;
}

export function renderAdvisorModal(advisor) {
  const name = escapeHtml(advisor.name);
  const role = escapeHtml(advisor.role);
  const blocksHtml = advisor.modalBlocks.map(renderModalBlock).join("");

  return `
    <div
      class="modal fade advisor-modal"
      id="advisorModal-${advisor.id}"
      tabindex="-1"
      aria-labelledby="advisorModal-${advisor.id}-label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content advisor-modal__content">
          <div class="modal-header advisor-modal__header">
            <h3 class="modal-title" id="advisorModal-${advisor.id}-label">${name}</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body advisor-modal__body">
            <img
              class="advisor-modal__photo"
              src="${escapeHtml(advisor.photo)}"
              alt="${name}"
              loading="lazy"
            >
            <p class="advisor-modal__role">${role}</p>
            ${blocksHtml}
          </div>
          <div class="modal-footer advisor-modal__footer">
            <a
              class="btn btn-primary"
              href="${escapeHtml(advisor.calendlyUrl)}"
              target="_blank"
              rel="noopener noreferrer"
            >Meet</a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderAdvisorModals(advisors) {
  return advisors.map(renderAdvisorModal).join("");
}
