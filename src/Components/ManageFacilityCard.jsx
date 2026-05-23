"use client"
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaMapMarkerAlt, FaRegEdit } from 'react-icons/fa';
import { GoAlertFill } from 'react-icons/go';
import { toast } from 'react-toastify';
import { authClient } from '../lib/auth-client';

const ManageFacilityCard = ({ facility }) => {
  const [formData, setFormData] = useState(facility)

  const {
    _id,
    facility_name,
    facility_type,
    location,
    image,
    price_per_hour,
    capacity,
    available_slots,
    description
  } = facility

  const Delete = async () => {
    let isSuccessful = false;

    try {
      const { data } = await authClient.token();
      const token = data?.token;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/facilityDetails/${_id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }

      toast.success("Deleted Successfully");
      isSuccessful = true; 

    } catch (err) {
      toast.error("Something went wrong");
    }

    if (isSuccessful) {
      redirect("/facilities");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const {data} = await authClient.token();
    const token=data?.token;

    await fetch(`${process.env.NEXT_PUBLIC_URL}/facilityDetails/${_id}`,{
      method:"PATCH",
      headers:{
        "content-Type":"application/json",
        authorization:`Bearer ${token}`
      },
      body:JSON.stringify(formData)
    })

    document.getElementById(`edit_modal_${_id}`).close()
    toast.success("Updated Successfully")
    redirect("/manage-facilities")
  }

  return (
    <div className="card bg-base-300 shadow-md p-5 rounded-box flex flex-col md:flex-row justify-between items-center transition-all duration-300 border border-transparent hover:shadow-lg hover:-translate-y-2">

      <div className="card-body p-2 gap-2">
        <h2 className="card-title font-bold text-2xl">
          {facility_name}
        </h2>

        <p className='text-lg'>{description}</p>

        <div className="badge badge-outline">
          Cost: ৳
          <span className='font-semibold text-xl'>
            {price_per_hour}
          </span>/hour
        </div>

        <div className="badge badge-outline">
          Capacity: {capacity}
        </div>

        <p>
          Available Slots:
          <span className='text-lg font-serif'>
            {available_slots}
          </span>
        </p>
      </div>

      <div className='grid gap-2'>

        <div className='flex gap-3 justify-end m-5 font-semibold items-center'>

          <button
            onClick={() => document.getElementById(`edit_modal_${_id}`).showModal()}
            className="btn btn-accent"
          >
            <FaRegEdit />
            Edit
          </button>

          <button
            className="btn btn-error btn-outline"
            onClick={() => document.getElementById(`delete_modal_${_id}`).showModal()}
          >
            <AiFillDelete />
            Delete
          </button>
           
          <dialog id={`delete_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold flex items-center justify-center gap-2 text-lg"> <GoAlertFill />Confirm</h3>
              <p className="py-4">Are you sure you want to delete?</p>
              <div className="modal-action">
                <form method="dialog" className='flex items-center justify-center gap-2'>
                  <button
                    type="button"
                    onClick={() => document.getElementById(`delete_modal_${_id}`).close()}
                    className='btn btn-info'
                  >
                    Cancel
                  </button>
                  <button onClick={Delete} className="btn btn-error">
                    <AiFillDelete/> Delete
                  </button>
                </form>
              </div>
            </div>
          </dialog>

        </div>

        <Image
          src={image}
          width={400}
          className='w-full rounded-box h-fit'
          height={300}
          alt={facility_name}
        />

        <p className='flex gap-1 justify-center items-center'>
          <FaMapMarkerAlt />
          <span>{location}</span>
        </p>

      </div>

      {/* EDIT MODAL */}
      <dialog id={`edit_modal_${_id}`} className="modal">

        <div className="modal-box max-w-2xl">

          <h3 className="font-bold text-2xl mb-5">
            Edit Facility
          </h3>

          <form onSubmit={handleUpdate} className='grid gap-4'>

            <input
              type="text"
              name="facility_name"
              value={formData.facility_name}
              onChange={handleChange}
              placeholder="Facility Name"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="facility_type"
              value={formData.facility_type}
              onChange={handleChange}
              placeholder="Facility Type"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="input input-bordered w-full"
            />

            <div className='grid grid-cols-2 gap-4'>

              <input
                type="number"
                name="price_per_hour"
                value={formData.price_per_hour}
                onChange={handleChange}
                placeholder="Price Per Hour"
                className="input input-bordered w-full"
              />

              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Capacity"
                className="input input-bordered w-full"
              />

            </div>

            <input
              type="text"
              name="available_slots"
              value={formData.available_slots}
              onChange={handleChange}
              placeholder="Available Slots"
              className="input input-bordered w-full"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="textarea textarea-bordered w-full h-28"
            />

            <div className='flex justify-end gap-3 mt-4'>

              <button
                type="button"
                onClick={() => document.getElementById(`edit_modal_${_id}`).close()}
                className='btn'
              >
                Cancel
              </button>

              <button
                type="submit"
                className='btn btn-accent'
              >
                Update Facility
              </button>

            </div>

          </form>

        </div>

      </dialog>

    </div>
  );
};

export default ManageFacilityCard;