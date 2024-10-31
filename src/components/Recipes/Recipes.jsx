import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const recipesObj = useLoaderData();
  const recipes = recipesObj.recipes;

  return (
    <div className="max-w-7xl md:mx-auto md:mb-24 mx-4 mb-16">
      <h2 className="md:mb-14 md:text-5xl font-bold text-center">
        Our Recipes
      </h2>

      <div className="recipes-container md:grid-cols-3 md:gap-6 grid grid-cols-1 gap-4">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
