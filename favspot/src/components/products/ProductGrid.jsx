import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (!products?.length) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
