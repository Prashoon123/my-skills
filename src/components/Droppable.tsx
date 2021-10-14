import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  children: ReactNode;
  id: string;
}

interface Style {
  color?: string;
  height?: number;
  borderColor?: string;
}

function Droppable(props: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style: Style = {
    color: isOver ? "green" : undefined,
    height: isOver ? 140 : undefined,
    borderColor: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="app__dropArea">
      {props.children}
    </div>
  );
}

export default Droppable;
