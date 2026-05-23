import React from 'react';
import BookingCard from '../../Components/BookingCard';
import { auth } from '../../lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';

export const metadata = {
  title: "All Bookings",
  description: "ALL Bookings done by the user are shown here",
};

const BookingsPage = async () => {

  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/bookings`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    return (
      <div className="p-5 text-center text-red-500">
        Failed to load bookings
      </div>
    );
  }

  const bookings = await response.json();

  if (!bookings || bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
        <h2 className="text-2xl font-bold">
          No bookings yet
        </h2>

        <p className="text-gray-500">
          Explore turfs and book your first facility.
        </p>

        <Link href="/facilities">
          <button className="btn btn-primary">
            Explore Facilities
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className='p-5 grid gap-4'>
      {[...bookings].reverse().map(booking =>
        <BookingCard
          key={booking._id}
          booking={booking}
        />
      )}
    </div>
  );
};

export default BookingsPage;