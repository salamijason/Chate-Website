/**
 * @file achievements.js
 * @description Renders the achievements section, showcasing individuals who have been guided by peers and admitted worldwide.
 * @module components/achievements
 */

import { mountResponsiveCarousel } from "./responsive-carousel.js";

const achievementsData = [
  { filename: "mya-thet-hmue.webp", alt: "Mya Thet Hmue" },
  { filename: "kaung-pyae-htet.webp", alt: "Kaung Pyae Htet" },
  { filename: "thae-nandar-su.webp", alt: "Thae Nandar Su" },
  { filename: "aung-khant-paing.webp", alt: "Aung Khant Paing" },
  { filename: "shoon-lai-paing.webp", alt: "Shoon Lai Paing" },
  { filename: "swan-htet-nay-khaing.webp", alt: "Swan Htet Nay Khaing" },
  { filename: "swan-tayza-aung.webp", alt: "Swan Tayza Aung" },
  { filename: "soe-thway-ko.webp", alt: "Soe Thway Ko" },
  { filename: "soe-lin-htet.webp", alt: "Soe Lin Htet" },
  { filename: "lin-htet-aung.webp", alt: "Lin Htet Aung" },
  { filename: "aung-htoo-han.webp", alt: "Aung Htoo Han" },
  { filename: "linn-lett-may.webp", alt: "Linn Lett May" },
  { filename: "thaw-ye-zay.webp", alt: "Thaw Ye Zay" },
  { filename: "kyaw-myo-naing.webp", alt: "Kyaw Myo Naing" },
];

export function mountAchievements() {
  const achievementsContainer = document.getElementById("achievements");

  if (!achievementsContainer) return;

  achievementsContainer.innerHTML = `
    <div class="achievements__container">
      <h2 class="achievements__heading">
        Guided by Peers,
        <span class="achievements__highlight">Admitted Worldwide</span>
      </h2>
      <div id="achievements-carousel-container"></div>
    </div>
  `;

  const renderItem = (item) => `
    <div class="achievements__col">
      <img
        src="assets/achievements/${item.filename}"
        alt="${item.alt}"
        class="achievements__image"
        loading="lazy"
        decoding="async"
      >
    </div>`;

  const getItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 575.98) return 1;
    if (width <= 991.98) return 2;
    return 3;
  };

  mountResponsiveCarousel({
    container: document.getElementById("achievements-carousel-container"),
    carouselId: "achievements-carousel",
    carouselClass: "achievements__carousel",
    rowClass: "achievements__row",
    ariaLabel: "Student achievements",
    items: achievementsData,
    getItemsPerSlide,
    renderItem,
  });
}
