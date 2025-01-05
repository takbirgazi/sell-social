import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Theme from '../Theme/Theme';
import styles from '../../assets/styles/navbar.module.css';
import { FiAlignRight } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className='border-b-2'>
            <nav className='flex justify-between items-center container mx-auto px-2 md:px-5'>
                {/* Logo */}
                <div className='flex items-center px-4 dark:backdrop-blur-xl my-1 rounded-sm -ml-5'>
                    <figure className='h-10 w-10 md:h-16 md:w-16'>
                        <Image className='overflow-hidden' src={logo} alt="Logo" />
                    </figure>
                    <h2 className='hidden md:block text-4xl mt-2 dark:text-white text-[#1c1c1d]'>Sell Social</h2>
                </div>
                {/* Menu Option  */}
                <div className='relative flex items-center'>
                    <ul className='flex justify-center items-center space-x-4 text-[#1c1c1d] dark:text-white'>
                        <li>
                            <input type="text" placeholder='Search' className='rounded-md bg-transparent px-2 border border-gray-600 outline-none dark:text-white text-[#1c1c1d]' />
                        </li>
                        <li>
                            <Link href='/' className='flex items-center gap-1'> <FaGlobeAmericas className='text-2xl flex items-center md:hidden' /> <span className='hidden md:block'>Social</span></Link>
                        </li>
                        <li>
                            <Link href='/marketplace' className='flex items-center gap-1'> <SiCoinmarketcap className='text-2xl flex items-center md:hidden' /> <span className='hidden md:block'>Marketplace</span></Link>
                        </li>
                        <li className='text-3xl flex items-center'>
                            <button onClick={() => setIsShow(!isShow)}><FiAlignRight /></button>
                        </li>
                    </ul>
                    {/* dropdown / Sub Menu */}
                    <div className={`${styles.dropdown} ${isShow ? "absolute" : "hidden"} top-[41px] md:top-[53px] shadow-md`}>
                        <ul className='flex flex-col space-y-3 text-[#1c1c1d] dark:text-white'>
                            <li><Link href='/'>Login</Link></li>
                            <li><Link href='/'>Sign Up</Link></li>
                            <li className='flex items-center justify-center w-full pt-2'><Theme /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;