

import React from 'react';
import ManageFacilityCard from '../../Components/ManageFacilityCard';

  export const metadata={
    title:'Manage Facilities',
    description:"Edit and Delete Facilities"
  }
const ManageFacilitiesPage = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/facilities`, {
    cache: "no-store",
  });
  const facilities = await response.json();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
            {facilities.map(facility=>
  <ManageFacilityCard key={facility._id} facility={facility}/>
            )}
          
        </div>
    );
};

export default ManageFacilitiesPage;