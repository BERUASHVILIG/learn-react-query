import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["Product", id],
    // queryFn: () => {
    //     //   const response = await fetch(`https://dummyjson.com/products/${id}`);
    //     //   const data = await response.json();
    //     //   return data;
    //     // },
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()),
    staleTime: 60000,
    cacheTime: 3600000,
  });

  if (isLoading) return "Loading...";
  if (error) return "Error: " + error.message;

  return (
    <div>
      <h4>{data.title}</h4>
      <img src={data.images[0]} alt={data.title} />
    </div>
  );
};

export default ProductDetail;
