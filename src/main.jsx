import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/recipes",
        loader: () => fetch("https://dummyjson.com/recipes"),
        element: <Recipes></Recipes>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/recipe/:recipeId",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/recipes/${params.recipeId}`),
        element: <RecipeDetails></RecipeDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
