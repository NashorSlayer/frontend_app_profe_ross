"use client"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createArea } from '@/app/api/areas/route';
import AlertDestructive from './AlertMessageDestructive';


type InputAreaText = {
    name: string;
}

const InputArea: React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputAreaText>();

    const onSubmit: SubmitHandler<InputAreaText> = async (data) => {
        const res = await createArea(data.name)
        console.log(res)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full max-w-sm items-center space-x-2'>

                {errors.name && <AlertDestructive
                    text={errors.name.message!.toString()}
                    ErrorMsg={"Area"}
                ></AlertDestructive>}
                <Input
                    type='text'
                    placeholder='Area Name'
                    {...register('name', { required: 'This field is required' })}
                />
                <Button
                    type='submit'
                >Add Area</Button>
            </div>
        </form>

    )
}

export default InputArea;