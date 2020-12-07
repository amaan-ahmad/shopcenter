// core libs
import React from "react";

// components
import { TabBar, TabBarItem } from "../Styles/TabBar";

// icons
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";

// array
const tabIcons = [
  { component: <DashboardRoundedIcon />, id: 1, isActive: true },
  { component: <SearchRoundedIcon />, id: 2, isActive: false },
  { component: <LocalMallRoundedIcon />, id: 3, isActive: false },
  { component: <BookmarkBorderRoundedIcon />, id: 4, isActive: false },
  { component: <SettingsRoundedIcon />, id: false },
];

export default function Tabs() {
  return (
    <>
      <TabBar>
        {tabIcons.map((i) => {
          return <TabBarItem isActive={i.isActive}>{i.component}</TabBarItem>;
        })}
      </TabBar>
    </>
  );
}
