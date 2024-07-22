import { Area } from '@/types/area.type';
import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware"


interface AreaStore {
    areas: Area[];
    setAreas: (areas: Area[]) => void;
    removeArea: (areaName: string) => void;
    addArea: (area: Area) => void;
    getAreaPos: (id: string) => number;
}

export const useAreaStore = create<AreaStore>()(
    devtools(
        persist(
            (set, get) => ({
                areas: [],
                setAreas: (areas: Area[]) => set({ areas }),
                removeArea: (areaName: string) => {
                    set((state) => ({
                        areas: state.areas.filter((area) => area.name !== areaName),
                    }));
                },
                addArea: (area: Area) => {
                    set((state) => ({
                        areas: [...state.areas, area],
                    }));
                },
                getAreaPos: (id: string) => {
                    return get().areas.findIndex((area) => area.id === id);
                },
            }),

            { name: "areaStore" },
        ),
    ),
);