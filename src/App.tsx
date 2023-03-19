import React from 'react';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/notFound/NotFound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
      <div>learn react</div>
    </div>
  );
}

export default App;
