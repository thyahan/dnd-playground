import { IElement } from "@/components/konva/konva.store";

type Props = {
  value: IElement;
};

export function Image({ value }: Props) {
  return <div>{value.label}</div>;
}
