import { Suspense } from 'react';
import CreateAreasSurvey from '@/components/CreateAreasSurvey';
import Loading from '../loading';
import { fetchAreas } from '@/app/api/areas/route';

const profilePage = async () => {

    const areas = await fetchAreas();
    console.log("🚀 ~ profilePage ~ areas:", areas)

    return (
        <Suspense fallback={<Loading />}>
            <CreateAreasSurvey areas={areas} />
        </Suspense>
    )

}

export default profilePage;