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
import { Link, useLocation } from "react-router-dom";

// array
const tabIcons = [
  { component: <DashboardRoundedIcon />, id: 1, isActive: true, link: "/" },
  { component: <SearchRoundedIcon />, id: 2, isActive: false, link: "/search" },
  {
    component: <LocalMallRoundedIcon />,
    id: 3,
    isActive: false,
    link: "/cart",
  },
  {
    component: <BookmarkBorderRoundedIcon />,
    id: 4,
    isActive: false,
    link: "/saved",
  },
  {
    component: <SettingsRoundedIcon />,
    id: 4,
    isActive: false,
    link: "/settings",
  },
];

const isTabActive = (currentPath, tabLink) => {
  if (currentPath === tabLink) return true;
  else return false;
};

export default function Tabs() {
  const { pathname } = useLocation();

  return (
    <>
      <TabBar>
        {tabIcons.map((i) => {
          return (
            <TabBarItem isActive={isTabActive(pathname, i.link)}>
              <Link to={i.link}>{i.component}</Link>
            </TabBarItem>
          );
        })}
      </TabBar>
    </>
  );
}
