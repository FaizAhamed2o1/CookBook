import PropTypes from "prop-types";
import { FaStar, FaCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { name, image, rating, reviewCount, id } = recipe;
  const navigate = useNavigate();
  const handleShowRecipeDetails = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="md:p-8 rounded-3xl p-4 space-y-6 border">
      <img
        src={image}
        alt=""
        className="h-52 rounded-2xl object-cover object-center w-full"
      />

      <div>
        <h3 className="md:text-2xl mb-4 text-xl font-semibold">{name}</h3>

        <div className="md:gap-12 flex gap-8 font-medium text-gray-500">
          <p className="flex items-center gap-2">
            <span>
              <FaStar />
            </span>{" "}
            <span>{rating}</span>
          </p>

          <p className="flex items-center gap-2">
            <span>
              <FaCommentAlt />
            </span>{" "}
            <span>{reviewCount}</span>
          </p>
        </div>
      </div>

      <button
        className="btn bg-slate-800 hover:bg-slate-600 text-gray-50 text-xl"
        onClick={handleShowRecipeDetails}
      >
        See recipe details
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
};

export default Recipe;
