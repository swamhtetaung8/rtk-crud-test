import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user";

const AddUser = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formRef);
    const newUser = {
      name: formRef.current[0].value,
      age: formRef.current[1].value,
      email: formRef.current[2].value,
    };
    dispatch(addUser(newUser));
    formRef.current[0].value = "";
    formRef.current[1].value = "";
    formRef.current[2].value = "";
  };
  return (
    <div className=" max-w-md mx-auto">
      <h1 className=" text-4xl font-medium ml-3 mt-5">Add a user</h1>
      <form
        onSubmit={submitHandler}
        action=""
        ref={formRef}
        className=" flex flex-col gap-3 px-3 my-5">
        <input
          type="text"
          placeholder="Name"
          className=" border p-2 rounded-md w-full"
          required
        />
        <input
          type="number"
          placeholder="Age"
          className=" border p-2 rounded-md w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className=" border p-2 rounded-md w-full"
          required
        />
        <button className=" bg-blue-500 px-5 py-2 rounded-lg text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
