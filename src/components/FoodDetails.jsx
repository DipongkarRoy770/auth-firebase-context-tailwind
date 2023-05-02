import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodDetails = ({ foods }) => {
  const { id, food_name, Chef_picture, title, experience, num_recipes, likes } =
    foods;
  return (
    <div className=" w-96 h-90 bg-cyan-50 ">
      <figure>
        <img src={Chef_picture} alt="picture" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food_name}</h2>
        <h5 className="font-semibold">{title.slice(0, 100)}....</h5>
        <div className="flex justify-between items-center">
          <div>
            <p>Experience:{experience}</p>
            <p>Recipe number:{num_recipes}</p>
          </div>
          <div className="flex gap-2">
            <span>
              <FaThumbsUp></FaThumbsUp>
            </span>
            <p> {likes}</p>
          </div>
        </div>
        <Link className="bg-fuchsia-400 w-28 rounded text-black text-1xl py-2 px-4 mb-0" to={`/allData/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default FoodDetails;
