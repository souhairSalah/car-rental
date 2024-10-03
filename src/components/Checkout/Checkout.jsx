import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-lg mb-6">Thank you for choosing us! Please confirm your details below.</p>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="border-b mb-4 pb-4">          {/* استخدم المكونات الموجودة لديك لعرض العناصر في السلة */}
        </div>

        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <input 
          type="text" 
          placeholder="Full Name" 
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <input 
          type="text" 
          placeholder="Phone Number" 
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />

        <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
        <input 
          type="text" 
          placeholder="Card Number" 
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <input 
          type="text" 
          placeholder="Expiration Date (MM/YY)" 
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <input 
          type="text" 
          placeholder="CVV" 
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />

        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
          Complete Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
