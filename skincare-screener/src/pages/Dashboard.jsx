import React from "react";

import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { AuthDetails } from "../components/auth/AuthDetails";

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
};
