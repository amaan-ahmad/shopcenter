// product page
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  ProductCard,
  ProductImage,
} from "../components/Styles/ProductCardStyle";
import { SizeOption } from "../components/Styles/ProductPage";
import { BtnAction } from "../components/Styles/Common";
import Tabs from "../components/Nav/Tabs";
import { ProductHeader } from "../components/Nav/Headers";
import { useLocation } from "react-router-dom";
const addToCart = () => {
  console.log("added to cart");
};

export default function Product() {
  const location = useLocation();
  const { product } = location.state;
  return (
    <>
      <Tabs />
      <ProductHeader />
      <Grid style={{ paddingBottom: "4em" }} container direction="row">
        <Grid item xs={12} sm={4}>
          <ProductCard>
            <ProductImage src={product.img}></ProductImage>
          </ProductCard>
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: "1em" }}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography variant="h5">{product.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">&#x20B9; {product.price}</Typography>
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
