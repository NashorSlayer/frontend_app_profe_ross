"use client"
import React from 'react'
import { Area } from '@/types/types';
import { DeleteAreaButon } from './AreaDelete';
import { AreaEdit } from './AreaEdit';


interface AreaCardProps {
    area: Area;
}

const AreaCard: React.FC<AreaCardProps> = ({ area }) => {

    return (
        <div
            className='w-2/3 bg-slate-400 text-white flex items-center 
            justify-between rounded-lg shadow-md my-3 mx-auto px-3 
            dark:bg-white dark:text-black scale-90'
        >
            <div className='p-3'>
                <h1>{area.name}</h1>
            </div>
            <div className='flex justify-end gap-2 '>
                <AreaEdit area={area} />
                <DeleteAreaButon id={area.id} />
            </div>
        </div>

    )
}

export default AreaCard;