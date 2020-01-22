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
                <a className="e-link--naked u-margin--none u-text--bold">
                    mattc.
                </a>
            </Link>
            <a href="#menu" className="c-header__menu-button">
                <Menu size="100%" />
            </a>
        </RegionInner>
    </header>
);
