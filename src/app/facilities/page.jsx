"use client"

import React, { useEffect, useState } from "react";
import FacilityCard from "../../Components/FacilityCard";
import SkeletonFacilityCards from "../../Components/SkeletonFacilityCards";

const FacilitiesPage = () => {

  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");
  const [sportType, setSportType] = useState("");
  const[loading,setLoading]=useState(true)

  useEffect(() => {

    fetch(
      `${process.env.NEXT_PUBLIC_URL}/facilities?search=${search}&sportType=${sportType}`,
    )
      .then(res => res.json())
      .then(data => {setFacilities(data)
     setLoading(false)});
     

  }, [search, sportType]);

  return (

    <div className="p-10 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search Facility..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full"
        />

        <select
          value={sportType}
          onChange={(e) => setSportType(e.target.value)}
          className="select select-bordered w-full md:w-72"
        >
          <option value="">All Sports</option>
          <option value="Cricket Ground">Cricket</option>
          <option value="Basketball Court">Basketball</option>
          <option value="Badminton Court">Badminton</option>
          <option value="Gym">Gym</option>
        </select>

      </div>

      {/* FACILITIES */}
{loading? <SkeletonFacilityCards/>:
<div className="grid gap-5">

        {facilities.map((facility) => (
          <FacilityCard
            key={facility._id}
            facility={facility}
          />
        ))}

      </div>}
      

    </div>
  );
};

export default FacilitiesPage;