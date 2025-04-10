import { ArrowUpward, ExpandMore } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import Image from 'next/image';
import React, { Fragment } from 'react';

const TrendIndicator = ({ value }) => (
  <span className="inline-flex items-center text-green-600 text-sm">
    <ArrowUpward sx={{ fontSize: '14px', marginRight: '2px' }} />
    {value}
  </span>
);

const tableData = [
  {
    sku: 'Protein Bar 100g',
    sales: '₹93,132.12',
    outOfStock: '1.68%',
    totalInventory: '931.9',
    avgRank: '3.2',
    visibility: '12,303',
    impressions: '25,005',
    checked: true
  },
  {
    sku: 'Choco Bar 100g',
    isParent: true,
    checked: true,
    children: [
      {
        sales: '₹8,526.32',
        outOfStock: '6.79%',
        totalInventory: '679',
        avgRank: '7',
        visibility: '3,005',
        impressions: '4,231'
      },
      {
        sales: '₹7,012.72',
        outOfStock: '3.28%',
        totalInventory: '328',
        avgRank: '4',
        visibility: '2,960',
        impressions: '3,800'
      },
    ]
  },
  {
    sku: 'SKU 3',
    sales: '₹931.3',
    outOfStock: '1.68%',
    totalInventory: '931.9',
    avgRank: '11',
    visibility: '1,931.9',
    impressions: '₹931.9',
    checked: false
  },
  {
    sku: 'SKU 4',
    sales: '₹0',
    outOfStock: '0%',
    totalInventory: '0',
    avgRank: '0',
    visibility: '₹0',
    impressions: '₹0',
    checked: false
  },
  {
    sku: 'Total',
    sales: '₹2,93,132.12',
    outOfStock: '16%',
    totalInventory: '2,931',
    avgRank: '8.3',
    visibility: '61,985',
    impressions: '₹2,61,768',
    isTotal: true,
    checked: false
  }
];

