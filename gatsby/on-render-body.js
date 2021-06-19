'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');

const onRenderBody = ({ setHeadComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement('style', {
        key: 'katex-inline-stylesheet',
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
      }),
    ]);
  }

  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
  (function() {
    function setTheme(theme) {
      (theme);
      if (theme === 'dark') {
        ("inside if theme===dark");
        document.documentElement.className = 'dark';
      } else {
        document.documentElement.className = 'light';
      }
      window.__theme = theme;
    };

    window.__setPreferredTheme = function(theme) {
      setTheme(theme);
      try {
        localStorage.setItem('preferred-theme', theme);
      } catch (e) {}
    };

    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('preferred-theme');
    } catch (e) {}

    window.__themeListeners = [];

    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
      window.__themeListeners.forEach(function(listener) {
        listener();
      });
    });
    (preferredTheme);
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
  `
          .replace(/\n/g, ' ')
          .replace(/ {2}/g, ''),
      }}
    />,
  ]);
};

module.exports = onRenderBody;
