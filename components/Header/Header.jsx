import React from 'react';
import Link from 'next/link';
import { Menu } from 'react-feather';

import {
    RegionInner,
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
                <nav className="c-navigation">
                    <ul className="c-navigation__items">
                        <li>
                            <Link href="/">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreffer" aria-current="current">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreffer">Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="c-navigation__link u-text--smaller">Case Studies</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreffer">CV</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreffer">Github</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="c-navigation__link u-text--smaller" target="_blank" rel="noreffer">Dribbble</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <a href="#menu" className="c-header__menu-button">
                    <Menu size="100%" />
                </a>
            </div>
            
        </RegionInner>
    </header>
);
