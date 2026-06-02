import React from "react";

function RatingDots({ rating = 0, max = 5 }) {
  const dots = [];

  for (let i = 1; i <= max; i++) {
    const isFull = rating >= i;
    const isHalf = !isFull && rating >= i - 0.5;

    dots.push(
      <div
        key={i}
        className={[
          "w-2.5 h-2.5 rounded-full border",
          isFull ? "bg-[#223441] border-[#223441]" : "",
          isHalf ? "bg-white border-[#223441]" : "",
          !isFull && !isHalf ? "bg-white border-gray-50" : "",
        ].join(" ")}
      />,
    );
  }

  return <div className="flex items-center gap-1">{dots}</div>;
}

export default RatingDots;

