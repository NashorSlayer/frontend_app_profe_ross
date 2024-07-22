import { Suspense } from 'react';
import CreateAreasSurvey from '@/components/CreateAreasSurvey';
import { fetchAreas } from '@/app/api/areas/route';
import Loading from '@/app/loading';

const profilePage = async () => {

    const areas = await fetchAreas();

    return (
        <Suspense fallback={<Loading />}>
            <CreateAreasSurvey areas={areas} />
        </Suspense>
    )

}

export default profilePage;