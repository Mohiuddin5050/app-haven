import React, { useEffect, useState } from 'react';
import useApps from '../hooks/useApps';
import Card from '../component/Card';
import LoadingSpinner from '../component/LoadingSpinner';

const Apps = () => {
    const { apps, error } = useApps()
    const [search, setSearch] = useState('')
    const [filterApps, setFilterApps] = useState([])
    const [searchLoading, setSearchLoading] = useState(false)

    useEffect(() => {
        setSearchLoading(true)
        const timeout = setTimeout(() => {
            const term = search.trim().toLocaleLowerCase()
            const searchApp = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
            setFilterApps(searchApp);
            setSearchLoading(false)
        }, 500)
        return () => clearTimeout(timeout);
    }, [search, apps])

 
    if (error) return <p className="text-center text-red-500">Failed to load apps!</p>
   
    return (
        <div className='container mx-auto relative'>
            
            <div className='text-center pt-8'>
                <h1 className='text-3xl font-bold pb-3'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center pt-10'>
                <h1 className='font-bold'>{filterApps.length} : Apps Found</h1>
                <label className='input'>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search" placeholder='search apps' />
                        
                </label>
                {searchLoading && (
            <span className="loading loading-spinner loading-sm absolute top-1/2 left-1/2 -translate-y-1/2 text-primary"></span>
          )}
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8'>
                {filterApps.length > 0 ? (
                    filterApps.map((app) => <Card key={app.id} app={app} />)
                ) : (
                    <p className="col-span-full text-center text-2xl font-bold py-10">
                        No App Found
                    </p>
                )}
            </div>

        </div>
    );
};

export default Apps;