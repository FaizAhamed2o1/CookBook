import { useLoaderData } from "react-router-dom";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const RecipeDetails = () => {
  const recipeDetails = useLoaderData();
  const {
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    caloriesPerServing,
    tags,
    image,
    rating,
    reviewCount,
  } = recipeDetails;

  return (
    <div className="max-w-7xl md:mx-auto md:mb-24 mx-4 mb-16">
      <h2 className="md:text-[4rem] font-semibold md:mb-12">{name}</h2>

      <div>
        <div className="flex items-center gap-4">
          <span className="text-2xl">
            <MdOutlineAccessTimeFilled />
          </span>

          <div>
            <p className=" md:mb-2 text-xs font-medium uppercase">prep time</p>
            <p className="text-sm font-medium text-gray-500">
              {prepTimeMinutes} Minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
