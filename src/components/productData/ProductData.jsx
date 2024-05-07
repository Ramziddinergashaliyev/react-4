import React from "react";
import "./productData.scss";

function ProductData({ data, close }) {
  return (
    <>
      <div onClick={() => close(null)} className="product__overly"></div>;
      <div className="product__data container">
        <div className="product__data__img">
          <img src={data.img} alt="" />
        </div>
        <div className="product__data__info">
          <h2 className="product__data__title">{data.title}</h2>
          <p className="product__data__desc">price: {data.price}</p>
          <img src={data.star} alt="" />
          <p className="product__data__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            adipisci. Quod quam praesentium ipsam labore, hic reiciendis
            consequuntur quis asperiores.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductData;
