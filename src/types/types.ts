
export type Area = {
    id: string
    name: string
}

export type User = {
    id: string
    name: string
    email: string
}

export type Survey = {
    id: string
    title: string
    description: string
    time_range_start: Date
    time_range_end: Date
    answer_time_start: Date
    answer_time_end: Date
    disabled: boolean
    user: User
    areas: Area[]
}