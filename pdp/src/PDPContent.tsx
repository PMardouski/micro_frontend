import React, { useState, useEffect, useRef } from "react";
import { getProduct, currency } from "home/products";
import { useParams } from "react-router-dom";

import placeAddToCart from "addtocart/placeAddToCart";

export const PDPContent = () => {
  const {id} = useParams();
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

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

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
      <div ref={addToCart}></div>
      <div className="mt-10">{product.description}</div>
      <div className="mt-10">{product.longDescription}</div>
    </div>
  </div>);
};
