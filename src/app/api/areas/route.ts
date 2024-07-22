import { AreaBackendPaths, HTTPMETHODS } from "@/utils/constants";

export const getAreas = async () => {
    const res = await fetch((`${process.env.NEXT_PUBLIC_BACKEND_URL}` + AreaBackendPaths.GET_ALL), {
        method: HTTPMETHODS.GET,
        headers: { "Content-Type": "application/json" }
    });
    if (res.status !== 200) throw new Error("Failed to fetch areas");
    return res.json();
}

export const createArea = async (name: string) => {
    const res = await fetch((`${process.env.NEXT_PUBLIC_BACKEND_URL}` + AreaBackendPaths.CREATE), {
        method: HTTPMETHODS.POST,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name
        })
    });
    if (res.status !== 201) throw new Error("Failed to create area");
    return res.json();
}

export const deleteArea = async (id: string) => {
    const res = await fetch((`${process.env.NEXT_PUBLIC_BACKEND_URL}` + AreaBackendPaths.DELETE + id), {
        method: HTTPMETHODS.DELETE,
        headers: { "Content-Type": "application/json" }
    });
    if (res.status !== 200) throw new Error("Failed to delete area");
    return res.json();
}