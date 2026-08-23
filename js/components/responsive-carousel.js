/**
 * @file responsive-carousel.js
 * @description Mounts and updates a Bootstrap carousel whose items per slide change with the viewport width.
 * @module components/responsive-carousel
 */

export function mountResponsiveCarousel({
  container,
  carouselId,
  carouselClass,
  rowClass,
  ariaLabel,
  items,
  getItemsPerSlide,
  renderItem,
}) {
  if (!container) return;

  const renderCarousel = (itemsPerSlide) => {
    let slidesHTML = "";

    for (let index = 0; index < items.length; index += itemsPerSlide) {
      const slideItems = items
        .slice(index, index + itemsPerSlide)
        .map(renderItem)
        .join("");

      slidesHTML += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="${rowClass}">${slideItems}</div>
        </div>`;
    }

    return `
      <div
        id="${carouselId}"
        class="carousel slide ${carouselClass}"
        aria-label="${ariaLabel}"
      >
        <div class="carousel-inner">${slidesHTML}</div>
        <a
          class="carousel-control-prev"
          href="#${carouselId}"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#${carouselId}"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>`;
  };

  let currentItemsPerSlide = getItemsPerSlide();
  let carouselInstance = null;

  function updateCarousel() {
    carouselInstance?.dispose();

    container.innerHTML = renderCarousel(currentItemsPerSlide);

    const carouselElement = container.querySelector(`#${carouselId}`);
    carouselInstance = new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: "carousel",
      touch: true,
    });
  }

  function handleResize() {
    const nextItemsPerSlide = getItemsPerSlide();

    if (nextItemsPerSlide === currentItemsPerSlide) return;

    currentItemsPerSlide = nextItemsPerSlide;
    updateCarousel();
  }

  updateCarousel();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 200);
  });
}
