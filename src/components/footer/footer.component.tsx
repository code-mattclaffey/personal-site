import React from 'react'

export type FooterLinks = Array<{
  href: string
  text: string
  target?: string
}>

const navigation: FooterLinks = [
  {
    href: '/blog/',
    text: 'Blog',
  },
  {
    href: 'mailto:mattclaffey93@gmail.com',
    text: 'Email',
  },
  {
    href: 'https://github.com/code-mattclaffey',
    text: 'Github',
    target: '_blank',
  },
  {
    href: 'https://medium.com/@mattclaffey',
    text: 'Medium',
    target: '_blank',
  },
  {
    href: 'https://dev.to/mattc',
    text: 'Dev.to',
    target: '_blank',
  },
  {
    href: 'http://dribbble.com/mattclaffey/',
    text: 'Dribbble',
    target: '_blank',
  },
  {
    href: 'https://twitter.com/MattClaffey1',
    text: 'Twitter',
    target: '_blank',
  },
]

export const Footer = () => {
  return (
    <section className="o-region">
      <div className="o-region__inner">
        <div className="e-box">
          <div className="c-footer">
            <h2 className="e-heading e-heading--h3">Hit me up on the socials</h2>
            <p>Feel free to get in touch, I have many channels that you can follow me on. Most active on Twitter & Medium.</p>

            <ul className="c-footer__socials">
              {navigation.map(link => (
                <li>
                  <a href={link.href} target={link.target} rel={link.target !== undefined ? "noreferrer" : undefined}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              <a href="/" className="e-logo">mattc.</a>
            </p>
            <p>
              © 2021 mattc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section >

  )
}
