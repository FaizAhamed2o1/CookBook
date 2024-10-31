import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleSeeRecipes = () => {
    navigate("/recipes");
  };
  return (
    <div className="md:mb-24 mb-16">
      <div className="bg-[url('https://i.ibb.co.com/bJJ8yZC/hero-image-resized.png')] bg-cover bg-no-repeat bg-slate-800 bg-blend-overlay rounded-[1.75rem] text-white text-center md:min-h-[37.5rem] flex flex-col items-center justify-center px-5 py-12 gap-4 md:gap-8  bg-center">
        <h1 className="md:text-5xl text-3xl font-bold">
          Discover Your Culinary Adventure!
        </h1>

        <p className="md:text-xl md:mb-2 max-w-4xl mb-2 leading-relaxed text-gray-200">
          Welcome to Cook Book, your ultimate destination for delicious recipes
          and cooking inspiration. Discover a world of flavors and create
          memorable meals that bring people together!
        </p>

        <button
          className="btn btn-wide md:text-xl text-lg font-semibold"
          onClick={handleSeeRecipes}
        >
          See Recipes
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
