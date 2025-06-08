import { PlusIcon } from "lucide-react";

export function AddSectionButton() {
  function handleAddSection() {
    console.log("add section button clicked");
  }

  return (
    <div
      className="w-[80%] hover:bg-gray-200 h-10 bg-white flex items-center justify-center my-4 rounded-md border-[2px] border-gray-300 cursor-pointer"
      onClick={handleAddSection}>
      <PlusIcon className="w-4 h-4" />
      <p className="text-gray-500">Add new section</p>
    </div>
  );
}
