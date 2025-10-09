import React from 'react';
import playStore from "../assets/playStore.png"
import appStore from "../assets/appStore.png"
import hero from "../assets/hero.png"
import useApps from '../hooks/useApps'
import { Link } from 'react-router';
import Card from '../component/Card';

const Home = () => {
    const { apps, loading, error } = useApps()

    const featuredApps = apps.slice(0, 8)
    return (
        <div>
            <div className='py-10'>
                <div className='container mx-auto text-center'>
                    <h1 className='text-5xl'>
                        <span className='font-semibold'>We Build</span><br />
                        <span className='font-bold text-purple-600'>Productive </span>
                        <span className='font-semibold'>Apps</span>
                    </h1>
                    <p className='px-2 md:px-10 lg:px-40 text-gray-500 pt-5'>At AppHaven, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                    <div className='my-4'>
                        <a href='https://play.google.com/store/apps' target='_blank' className='btn mr-2'><img src={playStore} alt="" /><span>Google Play</span></a>
                        <a href='https://www.apple.com/app-store/' target='_blank' className='btn'><img src={appStore} alt="" /><span>App Store</span></a>
                    </div>
                    <div className='flex justify-center'>
                        <img className='' src={hero} alt="" />
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10'>
                    <h1 className='text-white text-center text-3xl font-bold '>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col lg:flex-row justify-around p-5 gap-3'>
                        <div className='text-center text-white'>
                            <p><small>Total Downloads</small></p>
                            <h1 className='text-4xl font-bold'>29.6M</h1>
                            <p><small>21% more than last month</small></p>
                        </div>
                        <div className='text-center text-white'>
                            <p><small>Total Reviews</small></p>
                            <h1 className='text-4xl font-bold'>906K</h1>
                            <p><small>46% more than last month</small></p>
                        </div>
                        <div className='text-center text-white'>
                            <p><small>Active Apps</small></p>
                            <h1 className='text-4xl font-bold'>132+</h1>
                            <p><small>31 more will Launch</small></p>
                        </div>

                    </div>
                </div>
                <div className='text-center pt-8'>
                    <h1 className='text-3xl font-bold pb-3'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8'>
                    {
                        featuredApps.map(app => (
                            <Card key={app.id} app={app}></Card>
                        ))
                    }
                </div>
                <div className='flex justify-center pt-6'>
                    <Link to='/apps' className="btn btn-primary">Show All</Link>
                </div>
            </div>
        </div>

    );
};

export default Home;