import { useState } from "react";

export function Property() {
  const [fontSize, setFontSize] = useState(56);
  const [fontFamily, setFontFamily] = useState("Canva Sans");
  const [color, setColor] = useState("#000000");

  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-md shadow-md flex gap-2 items-center">
      {/* Font Family Dropdown */}
      <select
        className="h-8 border w-[200px] px-2 text-center border-gray-300 rounded-md"
        value={fontFamily}
        onChange={e => setFontFamily(e.target.value)}>
        <option>Canva Sans</option>
        <option>Noto Sans Thai</option>
        <option>Arial</option>
        <option>Times New Roman</option>
      </select>

      {/* Font Size Controls */}
      <button
        className="h-8 w-8 border border-gray-300 rounded-md"
        onClick={() => setFontSize(f => Math.max(1, f - 1))}>
        -
      </button>
      <input
        type="number"
        className="h-8 w-14 border text-center border-gray-300 rounded-md"
        value={fontSize}
        onChange={e => setFontSize(Number(e.target.value))}
      />
      <button className="h-8 w-8 border border-gray-300 rounded-md" onClick={() => setFontSize(f => f + 1)}>
        +
      </button>

      {/* Color Picker */}
      <input type="color" className="h-8 w-8 p-0" value={color} onChange={e => setColor(e.target.value)} />

      {/* Style Buttons */}
      <button className="h-8 w-8 bg-purple-200 text-lg font-bold rounded-md">B</button>
      <button className="h-8 w-8 text-lg italic rounded-md">I</button>
      <button className="h-8 w-8 underline text-lg rounded-md">U</button>
      <button className="h-8 w-8 line-through text-lg rounded-md">S</button>
      <button className="h-8 w-8 text-lg rounded-md">aA</button>

      <button className="h-8 w-8 text-lg rounded-md">⚙️</button>
    </div>
  );
}
