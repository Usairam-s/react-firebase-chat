import React from "react";

export default function UserInfo() {
  return (
    <div className="flex justify-between">
      {/* username and avatar */}
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="/avatar.png"
          alt="avatar"
        />
        <h2 className="font-semibold">john Doe</h2>
      </div>
      {/* icons */}
      <div className="flex items-center gap-4">
        <img className="w-4 h-4" src="/more.png" alt="more" />
        <img className="w-4 h-4" src="/video.png" alt="video" />
        <img className="w-4 h-4" src="/edit.png" alt="edit" />
      </div>
    </div>
  );
}
