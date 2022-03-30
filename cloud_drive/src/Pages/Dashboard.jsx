import React from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();
  console.log(user);
  function logout(){
      logoutUser()
      navigate("/")

  }
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Dashboard;