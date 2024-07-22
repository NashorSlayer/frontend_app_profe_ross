"use client"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ModeEdit from '@mui/icons-material/ModeEdit'
import { IconButton, Tooltip } from '@mui/material'
import { Area } from '@/types/area.type'
import { updateArea } from '@/app/api/areas/route'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from "@/components/ui/use-toast";
import { useState } from "react"

export function AreaEdit({ area }: {
    area: Area
}) {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Area>();

    const onSubmit: SubmitHandler<Area> = async (data) => {
        setLoading(true);
        await updateArea({ ...data, id: area.id })
            .then((res) => {
                if (res?.status === 200) {
                    toast({
                        title: "was changed 📝",
                        description: "Area Updated"
                    })
                } else {
                    toast({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to update area"
                    })
                }
            })
            .catch((error) => {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: error.message
                })
            })
        setLoading(false);
    }

    //TODO: Validate other symbols and numbers in the name
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Tooltip title="Edit" >
                    <IconButton>
                        <ModeEdit />
                    </IconButton>
                </Tooltip>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <DialogHeader>

                        <DialogTitle>Edit Area</DialogTitle>
                        <DialogDescription>
                            Change the name of the area here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">

                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                {...register("name", { required: true, maxLength: 15 })}
                                id="name"
                                defaultValue={area.name}
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
        </Dialog>
    )
}