
(function() {
    'use strict';

    const localStorageName = 'preffered-font-size';
    const selector = 'data-text-size-toggle';

    const updateBaseTextSize = fontSize => {
        if (fontSize === '--base-font-size') {
            document.documentElement.removeAttribute('style');
            return;
        }

        document.documentElement.style.setProperty('--base-font-size', `var(${fontSize})`);
    }

    const setActive = element => {
        const activeClass = 'c-a11y-text__button--selected';
        const activeElements = [...element.parentNode.querySelectorAll(`.${activeClass}`)];
        activeElements.forEach(el => {
            el.classList.remove(activeClass);
        });

        element.classList.add(activeClass);
    }

    const handleClick = ({ currentTarget }) => {
        const fontSize = currentTarget.getAttribute(selector);
        updateBaseTextSize(fontSize);
        setActive(currentTarget);
        localStorage.setItem(localStorageName, fontSize);
    }

    const a11yButtons = [...document.querySelectorAll(`[${selector}]`)];
    const prefferredFontSize = localStorage.getItem(localStorageName);

    if (prefferredFontSize && prefferredFontSize !== '--base-font-size') {
        updateBaseTextSize(prefferredFontSize);
        setActive(document.querySelector(`[${selector}="${prefferredFontSize}"]`));
    }

    a11yButtons.forEach(element => element.addEventListener('click', handleClick));
})();
