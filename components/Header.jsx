'use client'
import React from 'react';
import CompaniesToggle from './CompaniesToggle';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <div className='w-full flex flex-col border-b-1 border-[#d1d5dc]'>
            <TopHeader />
            <CompaniesToggle />
        </div>
    )
}

export default Header;