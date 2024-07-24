"use client"
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import Addcircle from '@mui/icons-material/Addcircle'
import { Area, Survey } from '@/types/types'
import CreateAreasSurvey from '@/components/CreateAreasSurvey'
import { ISurveyInput } from '@/interface/survey.interface'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../ui/input'


interface ShowCreateSurveyProps {
    areas: Area[]
}

const ShowCreateSurvey: React.FC<ShowCreateSurveyProps> = ({ areas }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<ISurveyInput>();


    const onSubmit: SubmitHandler<ISurveyInput> = async (data) => {
        console.log(data)
    }


    return (
        <div className="w-screen h-screen">
            <div className="flex h-3/4">
                <div className="flex flex-col justify-center items-center w-1/3">
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                        type='submit'
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
                {/*div con listado de AREAS */}
                <div className="flex-col w-1/3">
                    <div className="flex justify-between mt-5 gap-2">
                        <div className='flex gap-3 w-3/4'>
                            <label className='text-2xl'>Title:</label>
                            <Input
                                className="w-2/4"
                                type="text"
                                placeholder="Enter the title of your survey"
                            />
                        </div>
                        <Button
                            className='w-1/4 justify-between'>
                            Save Title
                            <Addcircle />
                        </Button>
                    </div>
                    <CreateAreasSurvey areas={areas} />
                </div>
                <div className="flex items-center justify-center w-1/3">
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                    >
                        Enable
                    </Button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10 h-1/4 " >
                <div className='w-1/2 ml-2'>
                    <label className="text-2xl">Description: </label>
                    <Textarea
                        placeholder="enter a brief description about your survey "
                        className=""
                        maxLength={100}
                        minLength={5}
                    />
                </div>
                <div className='flex justify-between w-1/2 mx-5'>
                    <div>

                        <label className='text-2xl'>Time Start:</label>
                        <Input
                            type="date"
                        />
                    </div>
                    <div>
                        <label className='text-2xl'>Time End:</label>
                        <Input
                            type="date"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShowCreateSurvey