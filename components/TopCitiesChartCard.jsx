'use client'
import React from 'react';
import { Card } from '@mui/material';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { ArrowDownward, ArrowUpward, HelpOutline } from '@mui/icons-material';

const data = [
    { name: "New Delhi", value: 35, fill: "#6C4FED", price: '₹26.5L', trend: '↑', percent: '1.2%', color: '#027056' },
    { name: "Mumbai", value: 23, fill: "#EA6153", price: '₹36.4L', trend: '↓', percent: '3.3%', color: '#F54747' },
    { name: "West Bengal", value: 21, fill: "#F7C245", price: '₹12.2L', trend: '↓', percent: '2.3%', color: '#F54747' },
    { name: "Others", value: 19, fill: "#D9D9D9", price: '₹24.3L', trend: '↑', percent: '1.09%', color: '#027056' },
];

const TopCitiesChartCard = () => {
    return (
        <Card sx={{ 
            borderRadius: '12px', 
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '33%',
        }}>
            <div className='flex flex-row justify-between p-4 border-b border-gray-300'>
                <p className="font-semibold text-[15px] text-[#515153] m-0 p-0">
                    Top Cities
                </p>
                <HelpOutline sx={{ fontSize: '20px', color: '#999' }} />
            </div>
            
            {/* Total and Chart */}
            <div className='h-[225px] relative'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            // paddingAngle={2}
                        />
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className='text-[#9D9D9E] text-sm'>Total</p>
                    <p className='font-bold text-lg'>₹68.2L</p>
                    <div className='flex flex-row gap-1 items-center justify-center'>
                        <ArrowUpward sx={{ fontSize: '16px', color: '#027056' }} />
                        <p className='text-[#027056] text-sm'>2.2%</p>
                    </div>
                </div>
            </div>

            {/* Cities List */}
            <div className='flex flex-col gap-3 px-4 -mt-3'>
                {data.map((city, index) => (
                    <div key={index} className='flex justify-between items-center'>
                        {/* City name with colored dot */}
                        <div className='flex items-center gap-1.5 w-[30%]'>
                            <p className='w-2 h-2 rounded-full' style={{ backgroundColor: city?.fill }} />
                            <p className='text-sm text-[#666] whitespace-nowrap overflow-hidden text-ellipsis'>
                                {city.name}
                            </p>
                        </div>

                        {/* City stats */}
                        <div className='flex items-center gap-2 w-[70%] justify-end'>
                            <p className='text-sm font-semibold min-w-15 text-right'>
                                {city.price}
                            </p>
                            <p className='text-sm text-[#999] bg-[#f5f5f5] px-1 rounded-sm min-w-10 text-center'>
                                {city.value}%
                            </p>
                            <div className='flex items-center min-w-15 justify-end'>
                                {city.trend === '↑' ? (
                                    <ArrowUpward sx={{ fontSize: '16px', color: city.color }} />
                                ) : (
                                    <ArrowDownward sx={{ fontSize: '16px', color: city.color }} />
                                )}
                                <p className='text-sm ml-0.5' style={{ color: city.color }}>
                                    {city.percent}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default TopCitiesChartCard;