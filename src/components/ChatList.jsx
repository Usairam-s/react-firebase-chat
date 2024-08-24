import React, { useState } from "react";
import "../index.css";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6 items-center">
        <div className="flex py-1 pl-[3px] bg-gray-600 rounded-md items-center gap-2">
          <img src="/search.png" className="w-3 h-3 ml-2 " />
          <input
            className="bg-transparent text-sm outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="p-2 rounded-md bg-gray-600">
          <img
            src={addMode ? "./minus.png" : "./plus.png"}
            className="w-3 h-3 cursor-pointer"
            onClick={() => setAddMode(!addMode)}
          />
        </div>
      </div>

      <div className="flex scrollbar-hide flex-col gap-4 h-[450px] overflow-y-auto">
        <div className="flex p-2 items-center gap-4 border-b pb-2">
          <img
            src="/avatar.png"
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div>
            <h1 className="text-sm">John Doe</h1>
            <span className="text-xs">this is message</span>
          </div>
        </div>
        <div className="flex p-2 items-center gap-4 border-b pb-2">
          <img
            src="/avatar.png"
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div>
            <h1 className="text-sm">John Doe</h1>
            <span className="text-xs">this is message</span>
          </div>
        </div>
        <div className="flex p-2 items-center gap-4 border-b pb-2">
          <img
            src="/avatar.png"
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div>
            <h1 className="text-sm">John Doe</h1>
            <span className="text-xs">this is message</span>
          </div>
        </div>
      </div>
    </div>
  );
}
