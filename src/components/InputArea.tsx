"use client"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createArea } from '@/app/api/areas/route';
import AlertDestructive from './AlertMessageDestructive';
import { Box, TextField } from '@mui/material';


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
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>

    )
}

export default InputArea;