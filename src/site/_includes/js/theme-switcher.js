
const setTheme = theme => {
  document.querySelector('html').classList.add(theme);
  document.querySelector('html').classList.remove(theme === 'dark-mode' ? 'light-mode' : 'dark-mode' );
  localStorage.setItem('mattc-site-theme', JSON.stringify(theme))
}

const toggleTheme = ({ currentTarget }) => {
  const mode = currentTarget.getAttribute('data-toggle-theme');

  console.log(mode)

  setTheme(mode)
};

const chosenTheme = localStorage.getItem('mattc-site-theme');

if (chosenTheme) {
  setTheme(JSON.parse(chosenTheme))
}

window.addEventListener('load', () => {
  const themeButtons = [...document.querySelectorAll('[data-toggle-theme]')];

  themeButtons.forEach((element) => {
    element.addEventListener('click', toggleTheme);
  });
});
