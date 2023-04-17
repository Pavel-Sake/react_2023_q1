import React, { useState } from "react";
import { Header } from "../components/header/Header";
import { Ipath } from "../interfaces/path";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

interface PathProps {
  paths: Ipath[];
}

function RootLayout({ paths }: PathProps) {



  return (
    <div className={styles.rootLayout}>
      <Header paths={paths} />
      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export { RootLayout };
