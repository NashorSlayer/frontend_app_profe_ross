
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
    time_range_start: string
    time_range_end: string
    answer_time_start: string
    answer_time_end: string
    disabled: boolean
    user: User
    areas?: Area[]
}