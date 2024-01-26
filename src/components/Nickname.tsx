import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const Nickname = () => {
  const token = localStorage.getItem("nickname");

  const [isNickname, setIsNickname] = useState("");

  const inputHandler = (event: any) => {
    console.log(event.target.value);
    setIsNickname(event.target.value);
  };

  const buttonHandler = () => {
    if (!token) {
      localStorage.setItem("nickname", isNickname);
    }
  };

  const deleteHandler = () => {
    localStorage.removeItem("nickname");
  };

  return (
    <>
      {token ? (
        <div className="flex h-10 text-xl text-justify items-center rounded-lg bg-white">
          <div className="text-2xl text-justify pr-2 pl-2">{token}</div>
          <CloseOutlined onClick={deleteHandler} />
        </div>
      ) : (
        <>
          <input
            className="h-10 text-center text-m rounded-full"
            placeholder="write your name"
            type="text"
            onChange={inputHandler}
          ></input>
          <button
            className="h-10 text-center text-m rounded-full"
            onClick={buttonHandler}
          >
            Enter
          </button>
        </>
      )}
    </>
  );
};

export default Nickname;
