import React from "react";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Home page content</div>
    <Footer />
  </div>
);

export default App;