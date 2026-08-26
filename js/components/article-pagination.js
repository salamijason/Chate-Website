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
  if (totalPages <= 1) return "";

  const pageIndexes = new Set([0, totalPages - 1]);
  const windowStart = Math.max(0, activePage - 2);
  const windowEnd = Math.min(totalPages - 1, activePage + 2);

  for (let index = windowStart; index <= windowEnd; index += 1) {
    pageIndexes.add(index);
  }

  const pageButtonsHtml = Array.from(pageIndexes)
    .sort((first, second) => first - second)
    .map((index, position, indexes) => {
      const previousIndex = indexes[position - 1];
      const separator =
        previousIndex !== undefined && index - previousIndex > 1
          ? `<span class="article-listing__ellipsis" aria-hidden="true">…</span>`
          : "";

      return `${separator}
      <button
        type="button"
        class="article-listing__page${index === activePage ? " is-active" : ""}"
        data-page="${index}"
        aria-label="Go to article page ${index + 1}"
        aria-current="${index === activePage ? "page" : "false"}"
      >
        ${index + 1}
      </button>`;
    })
    .join("");

  const prevIconHtml = `
    <svg
      class="article-listing__page-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>`;

  const nextIconHtml = `
    <svg
      class="article-listing__page-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>`;

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
    >${prevIconHtml}</button>
    ${pageButtonsHtml}
    <button
      type="button"
      class="article-listing__page article-listing__page--arrow"
      data-page="${activePage + 1}"
      aria-label="Next article page"
      ${activePage >= totalPages - 1 ? "disabled" : ""}
    >${nextIconHtml}</button>`;
}
