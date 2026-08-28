/**
 * @file types.js
 * @description Shared JSDoc type definitions for advisor data.
 * @module data/advisors/types
 */

/**
 * @typedef {Object} University
 * @property {string} name University name, used as image alt text.
 * @property {string} logo Path to the university's logo image.
 */

/**
 * @typedef {Object} ModalBlock
 * @property {"paragraph"|"heading"} type Block type — "paragraph" renders as body text, "heading" renders as a subheading.
 * @property {string} text The block's text content.
 */

/**
 * @typedef {Object} AdvisorEntry
 * @property {string} id Unique slug used for the advisor's modal element ID.
 * @property {string} name Full name, including any parenthetical nickname.
 * @property {string} photo Path to the advisor's profile photo.
 * @property {string} role Advisor's title/role, shown on the card and in the modal.
 * @property {string} cardIntro Summary intro text shown (and line-clamped) on the card.
 * @property {string} cardHighlight Short highlighted sentence appended after the card intro.
 * @property {University[]} universities Universities to display as logos on the card.
 * @property {string} calendlyUrl External Calendly booking link for the "Meet" button.
 * @property {ModalBlock[]} modalBlocks Ordered content blocks for the advisor's detail modal.
 */

export {};
