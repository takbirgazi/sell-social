import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h2 className='text-4xl font-bold'>404 | Page Not Found</h2>
            <Link className='my-5 px-5 py-1 border rounded-md' href="/">Go back to Home</Link>
        </div>
    );
};

export default NotFound;