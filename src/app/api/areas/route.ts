"use server"
import { Area } from "@/types/area.type";
import { AreaBackendPaths, HTTPMETHODS, urlBackend } from "@/utils/constants";
import { revalidatePath } from 'next/cache';



export const fetchAreas = async () => {
    try {
        const res = await fetch((`${urlBackend}` + AreaBackendPaths.GET_ALL), {
            method: HTTPMETHODS.GET,
            headers: { "Content-Type": "application/json" },
        })
        if (res.status !== 200) {
            return {
                message: "Failed to fetch areas"
            }

        }
        const areas = await res.json();
        return areas;
    } catch (error) {
        return {
            message: "Failed to fetch areas"
        }
    }
}

export const createArea = async (name: string) => {
    try {
        const res = await fetch((`${urlBackend}` + AreaBackendPaths.CREATE), {
            method: HTTPMETHODS.POST,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name
            })
        });
        revalidatePath("/user/survey/create");
        return {
            status: res.status,
            body: await res.json()
        }

    } catch (error) {
        return {
            message: "Failed to create area"
        }
    }
}
export async function updateArea(area: Area,) {
    const { id, name } = area
    try {
        const res = await fetch((`${urlBackend}` + AreaBackendPaths.UPDATE + id), {
            method: HTTPMETHODS.PATCH,

            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name
            })
        });
        revalidatePath("/user/profile");
        return {
            status: res.status,
            body: await res.json()
        };
    } catch (error) {
        return {
            message: "Failed to update area"
        }
    }
}
export const deleteArea = async (id: string) => {
    try {
        const res = await fetch((`${urlBackend}` + AreaBackendPaths.DELETE + id), {
            method: HTTPMETHODS.DELETE,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            })
        });
        revalidatePath("/user/profile");
        return {
            status: res.status,
            body: await res.json()
        };
    } catch (error) {
        return {
            message: "Failed to delete area"
        }
    }

}