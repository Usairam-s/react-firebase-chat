import React, { useState } from "react";

export default function Login() {
  const [avatar, setAvatar] = useState({
    file: "null",
    url: "./avatar.png",
  });
  return (
    <div className="flex flex-row items-center justify-between w-full">
      {/* Left Section */}
      <div className="flex items-center justify-center w-1/2 ">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Welcome Back!!</h2>
          <form className="flex flex-col items-center justify-center gap-4 my-4">
            <input
              className="text-black p-2 rounded-lg outline-none shadow-lg"
              autoComplete="off"
              type="text"
              placeholder="Email"
              id="email"
            />
            <input
              className="p-2 rounded-lg outline-none shadow-lg text-black"
              autoComplete="off"
              type="password"
              placeholder="Password"
              id="password"
            />
            <button className="bg-white rounded-md text-black shadow-md py-2 px-4">
              Sign in
            </button>
          </form>
        </div>
      </div>

      {/* Middle Line */}
      <div className="w-px h-80 bg-gray-500"></div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-1/2 ">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Create an account</h2>
          <form className="flex flex-col items-center justify-center gap-4 my-4">
            <div className="flex items-center gap-6">
              <img
                src="/avatar.png"
                alt="avatar"
                className="w-10 h-10 rounded-md"
              />
              <input
                placeholder="Upload an image"
                type="file"
                name="file"
                id="file"
              />
            </div>

            <input
              className="text-black p-2 rounded-lg outline-none shadow-lg"
              autoComplete="off"
              type="text"
              placeholder="Username"
              id="username"
            />
            <input
              className="text-black p-2 rounded-lg outline-none shadow-lg"
              autoComplete="off"
              type="text"
              placeholder="Email"
              id="email"
            />
            <input
              className="p-2 rounded-lg outline-none shadow-lg text-black"
              autoComplete="off"
              type="password"
              placeholder="Password"
              id="password"
            />
            <button className="bg-white rounded-md text-black shadow-md py-2 px-4">
              Get your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
