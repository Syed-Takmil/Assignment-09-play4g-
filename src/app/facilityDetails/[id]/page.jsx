


import Image from "next/image";
import React from "react";
import {
  FaMapMarkedAlt,
  FaUsers,
  FaClock,
  FaMoneyBillWave,
  FaMapMarkerAlt,
} from "react-icons/fa";
import BookingForm from "../../../Components/BookingForm";
import Button from "../../../Components/shared/Button";
export const metadata={
  title:"Facility Details Page",
  description:"Facility Details Page"
}
const FacilityDetailsPage = async ({ params }) => {

  const { id } = await params;

  const response = await fetch(
    `http://localhost:5000/facilityDetails/${id}`,
    {
      cache: "no-store",
    }
  );

  const facility = await response.json();

  const {
    facility_name,
    location,
    image,
    price_per_hour,
    capacity,
    available_slots,
  } = facility;
  // reusable style
  const infoCard =
    "bg-base-300 rounded-2xl  p-5 font-semibold hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl flex rounded-box items-center gap-3";

  return (
    <div className="max-w-6xl justify-center grid items-center  p-5 gap-5">

  
<div className="flex justify-items-center justify-center items-center flex-col lg:flex-row gap-10 ">
 <div>
   <h1 className=" text-4xl md:text-5xl font-bold p-8">
        {facility_name}
      </h1>
     <Image
      src={image}
      width={600}
      height={600}
      alt={facility_name}
      className="object-cover rounded-3xl w-full h-auto"
    />
        {/* INFO GRID */}
  <div className="grid grid-cols-2 mt-5 justify-center items-center gap-5 ">
    <div className={infoCard}>
      <FaMapMarkerAlt className="text-primary text-2xl" />
      <span>{location}</span>
    </div>
    <div className={infoCard}>
      <FaMoneyBillWave className="text-primary text-2xl" />
      <span>৳ {price_per_hour}/hour</span>
    </div>

    <div className={infoCard}>
      <FaUsers className="text-primary text-2xl" />
      <span>Capacity: {capacity}</span>
    </div>
    <div className={infoCard}>
      <FaClock className="text-primary text-2xl" />
      <span>{available_slots}</span>
    </div>
  
</div>
 </div>
     
 <div  className="my-10">
        <BookingForm facility={facility}/>
     </div>

  </div>
    
  


    </div>
  );
};

export default FacilityDetailsPage;

