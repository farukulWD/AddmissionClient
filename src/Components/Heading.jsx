import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl text-blue-500 font-semibold">{title}</h2>
      <p className="mt-10 w-2/3 mx-auto">{description}</p>
    </div>
  );
};

export default Heading;
