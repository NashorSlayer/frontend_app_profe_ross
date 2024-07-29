import { User } from "@/types/types"

//TODO: Verify if time_range_start is date or string ?
export interface ISurveyForm {
    title: string
    description: string
    time_range_start: string
    time_range_end: string
    answer_time_start: string
    answer_time_end: string
    disabled: boolean
    user: User
}

export interface ISurveyBackend {
    title: string
    description: string
    time_range_start: string
    time_range_end: string
    answer_time_start: string
    answer_time_end: string
    disabled: boolean
    user: User
}