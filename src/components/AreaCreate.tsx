"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { IconButton, Tooltip } from '@mui/material'
import AddBox from '@mui/icons-material/AddBox'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Area } from '@/types/types'
import { createArea } from '@/app/api/areas/route'
import { toast } from '@/components/ui/use-toast'

const AreaCreate = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Area>();

    const onSubmit: SubmitHandler<Area> = async (data) => {
        setLoading(true)
        await createArea(data.name)
            .then((res) => {
                if (res?.status === 201) {
                    toast({
                        title: "Created ➕",
                        description: "Area was Created"
                    })
                } else if (res?.status === 400) {
                    toast({
                        variant: "destructive",
                        title: "Error 💥",
                        description: "Area Already Exists "
                    })
                } else {
                    toast({
                        variant: "destructive",
                        title: "Error 🚨 ",
                        description: "Failed to create Area"
                    })
                }
                setLoading(false)
            })
    }
    return (
        <Dialog>
            <div className='flex justify-between w-full border bg-white text-black px-3'
            >
                <h1 className='font-bold py-3 text-2xl  '>Area List</h1>
                <DialogTrigger asChild>
                    <Tooltip className='rounded gap-2' title="Add Area" >
                        <IconButton >
                            <p> Add Area</p>
                            <AddBox />
                        </IconButton>
                    </Tooltip>
                </DialogTrigger>
            </div>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <DialogHeader>
                        <DialogTitle>New Area</DialogTitle>
                        <DialogDescription>
                            Create a new Area.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                {...register("name", { required: true, maxLength: 30 })}
                                id="name"
                                defaultValue={""}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={loading}
                        >Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}

export default AreaCreate