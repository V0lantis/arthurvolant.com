/*
 * Copyright (c) 2015 instructure-react
 * Forked from https://github.com/aaronshaf/react-toggle/
 * + applied https://github.com/aaronshaf/react-toggle/pull/90
 * */

import React, { useState, useRef } from 'react';
import styles from './Toggle.module.scss';

// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts
function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    const { changedTouches } = event;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    const { pageX } = event;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

function Toggle(props) {
  const inputRef = useRef(null);
  const {
    checked, defaultChecked, disabled, onChange
  } = props;
  const { className, icons: _icons, ...inputProps } = props;
  const [hasFocus, setHasFocus] = useState(false);

  let previouslyChecked = !!(checked || defaultChecked);
  let startX = null;
  let touchStarted = null;
  let hadFocusAtTouchStart = null;
  let touchMoved = null;

  const classes = styles['react-toggle']
    + (checked ? ` ${styles['react-toggle__checked']}` : '')
    + (hasFocus ? ` ${styles['react-toggle__focus']}` : '')
    + (disabled ? ` ${styles['react-toggle__disabled']}` : '')
    + (className ? ` ${className}` : '');

  function handleClick(event) {
    const { current: checkbox } = inputRef;
    previouslyChecked = checkbox.checked;
    if (event.target !== checkbox) {
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }

    onChange(event);
  }

  function handleTouchStart(event) {
    startX = pointerCoord(event).x;
    touchStarted = true;
    hadFocusAtTouchStart = hasFocus;
    setHasFocus(true);
  }

  function handleTouchMove(event) {
    if (!touchStarted) return;
    touchMoved = true;

    if (startX != null) {
      const currentX = pointerCoord(event).x;
      if (checked && currentX + 15 < startX) {
        startX = currentX;
        onChange(event);
      } else if (!this.state.checked && currentX - 15 > startX) {
        startX = currentX;
        onChange(event);
      }
    }
  }

  function handleTouchEnd(event) {
    if (!touchMoved) return;
    const { current: checkbox } = inputRef;
    event.preventDefault();

    if (startX != null) {
      if (previouslyChecked !== checked) {
        checkbox.click();
      }

      touchStarted = false;
      startX = null;
      touchMoved = false;
    }

    if (!hadFocusAtTouchStart) {
      setHasFocus(false);
    }
  }

  function handleTouchCancel() {
    if (startX != null) {
      touchStarted = false;
      startX = null;
      touchMoved = false;
    }

    if (!hadFocusAtTouchStart) {
      setHasFocus(false);
    }
  }
  function handleFocus(event) {
    const { onFocus } = props;

    if (onFocus) {
      onFocus(event);
    }

    hadFocusAtTouchStart = true;
    setHasFocus(true);
  }

  function handleBlur(event) {
    const { onBlur } = props;

    if (onBlur) {
      onBlur(event);
    }

    hadFocusAtTouchStart = false;
    setHasFocus(false);
  }

  function getIcon(type) {
    const { icons } = props;
    if (!icons) {
      return null;
    }
    return icons[type];
  }

  return (
    <div
      className={classes}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className={styles['react-toggle_track']}>
        <div className={styles['react-toggle_track-check']}>
          {getIcon('checked')}
        </div>
        <div className={styles['react-toggle_track-x']}>
          {getIcon('unchecked')}
        </div>
      </div>
      <div className={styles['react-toggle_thumb']} />

      <input
        {...inputProps}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles['react-toggle_screenreader-only']}
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </div>
  );
}

export default React.memo(Toggle);
