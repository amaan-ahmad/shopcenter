// product page
import React from "react";
import { Link } from "react-router-dom";
import { Header, HeaderItem } from "../components/Styles/Header";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { Grid, Typography } from "@material-ui/core";
import {
  ProductCard,
  ProductImage,
} from "../components/Styles/ProductCardStyle";
import Tabs from "../components/Nav/Tabs";

export default function Product() {
  return (
    <>
      <Tabs />
      <Header>
        <HeaderItem>
          <Link to={`/`}>
            <ArrowBackIosRoundedIcon />
          </Link>
        </HeaderItem>
        <HeaderItem style={{ marginRight: "0", fontWeight: 600 }}>
          Jacket
        </HeaderItem>
      </Header>
      <Grid container direction="row">
        <Grid item xs={12} sm={4}>
          <ProductCard>
            <ProductImage src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1589077/2016/10/14/11476429946471-naughty-ninos-Girls-Coats-4921476429946326-1.jpg"></ProductImage>
          </ProductCard>
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: "1em" }}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography variant="h5">Double sided Jacket</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Sizes: Small, medium, large
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
