(function () {
  'use strict';

  let activeElement = null;

  const handleClick = () => {
    const header = document.querySelector('[data-menu]');
    const activeClass = 'c-header--open';

    if (header.classList.contains(activeClass)) {
      header.classList.remove(activeClass);
      activeElement.focus();
      activeElement = null;
      return;
    }

    header.classList.add(activeClass);
  };

  const menuToggle = [...document.querySelectorAll('[data-menu-toggle]')];

  menuToggle[0].addEventListener('touchstart', () => {
    activeElement = document.activeElement;
  });

  menuToggle.forEach((element) => element.addEventListener('click', handleClick));
})();
