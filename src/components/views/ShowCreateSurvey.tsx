import { Button } from '../ui/button'
import { Input } from '../ui/input'
import PlusOne from '@mui/icons-material/PlusOne'
import { Area } from '@/types/area.type'
import CreateAreasSurvey from '@/components/CreateAreasSurvey'


interface ShowCreateSurveyProps {
    areas: Area[]
}

const ShowCreateSurvey: React.FC<ShowCreateSurveyProps> = ({ areas }) => {

    return (
        <div className="w-screen h-screen">
            <div className="flex h-3/4">
                <div className="bg-yellow-300 flex flex-col w-1/3">
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                    >
                        Save
                    </Button>
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                    >
                        Preview
                    </Button>
                </div>
                <div className="bg-green-300 flex flex-col w-full">
                    <div className="flex bg-red-300">
                        <Input
                            className="w-2/3"
                            type="text"
                            placeholder="Enter the title of your survey"
                        />
                        {/* <Button>
                            Title
                            <PlusOne />
                        </Button> */}v
                    </div>
                    <CreateAreasSurvey areas={areas} />
                </div>
                <div className="bg-yellow-300  w-1/3 mx-10">
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                    >
                        Enable
                    </Button>
                </div>
            </div>
            <div className="flex h-1/4 space-x-96">
                <Input
                    placeholder="enter a brief description about your survey "
                    className="w-1/3 ml-10"
                    maxLength={100}
                    minLength={5}
                />
                <Input
                    placeholder="Enter time (must be number of month/year) or maybe enter date"
                    className="w-1/3 ml-10"
                    maxLength={100}
                    minLength={5}
                />
            </div>
        </div>
    )
}

export default ShowCreateSurvey