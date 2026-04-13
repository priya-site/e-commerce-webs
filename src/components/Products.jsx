import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Products</h2>

      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={item.image} height="200" className="p-3" />
              <div className="card-body text-center">
                <h6>{item.title.substring(0, 20)}</h6>
                <p>${item.price}</p>
                <a href={`/product/${item.id}`} className="btn btn-dark btn-sm">
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;