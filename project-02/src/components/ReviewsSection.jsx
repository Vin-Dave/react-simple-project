import React from "react";

const ReviewsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800">
          Product Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <img
              src="path/to/product1.jpg"
              alt="Product 1"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
              Amazing Kitchen Blender
            </h3>
            <p className="text-gray-600 mb-4">
              I've been using this blender for months, and it's fantastic. It
              effortlessly blends smoothies, soups, and more. Highly
              recommended!
            </p>
            <div className="flex items-center">
              <img
                src="path/to/user1.jpg"
                alt="User 1"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-800 font-semibold">Emma Johnson</p>
                <p className="text-gray-600 text-sm">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <img
              src="path/to/product2.jpg"
              alt="Product 2"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Quality Cookware Set</h3>
            <p className="text-gray-600 mb-4">
              This cookware set exceeded my expectations. Durable, non-stick,
              and aesthetically pleasing. A must-have for any kitchen
              enthusiast!
            </p>
            <div className="flex items-center">
              <img
                src="path/to/user2.jpg"
                alt="User 2"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-800 font-semibold">Alex Rodriguez</p>
                <p className="text-gray-600 text-sm">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <img
              src="path/to/product3.jpg"
              alt="Product 3"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">
              Versatile Food Processor
            </h3>
            <p className="text-gray-600 mb-4">
              I use this food processor daily for chopping, slicing, and
              grating. It's a game-changer in the kitchen and saves me so much
              time.
            </p>
            <div className="flex items-center">
              <img
                src="path/to/user3.jpg"
                alt="User 3"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-800 font-semibold">Michael Davis</p>
                <p className="text-gray-600 text-sm">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-lg text-gray-700 text-center">
          Discover top-rated kitchen products as reviewed by our satisfied
          customers. Your kitchen deserves the best!
        </p>
      </div>
    </section>
  );
};

export default ReviewsSection;
