import { Draggable } from "@/components/dnd/dragable";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-4 w-[400px] bg-gray-400 p-4">
      <p className="text-lg font-bold text-center">Items</p>
      <Draggable id="item-1">
        <p className="p-4 bg-gray-200 rounded-md">Item 1</p>
      </Draggable>
      <Draggable id="item-2">
        <p className="p-4 bg-gray-200 rounded-md">Item 2</p>
      </Draggable>
      <Draggable id="item-3">
        <p className="p-4 bg-gray-200 rounded-md">Item 3</p>
      </Draggable>
    </div>
  );
}
