import React, { useState } from "react";

const SingleCategoryProductCard = ({ product, setBookingModal }) => {
  const {
    name,
    orginalPrice,
    date,
    location,
    picture,
    resalePrice,
    sellerName,
    used,
  } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="Pic"
          className="h-[300px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between w-full">
          <p className="text-blue-400">Orginal Price: {orginalPrice}</p>
          <p className="text-right">Resale Price: {resalePrice}</p>
        </div>

        <div className="flex justify-between w-full">
          <p>Date: {date}</p>
          <p className="text-right">Used: {used}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Seller Name: {sellerName}</p>
          <p className="text-right">Location: {location}</p>
        </div>
        <div className="card-actions justify-start">
        <label htmlFor="my-modal-3" onClick={() => setBookingModal(product)} className="btn btn-info text-white">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryProductCard;
