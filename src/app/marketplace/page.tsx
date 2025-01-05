"use client"
import { RootState } from '@/lib/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Marketplace = () => {
    const [dark, setDark] = useState(true);
    const isDark = useSelector((state: RootState) => state.themeChange);
    useEffect(() => {
        setDark(isDark)
    }, [isDark])
    return (
        <main className={dark ? "dark" : ""}>
            <div>
                <h2 className='dark:text-green-800'>Hello Marketplace</h2>
            </div>
        </main>
    );
};

export default Marketplace;