import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject<string>(null!);

export const login = (username:string, password:string) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    })
}).then((response) => response.json())
.then((data) => {
  jwt.next(data.access_token);
  //getCart();
  return data.access_token;
});

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    (async () => {
      setLoggedIn(!!jwt.value);
      return jwt.subscribe((c) => setLoggedIn(!!jwt.value));
    })();
  }, []);

  return loggedIn;
};
