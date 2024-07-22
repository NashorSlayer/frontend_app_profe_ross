
export const urlBackend = `${process.env.NEXT_PUBLIC_BACKEND_URL}`

export enum HTTPMETHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export enum AreaBackendPaths {
    CREATE = 'area',
    DELETE = 'area/',
    UPDATE = 'area/',
    GET = 'area/',
    GET_ALL = 'area',
}

export enum AuthBackendPaths {
    LOGIN = 'auth/signIn',
    REGISTER = 'register/signUp',
    LOGOUT = 'auth/signOut',
    PROFILE = 'auth/profile',
}

export enum UserBackendPaths {
    CREATE = 'user',
    DELETE = 'user/',
    UPDATE = 'user/',
    GET = 'user/',
    GET_ALL = 'user',
}

export enum SurveyBackendPaths {
    CREATE = 'survey',
    DELETE = 'survey/',
    UPDATE = 'survey/',
    GET = 'survey/',
    GET_ALL = 'survey',
}