import React, { useEffect, useState } from "react";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const apiData = await res.json();
    setProducts(apiData.products);
  };

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  let start = selectedPage * PAGE_SIZE;
  let end = start + PAGE_SIZE;

  const handleClick = (num) => {
    setSelectedPage(num);
  };

  const handleNext = () => {
    if (selectedPage + 1 < products.length - 1)
      setSelectedPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (selectedPage > 0) setSelectedPage((prev) => prev - 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <div>
          <div className="products-container">
            {products.slice(start, end).map((p) => {
              return (
                <div key={p.id} className="products-card">
                  <img
                    className="products-img"
                    src={p.thumbnail}
                    alt={p.title}
                  />
                  <span>{p.title}</span>
                </div>
              );
            })}
          </div>
          <div className="products-pagination">
            <div
              className="products-pagination-pagenumber"
              onClick={handlePrev}
            >
              ◀️
            </div>
            {Array.from({ length: noOfPages }).map((_, key) => {
              return (
                <div
                  onClick={() => handleClick(key)}
                  key={key}
                  className="products-pagination-pagenumber"
                >
                  {key + 1}
                </div>
              );
            })}
            <div
              className="products-pagination-pagenumber"
              onClick={handleNext}
            >
              ▶️
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
