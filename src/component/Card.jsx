import React from 'react';
import downloadIcon from '../assets/iconDownloads.png'
import rating from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const Card = ({app}) => {
    return (
       <Link to={`/detailsCard/${app.id}`}>
       <div className="card bg-base-100  shadow-sm">
                            <figure className='h-56 overflow-hidden p-2'>
                                <img className='w-full h-full object-cover'
                                    src={app.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="">
                                <h2 className="card-title p-2">{app.title}</h2>
                                <div className='flex justify-between items-center p-2'>
                                    <p className='flex items-center gap-1 p-1 rounded'>
                                        <img className='h-4' src={downloadIcon} alt="" />
                                        <span className='text-green-500'>{app.downloads}M</span>
                                    </p>
                                    <p className='flex items-center gap-1 p-1 rounded'>
                                        <img className='h-4' src={rating} alt="" />
                                        <span className='text-orange-500'>{app.ratingAvg}</span>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
       </Link>
    );
};

export default Card;