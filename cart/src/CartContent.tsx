import React, { useState, useEffect } from "react";
import { login, jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  //! async with return
  // useEffect(() => {
  //   (async () => {
  //     login("sally", "123");
  //     return jwt.subscribe((val) => setToken(val ?? ""));
  //   })();
  // }, []);

  //! without return
  // useEffect(() => {
  //   login("sally", "123");
  //     jwt.subscribe((val) => setToken(val ?? ""));;
  // }, []);

  return <div>JET: {token}</div>
};
