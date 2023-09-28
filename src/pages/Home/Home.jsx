import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products`).then((res) => res.json()),
    staleTime: 60000,
    cacheTime: 3600000,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <div>
        {data.products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/product-detail/${product.id}`}>{product.title}</Link>
              <img src={product.images[0]} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
