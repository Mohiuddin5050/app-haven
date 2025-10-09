import React from 'react';
import downloadIcon from '../assets/iconDownloads.png'
import rating from '../assets/icon-ratings.png'

const Card = ({app}) => {
    return (
       <div className="card bg-base-100  shadow-sm">
                            <figure className='h-56 overflow-hidden p-2'>
                                <img className='w-full h-full object-cover'
                                    src={app.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{app.title}</h2>
                                <div className='flex justify-between items-center'>
                                    <p className='flex items-center gap-1 bg-green-50 w-fit p-1 rounded'>
                                        <img className='h-4' src={downloadIcon} alt="" />
                                        <span className='text-green-500'>{app.downloads}M</span>
                                    </p>
                                    <p className='flex items-center gap-1 bg-orange-50 w-fit p-1 rounded'>
                                        <img className='h-4' src={rating} alt="" />
                                        <span className='text-orange-500'>{app.ratingAvg}</span>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
    );
};

export default Card;