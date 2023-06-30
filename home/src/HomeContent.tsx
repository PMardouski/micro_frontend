import React, { useState, useEffect } from "react";
import { getProducts, getProduct, currency } from "./products";

export const HomeContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{product.name}</a>
            </div>
            <div className="flex-end">
              {currency.format(product.price)}
            </div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
        </div>
      ))}
    </div>
  );
};
