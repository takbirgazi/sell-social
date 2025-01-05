"use client"
import { RootState } from '@/lib/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const NotFound = () => {
    const [dark, setDark] = useState(true);
    const isDark = useSelector((state: RootState) => state.themeChange);
    useEffect(() => {
        setDark(isDark);
    }, [isDark])
    return (
        <main className={dark ? "dark" : ""}>
            <div className='flex flex-col items-center justify-center bg-white dark:bg-[#1c1c1d] min-h-screen'>
                <h2 className='text-4xl font-bold dark:text-white text-[#1c1c1d]'>404 | Page Not Found</h2>
                <Link className='my-5 px-5 py-1 border rounded-md dark:text-white text-[#1c1c1d]' href="/">Go back to Home</Link>
            </div>
        </main>
    );
};

export default NotFound;