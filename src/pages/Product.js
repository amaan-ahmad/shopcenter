// product page
import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  ProductCard,
  ProductImage,
} from "../components/Styles/ProductCardStyle";
import { BtnAction } from "../components/Styles/Common";
import Tabs from "../components/Nav/Tabs";
import { ProductHeader } from "../components/Nav/Headers";
import { useParams, useHistory } from "react-router-dom";
import { GET_PRODUCT } from "../graphql/queries";
import { useQuery } from "@apollo/client";
const addToCart = () => {
  console.log("added to cart");
};

export default function Product() {
  const history = useHistory();
  const state = history.location.state;
  const [product, setProduct] = useState(state?.product);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const getProduct = useQuery(GET_PRODUCT, {
    variables: {
      slug,
    },
    onCompleted: (data) => {
      setProduct(data?.product);
      setIsLoading(false);
    },
  });

  useEffect(() => {
    if (!product) {
      if (state.product) {
        setProduct(state.product);
        setIsLoading(false);
      } else {
        getProduct();
      }
    }
    return () => {
      console.log("Unmount Product");
    };
  }, [product, getProduct, slug, state]);

  return (
    <>
      <Tabs />
      <ProductHeader />
      {isLoading ? (
        "Loading..."
      ) : (
        <Grid style={{ paddingBottom: "4em" }} container direction="row">
          <Grid item xs={12} sm={4}>
            <ProductCard>
              <ProductImage src={product.photo}></ProductImage>
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
              <Grid item xs={12}>
                <BtnAction onClick={addToCart}>Add to cart</BtnAction>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
