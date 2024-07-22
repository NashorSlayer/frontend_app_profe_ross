"use client"
import {
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import AreaCard from './AreaCard';
import { Area } from '@/types/area.type';

interface AreaPanelProps {
    areasList: Area[];
}

const AreasSorteable: React.FC<AreaPanelProps> = ({ areasList }) => {

    return (
        <SortableContext
            items={areasList}
            strategy={verticalListSortingStrategy}
        >
            {
                areasList.map((area) => (
                    <AreaCard
                        key={area.id}
                        area={area}
                        title={area.name}
                    />
                ))
            }

        </SortableContext>
    );
}
export default AreasSorteable;