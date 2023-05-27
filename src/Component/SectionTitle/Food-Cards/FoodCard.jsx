import React from "react";

const FoodCard = ({item}) => {
    const { image, price, name, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
        />
      </figure>
      <p className="absolute right-5 mt-4 p-2 rounded-s-2xl bg-slate-900 ">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
