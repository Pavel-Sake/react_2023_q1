import React from 'react';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/header/Header';
import { RootLayout } from './layout/RootLayout';

import { paths } from './data/paths';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout paths={paths} />}>
          <Route index element={<Home message="dfdf" />} />
          <Route path="/about" element={<About message="dfdf" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
