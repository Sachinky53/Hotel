import React, { useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function Crousel() {
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    image: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };

  const [crousel, setCrousel] = React.useState([]);

  const fetchCrousel = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/crousel/getCrousel");
      const crouselData = response.data.crousel;
      setCrousel(crouselData);
      // console.log(crouselData);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    fetchCrousel();
  }, [fetchCrousel]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowForm(false);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("image", formData.image);

      const response = await axios.post("http://localhost:4000/api/crousel/createCrousel", data);
      //Swal success
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Crousel created successfully',

      })

      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //handle delete\

  const handleDelete = async(item)=>{
    try {
      const resp = await axios.delete(`http://localhost:4000/api/crousel/deleteCrousel${item}`);
      // confirmation delete from swal
      if (resp.status === 200) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
      console.log(resp)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className='crousel-heading flex justify-between'>
      <h1 className='crousel-heading text-3xl font-bold font-serif'>CROUSEL</h1>
      <button className='crousel-add bg-gray-700 text-white px-3 py-2 rounded-md cursor-pointer '
      onClick={()=>setShowForm(true)}
      >+ Add</button>
      </div>

      <div className="crousel-container grid grid-cols-3 bg-white p-5 rounded-xl gap-4 mt-4">
        {/* {console.log("jhw",crousel)} */}
       {crousel && (
        crousel.map((item) => (
          <div key={item._id} className="crousel-item bg-gray-100 p-4 rounded-md">
            <img src={`http://localhost:4000/uploads/${item.image}`} alt="Product" className="crousel-image w-full h-40 object-cover mb-2" />
            {/* <h3 className="crousel-title text-lg font-semibold">{item.title}</h3> */}
            <button className="crousel-delete bg-red-500 text-white px-3 py-2 w-full rounded-md cursor-pointer "
            onClick={()=>handleDelete(item._id)}
            >Delete</button>
          </div>
       )))}

       
       

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
        <div className="form-group">
          <label htmlFor="image" className="block text-gray-700 font-medium">Image</label>
          <input
            type="file"
            id="image"

            name="image"
            
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md cursor-pointer file:bg-blue-500 file:text-white file:rounded-md file:py-1 file:px-3 hover:file:bg-blue-600"
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

    </div>
  )
}

export default Crousel
