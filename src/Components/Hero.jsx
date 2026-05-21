import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
<section
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/turf.jpg')",
  }}
>
  <div className="hero-overlay bg-black/60"></div>

  <div className="hero-content text-center text-white">
    <div className="max-w-2xl">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Book Your Favorite Sports Facility
      </h1>

      <p className="text-lg md:text-xl mb-8">
        Discover top-quality sports venues for football, Cricket, badminton,
        tennis, and more. Easy booking, secure payments, and the best playing
        experience all in one place.
      </p>

      <Link href={'/facilities'}>
      <button className="btn btn-primary btn-lg rounded-full">
        Explore Facilities
      </button></Link>
    </div>
  </div>
</section> 



    );
};

export default Hero;