'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ExpandLess, ExpandMore, Collections, Home, LiveTv, ChevronRight, UnfoldMore, KeyboardDoubleArrowLeft, HelpOutline, Settings, PeopleOutline } from '@mui/icons-material';
import Image from 'next/image';

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

const settingItems = [
    {
        title: 'Help',
        icon: <HelpOutline sx={{ fontSize: '18px' }} />
    },
    {
        title: 'Settings',
        icon: <Settings sx={{ fontSize: '18px' }} />
    }
];

const brandsNavbar = [ 
    { icon: '/perfora.png', name: 'Perfora', borderColor:'#139C53' },
    { icon: '/mamaearth.png', name: 'Mamaearth', borderColor:'lightgray' },
    { icon: '/boat.jpg', name: 'Boat' }
]

export default function Navbar() {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openItems, setOpenItems] = useState({});

    const handleItemClick = (segment, hasChildren) => {
        if (hasChildren) {
            setOpenItems((prev) => ({
                ...prev,
                [segment]: !prev[segment],
            }));
        } else {
            router.push(`/`);
            setMobileOpen(false);
        }
    };

    return (
        <div className="h-full flex flex-row bg-white">
            <div className='h-full flex flex-col justify-between w-[17%] py-4 px-2'>
                <div className='flex flex-col gap-2'>
                    {brandsNavbar?.map((brand) => (
                        <Image
                            key={brand?.icon}
                            src={brand?.icon}
                            alt={brand?.name}
                            height={70}
                            width={70}
                            style={{ borderColor: brand?.borderColor }}
                            className='rounded-lg border-2'
                        />
                    ))}
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <PeopleOutline />
                    <p className='bg-[#9106FF] p-1 rounded-full text-xs text-white'>SS</p>
                </div>
            </div>
            <div className='h-full flex flex-col justify-between bg-[#F8F8F8] w-[81%]'>
                {/* Brand section */}
                <div className='flex items-center gap-2 p-4 bg-white'>
                    <div className='flex items-center justify-between gap-2 border border-gray-300 p-1 rounded-lg w-[90%]'>
                        <div className='flex items-center gap-2'>
                            <p className='bg-[#309E96] p-1 rounded-md text-xs text-white'>SS</p>
                            <p className='text-sm font-semibold'>Test_brand</p>
                        </div>
                        <UnfoldMore style={{fontSize:'20px'}} />
                    </div>
                    <KeyboardDoubleArrowLeft style={{fontSize:'18px',color:'#027056'}} />
                </div>

                {/* Main navigation items */}
                <div className='flex-1 overflow-y-auto p-2'>
                    {navbarItems?.map((item) => (
                        <div key={item.segment}>
                            <div
                                onClick={() => handleItemClick(item.segment, !!item.children)}
                                className="flex flex-row justify-between items-center cursor-pointer p-2 rounded hover:bg-[#DFEAE8] hover:text-[#027056]"
                            >
                                <div className='flex items-center gap-2'>
                                    {item?.icon}
                                    <p className='text-xs'>{item.title}</p>
                                </div>
                                {item.children && (
                                    <span className="text-sm">
                                        {openItems[item.segment] ? <ExpandMore /> : <ChevronRight />}
                                    </span>
                                )}
                            </div>
                            {item.children && openItems[item.segment] && (
                                <div className="ml-8 mt-1 space-y-1">
                                    {item.children.map((child) => (
                                        <div
                                            key={child.segment}
                                            onClick={() => handleItemClick(child.segment, false)}
                                            className="cursor-pointer text-xs p-2 rounded hover:bg-[#DFEAE8] hover:text-[#027056]"
                                        >
                                            {child.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom settings items */}
                <div className='p-2'>
                    {settingItems?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleItemClick(item.segment, !!item.children)}
                            className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-[#DFEAE8] hover:text-[#027056]"
                        >
                            {item?.icon}
                            <p className='text-xs'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}