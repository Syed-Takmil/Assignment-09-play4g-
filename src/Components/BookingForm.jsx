"use client"


import React, { useState } from 'react';
import Button from './shared/Button';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { authClient } from '../lib/auth-client';

const BookingForm = ({facility}) => {
  const [hours, setHours] = useState(1);
  const totalPrice = hours * facility.price_per_hour;
  const HandleBooking = async (e) => {

    e.preventDefault();

    const {data} = await authClient.token();
    const token=data?.token;
    console.log(token);
    const form = e.target;

    const formData = new FormData(form);

    const bookingData = Object.fromEntries(formData.entries());

    bookingData.total_price = totalPrice;
    bookingData.image=facility.image

    fetch(`${process.env.NEXT_PUBLIC_URL}/bookings`,
        {
            method:"POST",
         headers: {
    "content-Type": "application/json",
    authorization:`Bearer ${token}`
  },
        body:JSON.stringify(bookingData)
        })

    toast.success("Booking Successful!");
    redirect("/bookings")
  };

    return (
          <div className='grid justify-center gap-3' >

            <h2 className="text-5xl  text-center text-neutral-700 font-bold mb-6">
              Booking Form
            </h2>

            <form onSubmit={HandleBooking} className="gap-3 grid  justify-center items-center
            bg-base-300   rounded-box shadow-xl p-10 ">
<div className='grid md:flex gap-4 justify-center items-center'>
    <div>
    <label>Name</label>
              <input
                type="text"
                name="facility_name"
                value={facility?.facility_name||""}
                readOnly
                className="input input-bordered w-full"
              />
</div>
<div>
    <label>Facility Id</label>
              <input
                type="text"
                name="facility_id"
                value={facility?._id||""}
                readOnly
                className="input w-full input-bordered "
              />
</div>
</div>

    <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder='example@gmail.com'
                className="input input-bordered w-full"
                required
              />
    <label>Booking Date</label>
              <input
                type="date"
                name="booking_date"
                className="input input-bordered w-full"
                required
              />
<div className='flex items-center gap-3'>
    <div>
    <label>Time SLot</label>
              <input
                type="text"
                name="time_slot"
                placeholder="e.g-6PM-8PM"
                className="input input-bordered "
                required
              />
</div>
<div>
    <label>Hours</label>
              <input
                type="number"
                name="hours"
                min="1"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="input input-bordered "
              />
</div>
</div>
<label>Total Price</label>
              <input
                type="text"
                value={`৳ ${totalPrice}`}
                readOnly
                className="input  input-bordered rounded-box p-5 w-full font-bold text-green-600"
              />

           <div className='flex justify-center items-center
           justify-items-center mt-5'>
               <Button
                type="submit"
                className="p-3 w-full"
              >
                Confirm Booking
              </Button>
           </div>

            </form>

          </div>



    );
};

export default BookingForm;