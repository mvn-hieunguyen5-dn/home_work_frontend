import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiProductGetDetail } from "../../../api/product/product.api";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    apiProductGetDetail(id).then((e) => {
      setProduct(e.data);
    });
  }, [id]);
  return (
    <div className="container-product">
      <div className="product-detail wrap-content">
        PD-Detail
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">Price: {product.price} $</p>
          <p className="product-category">{product.category}</p>
          <p className="c">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
