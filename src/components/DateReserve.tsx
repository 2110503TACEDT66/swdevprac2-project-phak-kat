'use client';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import React from 'react';
import { useState } from 'react';

export default function DateReserve({ label, onSelectDate }: { label: string; onSelectDate:Function }) {
    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
    console.log(`reserveDate: ${reserveDate}`);
    return (
        <div className="w-full">
            <label className="block mb-1 text-sm font-medium text-neutral-800 font-sans">{label}</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                slotProps={{ textField: { size: 'small' } }}
                value={reserveDate}
                onChange={(value) => { 
                    console.log(value); 
                    setReserveDate(value); 
                    onSelectDate(value);
            }}
            />
            </LocalizationProvider>
        </div>
    );
}
