import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../Booking Modal/BookingModal";
import SingleCategoryProductCard from "./SingleCategoryProductCard";

const CategoryProducts = () => {
  const products = useLoaderData();
  const [bookingModal, setBookingModal] = useState(null);
  console.log(products);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-7">
      {products.map((product) => (
        <SingleCategoryProductCard
          key={product._id}
          product={product}
          setBookingModal={setBookingModal}
        ></SingleCategoryProductCard>
      ))}
     { 
     bookingModal &&
     <BookingModal
     bookingModal={bookingModal}
     setBookingModal={setBookingModal}
      >        
      </BookingModal>
      }
    </div>
  );
};

export default CategoryProducts;
