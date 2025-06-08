type IElement = {
  label: string;
  type: string;
};

const elements: IElement[] = [
  {
    label: "Text",
    type: "text",
  },
  {
    label: "Image",
    type: "image",
  },
  {
    label: "Button",
    type: "button",
  },
];

export function Sidebar() {
  function handleClick(element: IElement) {
    console.log("selected element:", element);
  }

  return (
    <div className="w-[400px] gap-4 bg-white p-4">
      <p className="w-full items-center justify-center text-lg text-gray-500 mb-4">Elements</p>
      <ul className="flex flex-col gap-2">
        {elements.map(element => (
          <li
            key={element.type}
            onClick={() => handleClick(element)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-md border border-gray-200">
            {element.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
