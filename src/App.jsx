import React from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";

import "./app.css";
import BrowseCatalogue from "./pages/BrowseCatalogue";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/browse-catalogue" element={<BrowseCatalogue />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
