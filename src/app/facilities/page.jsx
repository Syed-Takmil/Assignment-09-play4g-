


import React from "react";
import FacilityCard from "../../Components/FacilityCard";

export const metadata={
  title:"Play4G Facilities",
  description:"All Facilities under Play4G are shown here"
}
const FacilitiesPage = async () => {
  const response = await fetch("http://localhost:5000/facilities", {
    cache: "no-store",
  });

  const facilities = await response.json();

  return (
    <div className=" rounded-box grid gap-5  p-10 mx-auto">
      {facilities.map((facility) => (
        <FacilityCard key={facility._id} facility={facility} />
      ))}
    </div>
  );
};

export default FacilitiesPage;