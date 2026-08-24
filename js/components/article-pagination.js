/**
 * @file article-pagination.js
 * @description Renders the pagination bar markup for the Articles page — item range, page number buttons, and prev/next arrows.
 * @module components/article-pagination
 */

export function renderArticlePagination({
  activePage,
  totalPages,
  startItem,
  endItem,
  displayedTotal,
}) {
  const pageButtonsHtml = Array.from(
    { length: totalPages },
    (_, index) => index,
  )
    .map(
      (index) => `
      <button
        type="button"
        class="article-listing__page${index === activePage ? " is-active" : ""}"
        data-page="${index}"
        aria-label="Go to article page ${index + 1}"
        aria-current="${index === activePage ? "page" : "false"}"
      >
        ${index + 1}
      </button>`,
    )
    .join("");

  return `
    <span class="article-listing__range">
      ${startItem}-${endItem} of ${displayedTotal} items
    </span>
    <button
      type="button"
      class="article-listing__page article-listing__page--arrow"
      data-page="${activePage - 1}"
      aria-label="Previous article page"
      ${activePage === 0 ? "disabled" : ""}
    >&lsaquo;</button>
    ${pageButtonsHtml}
    <button
      type="button"
      class="article-listing__page article-listing__page--arrow"
      data-page="${activePage + 1}"
      aria-label="Next article page"
      ${activePage >= totalPages - 1 ? "disabled" : ""}
    >&rsaquo;</button>`;
}
