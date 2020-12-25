// cart
import React from "react";
import Tabs from "../components/Nav/Tabs";
import emptyCart from "../assets/svg/undraw_empty_cart_co35.svg";
import { Vector } from "../components/Styles/Vector";
import { ScrollView } from "../components/Styles/ScrollView";
import { Typography } from "@material-ui/core";
export default function Cart() {
  return (
    <>
      <Tabs />
      <ScrollView>
        <Vector src={emptyCart} />
        <Typography variant="h4" style={{ textAlign: "center" }}>
          No items here
        </Typography>
      </ScrollView>
    </>
  );
}
