
import { useDroppable } from '@dnd-kit/core'

interface props {

}


export function Droppable({ props }: { props: any }) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    })
    const style = {
        color: isOver ? 'green' : undefined
    }

    return <div ref={setNodeRef} style={style}>
        {props.children}
    </div>
}