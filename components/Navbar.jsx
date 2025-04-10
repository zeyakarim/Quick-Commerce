'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ExpandLess, ExpandMore, Collections, Home, LiveTv, ChevronRight, UnfoldMore, KeyboardDoubleArrowLeft } from '@mui/icons-material';

const navbarItems = [
    {
        segment: 'overview',
        title: 'Overview',
        icon: <Home style={{fontSize:'20px'}} />
    },
    {
        segment: 'channels',
        title: 'Channels',
        icon: <LiveTv style={{fontSize:'20px'}} />,
        children: [
            { segment: 'metaads', title: 'Meta Ads' },
            { segment: 'googleads', title: 'Google Ads' },
            { segment: 'quickcommerce', title: 'Quick Commerce' },
        ],
    },
    {
        segment: 'creatives',
        title: 'Creatives',
        icon: <Collections style={{fontSize:'20px'}} />
    },
];

export default function Navbar() {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openItems, setOpenItems] = useState({});

    const toggleMobile = () => setMobileOpen(!mobileOpen);

    const handleItemClick = (segment, hasChildren) => {
        if (hasChildren) {
            setOpenItems((prev) => ({
                ...prev,
                [segment]: !prev[segment],
            }));
        } else {
            router.push(`/${segment}`);
            setMobileOpen(false); // close drawer on mobile
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed z-40 flex flex-col gap-2 w-full h-full p-4 transform transition-transform duration-300 ease-in-out 
                ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} 
                sm:translate-x-0 sm:static`}
            >
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-between gap-2 border-gray-300 border-1 p-1 rounded-lg w-[90%]'>
                        <div className='flex items-center gap-2'>
                            <p className='bg-[#309E96] p-1 rounded-md text-xs text-white'>SS</p>
                            <p className='text-sm font-semibold'>Test_brand</p>
                        </div>
                        <UnfoldMore style={{fontSize:'20px'}} />
                    </div>
                    <KeyboardDoubleArrowLeft style={{fontSize:'20px'}} />
                </div>
                <div className='bg-[#F8F8F8] h-full'>
                    {navbarItems?.map((item) => (
                        <div key={item.segment} >
                            <div
                                onClick={() => handleItemClick(item.segment, !!item.children)}
                                className="flex flex-row justify-between items-center cursor-pointer p-2 rounded hover:bg-[#DFEAE8] hover:text-[#027056]"
                            >
                                <div className='flex flex-row items-center gap-2'>
                                    <p>{item?.icon}</p>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                                {item.children && (
                                    <span className="text-sm">
                                        {openItems[item.segment] ? <ExpandMore /> : <ChevronRight /> }
                                    </span>
                                )}
                            </div>
                            {item.children && openItems[item.segment] && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {item.children.map((child) => (
                                        <div
                                            key={child.segment}
                                            onClick={() => handleItemClick(child.segment, false)}
                                            className="cursor-pointer text-sm p-2 rounded hover:bg-[#DFEAE8] hover:text-[#027056]"
                                        >
                                            {child.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
