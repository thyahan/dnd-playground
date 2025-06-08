import { AddSectionButton } from "@/components/konva/add-section-button";
import { Section } from "@/components/konva/section";

export function Stage() {
  return (
    <div className="w-full h-full bg-gray-100 relative">
      <div id="stage-content" className="w-full h-full bg-gray-100 flex flex-col items-center pt-16">
        <Section />
        <AddSectionButton />
      </div>
      <div
        id="footer-footer"
        className="absolute bottom-0 text-gray-500 text-sm left-0 right-0 h-[32px] bg-white flex items-center justify-center">
        footer
      </div>
    </div>
  );
}
