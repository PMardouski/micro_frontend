import React, { useState, useEffect } from "react";
import { getProduct, currency } from "home/products";

export const PDPContent = () => {
  const id = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProduct(id).then((data) => {
        setProduct(data);
      });
    } else {
      setProduct(null);
    }
  }, [id]);

  if (product == null) return null;

  return (
  <div className="grid grid-cols-2 gap-5">
    <div>
      <img src={product.image} alt={product.name} />
    </div>
    <div>
      <div className="flex">
        <h1 className="flex-grow font-bold text-3xl">
          <a>{product.name}</a>
        </h1>
        <div className="flex-end font-bold text-3xl">
          {currency.format(product.price)}
        </div>
      </div>
      <div className="mt-10">{product.description}</div>
      <div className="mt-10">{product.longDescription}</div>
    </div>
  </div>);
};
