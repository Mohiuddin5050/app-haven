import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import downloadImg from '../assets/iconDownloads.png'
import ratingsImg from '../assets/icon-ratings.png'

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortMode, setSortMode] = useState("");

    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(storedApps);
    }, []);

    const handleUninstall = (id, title) => {
        const updatedApps = installedApps.filter((app) => app.id !== id)
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));


        toast.info(`${title} uninstalled successfully!`, {
            position: "top-right",
            autoClose: 2000,
        });
    }

    const handleSort = (mode) => {
        setSortMode(mode);
        let updatedApps = [...installedApps];
        if (mode === "high-low") updatedApps.sort((a, b) => b.downloads - a.downloads);
        if (mode === "low-high") updatedApps.sort((a, b) => a.downloads - b.downloads);
        setInstalledApps(updatedApps);
    };

    if (installedApps.length === 0) {
        return (
            <div>
                <h1 className='text-center text-2xl font-bold py-10'>No installed apps found</h1>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-10">
            <div>
                <h1 className='text-center font-bold text-2xl'>Your Installed Apps</h1>
                <p className='text-center pt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center pt-10'>
                <h1 className='font-bold'>{installedApps.length} : Apps Found</h1>
                <div className="form-control max-w-xs">

                    <select value={sortMode} onChange={(e) => handleSort(e.target.value)} className="select select-bordered">
                        <option value='none'>Sort By download</option>
                        <option value='low-high'>Low-High</option>
                        <option value='high-low'>High-Low</option>
                    </select>
                </div>
            </div>
            <div className='space-y-4 pt-5'>
                {
                    installedApps.map((app) => (
                        <div key={app.id} className='flex justify-between items-center shadow-sm border border-gray-200'>
                            <div className='flex items-center gap-5'>
                                <div>
                                    <img className='h-15 w-15 rounded-xl p-2' src={app.image} alt="" />
                                </div>
                                <div>
                                    <h1 className=''>{app.title}</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center gap-1'>
                                            <img className='h-3 w-3' src={downloadImg} alt="" />
                                            <small>{app.downloads}M</small>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img className='h-3 w-3' src={ratingsImg} alt="" />
                                            <small>{app.ratingAvg}</small>
                                        </div>
                                        <div className='flex'>
                                            <small>{app.size}MB</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleUninstall(app.id, app.title)} className="btn btn-success m-2">Uninstall</button>
                                
                            </div>
                        </div>
                        
                        
                    ))
                }
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Installation;