import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../Menu-Category/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer "
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item's */}
      <MenuCategory
        items={desserts}
        title="dessert's"
        image={dessertImg}
      ></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory items={pizza} title="pizza" image={pizzaImg}></MenuCategory>
      {/* soup menu item's */}
      <MenuCategory items={soup} title="salad" image={soupImg}></MenuCategory>
      {/* salad menu item's  */}
      <MenuCategory items={salad} title="salad" image={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
