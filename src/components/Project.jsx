import React from "react";

const Project = (props) => {
  const tech = props.technology;
  const listItems = tech.map((stack) => <li>{stack}</li>);

  return ( 
    <div className=" hover:border-white hover:border-2 border-white text-white  rounded-md p-2 m-6  ">
      <img
        width={300}
        height={300}
        className=" rounded-md"
        src={props.image}
      />
      <h1 className=" text-center">{props.name}</h1>
      <hr className="border-white m-2" />
      <h2 className="ml-2">Tech-Stack Used:</h2>
      <ul className="ml-5 list-disc">{listItems}</ul>
    </div>
  );
};

export default Project;
