import React from 'react';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/notFound/NotFound';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/header/Header';
import { RootLayout } from './layout/RootLayout';

import { paths } from './data/paths';
import { products } from './data/products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout paths={paths} />}>
          <Route index element={<Home products={products} />} />
          <Route path="/about" element={<About message="dfdf" />} />
          <Route path="*" element={<NotFound message="not found" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
