"use client"
import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { Area } from '@/types/area.type';
import { CSS } from '@dnd-kit/utilities';
import { DeleteAreaButon } from './AreaDelete';
import { AreaEdit } from './AreaEdit';


interface AreaCardProps {
    area: Area;
}

const AreaCard: React.FC<AreaCardProps> = ({ area }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: area.id });


    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

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


{/* <div
    style={style}
    {...attributes}
    {...listeners}
    ref={setNodeRef}
    className='w-2/3 bg-slate-400 text-white flex items-center 
justify-between rounded-lg shadow-md my-3 mx-auto px-3 
dark:bg-white dark:text-black scale-90'
>
    <div className='p-3'>
        <h1>{area.name}</h1>
    </div>
    <div className='flex justify-end gap-2 '>
        <UpdateAreaButon id={area.id} />
        <DeleteAreaButon id={area.id} />
    </div>
</div> */}

export default AreaCard;