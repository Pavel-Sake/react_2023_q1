import React, { useEffect, useState } from 'react';
import { Header } from '../components/header/Header';
import { Ipath } from '../interfaces/path';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

interface PathProps {
  paths: Ipath[];
}
interface IlabelLibrary {
  '/': string;
  '/about': string;
}

const labelLibrary: IlabelLibrary = {
  '/': 'Home',
  '/about': 'About',
};

function RootLayout(props: PathProps) {
  const [pathLabel, setPathLabel] = useState('Home');
  function changePathLabel(text: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let path = labelLibrary[text];
    if (!path) {
      path = 'not found';
    }
    setPathLabel(path);
  }

  useEffect(() => {
    const pathname = window.location.pathname;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let path = labelLibrary[pathname];
    if (!path) {
      path = 'not found';
    }
    setPathLabel(path);
  }, []);
  return (
    <div className={styles.rootLayout}>
      <Header paths={props.paths} changePathLabel={changePathLabel} pathLabel={pathLabel} />
      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export { RootLayout };
