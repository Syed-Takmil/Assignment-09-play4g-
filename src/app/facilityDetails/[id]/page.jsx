


import Image from "next/image";
import React from "react";
import {
  FaMapMarkedAlt,
  FaUsers,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";
import BookingForm from "../../../Components/BookingForm";
import Button from "../../../Components/shared/Button";

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
    <div className="max-w-6xl justify-center grid items-center mx-auto p-10 space-y-8">

  
<div className="flex flex-col lg:flex-row gap-10 items-start">

  {/* IMAGE SIDE */}
  <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">

    <Image
      src={image}
      width={600}
      height={600}
      alt={facility_name}
      className="object-cover w-full h-auto"
    />

    <div className="absolute inset-0 bg-black/40 flex items-end">

      <h1 className="text-white text-4xl md:text-5xl font-bold p-8">
        {facility_name}
      </h1>

    </div>

  </div>

  {/* INFO GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-1/2">

    <div className={infoCard}>
      <FaMapMarkedAlt className="text-primary text-2xl" />
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
<a className="w-full mt-5" href='#booking-form'><Button>Book Now</Button></a>
</div>


     <div id='booking-form' className="my-5">
        <BookingForm facility={facility}/>
     </div>

    </div>
  );
};

export default FacilityDetailsPage;

