
export enum HTTPMETHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
}


export enum BASE_URL {
    LOCAL = 'http://localhost:3000/',
    PRODUCTION = '',
}

export enum AreaPaths {
    CREATE = 'area',
    DELETE = 'area/',
    UPDATE = 'area/',
    GET = 'area/',
    GET_ALL = 'area',
}

export enum AuthPaths {
    LOGIN = 'auth/SignIn',
    REGISTER = 'register/SignUp',
    LOGOUT = 'auth/SignOut',
    PROFILE = 'auth/Profile',
}

export enum UserPaths {
    CREATE = 'user',
    DELETE = 'user/',
    UPDATE = 'user/',
    GET = 'user/',
    GET_ALL = 'user',
}

export enum SurveyPaths {
    CREATE = 'survey',
    DELETE = 'survey/',
    UPDATE = 'survey/',
    GET = 'survey/',
    GET_ALL = 'survey',
}