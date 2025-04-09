'use client'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react';

const companies = [
    { companyName: 'Blinkit', value: 'blinkit', icon: '/blinkit.svg' },
    { companyName: 'Zepto', value: 'zepto', icon: '/zepto.png' },
    { companyName: 'Instamart', value: 'instamart', icon: '/instamart.png' },
]

const CompaniesToggle = () => {
    const [alignment, setAlignment] = useState('blinkit')
    return (
        <div className='p-1 bg-white rounded-xl w-fit m-3 border border-[#d1d5dc]'>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={(e, newAlignment) => { setAlignment(newAlignment)}}
                aria-label="Platform"
                className="flex flex-wrap gap-4 flex-row"
                sx={{
                    "& .MuiToggleButtonGroup-grouped": { border: '0px', color: 'black', textTransform: 'capitalize', padding: '4px 11px' },
                    "& .MuiToggleButton-root.Mui-selected": { backgroundColor: '#DFEAE8', color:'#027056', borderRadius:'8px' }
                }}
                style={{flexWrap:'wrap'}}
            >
                {companies?.map((company) => (
                    <ToggleButton value={company?.value} className='flex flex-row gap-2'>
                        <Image src={company?.icon} height={18} width={18} alt={company?.companyName} />
                        <p className={alignment === company?.value ? 'text-[027056]' : 'text-gray-400'}>{company?.companyName}</p>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export default CompaniesToggle;