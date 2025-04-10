'use client'
import React from 'react';
import { Card } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ArrowUpward, HelpOutline } from '@mui/icons-material';

const data = [
  { name: '09', thisMonth: 1.5, lastMonth: 2.5 },
  { name: '10', thisMonth: 2.3, lastMonth: 2.0 },
  { name: '11', thisMonth: 3.0, lastMonth: 1.5 },
  { name: '12', thisMonth: 2.8, lastMonth: 4.0 },
  { name: '13', thisMonth: 5.0, lastMonth: 3.0 },
  { name: '14', thisMonth: 4.0, lastMonth: 5.0 },
  { name: '15', thisMonth: 6.0, lastMonth: 4.5 },
];

const SalesChartCard = ({title}) => {
  return (
    <Card sx={{ 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '33%',
    }}>
      {/* Header */}
      <div className='flex flex-row justify-between p-4 border-b border-gray-300'>
        <p className="font-semibold text-[15px] text-[#515153] m-0 p-0">
          {title}
        </p>
        <HelpOutline sx={{ fontSize: '20px', color: '#999' }} />
      </div>
      
      {/* Sales Figures */}
      <div className="flex justify-between items-baseline gap-2 mb-3 px-4 pt-4">
        <p className="font-semibold text-[26px] text-gray-900 flex my-auto">
          125.49
        </p>
        <div>
          <div className="flex justify-end items-center gap-1.5 text-sm font-semibold text-green-700">
            <ArrowUpward sx={{ fontSize: '16px'}} />
            2.4%
          </div>
          <div className="text-sm text-gray-500">
            vs 119.69 last month
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[248px] border-b border-gray-300">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#eee"
            />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 6]} 
              ticks={[0, 1.5, 3.0, 4.5, 6.0]} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <Area 
              type="linear" 
              dataKey="thisMonth" 
              stroke="#027056" 
              fill="#E7F7EF" 
              fillOpacity={1}
              strokeWidth={2}
              dot={false}
            />
            <Area 
              type="linear" 
              dataKey="lastMonth" 
              stroke="#E0663D" 
              fill="#fff" 
              fillOpacity={0}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-4 p-4">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-700 rounded-full mr-1" />
          <p className="text-sm text-gray-500">
            This Month
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-1" />
          <p className="text-sm text-gray-500">
            Last Month
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SalesChartCard;