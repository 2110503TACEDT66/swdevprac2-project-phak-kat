'use client';
import React, { useState } from 'react';

export default function LogInTextField({id, label, pText, disable, type, value, }:
    {id: string ,label: string, pText: string, disable: boolean, type: string, value: string, }) {
        const [textValue, setTextValue] = useState(value);
        return (
            <div className="w-full">
                <label htmlFor={id} 
                className="block mb-1 
                text-md font-medium text-neutral-800 font-sans">
                    {label}
                </label>
                <input type={type} 
                id={id}
                placeholder={pText}
                className="bg-white border border-gray-300 
                text-neutral-900 text-sm font-sans
                rounded-md block w-full p-2.5
                disabled:bg-neutral-100"
                disabled={disable}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                />
            </div>
        );
}