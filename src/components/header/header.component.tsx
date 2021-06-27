import React from 'react'
import SunIcon from '../../public/sun.svg'
import MoonIcon from '../../public/moon.svg'

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
            {/* @ts-ignore */}
            <SunIcon className="navigation_menuButtonIcon__2KDdi" />
          </button>
          <button className="c-header__toggle-mode-btn c-header__toggle-mode-btn--dark" data-toggle-theme="dark-mode">
            <span className="c-header__toggle-mode-btn-text">View website in dark mode</span>
            {/* @ts-ignore */}
            <MoonIcon className="navigation_menuButtonIcon__2KDdi" />
          </button>
        </li>
      </ul>
    </nav>
  </header>

)
