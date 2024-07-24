import AreaCard from '@/components/AreaCard';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Area } from '@/types/types';
import AreaCreate from './AreaCreate';

interface CreateAreasSurveyProps {
    areas: Area[]
}

const CreateAreasSurvey: React.FC<CreateAreasSurveyProps> = ({ areas }) => {

    return (
        < div className='flex flex-col rounded-md border-4 border-gray-200 
        justify-center items-center mt-5 '>
            <AreaCreate />
            <ScrollArea
                title='Areas'
                className='w-full h-96 items-center justify-center'
            >
                <div>
                    {Array.isArray(areas) ? (areas.map((area: Area) => {
                        return <AreaCard key={area.id} area={area} />
                    })) : (<div>Areas not Available</div>)}
                </div>
            </ScrollArea>
        </div >
    )
}

export default CreateAreasSurvey;