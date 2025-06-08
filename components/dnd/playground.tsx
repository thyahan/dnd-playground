"use client";

import { Content } from "@/components/dnd/content";
import { useDnDStore } from "@/components/dnd/dnd.store";
import { Sidebar } from "@/components/dnd/sidebar";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { uniqueId } from "lodash";

export default function Playground() {
  const { addItem } = useDnDStore();

  function handleDragEnd(event: DragEndEvent) {
    console.log(`dropped item ${event.active.id} into ${event.over?.id}`);

    addItem({
      id: uniqueId(),
      position: {
        x: 10,
        y: 10,
      },
    });
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row h-screen border border-red-500 gap-4">
        <Sidebar />
        <Content />
      </div>
    </DndContext>
  );
}
