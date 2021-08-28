import React from "react";
import { Redirect } from "react-router-dom";

const Home = (props) => {
  if (!props.isLoggedIn) {
    return <Redirect to="/Login" />;
  }
  return <div>Home</div>;
};

export default Home;
