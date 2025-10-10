import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApps from '../hooks/useApps';
import downloadImg from '../assets/iconDownloads.png'
import ratingsImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'
import appErrorImg from '../assets/App-Error.png'
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
    LabelList,
} from "recharts";


const DetailsCard = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()
    const app = apps.find(a => String(a.id) === id)

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (installedApps.some((a) => a.id === app?.id)) {
            setInstalled(true);
        }
    }, [app])

    if (loading) return <p>Loading......</p>
    if (!app) return (
        <div className='container mx-auto pt-10'>
            <img className='mx-auto' src={appErrorImg} alt="" />
            <p className='font-bold text-2xl py-5 text-center'>App not found</p>
        </div>

    )
    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (!installedApps.some((a) => a.id === app?.id)) {
            localStorage.setItem("installedApps", JSON.stringify([...installedApps, app]));
        }

        setInstalled(true);
        toast.success(`${app.title} installed successfully!`, {
            position: "top-right",
            autoClose: 2000,
        });
    };

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row gap-20 py-10 items-center'>
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
                            <img src={ratingsImg} alt="" />
                            <p><small>Average Ratings</small></p>
                            <h2 className='font-bold text-2xl'>{app.ratingAvg}</h2>
                        </div>
                        <div>
                            <img src={reviewImg} alt="" />
                            <p><small>Total Reviews</small></p>
                            <h2 className='font-bold text-2xl'>{app.reviews}K</h2>
                        </div>
                    </div>
                    <button onClick={handleInstall} disabled={installed} className="btn btn-success mt-4">{installed ? "Installed" : `Install Now ${app.size}MB`}</button>
                    <ToastContainer />
                </div>
            </div>
            <div className="bg-white shadow p-6 rounded-lg mt-10">
                <h2 className="text-2xl font-bold mb-4">Ratings</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        layout="vertical"
                        data={app.ratings}
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FF7C00">
                            <LabelList dataKey="count" position="right" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='pb-10 p-2'>
                <h2 className="text-2xl font-bold mb-4 pt-4">Description</h2>
                <p>{app.description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;
