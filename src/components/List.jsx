import React from "react";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import AddUser from "./AddUser";

export default function List() {
  return (
    <div className="w-[25%]  p-4 flex flex-col gap-8 border-r">
      <UserInfo />
      <ChatList />
      {/* <AddUser /> */}
    </div>
  );
}
