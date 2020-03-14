import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';

import { RegionInner, List, ListItem } from '@titan-tooling/ui';

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
                        mattc.
                    </a>
                </Link>
                <div>
                    <nav className="c-navigation" id="menu">
                        <List additionalClassNames="c-navigation__items">
                            <ListItem>
                                <Link href="#">
                                    <a
                                        className="c-navigation__link u-text--super u-text--smaller@md"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                    >
                                        Home
                                    </a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#section--about">
                                    <a
                                        className="c-navigation__link u-text--super u-text--smaller@md"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                    >
                                        About Me
                                    </a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <a
                                    href="https://medium.com/@mattclaffey"
                                    className="c-navigation__link u-text--super u-text--smaller@md"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Medium
                                </a>
                            </ListItem>
                            <ListItem>
                                <a
                                    href="https://github.com/code-mattclaffey"
                                    className="c-navigation__link u-text--super u-text--smaller@md"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </ListItem>
                            <ListItem>
                                <a
                                    href="http://dribbble.com/mattclaffey/"
                                    className="c-navigation__link u-text--super u-text--smaller@md"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Dribbble
                                </a>
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
