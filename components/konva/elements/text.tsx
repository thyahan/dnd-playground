import { IElement } from "@/components/konva/konva.store";

type Props = {
  value: IElement;
};

export function Text({ value }: Props) {
  return <div>{value.label}</div>;
}
