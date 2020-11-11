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

export default function Tabs() {
  return (
    <>
      <TabBar>
        <TabBarItem>
          <DashboardRoundedIcon />
        </TabBarItem>
        <TabBarItem>
          <SearchRoundedIcon />
        </TabBarItem>
        <TabBarItem>
          <LocalMallRoundedIcon />
        </TabBarItem>
        <TabBarItem>
          <BookmarkBorderRoundedIcon />
        </TabBarItem>
        <TabBarItem>
          <SettingsRoundedIcon />
        </TabBarItem>
      </TabBar>
    </>
  );
}
