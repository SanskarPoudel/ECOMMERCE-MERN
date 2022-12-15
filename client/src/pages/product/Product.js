import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import "./Product.css";
export default function Product() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row w-100 ">
          {products.map((product) => {
            return (
              <div className="col-12 col-sm-4 mt-2">
                <div className="card">
                  <div className="card-body">
                    <div className="card-img-actions">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png"
                        className="card-img img-fluid"
                        width={96}
                        height={350}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        <Link
                          href="#"
                          className="text-default mb-2"
                          data-abc="true"
                        >
                          {product.name}
                        </Link>
                      </h6>
                      <Link href="#" className="text-muted" data-abc="true">
                        {product.category.name}
                      </Link>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">
                      ${product.price}
                    </h3>
                    <div>
                      <i className="fa fa-star star" />
                      <i className="fa fa-star star" />
                      <i className="fa fa-star star" />
                      <i className="fa fa-star star" />
                    </div>
                    <div className="text-muted mb-3">34 reviews</div>
                    <button type="button" className="btn bg-cart">
                      <i className="fa fa-cart-plus mr-2" /> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
