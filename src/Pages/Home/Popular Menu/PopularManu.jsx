import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/Menu-Items/MenuItem";

const PopularManu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)
        });
    },[])
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="grid mt-10 md:grid-cols-2 gap-7">
        {
            menu.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularManu;
