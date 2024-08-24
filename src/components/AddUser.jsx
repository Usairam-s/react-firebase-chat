import React from "react";

export default function AddUser() {
  return (
    <div className="p-6 w-[25%] absolute top[50%] left-[50%] z-30 rounded-md bg-gray-600">
      <form className="flex items-center">
        <input type="text" placeholder="Search" />
        <button className="bg-blue-500 text-white">Search</button>
      </form>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/avatar.png"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-xl font-semibold">John Doe</span>
        </div>
        <button className="bg-blue-500 text-white">Add User</button>
      </div>
    </div>
  );
}
