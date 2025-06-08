import { AddSectionButton } from "@/components/konva/add-section-button";
import { Section } from "@/components/konva/section";

export function Workspace() {
  return (
    <div className="w-full h-full bg-gray-100 relative pt-16">
      <div id="stage-content" className="w-full overflow-y-auto h-full flex flex-col items-center justify-start">
        <Section />
        <AddSectionButton />
      </div>
    </div>
  );
}
