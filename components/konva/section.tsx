import { useKonvaStore } from "@/components/konva/konva.store";

export function Section() {
  const { elements } = useKonvaStore();

  console.log(elements);

  return (
    <div className="w-[80%] h-auto aspect-video bg-white border border-gray-300">
      {elements.map(element => {
        return <div key={element.id}>{element.label}</div>;
      })}
    </div>
  );
}
