import { fetchAreas } from "@/app/api/areas/route";
import AreasSearcher from "@/components/AreaSearcher";
import ShowCreateSurvey from "@/components/views/ShowCreateSurvey";


const CreateSurveyPage = async () => {

    const areas = await fetchAreas();

    return (
        //<AreasSearcher areas={areas} />
        <ShowCreateSurvey areas={areas} />
    )
};

export default CreateSurveyPage;


