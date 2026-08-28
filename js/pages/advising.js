/**
 * @file advising.js
 * @description Controller for the Advising page — mounts the layout and renders the advisor card grid plus each advisor's detail modal.
 * @module pages/advising
 */

import { mountLayout } from "../components/layout.js";
import { renderAdvisorCards } from "../components/advisor-card.js";
import { renderAdvisorModals } from "../components/advisor-modal.js";
import { ADVISORS } from "../data/advisors/index.js";

export function mountAdvising() {
  const panel = document.getElementById("advising");
  if (!panel) return;

  panel.innerHTML = `
    <div class="advising__container">
      <h1 class="advising__heading">
        Try <span lang="my">ချိတ်နဲ့တိုင်ပင်</span> Now!
      </h1>
      <div class="advisor-card__grid">
        ${renderAdvisorCards(ADVISORS)}
      </div>
    </div>
    ${renderAdvisorModals(ADVISORS)}
  `;
}

async function initAdvisingPage() {
  try {
    await mountLayout();
  } catch (err) {
    console.error("Failed to mount layout:", err);
  }

  mountAdvising();
}

initAdvisingPage();
