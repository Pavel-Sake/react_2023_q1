import React from "react";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { FormPage } from "./pages/formPage/FormPage";
import { NotFound } from "./pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";

import { paths } from "./data/paths";
import { products } from "./data/products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout paths={paths} />}>
          <Route index element={<Home products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
