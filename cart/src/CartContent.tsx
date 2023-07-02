import React, { useState, useEffect } from "react";
import { login, jwt } from "./cart";
import Login from "./Login";

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
  useEffect(() => {
    jwt.subscribe((val) => setToken(val ?? ""));;
  }, []);

  return <div>
      JET: {token}
      <Login />
    </div>
};