const AvailabilityTable = ({ title }) => {
    return (
        <div>
            <div className='flex flex-row justify-between py-4 items-center'>
                <div>
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-gray-400 text-sm'>Analytics for all your SKUs</p>
                </div>
                <div>
                    <button type='button' className='bg-[#027056] py-2 px-3 rounded-lg text-white text-sm'>
                        Filters(1)
                        <ExpandMore className="text-white ml-1" />
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200">
                        <th rowSpan={2} className="text-left p-[14px] text-[15px] font-semibold text-[#013025] border-r border-gray-200">
                            <div className='flex flex-row gap-2'>
                            <Image
                                src='/line-chart.svg'
                                alt='line-chart'
                                width={16}
                                height={16}
                            />
                            <p>SKU Name</p>
                            </div>
                        </th>
                        <th colSpan={3} className="text-center p-[14px] text-[15px] font-semibold text-[#013025] border-r border-gray-200">
                            Availability
                        </th>
                        <th colSpan={3} className="text-center p-[14px] text-[15px] font-semibold text-[#013025]">
                            Visibility
                        </th>
                        </tr>
                        
                        <tr className="border-b border-gray-200">
                        <th className="p-[14px] text-[15px] font-semibold text-[#013025] text-center">
                            Sales
                            <ExpandMore className="text-[#013025] ml-2" fontSize='small' />
                        </th>
                        <th className="p-[14px] text-[15px] font-semibold text-[#013025] text-center">
                            Out of Stock
                            <ExpandMore className="text-[#013025] ml-2" fontSize='small' />
                        </th>
                        <th className="p-[14px] text-[15px] font-semibold text-[#013025] border-r border-gray-200 text-center">
                            Total Inventory
                            <ExpandMore className="text-[#013025] ml-2" fontSize='small' />
                        </th>
                        <th className="p-[14px] text-[15px] font-semibold text-[#013025] text-center">
                            Average Rank
                            <ExpandMore className="text-[#013025] ml-2" fontSize='small' />
                        </th>
                        <th className="p-[14px] text-[15px] font-semibold text-[#013025] text-center">
                            Est. Traffic
                            <ExpandMore className="text-[#013025] ml-2" fontSize='small' />
                        </th>
                        <th className="p-[14px] text-[15px] font-semibold text-[#013025] text-center">
                            Est. Impressions
                            <ExpandMore className="text-[#013025] ml-2" fontSize='small' />
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                        <Fragment key={index}>
                            {/* Parent Row */}
                            <tr className={`${row.isTotal ? 'bg-gray-50 font-semibold' : ''} border-b border-gray-200`}>
                            <td rowSpan={row?.isParent ? 4 : 1} className={`p-[14px] whitespace-nowrap text-[15px] font-semibold text-[#0A090B] border-r border-gray-200 ${row?.sku !== 'Total' && 'underline'}`}>
                                <div className='flex flex-row gap-2 items-center'>
                                    {row?.sku !== 'Total' && (
                                        <Checkbox 
                                            defaultChecked={row?.checked} 
                                            style={{padding:'0px'}} 
                                            sx={{ '&.Mui-checked': { color: '#027056' }}} 
                                        />
                                    )}
                                    <p>{row.sku}</p>
                                </div>
                            </td>
                            
                            {/* Render regular row if not parent */}
                            {!row.isParent && !row.isTotal && (
                                <>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                    {row.sales}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                    {row.outOfStock}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] border-r border-gray-200 text-center">
                                    {row.totalInventory}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                    {row.avgRank}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                    {row.visibility}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                    {row.impressions}
                                </td>
                                </>
                            )}
                            
                            {/* Render total row */}
                            {row.isTotal && (
                                <>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#0A090B] text-center">
                                    {row.sales}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#0A090B] text-center">
                                    {row.outOfStock}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#0A090B] border-r border-gray-200 text-center">
                                    {row.totalInventory}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#0A090B] text-center">
                                    {row.avgRank}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#0A090B] text-center">
                                    {row.visibility}
                                </td>
                                <td className="p-[14px] whitespace-nowrap text-[15px] text-[#0A090B] text-center">
                                    {row.impressions}
                                </td>
                                </>
                            )}
                            </tr>

                            {/* Child Rows */}
                            {row.isParent && row.children?.map((child, childIndex) => (
                                <tr key={`child-${childIndex}`}>
                                    <td className="py-1 px-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                        {child.sales}
                                    </td>
                                    <td className="py-1 px-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                        {child.outOfStock}
                                    </td>
                                    <td className="py-1 px-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] border-r border-gray-200 text-center">
                                        {child.totalInventory}
                                    </td>
                                    <td className="py-1 px-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                        {child.avgRank}
                                    </td>
                                    <td className="py-1 px-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                        {child.visibility}
                                    </td>
                                    <td className="py-1 px-[14px] whitespace-nowrap text-[15px] text-[#4E5E5A] text-center">
                                        {child.impressions}
                                    </td>
                                </tr>
                            ))}

                            {/* Trend Row for Parent */}
                            {row.isParent && (
                            <tr className="border-b border-gray-200">
                                {/* <td className="p-[14px] border-r border-gray-200"></td> */}
                                <td className="py-1 px-[14px] whitespace-nowrap text-sm text-center">
                                <TrendIndicator value="2.4%" />
                                </td>
                                <td className="py-1 px-[14px] whitespace-nowrap text-sm text-center">
                                <TrendIndicator value="2.4%" />
                                </td>
                                <td className="py-1 px-[14px] whitespace-nowrap text-sm border-r border-gray-200 text-center">
                                -
                                </td>
                                <td className="py-1 px-[14px] whitespace-nowrap text-sm text-center">
                                <TrendIndicator value="2.4%" />
                                </td>
                                <td className="py-1 px-[14px] whitespace-nowrap text-sm text-center">
                                <TrendIndicator value="2.4%" />
                                </td>
                                <td className="py-1 px-[14px] whitespace-nowrap text-sm text-center">
                                <TrendIndicator value="2.4%" />
                                </td>
                            </tr>
                            )}
                        </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AvailabilityTable;