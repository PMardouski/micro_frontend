import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";
import { PDPContent } from "./PDPContent";

const App = () =>
(
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={ <PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
