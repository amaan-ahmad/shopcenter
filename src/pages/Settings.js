import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Tabs from "../components/Nav/Tabs";
import { BrandHeader } from "../components/Nav/Headers";
import { UserContext } from "../context/UserProvider";

export default function Settings() {
  const user = useContext(UserContext);
  const history = useHistory();
  return (
    <>
      <Tabs />
      <BrandHeader />
      {user.userId
        ? `Welcome, ${user.userId} 👋`
        : history.push("/login", {
            ref: "/settings",
          })}
    </>
  );
}
