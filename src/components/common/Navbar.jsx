import React, { useContext} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from './Logo';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/counterSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const dispatch = useDispatch()

    const handleToggleSidebar = ()=>{
        dispatch(toggleSidebar())
    }

    return (
        <div className='fixed top-0 z-10 w-full h-16 flex items-center justify-between bg-white py-2 px-6'>
            <div className='flex items-center gap-5'>
                <GiHamburgerMenu onClick={handleToggleSidebar} className='cursor-pointer' size={"24px"} />
                <Link to='/'><Logo /></Link>
            </div>
            <div className='flex items-center w-[40%] border border-gray-400 rounded-full'>
                <input className='border w-full border-none  border-gray-400 py-2 px-4 outline-none' placeholder='Search' type="text" />
                <button className='px-4 border-l border-gray-400 py-2'>Search</button>
            </div>
            <div className='flex items-center gap-5'>
                <CiVideoOn size={"24px"} />
                <IoIosNotificationsOutline size={"24px"} />
                <img className='rounded-full w-[30px] h-[30px]' src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default Navbar;