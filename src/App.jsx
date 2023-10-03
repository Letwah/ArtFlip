import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Welcome from "./pages/Welcome";

import "./app.css";
import BrowseCatalogue from "./pages/BrowseCatalogue";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/browse-catalogue" element={<BrowseCatalogue />} />
          </Routes>
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default App;
