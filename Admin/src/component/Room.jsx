import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


function Room() {
  const [showForm, setShowForm] = useState(false);
  const [features, setFeatures] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [formData, setFormData] = useState({
    roomType: "",
    maxCount: "",
    price: "",
    adult: "",
    children: "",
    features: [],
    facilities: [],
    description: "",
    roomImage: null,
  });

  const fetchFeatures = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/feature/getFeature");
      setFeatures(response.data.features);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFacilities = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/facilities/getFacilities");
      setFacilities(response.data.facilities);
      // console.log(response.data.facilities);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeatures();
    fetchFacilities();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleCheckbox = (e, type) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [type]: checked ? [...prev[type], id] : prev[type].filter((item) => item !== id),
    }));
  };
  

  const [editId, setEditId] = useState(null);

  const handleEdit =async (id) => {
    setEditId(id)
    try {
      const response = await axios.get(`http://localhost:4000/api/room/getRoomById${id}`);
      const room =await response.data.room;
      console.log("idget",room);
      setFormData(room)
      setShowForm(true);
    } catch (error) {
      console.log(error)
    }
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const data = new FormData();
    data.append("roomType", formData.roomType);
    data.append("maxCount", formData.maxCount);
    data.append("price", formData.price);
    data.append("adult", formData.adult);
    data.append("children", formData.children);
    data.append("facilities", formData.facilities);
    data.append("features", formData.features);
    data.append("roomImage", formData.roomImage);
    data.append("description", formData.description);
  
    try {
      if (editId) {
        const resp = await axios.put(`http://localhost:4000/api/room/updateRoom/${editId}`, data);
        console.log("jh",data)
        fetchRooms();  // Refresh the rooms after updating
        setShowForm(false);
        console.log(resp);
        if (resp.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Room updated successfully",
          });
        }
      } else {
        const resp = await axios.post("http://localhost:4000/api/room/createRoom", data);
        fetchRooms();  // Refresh the rooms after creating a new one
        setFormData({
          roomType: "",
          maxCount: "",
          price: "",
          adult: "",
          children: "",
          features: [],
          facilities: [],
          description: "",
          roomImage: null,
        });
        setShowForm(false);
        if (resp.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Room created successfully",
          });
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create or update room",
      });
    }
  };
  

  //get room

  const [rooms, setRooms] = useState([]);
  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/room/getRoom");
      console.log("fetch",response.data.rooms);
      setRooms(response.data.rooms);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    
    fetchRooms();
  }, []);

  //delete room

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/room/deleteRoom${id}`);
      console.log(response.data);
      // Show success message using SweetAlert2
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Room deleted successfully",
        });
      }
    } catch (error) {
      console.error(error);
      // Show error message using SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete room",
      });
    }
      }

      //get room by id

      
      //cencel

      const handleCancel = () => {
        setShowForm(false);
        setFormData({
          roomType: "",
          maxCount: "",
          price: "",
          adult: "",
          children: "",
          features: [],
          facilities: [],
          description: "",
          roomImage: null,
        });
        setEditId(null);
      };

  return (
    <div className="p-6">
      <div className='crousel-heading flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold font-serif'>Rooms</h1>
        <button
          className='bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition'
          onClick={() => setShowForm(true)}
        >
          + Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {console.log(rooms)} */}
        {rooms.map((room) => (
          <div
            key={room._id}
            className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={`http://localhost:4000/uploads${room.roomImage}`}
              alt={room.roomType}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{room.roomType}</h2>
            <p className="text-gray-600 mb-2">Max Count: {room.maxCount}</p>
            <p className="text-gray-600 mb-2">Price: {room.price}</p> 
            <p className="text-gray-600 mb-2">Adult: {room.adult}</p>
            <p className="text-gray-600 mb-2">Children: {room.children}</p>
            <p className="text-gray-600 mb-2">Features: {room.features}</p>
            <p className="text-gray-600 mb-2">Facilities: {room.facilities}</p>
            <p className="text-gray-600 mb-2">Description: {room.description}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition"
                onClick={() => handleEdit(room._id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600 transition"
                onClick={() => handleDelete(room._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">{editId ? "Edit Room" : "Add Room"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium">Title</label>
                  <select name="roomType" value={formData.roomType} onChange={handleChange} className="mt-1 w-full py-2 px-3 border rounded-md">
                    <option value="">Select Room Type</option>
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Luxury Room">Luxury Room</option>
                    <option value="Suite Room">Suite Room</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Max Count</label>
                  <input type="number" name="maxCount" value={formData.maxCount} onChange={handleChange} className="mt-1 w-full py-2 px-3 border rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium">Price</label>
                  <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 w-full py-2 px-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Adult</label>
                  <input type="number" name="adult" value={formData.adult} onChange={handleChange} className="mt-1 w-full py-2 px-3 border rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium">Children</label>
                  <input type="number" name="children" value={formData.children} onChange={handleChange} className="mt-1 w-full py-2 px-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Image</label>
                  <input type="file" name="roomImage" onChange={handleChange} className="mt-1 w-full py-2 px-3 border rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-gray-700 font-medium">Feature</label>
                  {features.map((feature) => (
                    <div key={feature._id} className='flex gap-2'>
                      <input type="checkbox" id={feature.title} onChange={(e) => handleCheckbox(e, 'features')} className="h-5 w-5" />
                      <label>{feature.title}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-4">
                <label className="text-gray-700 font-medium">Facilities</label>
                {/* {console.log(facilities)} */}
                {facilities.map((facility) => (
                  <div key={facility._id} className='flex gap-2'>
                    <input type="checkbox" id={facility.title} onChange={(e) => handleCheckbox(e, 'facilities')} className="h-5 w-5" />
                    <label>{facility.title}</label>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="mt-1 w-full py-2 px-3 border rounded-md"></textarea>
              </div>

              <div className="flex justify-end space-x-2">
                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md">{editId ? "Update Room" : "Add Room"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Room;
