const API_SERVER = 'http://localhost:8080';

export const getProducts = async () => fetch(`${API_SERVER}/products`).then(res => res.json());

export const getProduct = async (id: string) => fetch(`${API_SERVER}/products/${id}`).then(res => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
