// TipsSection.jsx

import React from "react";

const TipsSection = () => {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800">
          Cooking Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip Card 1 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Master the Basics</h3>
            <p className="text-gray-600">
              Before diving into complex recipes, make sure you master the basic
              cooking techniques. Understanding the fundamentals will elevate
              your cooking skills.
            </p>
          </div>

          {/* Tip Card 2 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Fresh Ingredients</h3>
            <p className="text-gray-600">
              Always use fresh and high-quality ingredients. The taste of your
              dish largely depends on the quality of the components you choose.
            </p>
          </div>

          {/* Tip Card 3 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">
              Experiment with Flavors
            </h3>
            <p className="text-gray-600">
              Don't be afraid to experiment with different herbs and spices.
              It's a great way to discover unique flavor combinations and add
              your personal touch to recipes.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg text-gray-700">
          Have fun in the kitchen and enjoy the process of creating delicious
          meals. Cooking is both an art and a science, so embrace the journey of
          learning and trying new things!
        </p>
      </div>
    </section>
  );
};

export default TipsSection;
