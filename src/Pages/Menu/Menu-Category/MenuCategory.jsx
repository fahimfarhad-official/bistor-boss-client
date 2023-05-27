import React from "react";
import MenuItem from "../../Shared/Menu-Items/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div className="pt-8">
     { title && <Cover img={image} title={title}></Cover>}
      <div className="grid my-16 md:grid-cols-2 gap-7">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order-food/${title}`}><button className="uppercase btn btn-outline border-0 border-b-4 mt-5">read more</button></Link>
    </div>
  );
};

export default MenuCategory;
