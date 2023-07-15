import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

class Header extends Component {
  render() {
    return (
      <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
        <div className="flex">
          <div className="flex-grow flex">
            <Router>
              <Link to="/">Fidget Spinner World</Link>
              <div className="mx-5">|</div>
              <Link id="cart" to="/cart">
                Cart
              </Link>
            </Router>
          </div>
          <div className="flex-end relative">
            <MiniCart />
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
