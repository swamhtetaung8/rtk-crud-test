import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const Users = () => {
  const { users } = useSelector((state) => state.user);
  console.log(users);
  return (
    <div className="flex flex-wrap gap-10 p-5 items-center ">
      {users.map((user, index) => (
        <User key={index} user={user} index={index} />
      ))}
    </div>
  );
};

export default Users;
