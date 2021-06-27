import React from 'react'

export const Footer = () => {
  return (
    <section className="o-region">
      <div className="o-region__inner">
        <div className="e-box">
          <div className="c-footer">
            <h2 className="e-heading e-heading--h3">Hit me up on the socials</h2>
            <p>Feel free to get in touch, I have many channels that you can follow me on. Most active on Twitter & Medium.</p>

            <ul className="c-footer__socials">
              {/* {% for link in navigation %}
              <li>
                <a
                  href="{{link.href}}"
                  {% if link.target === '_blank' %}
                target="_blank"
                rel="noreferrer"
                {% endif %}
            >
                {{ link.text }}
              </a>
            </li>
            {% endfor %} */}
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
