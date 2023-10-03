import React from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";

import "./app.css";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
