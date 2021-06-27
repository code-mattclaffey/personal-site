import React from 'react'

export const Header = () => (
  <header className="o-region c-header">
    <nav className="o-region__inner c-header__inner">
      <ul className="c-header__navigation">
        <li>
          <a className="e-logo" href="/">mattc.</a>
        </li>
        <li className="c-header__toggle-container">
          <button className="c-header__toggle-mode-btn c-header__toggle-mode-btn--light" data-toggle-theme="light-mode">
            <span className="c-header__toggle-mode-btn-text">View website in light mode</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="navigation_menuButtonIcon__2KDdi"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </button>
          <button className="c-header__toggle-mode-btn c-header__toggle-mode-btn--dark" data-toggle-theme="dark-mode">
            <span className="c-header__toggle-mode-btn-text">View website in dark mode</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="navigation_menuButtonIcon__2KDdi"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>

)
