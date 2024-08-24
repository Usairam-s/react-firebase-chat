import React, { useState } from "react";

export default function Detail() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[25%] ">
      <div className="h-[25%] flex gap-2 flex-col items-center justify-center border-b p-6">
        <img src="/avatar.png" alt="user" className="w-14 h-14 rounded-full" />
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-sm text-gray-400">Lorem ipsum loren bye</p>
      </div>
      <div className="h-[75%] p-4">
        <div className="flex items-center justify-between">
          <span>Shared Photos</span>
          <img
            src={open ? "/arrowUp.png" : "/arrowDown.png"}
            alt="arrow"
            className="w-3 h-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="flex flex-col gap-4 my-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/avatar.png"
                  alt="user"
                  className="w-8 h-8 rounded-md"
                />
                <span>photh_name.png</span>
              </div>
              <img src="/download.png" alt="download" className="w- h-4" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/avatar.png"
                  alt="user"
                  className="w-8 h-8 rounded-md"
                />
                <span>photh_name.png</span>
              </div>
              <img src="/download.png" alt="download" className="w- h-4" />
            </div>
          </div>
        )}

        <button className="w-full py-2 mt-4 rounded-md shadow text-white bg-red-500 hover:bg-red-600">
          Block
        </button>
        <button className="w-full py-2 mt-4 rounded-md shadow text-white bg-blue-500 hover:bg-blue-600">
          Logout
        </button>
      </div>
    </div>
  );
}
