import AreasPanel from "@/components/AreasPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateSurveyPage = () => {

    const handleSave = () => {

    };

    const handlePreview = () => {

    };

    const handleEnable = () => {

    };

    return (
        <>
            <div className="flex bg-red-500 w-full h-screen">
                <div className="flex flex-col item-center w-1/4 bg-blue-500 h-full gap-4 p-2">
                    <Button variant="default">Save</Button>
                    <Button variant="secondary">Preview</Button>
                </div>
                <div className=" justify-center w-1/2 bg-pink-500 h-full">
                    <Input placeholder="Input title Survey" />
                    <AreasPanel />

                </div>
                <div className="flex justify-center w-1/4 bg-blue-500 h-full">
                    <Button>Enable Survey</Button>
                </div>

            </div>
        </>
    )
};

export default CreateSurveyPage;