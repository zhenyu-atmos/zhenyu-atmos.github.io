(() => {
  const storageKey = "zhenyu-you-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    const light = theme === "light";
    root.dataset.theme = light ? "light" : "dark";
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", light ? "#ffffff" : "#161616");

    const button = document.querySelector(".theme-toggle");
    if (button) {
      const label = light ? "Switch to night mode" : "Switch to day mode";
      button.setAttribute("aria-label", label);
      button.title = label;
    }
  }

  let preference = "dark";
  try {
    preference = localStorage.getItem(storageKey) === "light" ? "light" : "dark";
  } catch {
    // The toggle still works when browser storage is unavailable.
  }
  applyTheme(preference);

  function initializeToggle() {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;
    applyTheme(root.dataset.theme);

    button.addEventListener("click", () => {
      const theme = root.dataset.theme === "light" ? "dark" : "light";
      applyTheme(theme);
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // Keep the selected theme for this page even without storage.
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeToggle, { once: true });
  } else {
    initializeToggle();
  }

  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue === "light" ? "light" : "dark");
    }
  });
})();
