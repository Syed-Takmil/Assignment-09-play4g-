


"use client"
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCalendarAlt, FaClock, FaMoneyBill, FaMapMarkerAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { toast } from "react-toastify";

const BookingCard = ({ booking }) => {

  const {
    _id,
    facility_name,
    booking_date,
    time_slot,
    hours,
    total_price,
    user_email,
    image,
    facility_id,
  } = booking;

  const Delete = async () => {
  
    await fetch(`${process.env.NEXT_PUBLIC_URL}/bookings/${_id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
  
    toast.error("Booking Cancelled Successfully")
  
    redirect("/bookings")
  }

  return (
    <div className="bg-base-300 rounded-box shadow-md p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary">

     
     <div className="flex justify-between items-center flex-col md:flex-row gap-5">

         <div className="space-y-2 text-sm">
            <span className="flex justify-items-center gap-5">
                 <h2 className="text-2xl font-bold mb-3">{facility_name}</h2>
                 <span className=" badge badge-secondary text-white font-semibold">
                    pending
                 </span>
            </span>
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

        <button
        className='btn btn-error btn-outline'
        onClick={() =>
        document.getElementById(`delete_modal_${_id}`).showModal()
        }
        ><AiFillDelete />
                    Delete</button>
                   
        <dialog id={`delete_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold flex items-center justify-center gap-2 text-lg"> <GoAlertFill />Confirm</h3>
            <p className="py-4">Are u Sure You want to Cancel this Booking ? </p>
            <div className="modal-action">
              <form method="dialog">
                  <button
                type="button"
                onClick={() =>
                  document.getElementById(`delete_modal_${_id}`).close()
                }
                className='btn btn-info'
              >
                Cancel
              </button>
                <button onClick={Delete} className="btn btn-error">
                   <AiFillDelete/> Delete</button>
              </form>
            </div>
          </div>
        </dialog>

      </div>
      <Image src={image} alt={facility_name} width={250} height={150} className=" rounded-box mt-4 object-cover" />
     </div>
     

    </div>
  );
};

export default BookingCard;