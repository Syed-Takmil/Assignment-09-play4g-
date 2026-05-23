import React, { useState } from 'react';
import BookingCard from '../../Components/BookingCard';
import { auth } from '../../lib/auth';
import { headers } from 'next/headers';

export const metadata = {
  title: "All Bookings",
  description: "ALL Bookings done by the user are shown here",
};

const BookingsPage = async () => {
  

  const {token} = await auth.api.getToken({
    headers: await headers()
  });


  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/bookings`,
    {
      cache: "no-store",
     headers:{
            authorization:`Bearer ${token}`
          }
    }
  );

  if (!response.ok) {
    return (
      <div className="p-5">
        Failed to load bookings
      </div>
    );
  }

  const bookings = await response.json();

  return (
    <div className='p-5 grid gap-4'>
      {
        [...bookings].reverse().map(booking =>
          <BookingCard
            key={booking._id}
            booking={booking}
          />
        )
      }
    </div>
  );
};

export default BookingsPage;