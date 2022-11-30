import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://laptop-bysell-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl text-info p-3">My orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          
            {bookings.length > 0 ? (
             <tbody>
                {bookings?.map((booking, i) => (
                  <tr key={booking._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={booking.picture}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{booking.productName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {booking.resaleprice}
                      </span>
                    </td>
                    <th>
                      <button className="btn btn-error btn-xs">Pay</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            ) : (
              <h1>You Have No Orders</h1>
            )}
          
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
