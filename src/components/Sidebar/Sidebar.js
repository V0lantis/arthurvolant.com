// @flow strict
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import Toggle from '../Toggle';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';

type Props = {
  isIndex?: boolean,
};

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== 'undefined';

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  const [theme, settheme] = useState(null);

  useEffect(() => {
    if (isBrowser) {
      settheme(window.__theme);
    }
  }, []);

  function changeTheme(e) {
    const newTheme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('preferred-theme', newTheme);
    window.__setPreferredTheme(newTheme);
    settheme(newTheme);
  }
  return (
    <div className={styles['sidebar']}>
      <Helmet>
        {theme && <html className={theme === 'dark' ? 'dark' : 'light'} />}
      </Helmet>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Toggle
          icons={{
            checked: (
              <img
                src={moon}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),
            unchecked: (
              <img
                src={sun}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),
          }}
          checked={theme === 'dark'}
          onChange={changeTheme}
        />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
