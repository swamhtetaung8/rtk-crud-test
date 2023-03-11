import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const Users = () => {
  const { users } = useSelector((state) => state.user);
  console.log(users);
  return (
    <div className="flex flex-wrap gap-10 p-5 items-center ">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
