import React from 'react';
import { Link, NavLink } from 'react-router';
import vector from "../assets/Vector.png"
import logo from "../assets/logo.png"

const Navbar = () => {
    const activeClass="text-purple-600 underline";
    const normalClass= "text-black "
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar container mx-auto'>
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/' className={({isActive})=> isActive? activeClass: normalClass}>Home</NavLink></li>
                        <li><NavLink to='/apps' className={({isActive})=> isActive? activeClass: normalClass}>Apps</NavLink></li>
                        <li><NavLink to='/installation' className={({isActive})=> isActive? activeClass: normalClass}>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-bold flex gap-2"><img className='h-10' src={logo}alt="" /><span>AppHaven</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1">
                    <li><NavLink to='/' className={({isActive})=> isActive? activeClass: normalClass}>Home</NavLink></li>
                    <li><NavLink to='/apps' className={({isActive})=> isActive? activeClass: normalClass}>Apps</NavLink></li>
                    <li><NavLink to='/installation' className={({isActive})=> isActive? activeClass: normalClass}>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/Mohiuddin5050' target='_blank' className="btn bg-purple-700 "><img src={vector} alt="" /><span className='text-white'>Contribute</span></a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;