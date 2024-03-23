'use client'
import {DatePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

export default function DateReserve({lable}: {lable:string}) {
    return (
        <div className='w-full'>
            <label
                className="block mb-1 
                text-sm font-medium text-neutral-800 font-sans">
                    {lable}
                </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                 label={lable}
                slotProps={{ textField: { size: 'small' } }}
                />
            </LocalizationProvider>
        </div>
    );
}