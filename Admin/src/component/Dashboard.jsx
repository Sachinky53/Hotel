import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";

import { FaListUl } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { useLocation, useNavigate } from 'react-router-dom';

import { RiLockPasswordFill } from "react-icons/ri";
import Hero from './Hero';


function Dashboard() {
    const [showSidebar, setShowSidebar] = React.useState(true);
    const [sidebarIcon, setSidebarIcon] = React.useState(false);
    const [currentview, setCurrentview] = React.useState('home');
    const [activeMenu, setActiveMenu] = React.useState(null);
    const navigate = useNavigate();
    const toggleSubMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        setSidebarIcon(!sidebarIcon);
    };

    const handleClick = (view) => {
        setCurrentview(view);
    };

    const renderView = () => {
        switch (currentview) {
            case "Hero":
                return <Hero/>;
            case "user":
                return <h1>user</h1>;
            // case "Booking":
            //     return <h1>Booking</h1>;
            case "booking":
                return <h1>Booking</h1>;
            case "NewBooking":
                return <h1>NewBooking</h1>;
            case "RefundBooking":
                return <h1>RefundBooking</h1>;
            case "BookingList":
                return <h1>BookingList</h1>;
                
            case "userQueries":
                return <h1>userQuery</h1>;
            case "Rating":
                return <h1>Rating & Review</h1>;
            case "Room":
                return <h1>Room</h1>;
            case "Features":
                return <h1>Features</h1>;
            case "crousel":
                return <h1>crousel</h1>;
            case "setting":
                return <h1>Setting</h1>;
            default:
                return null;
        }
    };
  return (
    <div>
      <div className="dashboard-container bg-slate-500 h-full w-full flex ">
                {showSidebar && <div className="dashboard-left min-h-screen w-1/5 bg-gray-200 p-4">
                    <div className="logo-dashboard  w-3/4 ">
                        <h1 className='text-3xl font-bold font-serif'>HOTELIER</h1>
                    </div>
                    <div className="sidebar-content mt-5 ">
                        <ul className='flex flex-col gap-4'>

                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("Hero")}
                            > <MdDashboard className='h-6 w-6' />
                                Dashboard</li>
                            {/* <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("Booking")}
                            > <MdDashboard className='h-6 w-6' />
                                Booking</li> */}

                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg  flex gap-3  items-center'
                                onClick={() => handleClick("user")}
                            ><FaUser className='h-6 w-6' /> Users</li>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center '
                                onClick={() => toggleSubMenu("booking")}
                            ><FaProductHunt className='h-6 w-6' />
                                Booking {activeMenu === "booking" ? <FaChevronUp className='h-4 w-4 ml-14' /> : <FaChevronDown className='h-4 w-4  ml-14' />}
                            </li>
                            {activeMenu === "booking" && (
                                <ul className="pl-8  flex flex-col gap-2">
                                    <li
                                        className="px-2 py-2 shadow-sm cursor-pointer rounded-md hover:shadow-lg flex items-center gap-3"
                                        onClick={() => handleClick("NewBooking")}
                                    ><FaListUl className='h-4 w-4' />

                                        New Booking
                                    </li>
                                    <li
                                        className="px-2 py-2 shadow-sm cursor-pointer rounded-md hover:shadow-lg flex items-center gap-3"
                                        onClick={() => handleClick("RefundBooking")}
                                    ><IoMdAddCircleOutline className='h-4 w-4' />

                                        Refund Booking
                                    </li>
                                    <li
                                        className="px-2 py-2 shadow-sm cursor-pointer rounded-md hover:shadow-lg flex items-center gap-3"
                                        onClick={() => handleClick("BookingList")}
                                    ><IoMdAddCircleOutline className='h-4 w-4' />

                                        Booking List
                                    </li>
                                </ul>
                            )}
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("userQueries")}
                            > <BiSolidCategory className='h-6 w-6' />

                                User Queries
                                
                            </li>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("Rating")}
                            > <BiSolidCategory className='h-6 w-6' />

                                Rating & Reviews
                                
                            </li>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("Room")}
                            > <BiSolidCategory className='h-6 w-6' />

                                Room
                                
                            </li>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("Features")}
                            > <BiSolidCategory className='h-6 w-6' />

                                Features & Facilities
                                
                            </li>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("crousel")}
                            > <BiSolidCategory className='h-6 w-6' />

                               Crousel
                                
                            </li>
                           
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("setting")}
                            >
                                <RiLockPasswordFill className='h-6 w-6' />
                                Setting</li>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                // onClick={handleLogout}
                            >
                                <IoLogOut className='h-6 w-6' />
                                Logout</li>
                        </ul>
                    </div>
                </div>}
                {sidebarIcon && <div className="dashboard-left min-h-44 w-20 bg-gray-200 p-4">
                    <div className="logo-dashboard  w-3/4">
                        <img src='./logo-light-streamline.png' alt='logo' className='w-full h-full' />
                    </div>
                    <div className="sidebar-content mt-5">
                        <ul className='flex flex-col gap-4'>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                                onClick={() => handleClick("Hero")}
                            > <MdDashboard className='h-6 w-6' />
                            </li>

                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg  flex gap-3  items-center'
                                onClick={() => handleClick("user")}
                            ><FaUser className='h-6 w-6' /> </li>

                            <li
                                className="relative px-2 py-3 shadow-sm cursor-pointer rounded-md hover:shadow-lg flex gap-3 items-center group  "
                            ><FaProductHunt className='h-6 w-6' />
                                <ul className="absolute left-full top-0 hidden group-hover:block bg-gray-200 shadow-md rounded-md p-2 w-40 ">
                                    <li
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                        onClick={() => handleClick("productList")}
                                    >
                                        Product List
                                    </li>
                                    <li
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                        onClick={() => handleClick("addProduct")}
                                    >
                                        Add Product
                                    </li>
                                </ul>
                            </li>
                            <li className='relative px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center group'> <BiSolidCategory className='h-6 w-6' />
                            {/*sub menu*/}
                                <ul className="absolute left-full top-0 hidden group-hover:block bg-gray-200 shadow-md rounded-md p-2 w-40">
                                    <li
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                        onClick={() => handleClick("categoryList")}
                                    >
                                        Category List
                                    </li>
                                    <li
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                        onClick={() => handleClick("addCategory")}
                                    >
                                        Add Category
                                    </li>
                                </ul>
                            </li>
                            
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                            onClick={() => handleClick("changePassword")}>
                                <RiLockPasswordFill className='h-6 w-6' />
                            </li>
                            <li className='px-2 py-3 shadow-sm cursor-pointer rounded-md  hover:shadow-lg flex gap-3  items-center'
                            // onClick={handleLogout}>
                            >
                                <IoLogOut className='h-6 w-6' />
                            </li>
                        </ul>
                    </div>
                </div>}
                {/* right panel header */}
                <div className='dashboard-right h-full w-full'>
                    <div className="dashboard-header h-full w-full py-5 flex justify-between px-5 bg-gray-200 border border-gray-400 shadow-lg">

                        <button
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 80"
                                width="40"
                                height="20"
                                className="fill-current transform transition-transform duration-300"
                            >
                                <rect
                                    className="origin-center transition-transform duration-300"
                                    width="100"
                                    height="20"
                                    rx="8"
                                ></rect>
                                <rect
                                    className="origin-center transition-transform duration-300"
                                    y="30"
                                    width="100"
                                    height="20"
                                    rx="8"
                                ></rect>
                                <rect
                                    className="origin-center transition-transform duration-300"
                                    y="60"
                                    width="100"
                                    height="20"
                                    rx="8"
                                ></rect>
                            </svg>
                        </button>

                    </div>
                    <div className="dashboard-content min-h-screen w-full p-5 bg-gray-100">
                        {renderView()}
                    </div>
                </div>


            </div>
    </div>
  )
}

export default Dashboard
