import React from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-30 gap-5 pt-12 pb-20 px-36">
        <div>
          <img src={featured} />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <h1 className="uppercase">Which can get some?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium deleniti libero obcaecati quidem quibusdam. Consequatur expedita, dolorem alias libero soluta excepturi quidem ut aperiam quod sit, minima nobis in!</p>
          <button className="uppercase btn btn-outline border-0 border-b-4 mt-5">read more</button>
        </div> 
      </div>
    </div>
  );
};

export default Featured;
