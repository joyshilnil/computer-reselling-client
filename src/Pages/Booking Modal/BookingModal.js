import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ bookingModal }) => {
  const { name, resalePrice } = bookingModal;
  const { user } = useContext(AuthContext);
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
         

          <div className="form-control w-full ">            
          <h3 className="text-lg font-bold">{name}</h3>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              defaultValue={user?.displayName}
              disabled
            />
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              defaultValue={user?.email}
              disabled
            />
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              defaultValue={resalePrice}
              disabled
            />
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              placeholder="Type Your Phone Number"
            />
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              placeholder="Type Your Location"
            />
          </div>

          <button className="btn btn-info">Submit</button>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
