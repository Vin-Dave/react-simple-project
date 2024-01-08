import React from "react";

const RecipesSection = () => {
  const recipes = [
    {
      id: 1,
      title: "Pasta Carbonara",
      category: "Dinner",
      image: "path/to/carbonara.jpg",
      description: "Classic Italian pasta dish with creamy sauce.",
    },
    {
      id: 2,
      title: "Avocado Toast",
      category: "Breakfast",
      image: "path/to/avocado_toast.jpg",
      description: "Healthy and delicious breakfast choice.",
    },
    {
      id: 3,
      title: "Chocolate Brownies",
      category: "Dessert",
      image: "path/to/brownies.jpg",
      description: "Rich and fudgy chocolate brownies.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative overflow-hidden bg-white p-6 rounded-lg shadow-md group"
              style={{ margin: "10px" }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.description}</p>
              <p className="mt-4 text-sm text-gray-500">{recipe.category}</p>
              <div className="absolute inset-0 bg-gray-500 bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-md">
                  Button
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
