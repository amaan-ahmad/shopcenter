import React from "react";
import Tabs from "../components/Nav/Tabs";
import { SearchHeader } from "../components/Nav/Headers";
import SearchList from "../components/SearchList";

export default function Search() {
  return (
    <>
      <Tabs />
      <SearchHeader />
      <SearchList />
    </>
  );
}
