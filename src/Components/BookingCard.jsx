import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaClock, FaMoneyBill, FaMapMarkerAlt } from "react-icons/fa";

const BookingCard = ({ booking }) => {
  const {
    facility_name,
    booking_date,
    time_slot,
    hours,
    total_price,
    user_email,
    image,
    facility_id,
  } = booking;

  return (
    <div className="bg-base-300 rounded-box shadow-md p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary">

     
     <div className="flex justify-between items-center flex-col md:flex-row gap-5">

         <div className="space-y-2 text-sm">
             <h2 className="text-2xl font-bold mb-3">{facility_name}</h2>
    <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-primary" />
          <span>Date: {booking_date}</span>
        </p>
        <p className="flex items-center gap-2">
          <FaClock className="text-primary" />
          <span>Time: {time_slot}</span>
        </p>
        <p className="flex items-center gap-2">
          <FaClock className="text-primary" />
          <span>Hours: {hours}</span>
        </p>

        <p className="flex items-center gap-2">
          <FaMoneyBill className="text-primary" />
          <span className="font-semibold">৳ {total_price}</span>
        </p>

      </div>
      <Image src={image} alt={facility_name} width={250} height={150} className=" rounded-box mt-4 object-cover" />
     </div>
     

    </div>
  );
};

export default BookingCard;