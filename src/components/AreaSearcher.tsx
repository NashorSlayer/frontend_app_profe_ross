"use client"
import * as React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Area } from '@/types/types';

interface AreasSearcherProps {
    areas: Area[]
}

const AreasSearcher: React.FC<AreasSearcherProps> = ({ areas }) => {

    const areasFormat = areas.map((area) => {
        return { label: area.name }
    })

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={areasFormat}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Areas" />}
        />
    );
}

export default AreasSearcher