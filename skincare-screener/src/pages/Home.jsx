import React, { useState } from "react";

import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { AuthDetails } from "../components/auth/AuthDetails";

export const Home = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      Authenticate
      {toggle ? (
        <SignIn toggleForm={handleToggle} />
      ) : (
        <SignUp toggleForm={handleToggle} />
      )}
      <AuthDetails />
    </div>
  );
};
