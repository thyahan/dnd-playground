"use client";

import { useDraggable } from "@dnd-kit/core";
import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
};

export function Draggable({ children, id }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} className="cursor-pointer" {...listeners} {...attributes}>
      {children}
    </button>
  );
}
