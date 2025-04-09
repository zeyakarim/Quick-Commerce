'use client'
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
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
      <div className='flex flex-row justify-between p-4 border-b-gray-300 border-b-1'>
        <Typography variant="h6" sx={{ 
            fontWeight: 600, 
            fontSize: '16px',
            color: '#333',
            mb: 0,
            p: 0, 
        }}>
            {title}
        </Typography>
        <HelpOutline style={{fontSize:'20px'}} />
      </div>
      
      {/* Sales Figures */}
      <Box sx={{ display: 'flex', justifyContent:'space-between', alignItems: 'baseline', gap: '8px', mb: 3, pr:2, pl:2, pt:2 }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 700, 
          fontSize: '28px',
          color: '#111',
          display:'flex',
          margin:'auto 0px'
        }} className='my-auto'>
          125.49
        </Typography>
        <div>
            <Typography variant="body2" sx={{ 
            fontSize: '14px',
            color: '#027056',
            display: 'flex',
            justifyContent:'end',
            fontWeight:600,
            gap:'6px'
            }}>
                <ArrowUpward style={{fontSize:'20px'}} className='my-auto' />
            2.4%
            </Typography>
            <Typography variant="body2" sx={{ 
            fontSize: '14px',
            color: '#666'
            }}>
            vs 119.69 last month
            </Typography>
        </div>
      </Box>

      {/* Chart */}
      <Box sx={{ height: '240px', p:2, pr:0 }} className='border-b-gray-300 border-b-1'>
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
              strokeDasharray="5 5" // This makes the line dotted
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>

      {/* Legend */}
      <Box sx={{ display: 'flex', gap: '16px', p:2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            width: '8px', 
            height: '8px', 
            backgroundColor: '#027056', 
            borderRadius: '50%',
            mr: 1 
          }} />
          <Typography variant="body2" sx={{ fontSize: '12px', color: '#666' }}>
            This Month
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            width: '8px', 
            height: '8px', 
            backgroundColor: '#E0663D', 
            borderRadius: '50%',
            mr: 1 
          }} />
          <Typography variant="body2" sx={{ fontSize: '12px', color: '#666' }}>
            Last Month
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SalesChartCard;