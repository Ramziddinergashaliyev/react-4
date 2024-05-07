import React, { useState } from "react";
import "./products.scss";
import { PRODUCTS } from "../../static/ProductsData";
import ProductData from "../productData/ProductData";

function Products() {
  const [product, setProduct] = useState(null);
  const productsData = PRODUCTS?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__card__img">
        <img onClick={() => setProduct(el)} src={el.img} alt="" />
      </div>
      <div className="products__card__info">
        <h2 className="products__card__title">{el.title}</h2>
        <img src={el.star} alt="" />
        <p className="products__card__desc">
          <del>{el.oldprice}</del> {el.price}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="products">
      <p className="products__desc">Find your favourite smart watch.</p>
      <h3 className="products__title">Our Latest Products</h3>
      <div className="products__cards container">{productsData}</div>
      {product ? <ProductData data={product} close={setProduct} /> : <></>}
      <button className="products__btn">View More</button>
    </section>
  );
}

export default Products;
