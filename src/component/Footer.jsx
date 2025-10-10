import React from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router';
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const Footer = () => {
    return (
        <div className='bg-[#001931]'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-b border-gray-700 gap-5'>
                <div>
                    <Link to='/' className="font-bold flex gap-2 items-center"><img className='h-8' src={logo} alt="" /><span className='text-white'>AppHaven</span></Link>
                </div>
                <div className='text-white '>
                    <h6 className="text-xl font-bold">Legal</h6>
                    <p className="">Terms of use</p>
                    <p className="">Privacy policy</p>
                    <p className="">Cookie policy</p>
                </div>
                <div className=''>
                    <h4 className='text-white pb-2'>Social Links</h4>
                    <div className='flex gap-3 pr-5'>
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                </div>
            </div>
            <p className='text-white  text-center py-5'>Copyright © {new Date().getFullYear()} - All right reserved by AppHaven Ltd</p>
        </div>
    );
};

export default Footer;