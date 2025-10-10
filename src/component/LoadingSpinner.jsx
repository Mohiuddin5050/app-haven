import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <span className="loading loading-ring loading-lg text-purple-600"></span>
        </div>
    );
};

export default LoadingSpinner;