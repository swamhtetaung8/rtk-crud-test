import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../features/user";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <div className="p-5 rounded-md flex flex-col items-center gap-5 border shadow-lg">
      <h2>{user.name}</h2>
      <h2>{user.age} years</h2>
      <h2>{user.email}</h2>
      <div className=" flex gap-3">
        <input
          type="text"
          placeholder="Update Username"
          ref={inputRef}
          className=" border px-3 py-1"
        />
        <button
          className=" bg-blue-500 px-2 rounded-md text-white"
          onClick={() => {
            if (inputRef.current.value !== "") {
              dispatch(
                updateUser({ id: user.id, value: inputRef.current.value })
              );
            }
            inputRef.current.value = "";
          }}>
          Update
        </button>
      </div>
      <button
        className=" bg-red-500 w-full py-1 text-white rounded-md"
        onClick={() => {
          dispatch(deleteUser(user.id));
        }}>
        Delete User
      </button>
    </div>
  );
};

export default User;
