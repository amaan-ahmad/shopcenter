import React from "react";
import { Grid } from "@material-ui/core";
import {
  Header,
  HeaderItem,
  SubHeader,
  SubHeaderItem,
  SearchField,
} from "../Styles/Header";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link } from "react-router-dom";

export function BrandHeader() {
  return (
    <>
      <Grid
        container
        direction="column"
        style={{
          background: "white",
          position: "sticky",
          top: 0,
        }}
      >
        <Grid item xs={12}>
          <Header>
            <HeaderItem>
              <MenuRoundedIcon />
            </HeaderItem>
            <HeaderItem>NBF</HeaderItem>
            <HeaderItem>
              <TuneRoundedIcon />
            </HeaderItem>
          </Header>
        </Grid>
      </Grid>
    </>
  );
}

export function HomeHeader() {
  return (
    <>
      <Grid
        container
        direction="column"
        style={{
          background: "white",
          position: "sticky",
          top: 0,
        }}
      >
        <Grid item xs={12}>
          <Header>
            <HeaderItem>
              <MenuRoundedIcon />
            </HeaderItem>
            <HeaderItem>NBF</HeaderItem>
            <HeaderItem>
              <TuneRoundedIcon />
            </HeaderItem>
          </Header>
        </Grid>
        <Grid item xs={12}>
          <SubHeader>
            <SubHeaderItem>New arrivals</SubHeaderItem>
            <SubHeaderItem>Trendy</SubHeaderItem>
            <SubHeaderItem>Season Sale</SubHeaderItem>
            <SubHeaderItem>More</SubHeaderItem>
            <SubHeaderItem>New arrivals</SubHeaderItem>
            <SubHeaderItem>Trendy</SubHeaderItem>
            <SubHeaderItem>Season Sale</SubHeaderItem>
            <SubHeaderItem>More</SubHeaderItem>
          </SubHeader>
        </Grid>
      </Grid>
    </>
  );
}

export function ProductHeader() {
  return (
    <>
      <Header shadow={true}>
        <HeaderItem>
          <Link to={`/`}>
            <ArrowBackIosRoundedIcon />
          </Link>
        </HeaderItem>
        <HeaderItem style={{ marginRight: "0", fontWeight: 600 }}>
          <BookmarksOutlinedIcon />
        </HeaderItem>
      </Header>
    </>
  );
}

export function SearchHeader() {
  return (
    <>
      <Header shadow={true}>
        <HeaderItem style={{ width: "inherit" }}>
          <SearchField
            type="text"
            placeholder="search clothes, brands..."
            style={{ width: "inherit" }}
          />
        </HeaderItem>
        <HeaderItem style={{ alignSelf: "center" }}>
          <SearchRoundedIcon />
        </HeaderItem>
      </Header>
    </>
  );
}
