import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import Card from '../component/Card';

const Apps = () => {
    const {apps}=useApps()
    const [search, setSearch]=useState('')
    const term =search.trim().toLocaleLowerCase()
    const searchApp=term?apps.filter(app=>app.title.toLocaleLowerCase().includes(term)):apps
    
    return (
        <div className='container mx-auto'>
            <div className='text-center pt-8'>
                    <h1 className='text-3xl font-bold pb-3'>Our All Applications</h1>
                    <p>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center pt-10'>
                    <h1 className='font-bold'>{searchApp.length} : Apps Found</h1>
                    <label className='input'>
                        <input
                        value={search}
                         onChange={(e)=>setSearch(e.target.value)} 
                         type="search" placeholder='search apps' />
                    </label>
                </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8'>
                    {
                        searchApp.map(app => (
                            <Card key={app.id} app={app}></Card>
                        ))
                    }
                </div>
            
        </div>
    );
};

export default Apps;