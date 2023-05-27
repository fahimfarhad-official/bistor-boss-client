import React from "react";
import FoodCard from "../../../Component/SectionTitle/Food-Cards/FoodCard";

const OrderTab = ({ item }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {item.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
