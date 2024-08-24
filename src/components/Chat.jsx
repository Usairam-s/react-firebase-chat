import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "../index.css";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef?.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="w-[50%] border-r">
      <div className="">
        {/* above */}
        <div className="border-b p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col ">
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-xs text-gray-400">lorem ipsum hello edrt</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src="/phone.png" alt="phone" className="w-4 h-4" />
            <img src="/video.png" alt="video" className="w-4 h-4" />
            <img src="/info.png" alt="info" className="w-4 h-4" />
          </div>
        </div>
        {/* center */}
        <div className="flex-1 p-6 border-b h-[60vh] overflow-y-auto scrollbar-hide">
          {/* send */}
          <div className="flex gap-2 w-[70%]">
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <p className="bg-gray-700 p-2 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti numquam necessitatibus.
              </p>
              <span className="text-xs">1 min ago</span>
            </div>
          </div>

          {/* receive */}
          <div className="flex flex-col gap-2 w-fit my-6 ml-auto">
            <p className="bg-blue-500 p-2 rounded-md">Lorem ipsum dolor</p>
            <span className="text-xs text-right">1 min ago</span>
          </div>

          {/* send */}
          <div className="flex gap-2 w-[70%]">
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <p className="bg-gray-700 p-2 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti numquam necessitatibus.
              </p>
              <span className="text-xs">1 min ago</span>
            </div>
          </div>

          {/* receive */}
          <div className="flex flex-col gap-2 w-fit my-6 ml-auto">
            <p className="bg-blue-500 p-2 rounded-md">Lorem ipsum dolor</p>
            <span className="text-xs text-right">1 min ago</span>
          </div>
          {/* send */}
          <div className="flex gap-2 w-[70%]">
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <p className="bg-gray-700 p-2 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti numquam necessitatibus.
              </p>
              <span className="text-xs">1 min ago</span>
            </div>
          </div>

          {/* receive */}
          <div className="flex flex-col gap-2 w-fit my-6 ml-auto">
            <p className="bg-blue-500 p-2 rounded-md">Lorem ipsum dolor</p>
            <span className="text-xs text-right">1 min ago</span>
          </div>
          {/* send */}
          <div className="flex gap-2 w-[70%]">
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <p className="bg-gray-700 p-2 rounded-md">
                Lorem ipsum dolor sit amet
              </p>
              <span className="text-xs">1 min ago</span>
            </div>
          </div>

          {/* receive */}
          <div className="flex flex-col gap-2 w-fit my-6 ml-auto">
            <p className="bg-blue-500 p-2 rounded-md">Lorem ipsum dolor</p>
            <span className="text-xs text-right">1 min ago</span>
          </div>
          <div ref={endRef}></div>
        </div>

        {/* bottom */}
        <div className="p-6 flex items-center w-full gap-4">
          <div className="flex items-center justify-between w-[20%]">
            <img src="/img.png" alt="img" className="w-4 h-4" />
            <img src="/camera.png" alt="img" className="w-4 h-4" />
            <img src="/mic.png" alt="img" className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={text}
            placeholder="Type a message"
            className="w-[60%] px-2 py-3 rounded-lg text-white bg-gray-600 outline-none"
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex relative items-center justify-between w-[20%]">
            <img
              src="/emoji.png"
              alt="emoji"
              className="w-8 h-8"
              onClick={() => setOpen(!open)}
            />
            <div className="absolute bottom-16">
              {" "}
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>

            <button className="bg-blue-600 rounded-md text-white px-2 py-1">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
