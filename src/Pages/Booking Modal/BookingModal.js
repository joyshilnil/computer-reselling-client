import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ bookingModal, setBookingModal }) => {
    // console.log(bookingModal.resalePrice);
  const { name, resalePrice, picture, _id: id } = bookingModal;
  const { user } = useContext(AuthContext);



  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const yourName = form.yourName.value;
    const resaleprice = form.resaleprice.value;
    const email = form.email.value;
    const number = form.number.value;
    const location = form.location.value;
    const booking = {
        productName: name,
        picture,
        productId: id,
        yourName,
        email,
        resaleprice,
        number,
        location
    }

    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                setBookingModal(null);
                toast.success('Booking confirmed');
            }
            else{
                toast.error(data.message);
            }
        })
    console.log(booking);
    setBookingModal(null);
}
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
         

          <form className="form-control w-full" onSubmit={handleBooking}>            
          <h3 className="text-lg font-bold">{name}</h3>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="yourName"
              className="input input-bordered w-full mb-3"
              defaultValue={user?.displayName}
              readOnly
            />
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              name="email"
              className="input input-bordered w-full mb-3"
              defaultValue={user?.email}
              readOnly
            />
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              name="resaleprice"
              className="input input-bordered w-full mb-3"
              defaultValue={resalePrice}
              readOnly
            />
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              name="number"
              className="input input-bordered w-full mb-3"
              placeholder="Type Your Phone Number"
              required
            />
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full mb-3"
              placeholder="Type Your Location"
              required
            />
            <button className="btn btn-info">Submit</button>
          </form>

        </div>
      </div>
    </>
  );
};

export default BookingModal;
