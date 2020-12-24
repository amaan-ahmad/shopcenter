import { createContext } from "react";

const initialState = {
  activeTab: "/",
  changeActiveTab: (link) => {
    console.log("changed", link);
  },
};
const TabContext = createContext(initialState);

export { TabContext };
