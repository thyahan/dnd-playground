"use client";

import { IElement } from "@/components/konva/konva.store";
import { useState } from "react";
import { Text } from "react-konva";

type Props = {
  value: IElement;
};

export function TextElement({ value }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  return (
    <Text
      text={value.label}
      x={position.x}
      y={position.y}
      draggable
      fill={isDragging ? "green" : "black"}
      onDragStart={() => {
        setIsDragging(true);
      }}
      onDragEnd={e => {
        setIsDragging(false);
        setPosition({
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
    />
  );
}
