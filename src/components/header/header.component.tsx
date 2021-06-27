import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import SunIcon from '../../../public/sun.svg'
import MoonIcon from '../../../public/moon.svg'

enum ColorModes {
  lightMode = 'light-mode',
  darkMode = 'dark-mode'
}

export const Header = () => {
  const [colorMode, setColorMode] = useState(ColorModes.lightMode)
  const mode = colorMode === ColorModes.lightMode ? 'light' : 'dark'

  const setTheme = (theme: ColorModes) => {
    localStorage.setItem('mattc-site-theme', JSON.stringify(theme));
    document.querySelector('html')?.classList.remove(theme === ColorModes.lightMode ? ColorModes.darkMode : ColorModes.lightMode)
    document.querySelector('html')?.classList.add(theme)
    setColorMode(theme)
  }

  const handleColorToggle = () => {
    setTheme(mode === 'light' ? ColorModes.darkMode : ColorModes.lightMode)
  }

  useEffect(() => {
    const chosenTheme = localStorage.getItem('mattc-site-theme');

    if (chosenTheme) {
      setTheme(JSON.parse(chosenTheme))
    }
  }, [])

  return (
    <>
      <header className="o-region c-header">
        <nav className="o-region__inner c-header__inner">
          <ul className="c-header__navigation">
            <li>
              <Link href="/">
                <a className="e-logo">
                  mattc.
                </a>
              </Link>
            </li>
            <li className="c-header__toggle-container">
              <button type="button" className={`c-header__toggle-mode-btn c-header__toggle-mode-btn--${mode}`} onClick={handleColorToggle}>
                <span className="c-header__toggle-mode-btn-text">View website in {mode} mode</span>
                {/* @ts-ignore */}
                {mode === 'light' && <MoonIcon className="navigation_menuButtonIcon__2KDdi" />}
                {/* @ts-ignore */}
                {mode === 'dark' && <SunIcon className="navigation_menuButtonIcon__2KDdi" />}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
