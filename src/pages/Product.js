// product page
import React, { useState, useEffect, useContext } from "react";
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
import { useMutation, useLazyQuery } from "@apollo/client";
import { UPDATE_CART } from "../graphql/mutations";
import { CartDispatchContext } from "../context/CartProvider";
export default function Product() {
  const history = useHistory();
  const state = history.location.state;
  const [product, setProduct] = useState(state?.product);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const { setIsUpdated } = useContext(CartDispatchContext);
  const [getProduct] = useLazyQuery(GET_PRODUCT, {
    variables: {
      slug,
    },
    onCompleted: (data) => {
      setProduct(data?.product);
      setIsLoading(false);
      console.log(data?.product);
    },
  });

  const [updateCart] = useMutation(UPDATE_CART, {
    variables: {
      id: product?.id,
      qty: 1,
    },
    onCompleted: (data) => {
      console.log(data);
      setIsUpdated(true);
    },
  });

  useEffect(() => {
    if (!product) {
      if (state?.product) {
        setProduct(state.product);
        setIsLoading(false);
      } else {
        getProduct();
      }
    } else {
      setIsLoading(false);
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
                <BtnAction onClick={() => updateCart()}>Add to cart</BtnAction>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
