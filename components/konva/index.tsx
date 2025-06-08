"use client";

import { Property } from "@/components/konva/property";
import { Sidebar } from "@/components/konva/sidebar";
import { Stage } from "@/components/konva/stage";

export function Konva() {
  return (
    <div className="w-full h-full bg-gray-200 flex gap-2">
      <Sidebar />
      <div className="relative w-full h-full">
        <Stage />
        <Property />
      </div>
    </div>
  );
}
