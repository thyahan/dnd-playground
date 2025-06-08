import Konva from "konva";
import { useEffect, useRef } from "react";
import { Image as KonvaImage, Transformer } from "react-konva";
import { useImage } from "react-konva-utils";

type CropPosition =
  | "left-top"
  | "center-top"
  | "right-top"
  | "left-middle"
  | "center-middle"
  | "right-middle"
  | "left-bottom"
  | "center-bottom"
  | "right-bottom";

type Props = {
  src: string;
  width: number;
  height: number;
  x?: number;
  y?: number;
  draggable?: boolean;
  cropPosition?: CropPosition;
  onTransform?: (node: Konva.Image) => void;
};

function getCrop(
  image: HTMLImageElement,
  size: { width: number; height: number },
  clipPosition: CropPosition = "center-middle"
) {
  const width = size.width;
  const height = size.height;
  const aspectRatio = width / height;

  let newWidth: number;
  let newHeight: number;

  const imageRatio = image.width / image.height;

  if (aspectRatio >= imageRatio) {
    newWidth = image.width;
    newHeight = image.width / aspectRatio;
  } else {
    newWidth = image.height * aspectRatio;
    newHeight = image.height;
  }

  let x = 0;
  let y = 0;

  switch (clipPosition) {
    case "left-top":
      x = 0;
      y = 0;
      break;
    case "left-middle":
      x = 0;
      y = (image.height - newHeight) / 2;
      break;
    case "left-bottom":
      x = 0;
      y = image.height - newHeight;
      break;
    case "center-top":
      x = (image.width - newWidth) / 2;
      y = 0;
      break;
    case "center-middle":
      x = (image.width - newWidth) / 2;
      y = (image.height - newHeight) / 2;
      break;
    case "center-bottom":
      x = (image.width - newWidth) / 2;
      y = image.height - newHeight;
      break;
    case "right-top":
      x = image.width - newWidth;
      y = 0;
      break;
    case "right-middle":
      x = image.width - newWidth;
      y = (image.height - newHeight) / 2;
      break;
    case "right-bottom":
      x = image.width - newWidth;
      y = image.height - newHeight;
      break;
  }

  return {
    cropX: x,
    cropY: y,
    cropWidth: newWidth,
    cropHeight: newHeight,
  };
}

export function ImageElement({
  src,
  width,
  height,
  x = 0,
  y = 0,
  draggable = false,
  cropPosition = "center-middle",
  onTransform,
}: Props) {
  const imageRef = useRef<Konva.Image>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const [image] = useImage(src);

  useEffect(() => {
    if (!imageRef.current || !image) return;

    const img = imageRef.current;
    const crop = getCrop(image, { width, height }, cropPosition);
    img.setAttrs(crop);
  }, [width, height, cropPosition, image]);

  useEffect(() => {
    if (image && imageRef.current && transformerRef.current) {
      transformerRef.current.nodes([imageRef.current]);
    }
  }, [image]);

  const handleTransform = () => {
    if (!imageRef.current || !image) return;

    const img = imageRef.current;
    const scaleX = img.scaleX();
    const scaleY = img.scaleY();

    img.setAttrs({
      scaleX: 1,
      scaleY: 1,
      width: Math.max(5, img.width() * scaleX),
      height: Math.max(5, img.height() * scaleY),
    });

    const crop = getCrop(image, { width: img.width(), height: img.height() }, cropPosition);
    img.setAttrs(crop);

    onTransform?.(img);
  };

  if (!image) {
    return null;
  }

  return (
    <>
      <KonvaImage
        ref={imageRef}
        image={image}
        width={width}
        height={height}
        x={x}
        y={y}
        draggable={draggable}
        onTransform={handleTransform}
      />
      <Transformer
        ref={transformerRef}
        boundBoxFunc={(oldBox, newBox) => {
          if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
            return oldBox;
          }
          return newBox;
        }}
      />
    </>
  );
}
