import React from 'react';
import logo from '../../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='border-b-2'>
            <nav className='flex justify-between items-center container mx-auto '>
                <div className=''>
                    <figure className='h-16 w-16'>
                        <Image className='overflow-hidden' src={logo} alt="Logo" />
                    </figure>
                </div>
                <div>
                    <ul className='flex justify-center space-x-4'>
                        <li><Link href='/'>Social</Link></li>
                        <li><Link href='/'>Marketplace</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;