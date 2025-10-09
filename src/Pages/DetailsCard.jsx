import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApps from '../hooks/useApps';
import downloadImg from '../assets/iconDownloads.png'

const DetailsCard = () => {
    const [installed, setInstalled] = useState(false)
    const { id } = useParams()
    const { apps, loading } = useApps()
    const app = apps.find(a => String(a.id) === id)
    if (loading) return <p>Loading......</p>

    const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

    return (
        <div className='container mx-auto flex gap-20 py-10 items-center'>
            <img src={app.image} alt="" />
            <div>
                <div className='border-b border-gray-300 mb-2'>
                    <h1 className='text-2xl font-bold'>{app.title}</h1>
                    <p><small>Developed by: <span className='text-purple-500 '>{app.companyName}</span></small></p>
                </div>
                <div className='flex gap-10'>
                    <div>
                        <img src={downloadImg} alt="" />
                        <p><small>Downloads</small></p>
                        <h2 className='font-bold text-2xl'>{app.downloads}M</h2>
                        
                    </div>
                    <div>
                        <img src={downloadImg} alt="" />
                        <p><small>Downloads</small></p>
                        <h2 className='font-bold text-2xl'>{app.downloads}M</h2>
                    </div>
                    <div>
                        <img src={downloadImg} alt="" />
                        <p><small>Downloads</small></p>
                        <h2 className='font-bold text-2xl'>{app.downloads}M</h2>
                    </div>
                </div>
                <button onClick={handleInstall} disabled={installed} className="btn btn-success mt-4">{installed ? "Installed" : `Install Now ${app.size}MB`}</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default DetailsCard;
