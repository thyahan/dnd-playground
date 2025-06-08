"use client";

import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";

type Props = {
  id: string;
  children: React.ReactNode;
};

export function Droppable({ id, children }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={cn("bg-white", {
        "bg-green-500 opacity-20": isOver,
      })}>
      {children}
    </div>
  );
}
