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

  function readPreference() {
    try {
      return localStorage.getItem(storageKey) === "light" ? "light" : "dark";
    } catch {
      return root.dataset.theme === "light" ? "light" : "dark";
    }
  }

  applyTheme(readPreference());

  function updateNavigationVersion() {
    const stylesheet = document.querySelector('link[rel="stylesheet"]');
    if (!stylesheet) return;
    const version = new URL(stylesheet.href).searchParams.get("v");
    if (!version) return;

    // Avoid reusing pages cached before the current shared styles were published.
    document.querySelectorAll("nav a[href]").forEach((link) => {
      const destination = new URL(link.href);
      if (destination.origin !== location.origin) return;
      destination.searchParams.set("v", version);
      link.href = destination.href;
    });
  }

  function initializeToggle() {
    updateNavigationVersion();
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

  window.addEventListener("pageshow", () => applyTheme(readPreference()));
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") applyTheme(readPreference());
  });
})();
