(function () {
  'use strict';

  const localStorageName = 'preffered-theme';
  const selector = 'data-theme-switcher';

  const updateThemeMode = (theme) => {
    if (theme === 'light-mode') {
      document.documentElement.classList.add(theme);
      document.documentElement.classList.remove('dark-mode');
      return;
    }

    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove('light-mode');
  };

  const handleClick = ({ currentTarget }) => {
    const theme = currentTarget.getAttribute(selector);
    updateThemeMode(theme);
    localStorage.setItem(localStorageName, theme);

    document.querySelector(`[${selector}][aria-selected="true"]`).setAttribute('aria-selected', false);
    currentTarget.setAttribute('aria-selected', true);
  };

  const a11yButtons = [...document.querySelectorAll(`[${selector}]`)];
  const prefferredThemeMode = localStorage.getItem(localStorageName);

  if (prefferredThemeMode) {
    updateThemeMode(prefferredThemeMode);
    document.querySelector(`[${selector}="${prefferredThemeMode}"]`).setAttribute('aria-selected', true);
  }

  a11yButtons.forEach((element) => element.addEventListener('click', handleClick));
})();
