import React from 'react';
import BookingCard from '../../Components/BookingCard';



const BookingsPage = async() => {

    const response=await fetch("http://localhost:5000/bookings",
         {
    cache: "no-store",
  }
    )
     if (!response.ok) {
    return <div>Failed to load bookings</div>;
  }
    const bookings=await response.json()
console.log(bookings)
    return (
        <div className='p-5 grid gap-4'>
           {
            bookings.map(booking=>
                <BookingCard key={booking._id} booking={booking}></BookingCard>
            )
           }
        </div>
    );
};

export default BookingsPage;