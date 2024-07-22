import React, { useActionState } from 'react'
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
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link'
import { deleteArea } from '@/app/api/areas/route'
import { Area } from '@/types/area.type'


function handleChange() {
    console.log('clicked')

}


export function CreateAreaButton() {
    return (
        <Link
            href={`/app/user/survey/create/area`}
            className="
            flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm 
            font-medium text-white transition-colors hover:bg-blue-500 
            focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Create Area</span>{' '}

        </Link>
    )
}

