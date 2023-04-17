import React from "react";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { FormPage } from "./pages/formPage/FormPage";
import { NotFound } from "./pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";

import { paths } from "./data/paths";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<RootLayout paths={paths} />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
