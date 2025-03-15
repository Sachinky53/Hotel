import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import axios from 'axios';

function Profile() {
  const [users, setUsers] = useState([]);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';')[0];
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const token = getCookie("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:4000/api/user/auth", {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log("Response:", response);
          setUsers(Array.isArray(response.data.user) ? response.data.user : [response.data.user]);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    console.log("Edit user with ID:", userId);
    // Implement your edit logic here, like redirecting to an edit page or opening a modal
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col gap-9 items-center bg-gray-100">
        {/* Profile Header */}
        <div
          className="profile-header w-full h-60 flex justify-center items-center text-7xl font-bold text-white shadow-lg"
          style={{ background: 'linear-gradient(135deg, #b5184a,#611045, #1c060d)' }}
        >
          Profile
        </div>

        {/* Profile Content */}
        <div className="profile-content w-full max-w-4xl bg-amber-300 mt-10 p-6 rounded-lg shadow-lg">
          {users.length === 0 ? (
            <p className="text-center text-gray-500">No users found.</p>
          ) : (
            users.map((user) => (
              <div key={user._id} className="user-card w-full flex items-center gap-6 bg-white shadow-md rounded-lg overflow-hidden mb-6">
                {/* User Image Section */}
                <div className="user-image-section flex-shrink-0  flex items-center justify-center py-10 px-5 bg-gray-100">
                  <div className="user-image bg-gray-200 h-64 w-64 overflow-hidden rounded-full border border-gray-300">
                    <img
                      className="h-full w-full object-cover"
                      src={`http://localhost:4000/uploads/${user.picture}`}
                      alt={user.name || "User"}
                    />
                  </div>
                </div>

                {/* User Info Section */}
                <div className="user-info-section flex-1 p-4">
                  <h3 className="text-5xl font-semibold text-gray-900 mb-2">{user.name}</h3>
                  <p className="text-gray-600 text-xl mb-2">Email: {user.email}</p>
                  <p className="text-gray-600 text-xl mb-2">Phone: {user.phoneNumber}</p>
                  <p className="text-gray-600 text-xl mb-2">pincode: {user.pincode}</p>
                </div>

                {/* Edit Button Section */}
                {/* <div className="edit-button-section p-4">
                  <button
                    onClick={() => handleEdit(user._id)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
                  >
                    Edit
                  </button>
                </div> */}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
