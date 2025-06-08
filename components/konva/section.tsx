"use client";

import { ImageElement } from "@/components/konva/elements/image";
import { TextElement } from "@/components/konva/elements/text";
import { ResizeableWrapper } from "@/components/konva/resizeable-wrapper";
import { Layer, Stage } from "react-konva";

export function Section() {
  return (
    <ResizeableWrapper className="w-[80%] transition-all min-w-[60vw]">
      {({ width }) => {
        const height = (width * 9) / 16;
        return (
          <Stage
            width={width}
            height={height}
            className="border transition-all bg-white border-gray-200 overflow-hidden">
            <Layer width={width} height={height}>
              <TextElement value={{ id: "1", label: "Hello", type: "text" }} />
              <ImageElement
                src="/images/pic1.jpg"
                width={300}
                height={200}
                x={100}
                y={100}
                draggable={true}
                cropPosition="center-middle"
                onTransform={node => {
                  console.log("Image transformed:", node);
                }}
              />
            </Layer>
          </Stage>
        );
      }}
    </ResizeableWrapper>
  );
}
