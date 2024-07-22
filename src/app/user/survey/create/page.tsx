"use client"
import AreasSorteable from "@/components/AreasSorteable";
import InputArea from "@/components/InputArea";
import { Button } from "@/components/ui/button";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
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
import { getAreas } from "@/app/api/areas/route";
import { useForm, SubmitHandler } from "react-hook-form";
import { AreaInput } from "@/types/area.type";

const CreateSurveyPage = () => {
    useEffect(() => {
        getAreasFromBack();
    }, [])

    const { areas, } = useAreaStore(
        (state) => ({
            areas: state.areas
        }), shallow);

    const { setAreas, getAreaPos } = useAreaStore();

    const getAreasFromBack = async () => {
        const res = await getAreas();
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
        <ResizablePanelGroup
            className="justify-center rounded-lg border"
            direction="horizontal">
            <ResizablePanel
                className="flex-col justify-center "
                defaultSize={30}
            >
                <Button
                    onClick={handleSave}
                    variant="outline"
                    className=""
                >Save</Button>
                <Button
                    variant="secondary"
                    onClick={handleSave}
                    className=""
                >Preview</Button>
                <InputArea />
            </ResizablePanel>
            <ResizableHandle
                withHandle={false}
            />
            <ResizablePanel
                className="items-center justify-center rounded-lg border"
                defaultSize={50}
            >
                <DndContext
                    sensors={sensors}
                    onDragEnd={handleDragEnd}
                    collisionDetection={closestCorners}
                >
                    <AreasSorteable areasList={areas} />
                </DndContext>
            </ResizablePanel>
            <ResizableHandle
                withHandle={false} />
            <ResizablePanel
                defaultSize={20}
                className="flex justify-center"
            >
                <Button
                    onClick={handleSave}
                    className=""
                >Enable Survey</Button>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
};

export default CreateSurveyPage;