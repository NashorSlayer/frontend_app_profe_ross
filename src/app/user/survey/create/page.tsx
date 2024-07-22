"use client"
import AreasSorteable from "@/components/AreasSorteable";
import InputArea from "@/components/InputArea";
import { Button } from "@/components/ui/button";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Input } from "@/components/ui/input"
import { useAreaStore } from "@/store/areaStore";
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    closestCorners,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { fetchAreas } from "@/app/api/areas/route";
import { CreateAreaButton } from "@/components/ButtonsActions";
import { PlusIcon } from "lucide-react";
import AreaCard from "@/components/AreaCard";


const area = {
    id: '1',
    name: 'Area 1',
}


const CreateSurveyPage = () => {
    const { areas, } = useAreaStore(
        (state) => ({
            areas: state.areas
        }), shallow);

    const { setAreas, getAreaPos } = useAreaStore();

    const getAreasFromBack = async () => {
        const res = await fetchAreas();
        setAreas(res);
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        {
            const oldIndex = getAreaPos(active.id);
            const newIndex = getAreaPos(over.id);
            return arrayMove(areas, oldIndex, newIndex)
        }
    }

    const handleSave = () => {

    };

    return (
        <div className="w-screen h-screen">
            <div className="flex h-3/4">
                <div className="flex flex-col w-1/3">
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                    >
                        Save
                    </Button>
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                    >
                        Preview
                    </Button>
                </div>
                <div className="flex flex-col w-1/3">
                    <div className="flex">
                        <Input
                            type="text"
                            placeholder="Enter the title of your survey"
                        />
                        <Button>
                            Title
                            <PlusIcon />
                        </Button>
                    </div>
                    <div className="">
                        <AreaCard
                            area={area}
                        />
                    </div>
                </div>
                <div className="w-1/3 mx-10">
                    <Button
                        size={"lg"}
                        className=" border"
                        variant={"default"}
                    >
                        Enable
                    </Button>
                </div>
            </div>
            <div className="flex h-1/4 space-x-96">
                <Input
                    placeholder="enter a brief description about your survey "
                    className="w-1/3 ml-10"
                    maxLength={100}
                    minLength={5}
                />
                <Input
                    placeholder="Enter time (must be number of month/year) or maybe enter date"
                    className="w-1/3 ml-10"
                    maxLength={100}
                    minLength={5}
                />
            </div>
        </div>

    )
};

export default CreateSurveyPage;


