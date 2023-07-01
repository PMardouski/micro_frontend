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
