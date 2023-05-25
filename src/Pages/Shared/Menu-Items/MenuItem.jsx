import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex space-x-3">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px] h-[120px]" src={image} />
      <div className="mt-5">
        <h3 className="uppercase">{name}----------------------</h3>
        <p className="text-sm">{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
