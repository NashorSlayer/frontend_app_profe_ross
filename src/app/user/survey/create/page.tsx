import { fetchAreas } from "@/app/api/areas/route";
import ShowCreateSurvey from "@/components/views/ShowCreateSurvey";


const CreateSurveyPage = async () => {

    const areas = await fetchAreas();

    return (
        <ShowCreateSurvey areas={areas} />
    )
};

export default CreateSurveyPage;


