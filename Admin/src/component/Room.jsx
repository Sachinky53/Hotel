import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

function Room() {
  const [showForm, setShowForm] = React.useState(false);

  const [features, setFeatures] = React.useState([]);
  const [formData, setFormData] = React.useState({
      roomType: "",
      maxCount: "",
      price: "",
      adult: "",
      children: "",
      features: [],
      facilities: [],
      description: "",
      roomImage: null,
  })

  const fetchFeatures = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/feature/getFeature");
      const featureData = response.data.features;
      setFeatures(featureData);
      // console.log(featureData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, [fetchFeatures]);
  const [facilities, setFacilities] = useState([]);
  
        const fetchFacilities = async () => {
          try {
            const response = await axios.get("http://localhost:4000/api/facilities/getFacilities");
            const facilitiesData = response.data.facilities;
            setFacilities(facilitiesData);
            // console.log(facilitiesData);
          } catch (error) {
            console.error(error);
          }
        }
  
        useEffect(() => {
          fetchFacilities();
        },[]);
  return (
    <div className="p-6">
      {/* Heading Section */}
      <div className='crousel-heading flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold font-serif'>Rooms</h1>
        <button
          className='bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition'
          onClick={() => setShowForm(true)}
        >
          + Add
        </button>
      </div>

      {/* Add Room Form Modal */}
      {showForm && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Add Room</h2>
      <form>
        {/* Room Type & Max Count */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="roomType" className="block text-gray-700 font-medium">Title</label>
            <select id="roomType" className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select Room Type</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Luxury Room">Luxury Room</option>
              <option value="Suite Room">Suite Room</option>
            </select>
          </div>
          <div>
            <label htmlFor="maxCount" className="block text-gray-700 font-medium">Max Count</label>
            <input type="number" id="maxCount" className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>

        {/* Price & Adults */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium">Price</label>
            <input type="number" id="price" className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="adult" className="block text-gray-700 font-medium">Adult</label>
            <input type="number" id="adult" className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>

        {/* Children & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="children" className="block text-gray-700 font-medium">Children</label>
            <input type="number" id="children" className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="image" className="block text-gray-700 font-medium">Image</label>
            <input type="file" id="image" className="mt-1 w-full py-2 px-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>

        {/* Feature & Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex gap-2 flex-col">
            <label htmlFor="feature" className="text-gray-700 font-medium">Feature</label>
            {features.map((feature) => (
              <div key={feature._id} className='flex gap-2'>
                <input type="checkbox" id={feature._id} className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded flex" />
                <label htmlFor={feature._id}>{feature.title}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4  mb-4">
         
            <label htmlFor="facilities" className="text-gray-700 font-medium">Facilities</label>
            {facilities.map((facility) => (
              <div key={facility._id} className='flex gap-2'>
                <input type="checkbox" id={facility._id} className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded flex" />
                <label htmlFor={facility._id}>{facility.title}</label>
              </div>
            ))}
          
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
          <textarea id="description" rows="3" className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}

export default Room;
