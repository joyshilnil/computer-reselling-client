import React, { useEffect, useState } from "react";
import Sppiner from "../../Shared/Sppiner/Sppiner";
import ShowAllCategory from "./ShowAllCategory";

const AllCategory = () => {
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://laptop-bysell-server.vercel.app/categorys")
      .then((res) => res.json())
      .then((data) => {
        setCategorys(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center py-7">All category</h1>
      {loading ? (
        <>
          <Sppiner></Sppiner>
        </>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {categorys.map((category) => (
              <ShowAllCategory
                key={category._id}
                category={category}
              ></ShowAllCategory>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllCategory;
