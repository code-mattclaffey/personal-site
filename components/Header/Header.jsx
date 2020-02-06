import React from 'react';
import Link from 'next/link';
import { Menu } from 'react-feather';

import {
    RegionInner
} from '@titan-tooling/ui';

export const Header = () => (
    <header className="c-header">
        <RegionInner additionalClassNames="c-header__inner">
            <Link href="/">
                <a className="e-link--naked u-text--larger u-margin--none u-text--bold">
                    mattc.
                </a>
            </Link>
            <div>
                <nav className="c-navigation" id="menu">
                    <ul className="c-navigation__items">
                        <li>
                            <Link href="#">
                                <a className="c-navigation__link u-text--smaller">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#section--about">
                                <a className="c-navigation__link u-text--smaller">About Me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#section--feed">
                                <a className="c-navigation__link u-text--smaller">My Feed</a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreferrer">CV</a>
                            </Link>
                        </li> */}
                        <li>
                            <Link href="https://medium.com/@mattclaffey">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreferrer">Medium</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/code-mattclaffey">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreferrer">Github</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://dribbble.com/mattclaffey/">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreferrer">Dribbble</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <a href="#menu" className="c-header__menu-button" aria-label="Open Main Menu">
                    <Menu size="100%" />
                </a>
            </div>
            
        </RegionInner>
    </header>
);
