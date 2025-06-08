import { Droppable } from "@/components/dnd/dropable";

type Props = {
  id: string;
};

export function Section({ id }: Props) {
  return (
    <Droppable id={id}>
      <div className="w-full h-screen flex items-center justify-center"></div>
    </Droppable>
  );
}
