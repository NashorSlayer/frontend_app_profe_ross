"use client"
import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card';
import { useSortable } from '@dnd-kit/sortable';
import { Area } from '@/types/area.type';
import { CSS } from '@dnd-kit/utilities';
import { useStore } from 'zustand';


interface AreaCardProps {
    title: string;
    area: Area;
}

const AreaCard: React.FC<AreaCardProps> = ({ title, area }) => {

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
        <Card
            style={style}
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            className='flex justify-center'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
        </Card>
    )
}

export default AreaCard;