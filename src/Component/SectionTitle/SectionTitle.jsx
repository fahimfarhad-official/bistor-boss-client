import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 text-center mx-auto">
      <p className="text-yellow-500">{subHeading}</p>
      <h3 className="text-3xl uppercase  py-4 border-y-4  my-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
