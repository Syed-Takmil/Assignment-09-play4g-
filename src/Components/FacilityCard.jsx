


import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Button from './shared/Button';
const FacilityCard = ({ facility }) => {
    const {facility_name,facility_type,location,image,price_per_hour,capacity,available_slots,description}=facility
  return (
  <div className="card bg-base-300 shadow-md p-5 rounded-box flex flex-col md:flex-row justify-between items-center transition-all duration-300 border border-transparent hover:shadow-lg hover:-translate-y-2">
  <div className="card-body p-2 gap-2">
    <h2 className="card-title font-bold text-2xl">
      {facility_name}
      <div className="text-lg badge badge-secondary">{facility_type}</div>
    </h2>
    <p className='text-lg'>{description}</p>
   
      <div className="badge badge-outline"> Cost:  ৳ 
        <span className='font-semibold text-xl'> {price_per_hour}</span>/hour</div>
      <div className="badge badge-outline">Capacity:{capacity}</div>
      <p>Available Slots: <span className='text-lg font-serif'>
        {available_slots}</span></p>
    <div className='my-5'>
          <Button >
        Book Now
      </Button>
    </div>

  </div>
  
<figure className='grid gap-2'>
    <Image
      src={image}
      width={400}
      className='w-fit rounded-box h-fit'
      height={300}
      alt="Shoes" />
    <p className='flex gap-1 justify-center items-center'> <FaMapMarkerAlt />
        <span>
            {location}</span></p>
  </figure>
</div>
  );
};


export default FacilityCard;