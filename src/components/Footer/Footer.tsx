import React from 'react';

const Footer = () => {
    return (
        <div className='border-t-2'>
            <div className='container mx-auto py-5'>
                <p className='text-center text-[#1c1c1d] dark:text-white'>&copy; {new Date().getFullYear()} All Rights And Reserved by Md. Takbir Gazi </p>
            </div>
        </div>
    );
};

export default Footer;