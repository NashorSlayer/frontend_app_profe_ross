import { Survey } from "@/types/types";
import { SurveyBackendPaths, urlBackend, HTTPMETHODS } from "@/utils/constants";

export async function CreateSurvey(data: Survey) {
    try {

        const res = await fetch((`${urlBackend}` + SurveyBackendPaths.CREATE),
            {
                method: HTTPMETHODS.POST,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
        return {
            status: res.status,
            body: await res.json()
        }
    } catch (error) {
        return {
            message: "Failed to create survey"
        }
    }
}