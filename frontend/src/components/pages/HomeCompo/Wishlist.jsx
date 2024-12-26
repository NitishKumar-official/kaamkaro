import React from "react";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "Divi Engine Logo Zipper Hoodie",
      price: "$29.99",
      discountedPrice: null,
      stockStatus: "In Stock",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "Dat Divi Engine Life Crop-top (3-Tone)",
      price: "$14.99",
      discountedPrice: null,
      stockStatus: "In Stock",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "Dat Divi Engine Life Hoodie - Limited Edition",
      price: "$44.99",
      discountedPrice: null,
      stockStatus: "In Stock",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "WordPress Tee",
      price: "$14.99",
      discountedPrice: "$12.99",
      stockStatus: "In Stock",
    },
  ];

  return (
    <>
   <Header/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl font-bold mt-10 mb-6">My Wishlist</h1>

      {/* Table */}
      <div className="overflow-x-auto w-full px-4 pl-60">
        <table className="table-auto w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left text-sm uppercase text-gray-700">
              <th className="p-4"> </th>
              <th className="p-4">Product name</th>
              <th className="p-4">Unit price</th>
              <th className="p-4">Stock status</th>
              <th className="p-4"> </th> 
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-300 hover:bg-gray-50"
              >
                {/* Remove button */}
                <td className="p-4 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    ✕
                  </button>
                </td>
                {/* Image and name */}
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover border border-gray-300 rounded"
                  />
                  <span className="text-blue-500 hover:underline text-sm font-medium">
                    {item.name}
                  </span>
                </td>
                {/* Price */}
                <td className="p-4 text-sm">
                  {item.discountedPrice ? (
                    <span>
                      <span className="line-through text-gray-500">
                        {item.price}
                      </span>{" "}
                      <span className="text-green-600 font-semibold">
                        {item.discountedPrice}
                      </span>
                    </span>
                  ) : (
                    <span>{item.price}</span>
                  )}
                </td>
                {/* Stock Status */}
                <td className="p-4 text-sm">
                  <span className="text-green-600">{item.stockStatus}</span>
                </td>
                {/* Add to Cart */}
                <td className="p-4 text-right">
                  <button className="text-blue-500 hover:underline text-sm">
                    Add to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Wishlist;
