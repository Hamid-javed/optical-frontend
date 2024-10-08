import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FaStar className={i < rating ? "text-yellow-400" : "text-gray-600"} />
      );
    }
    return stars;
  };

  const handleClick = () => {
    // Set the productId to localStorage only when clicking
    localStorage.setItem("productId", product._id);
    navigate("/product-details");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      {/* Product Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover hover:scale-105 duration-300"
      />
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 w-[10rem]">
          {product.name}
        </h3>
        <div className="flex items-center mt-2">
          {/* Rating */}
          <div className="flex space-x-1">{renderStars(product.rating)}</div>
          <span className="text-gray-600 text-sm ml-2">
            ({product.reviewCount} reviews)
          </span>
        </div>
        <p className="mt-3 text-lg font-bold text-black">Rs:{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
