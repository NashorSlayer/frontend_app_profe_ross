import { User } from "@/types/types"

export interface ISurveyInput {
    title: string
    description: string
    time_range_start: Date
    time_range_end: Date
    answer_time_start: Date
    answer_time_end: Date
    disabled: boolean
    user: User
}