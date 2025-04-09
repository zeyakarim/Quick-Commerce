'use client'
import React from 'react';
import DateRangeSelector from "@/components/DateRangeSelector";
import Image from 'next/image';
import SwitchComponent from './Switch';

const TopHeader = () => {
    return (
        <div className='flex justify-between w-full p-3 border-b-1 border-[#d1d5dc]'>
            <p className='font-[600] text-md my-auto'>Quick Commerce</p>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-row gap-3 border-1 border-[#d1d5dc] px-4 py-[6px] rounded-lg shadow'>
                    <Image 
                        src='/line-chart.svg'
                        alt='line-chart'
                        width={16}
                        height={16}

                    />
                    <SwitchComponent size="sm" />
                </div>
                <DateRangeSelector />
            </div>
        </div>
    )
}

export default TopHeader;