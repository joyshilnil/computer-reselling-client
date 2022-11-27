import React from "react";
import { Link } from "react-router-dom";

const ShowAllCategory = ({ category }) => {
  const { name, picture, id } = category;
  return (
    <div className="px-3 py-6 shadow-md ">
      <img src={picture} alt=""  className="h-[300px] w-full object-cover"/>
      <h1 className="text-2xl pb-3">{name}</h1>
      <Link className="btn btn-info" to={`/categorys/${id}`}>View All Product</Link>
    </div>
  );
};

export default ShowAllCategory;
