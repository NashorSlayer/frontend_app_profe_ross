import { ISignUpForm } from "@/interface/area.interface";
import { urlBackend, UserBackendPaths, HTTPMETHODS } from "@/utils/constants";

export async function signUpFetch(data: ISignUpForm) {
    try {
        const res = await fetch(urlBackend + UserBackendPaths.CREATE, {
            method: HTTPMETHODS.POST,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password
            })
        })
        return {
            status: res.status,
            body: await res.json()
        }
    } catch (error) {
        return {
            message: "Failed to fetch areas"
        }
    }
}