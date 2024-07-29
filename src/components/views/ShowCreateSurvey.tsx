"use client"
import { Button } from '../ui/button'
import AddIcon from '@mui/icons-material/Add'
import { Area, Survey } from '@/types/types'
import { ISurveyForm } from '@/interface/survey.interface'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from '../ui/use-toast'
import { CreateSurvey } from '@/app/api/survey/route'


interface ShowCreateSurveyProps {
    areas: Area[]
}

const todayDate = new Date().toISOString().split('T')[0]

const ShowCreateSurvey: React.FC<ShowCreateSurveyProps> = ({ areas }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<ISurveyForm>();

    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<ISurveyForm> = async (data) => {
        toast({
            variant: "default",
            title: "Loading...",
            description: "Please wait while we create your survey"
        })
        setLoading(true);


        //verify time_range end <= time_range_start
        if (data.time_range_end <= data.time_range_start) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Time end must be greater than time start"
            })
        }
        //await CreateSurvey()



        setLoading(false);


    }


    return (
        <section className=" bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    SurveyApp
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Survey Create
                        </h1>
                        <form className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label
                                    htmlFor="Title"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Title</label>
                                <input
                                    {...register("title", { required: true })}
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Survey graduated students"
                                    required={true} />
                            </div>
                            <div>
                                <label
                                    htmlFor="Description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Description</label>
                                <input
                                    {...register("description", { required: true })}
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="a brief about your survey"
                                    required={true} />
                            </div>
                            <div>
                                <label className='text-2xl'>Time Start:</label>
                                {errors.time_range_start &&
                                    <span className="text-red-500">Time start must be greater than today</span>}
                                <Input
                                    {...register("time_range_start",
                                        {
                                            required: true,
                                            validate: (value) => value > todayDate,
                                        })}
                                    type="date"
                                />
                            </div>
                            <div>
                                <label className='text-2xl'>Time End:</label>
                                <Input
                                    {...register("time_range_end",
                                        {
                                            required: true,
                                        })}
                                    type="date"
                                />
                            </div>
                            <Button
                                disabled={loading}
                                type="submit"
                            >
                                Create
                                <AddIcon />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCreateSurvey


{/*
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
                    <AreasSelectSurvey areas={areas} />
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
            </div >
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
        </div >
    */}