


import React from "react";
import FacilityCard from "../../Components/FacilityCard";

const FacilitiesPage = async () => {
  const response = await fetch("http://localhost:5000/facilities", {
    cache: "no-store",
  });

  const facilities = await response.json();

  return (
    <div className=" grid-cols-3 md:grid-cols-2 rounded-box grid gap-5  p-10 mx-auto">
      {facilities.map((facility) => (
        <FacilityCard key={facility._id} facility={facility} />
      ))}
    </div>
  );
};

export default FacilitiesPage;