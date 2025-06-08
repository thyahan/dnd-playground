import { Konva } from "@/components/konva";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-200">
      {/* header */}
      <div className="w-full h-[64px] bg-gradient-to-r text-white from-blue-500 via-purple-500 to-pink-500 flex items-center justify-between px-4">
        <p className="text-lg">Hello</p>
      </div>

      {/* content */}
      <div className="w-full h-[calc(100vh-64px)] bg-gray-200">
        <Konva />
      </div>
    </div>
  );
}
