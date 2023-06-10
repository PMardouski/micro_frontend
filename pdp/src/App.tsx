import React, { Suspense, useState } from "react";

import "./index.scss";

import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () =>
(<div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className="my-10">PDP page content</div>
    <Footer />
  </div>
);

export default App;
