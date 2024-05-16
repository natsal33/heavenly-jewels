import React from 'react'

function Cart() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cart Item */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full mb-4" />
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Product Name</h2>
            <span className="text-gray-600">$99.99</span>
          </div>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">Remove</button>
            <div className="flex items-center">
              <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300">-</button>
              <span className="px-3 py-1 bg-gray-200">1</span>
              <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300">+</button>
            </div>
          </div>
        </div>
        {/* End Cart Item */}
        
        {/* Repeat this block for each item in the cart */}
        
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart