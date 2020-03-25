import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';

import { RegionInner, List, ListItem } from '@titan-tooling/ui';
import {
    DRIBBBLE_NAME,
    DRIBBBLE_URL,
    GITHUB_URL,
    GITHUB_NAME,
    MEDIUM_URL,
    MEDIUM_NAME,
    ABOUT_SECTION_TITlE,
    LOGO_NAME,
} from '../../constants';
import { A11yText } from '../A11yText';

export const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={`c-header${
                isMenuOpen ? ' c-header--open' : ''
            }`}
        >
            <RegionInner additionalClassNames="c-header__inner">
                <Link href="/">
                    <a className="e-link--naked u-text--larger u-margin--none u-text--bold">
                        {LOGO_NAME}
                    </a>
                </Link>
                <div>
                    <nav className="c-navigation" id="menu">
                        <List additionalClassNames="c-navigation__items">
                            <ListItem>
                                <Link href="#section--about">
                                    <a
                                        className="c-navigation__link u-text--super u-text--smaller@md"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                    >
                                        {ABOUT_SECTION_TITlE}
                                    </a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <a
                                    href={MEDIUM_URL}
                                    className="c-navigation__link u-text--super u-text--smaller@md"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {MEDIUM_NAME}
                                </a>
                            </ListItem>
                            <ListItem>
                                <a
                                    href={GITHUB_URL}
                                    className="c-navigation__link u-text--super u-text--smaller@md"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {GITHUB_NAME}
                                </a>
                            </ListItem>
                            <ListItem>
                                <a
                                    href={DRIBBBLE_URL}
                                    className="c-navigation__link u-text--super u-text--smaller@md"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {DRIBBBLE_NAME}
                                </a>
                            </ListItem>
                            <ListItem>
                                <A11yText />
                            </ListItem>
                        </List>
                    </nav>
                    <Link href="#menu">
                        <a
                            className="c-header__menu-button c-header__menu-button--open"
                            aria-label="Open Main Menu"
                            onClick={() => setMenuOpen(true)}
                        >
                            <Menu size="100%" />
                        </a>
                    </Link>
                    <Link href="#">
                        <a
                            className="c-header__menu-button c-header__menu-button--close"
                            aria-label="Open Main Menu"
                            onClick={() => setMenuOpen(false)}
                        >
                            <X size="100%" />
                        </a>
                    </Link>
                </div>
            </RegionInner>
        </header>
    );
};
