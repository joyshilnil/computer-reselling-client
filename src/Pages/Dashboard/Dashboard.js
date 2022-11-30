import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="avatar online m-4">
        <div className="w-24 rounded-full  ring ring-primary">
          <img src={user?.photoURL} alt="" />
        </div>
        
      </div>
        <div className="user-details">
          <h1 className="text-info">UserName: {user?.displayName}</h1>
        </div>
    </>
  );
};

export default Dashboard;
