/**
 * Retrieves the user's dark mode preference from localStorage.
 *
 * This function checks the value stored under the "darkMode" key in localStorage.
 * If the value is "enabled", it returns `true`; otherwise, it returns `false`.
 * This allows the application to determine whether dark mode should be applied
 * when the page loads.
 *
 * @returns {boolean} - Returns `true` if dark mode is enabled, `false` otherwise.
 *
 * @example
 * // Check if dark mode is enabled
 * const darkModeEnabled = getDarkModeStatus();
 * if (darkModeEnabled) {
 *   console.log("Dark mode is enabled");
 * } else {
 *   console.log("Dark mode is disabled");
 * }
 *
 * @see localStorage.getItem
 */
export function getDarkModeStatus() {
  const darkModeStorageKey = "darkMode";
  const isDarkModeSet = localStorage.getItem(darkModeStorageKey) === "enabled";

  return isDarkModeSet;
}

/**
 * Saves the user's dark mode preference in localStorage.
 *
 * This function stores the user's theme setting under the "darkMode" key in localStorage.
 * If `isDarkModeEnabled` is `true`, the value saved will be "enabled";
 * if `false`, it will be "disabled". This allows the application to retrieve
 * this setting later and automatically apply the correct theme.
 *
 * @param {boolean} isDarkModeEnabled - Indicates whether dark mode is enabled (`true`) or disabled (`false`).
 *
 * @example
 * // Enable dark mode
 * setDarkModeInLocalStorage(true);
 *
 * // Disable dark mode
 * setDarkModeInLocalStorage(false);
 *
 * @see localStorage.setItem
 */
export function setDarkModeInLocalStorage(isDarkModeEnabled) {
  localStorage.setItem("darkMode", isDarkModeEnabled ? "enabled" : "disabled");
}

/**
 * Toggles the "dark-mode" class on the document body based on the provided flag.
 *
 * This function adds or removes the "dark-mode" CSS class on the `<body>` element
 * depending on the value of `isDarkModeEnabled`. When the class is present,
 * the dark mode styles defined in CSS will be applied; when removed, the page
 * will revert to the light mode styles.
 *
 * @param {boolean} isDarkModeEnabled - Indicates whether dark mode is enabled (`true`) or disabled (`false`).
 * If `true`, the "dark-mode" class is added to the `<body>`; if `false`, it is removed.
 *
 * @example
 * // Enable dark mode
 * updateDarkModeClass(true);
 *
 * // Disable dark mode
 * updateDarkModeClass(false);
 *
 * @see document.body.classList.toggle
 */
export function updateDarkModeClass(isDarkModeEnabled) {
  document.body.classList.toggle("dark-mode", isDarkModeEnabled);
}
