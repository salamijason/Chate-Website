/**
 * @file members.js
 * @description Handles the rendering of the members section on the website, including a responsive carousel for displaying team members.
 * @module components/members
 */

import { MEMBERS } from "../data/members/index.js";
import { mountResponsiveCarousel } from "./responsive-carousel.js";

export function mountMembers() {
  const section = document.getElementById("members");

  if (!section) return;

  section.innerHTML = `
    <div class="members__container">
      <h2 class="members__heading">
        Our <span class="members__highlight">Team Members</span>
      </h2>
      <div id="members-carousel-container"></div>
    </div>
  `;

  const getItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 575.98) return 1;
    if (width <= 991.98) return 2;
    if (width <= 1199.98) return 3;
    return 4;
  };

  const renderItem = (member) => `
    <div class="members__col">
      <div class="members__card">
        <img
          src="assets/members/${member.filename}"
          alt="${member.alt}"
          class="members__image"
          loading="lazy"
          decoding="async"
        >
        <h3 class="members__name">${member.name}</h3>
        <p class="members__role">${member.role}</p>
        ${
          member.subtitle
            ? `<p class="members__subtitle">${member.subtitle}</p>`
            : ""
        }
      </div>
    </div>`;

  mountResponsiveCarousel({
    container: document.getElementById("members-carousel-container"),
    carouselId: "members-carousel",
    carouselClass: "members__carousel",
    rowClass: "members__row",
    ariaLabel: "Team members",
    items: MEMBERS,
    getItemsPerSlide,
    renderItem,
  });
}
