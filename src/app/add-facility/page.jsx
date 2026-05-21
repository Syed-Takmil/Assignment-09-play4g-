


"use client";

import React from "react";
import { authClient } from "../../lib/auth-client";
import { toast } from "react-toastify";

import { json } from "better-auth";

const AddFacilityPage = () => {
  const { data: session } = authClient.useSession();

  const HandleAddFacility = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const facilityData = Object.fromEntries(formData.entries());

    console.log(facilityData);

    fetch("http://localhost:5000/facilities",
        {
            method:"POST",
            headers:{
            "content-type":'application/json'
        },
        body:JSON.stringify(facilityData)
        })

    toast.success("Facility Added Successfully!");
  };

  return (
      <div className="p-5">

        <h1 className="text-5xl mx-5 font-bold text-center ">
          Add New Facility
        </h1>

        <form onSubmit={HandleAddFacility} className="bg-base-300 grid items-center  gap-3 rounded-lg w-3xl mx-auto  p-5">

          {/* Facility Name */}
          <div>
            <label className="label font-semibold">
              Facility Name
            </label>

            <input
              type="text"
              name="facility_name"
              placeholder="Enter facility name"
              className="input input-bordered w-full"
              required
            />
          </div>
<div className="flex gap-5 justify-between items-center">
    
  
          <div className="flex-1">
            <label className="label font-semibold">
              Facility Type
            </label>

            <select
              name="facility_type"
              className="select p-2 rounded-full bg-white select-bordered w-full"
              required
            >
              <option value="">Select Type</option>
              <option value="Football Turf">Football Turf</option>
              <option value="Cricket Ground">Cricket Ground</option>
              <option value="Badminton Court">Badminton Court</option>
              <option value="Basketball Court">Basketball Court</option>
              <option value="Swimming Pool">Swimming Pool</option>
              <option value="Gym">Gym</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="label font-semibold">
              Image URL 
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="flex-1 input input-bordered w-full"
              required
            />
          </div>
</div>

          {/* Location */}
          <div>
            <label className="label font-semibold">
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="label font-semibold">
              Price Per Hour
            </label>

            <input
              type="number"
              name="price_per_hour"
              placeholder="Enter hourly price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="label font-semibold">
              Capacity
            </label>

            <input
              type="number"
              name="capacity"
              placeholder="Enter capacity"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Available Time Slots */}
          <div>
            <label className="label font-semibold">
              Available Time Slots
            </label>

            <input
              type="text"
              name="available_slots"
              placeholder="e.g. 8AM - 10PM"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-semibold">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Write facility details..."
              className="textarea bg-white p-3 border textarea-bordered w-full h-32"
              required
            ></textarea>
          </div>

          {/* Owner Email */}
          <div>
            <label className="label font-semibold">
              Owner Email
            </label>

            <input
              type="email"
              name="owner_email"
              value={session?.user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-lg"
          >
            Add Facility
          </button>
        </form>
      </div>

  );
};

export default AddFacilityPage;

