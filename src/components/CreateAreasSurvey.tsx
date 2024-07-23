import AreaCard from '@/components/AreaCard';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Area } from '@/types/area.type';
import AreaCreate from './AreaCreate';

export default function CreateAreasSurvey({ areas }: { areas: Area[] }) {

    return (
        < div className='flex justify-center items-center h-1/2 mt-10 ' >
            <ScrollArea
                title='Areas'
                className='h-96 rounded-md border items-center justify-center'>
                <AreaCreate />
                <div>
                    {areas.map((area: Area) => {
                        return <AreaCard key={area.id} area={area} />
                    })}
                </div>
            </ScrollArea>
        </div >
    )
}