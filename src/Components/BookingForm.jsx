"use client"


import React, { useState } from 'react';
import Button from './shared/Button';
import { toast } from 'react-toastify';

const BookingForm = ({facility}) => {
  const [hours, setHours] = useState(1);
  const totalPrice = hours * facility.price_per_hour;
  const HandleBooking = async (e) => {

    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const bookingData = Object.fromEntries(formData.entries());

    bookingData.total_price = totalPrice;
    bookingData.image=facility.image

    fetch("http://localhost:5000/bookings",
        {
            method:"POST",
            headers:{
            "content-type":'application/json'
        },
        body:JSON.stringify(bookingData)
        })

    toast.success("Booking Successful!");
  };

    return (
          <div className="bg-base-200  grid justify-center items-center rounded-box shadow-xl p-3  ">

            <h2 className="text-3xl p-5 text-center font-bold mb-6">
              Booking Form
            </h2>

            <form onSubmit={HandleBooking} className="gap-3 grid justify-center items-center">
<label>Name</label>
              <input
                type="text"
                name="facility_name"
                value={facility?.facility_name||""}
                readOnly
                className="input input-bordered w-full"
              />
<label>Facility Id</label>
              <input
                type="text"
                name="facility_id"
                value={facility?._id||""}
                readOnly
                className="input input-bordered w-full"
              />
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

<label>Time SLot</label>
              <input
                type="text"
                name="time_slot"
                placeholder="e.g. 6PM - 8PM"
                className="input input-bordered w-full"
                required
              />
<label>Hours</label>
              <input
                type="number"
                name="hours"
                min="1"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="input input-bordered w-full"
              />
<label>Total Price</label>
              <input
                type="text"
                value={`৳ ${totalPrice}`}
                readOnly
                className="input input-bordered w-full font-bold text-green-600"
              />

              <Button
                type="submit"
                className="btn btn-primary w-full"
              >
                Confirm Booking
              </Button>

            </form>

          </div>



    );
};

export default BookingForm;