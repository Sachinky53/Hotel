import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function Features() {
    const [showForm, setShowForm] = React.useState(false);
    const [formData, setFormData] = React.useState({
      title: "",
    });
    const [features, setFeatures] = React.useState([]);

    const [showFacilieteForm, setshowFacilieteForm] = useState(false);
    const [facilieteFormData, setFacilieteFormData] = useState({
      title: "",
      icon: null,
      description: "",
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
    
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log("Form Data:", formData);
      setShowForm(false);
      // Add your form submission logic here
      // For example, you can send the formData to a server
      try {
        const response =await axios.post("http://localhost:4000/api/feature/createFeature", formData);
        console.log(response.data);
        // Show success message using SweetAlert2
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Feature added successfully",
          });
        }
      } catch (error) {
        console.error(error);
        // Show error message using SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add feature",
        });
      }
    };

    const handleDelete = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:4000/api/feature/deleteFeature${id}`);
        console.log(response.data);
        // Show success message using SweetAlert2
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Feature deleted successfully",
          });
        }
      } catch (error) {
        console.error(error);
        // Show error message using SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete feature",
        });
      }
    }

    //faciliteis

    const handleFacilieteChange = (e) => {
      setFacilieteFormData({
        ...facilieteFormData,
        [e.target.name]: e.target.value,
      });
    }

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFacilieteFormData({
        ...facilieteFormData,
        icon: file
      });
    }

    const handleFacilieteSubmit = async(e) => {
      e.preventDefault();
      console.log("Form Data:", facilieteFormData);
      setshowFacilieteForm(false);
      // Add your form submission logic here
      // For example, you can send the formData to a server
      try {
        const data  = new FormData();
        data.append("title", facilieteFormData.title);
        data.append("icon", facilieteFormData.icon);    
        data.append("description", facilieteFormData.description);
        const response =await axios.post("http://localhost:4000/api/facilities/createFacilities", data);
        console.log(response.data);
        // Show success message using SweetAlert2
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Faciliete added successfully",
          });
        }
      } catch (error) {
        console.error(error);
        // Show error message using SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add faciliete",
        });
      }
    };

    const handleFacilieteDelete = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:4000/api/faciliete/deleteFaciliete${id}`);
        console.log(response.data);
        // Show success message using SweetAlert2
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Faciliete deleted successfully",
          });
        }
      } catch (error) {
        console.error(error);
        // Show error message using SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete faciliete",
        });
      }
    }
        
      //get facilities
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
    <div>
      <div className='crousel-heading flex justify-between'>
      <h1 className='crousel-heading text-3xl font-bold font-serif'>Features</h1>
      <button className='crousel-add bg-gray-700 text-white px-3 py-2 rounded-md cursor-pointer '
      onClick={()=>setShowForm(true)}
      >+ Add</button>
      </div>

      <div className="grid grid-cols-1 mt-7 w-full ">
        <table className="min-w-full divide-y divide-gray-600" border={1}>
          <thead className="bg-gray-500 border-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature) => (
              <tr key={feature._id}>
                <td className="px-6 py-4 whitespace-nowrap">{feature.title}</td>
                <td className=" whitespace-nowrap">
                  <button className="text-white bg-red-500 px-3 py-2 rounded-md hover:bg-red-600 cursor-pointer"
                  onClick={()=>handleDelete(feature._id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='crousel-heading flex justify-between mt-7'>
      <h1 className='crousel-heading text-3xl font-bold font-serif'>Facilities</h1>
      <button className='crousel-add bg-gray-700 text-white px-3 py-2 rounded-md cursor-pointer '
      onClick={()=>setshowFacilieteForm(true)}
      >+ Add</button>
      </div>

      <div className="grid grid-cols-1 mt-7 w-full">
        <table className="min-w-full divide-y divide-gray-600" border={1}>
          <thead className="bg-gray-500 border-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
                Icon
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {facilities.map((facility) => (
              <tr key={facility._id}>
                <td className="px-6 py-4 whitespace-nowrap">{facility.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img src={`http://localhost:4000/uploads/${facility.icon}`} alt={facility.title} className="w-10 h-10" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{facility.description}</td>
                <td className=" whitespace-nowrap">
                  <button className="text-white bg-red-500 px-3 py-2 rounded-md hover:bg-red-600 cursor-pointer"
                  onClick={()=>handleFacilieteDelete(facility._id)}
                  >Delete</button>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50  animate-fadeIn">
    <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative transform transition-all scale-95 hover:scale-100">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg"
      >
        ✖
      </button>
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Add Carousel</h2>
      <form className="space-y-4">
        <div className="form-group">
          <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter title"
          />
        </div>
       
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}

{showFacilieteForm && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50  animate-fadeIn">
    <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative transform transition-all scale-95 hover:scale-100">
      <button
        onClick={() => setshowFacilieteForm(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg"
      >
        ✖
      </button>
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Add Facilies</h2>
      <form className="space-y-4">
      
        <div className="form-group">
          <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={facilieteFormData.title}
            onChange={handleFacilieteChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
            <label htmlFor="title" className="block text-gray-700 font-medium">Icon</label>
          <input
            type="file"
            id="icon"
            name="icon"
           
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
            <label htmlFor="title" className="block text-gray-700 font-medium">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={facilieteFormData.description}
            onChange={handleFacilieteChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter description"
          />
        </div>
       
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          onClick={handleFacilieteSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  )
}

export default Features
