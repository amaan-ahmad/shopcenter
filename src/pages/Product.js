// product page
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  ProductCard,
  ProductImage,
} from "../components/Styles/ProductCardStyle";
import { BtnAction, SizeOption } from "../components/Styles/ProductPage";
import Tabs from "../components/Nav/Tabs";
import { ProductHeader } from "../components/Nav/Headers";
const addToCart = () => {
  console.log("added to cart");
};

export default function Product() {
  return (
    <>
      <Tabs />
      <ProductHeader />
      <Grid style={{ paddingBottom: "4em" }} container direction="row">
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
            <Grid item xs={12} style={{ marginTop: "2em" }}>
              <Typography variant="body1">Select a size</Typography>
            </Grid>
            <Grid item xs={12} style={{ display: "flex" }}>
              <SizeOption isActive={true}>
                <span>S</span>
              </SizeOption>
              <SizeOption isActive={false}>
                <span>M</span>
              </SizeOption>
              <SizeOption isActive={false}>
                <span>L</span>
              </SizeOption>
            </Grid>
            <Grid item xs={12}>
              <BtnAction onClick={addToCart}>Add to cart</BtnAction>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
