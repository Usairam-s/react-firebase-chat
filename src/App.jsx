import React from "react";
import "./index.css";
import List from "./components/List";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import Login from "./components/Login";

const App = () => {
  const user = true;
  return (
    <div className="container">
      {user ? (
        <>
          {" "}
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};

export default App;
