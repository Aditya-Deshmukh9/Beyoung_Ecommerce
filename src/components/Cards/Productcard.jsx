import React from "react";

function card() {
  return (
    <a href="#" className="group block">
      <img
        src="https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/orange_flannel_shirt_for_men_base_18_01_2024_400x533.jpg"
        alt=""
        className="aspect-square h-full w-full rounded object-cover overflow-hidden"
      />

      <div className="mt-3">
        <h2 className="text-sm font-bold text-clip overflow-hidden">
          Light Grey Cotton Twill Relaxed-Fit Mens Shirt
        </h2>
        <span className="category-product-sub">Urban Shirts</span>
        <div className="price">
          <span> ₹998</span>
          <small>₹2499</small>
          <strong>(60% Off)</strong>
        </div>
      </div>
    </a>
  );
}

export default card;
