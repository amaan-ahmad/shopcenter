import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Tabs from "../components/Nav/Tabs";
import { BrandHeader } from "../components/Nav/Headers";
import { UserContext } from "../context/UserProvider";
import { useQuery } from "@apollo/client";
import { GET_BUYER } from "../graphql/queries";

export default function Settings() {
  const user = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_BUYER);
  const history = useHistory();
  if (loading) return null;
  if (error) console.error(error);
  return (
    <>
      <Tabs />
      <BrandHeader />
      {user.userId
        ? `Welcome, ${!data ? user.userId : data.buyer.name} 👋`
        : history.push("/login", {
            ref: "/settings",
          })}
    </>
  );
}
