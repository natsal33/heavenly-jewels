import React from "react";
import { Link } from "react-router-dom";
import ListingCard from "../../Components/ListingCard";
import CONTENTS from '../../dummyData.js'

function Home() {

    const triggerTour = () => {
        window.CommandBar.trackEvent("user-clicks-shop-now", {});
        console.log("MADE IT")
    }

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 md:px-12 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Elegance Redefined
          </h1>
          <p className="text-lg mb-8">
            Discover the perfect suit that fits your style.
          </p>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200" onClick={triggerTour}>
              Take a Tour
            </button>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Featured Products */}
      <div className="py-16 px-4 md:px-12 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
          <div>
            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-around w-max">
              {CONTENTS.map(({ img, name, id, price }, index) => (
                <ListingCard key={index} img={img} name={name} id={id} price={price} />
              ))}
            </div>
            {/* End Product Card */}

            {/* Repeat this block for each featured product */}
          </div>
        </div>
      </div>
      {/* End Featured Products */}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-12 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-center">
            &copy; 2024 Your Suit Business. All rights reserved.
          </p>
        </div>
      </footer>
      {/* End Footer Section */}
    </div>
  );
}

export default Home;
