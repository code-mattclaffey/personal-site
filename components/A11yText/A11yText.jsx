import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Text } from '@titan-tooling/ui';

const A11yButton = ({
    hiddenText,
    fontSize,
    selected,
    updateFontSizeHandler,
}) => {
    const classes = classNames(
        'c-button c-button--outline c-a11y-text__button',
        {
            'u-text--smaller': fontSize === '14px',
            'u-text--larger': fontSize === '22px',
            'c-a11y-text__button--selected': selected === true,
        },
    );

    return (
        <button
            type="button"
            className={classes}
            onClick={() => updateFontSizeHandler(fontSize)}
        >
            <span className="u-visually-hidden">{hiddenText}</span>{' '}
            <span aria-hidden="true">A</span>
        </button>
    );
};

export const A11yText = () => {
    const [selectedFontSize, setSelectedFontSize] = useState('');

    const updateFontHandler = fontSize => {
        document.documentElement.style.setProperty(
            '--base-font-size',
            fontSize,
        );
        setSelectedFontSize(fontSize);
    };

    return (
        <section
            className="c-a11y-text"
            aria-labelledby="size-heading"
        >
            <Text
                additionalClassNames="c-a11y-text__title u-text--smaller"
                id="size-heading"
            >
                Size:
            </Text>
            <A11yButton
                hiddenText="Click for smaller font sizes"
                fontSize="14px"
                selected={selectedFontSize === '14px'}
                updateFontSizeHandler={updateFontHandler}
            />
            <A11yButton
                hiddenText="Click for medium font sizes"
                fontSize="18px"
                selected={
                    selectedFontSize === '18px' ||
                    selectedFontSize === ''
                }
                updateFontSizeHandler={updateFontHandler}
            />
            <A11yButton
                hiddenText="Click for larger font sizes"
                fontSize="22px"
                selected={selectedFontSize === '22px'}
                updateFontSizeHandler={updateFontHandler}
            />
        </section>
    );
};
