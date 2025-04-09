'use client'
import React, { useState } from 'react';
import { CalendarMonth, ExpandMore } from '@mui/icons-material';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Popover from '@mui/material/Popover';
import { format } from 'date-fns';

const DateRangeSelector = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState([
        new Date(2024, 7, 1), // Aug 1, 2024
        new Date(2024, 7, 3)  // Aug 3, 2024
    ]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const formatDate = (date) => {
        return format(date, 'MMM dd, yyyy');
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div 
                className="flex items-center gap-2 px-4 py-1.5 border border-[#d1d5dc] rounded-lg bg-white max-w-[300px] cursor-pointer shadow hover:border-blue-500"
                onClick={handleClick}
            >
                <CalendarMonth className="text-gray-500 text-lg" />
                <span className="text-sm font-medium text-gray-900 flex-grow">
                    {value[0] && value[1] 
                        ? `${formatDate(value[0])} - ${formatDate(value[1])}` 
                        : 'Select date range'}
                </span>
                <ExpandMore className="text-gray-500" />
            </div>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <div className="p-2">
                    <DateRangePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                            handleClose();
                        }}
                        calendars={1}
                    />
                </div>
            </Popover>
        </LocalizationProvider>
    );
}

export default DateRangeSelector;