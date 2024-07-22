import React from 'react'
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
import { IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteArea } from '@/app/api/areas/route'
import { toast } from "@/components/ui/use-toast";
import { useState } from "react"


export function DeleteAreaButon({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        setLoading(true);
        await deleteArea(id)
            .then((res) => {
                if (res?.status === 200) {
                    toast({
                        title: "Success 💩",
                        description: "Area Deleted"
                    })
                } else {
                    toast({
                        variant: "destructive",
                        title: "Error",
                        description: "Failed to delete area"
                    })
                    setLoading(false);
                }

            })
            .catch((error) => {
                toast({
                    variant: "destructive",
                    title: "Error 🚨",
                    description: error.message
                })
                setLoading(false);
            })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Tooltip title="Delete" >
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Area</DialogTitle>
                    <DialogDescription>
                        Area you Sure you want to delete this area?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        type="submit"
                        disabled={loading}
                        variant={"destructive"}
                        onClick={handleSubmit}
                    >Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}