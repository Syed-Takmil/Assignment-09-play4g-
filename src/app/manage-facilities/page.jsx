


import React from 'react';
import ManageFacilityCard from '../../Components/ManageFacilityCard';
import { auth } from '../../lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import Button from '../../Components/shared/Button';
import { BiPlus } from 'react-icons/bi';

export const metadata = {
  title: "Manage Facilities",
  description: "Edit and Delete Your Facilities",
};

const ManageFacilitiesPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/facilities/user`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return (
      <div className="text-center py-20">
        Failed to load facilities
      </div>
    );
  }

  const facilities = await response.json();

  return (

    <div className="p-5">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Facilities
      </h1>

      {
        facilities.length === 0 ? (

          <div className="text-center space-y-4 py-20">

            <h2 className="text-3xl font-bold">
              No Facilities Added Yet
            </h2>

            <p className="text-gray-500">
              Add your first sports facility now
            </p>
            <Link href={'/add-facility'}>
            <button className='btn btn-primary'><BiPlus/>
              Create a Facility</button>
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {
              facilities.map((facility) => (
                <ManageFacilityCard
                  key={facility._id}
                  facility={facility}
                />
              ))
            }

          </div>

        )
      }

    </div>

  );
};

export default ManageFacilitiesPage;

