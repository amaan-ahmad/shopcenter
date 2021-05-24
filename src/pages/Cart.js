// cart
import React, { useContext } from "react";
import Tabs from "../components/Nav/Tabs";
import emptyCart from "../assets/svg/undraw_empty_cart_co35.svg";
import { Vector } from "../components/Styles/Vector";
import { ScrollView } from "../components/Styles/ScrollView";
import { Typography } from "@material-ui/core";
import { BrandHeader } from "../components/Nav/Headers";
import { useQuery } from "@apollo/client";
import { GET_CART } from "../graphql/queries";
import { Grid } from "@material-ui/core";
import {
  CartItem,
  CartItemDetails,
  CartItemImage,
  CartItemName,
  CartItemPrice,
} from "../components/Styles/CartItem";
import { CartContext, CartDispatchContext } from "../context/CartProvider";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { BtnAction } from "../components/Styles/Common";

export default function Cart() {
  const { cartItems, isUpdated } = useContext(CartContext);
  const { setCartItems, setIsUpdated } = useContext(CartDispatchContext);
  const history = useHistory();
  const { data, loading, error, refetch } = useQuery(GET_CART);

  if (loading) {
    console.log("loading");
  } else {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      setCartItems(data?.cart);
    }
  }

  const handlePlaceOrder = () => history.push("/checkout");

  useEffect(() => {
    console.log("mounted cart");
    console.log(cartItems);
    if (!cartItems || isUpdated) {
      refetch();
      setIsUpdated(false);
    }
    return () => {
      console.log("un-mounted cart");
    };
  });
  return (
    <>
      <Tabs />
      <BrandHeader />
      <ScrollView>
        {loading || !cartItems ? (
          <>
            <Vector src={emptyCart} />
            <Typography variant="h4" style={{ textAlign: "center" }}>
              No items here
            </Typography>
          </>
        ) : (
          <>
            <Grid container direction="column">
              <Grid item xs={12} md={6}>
                <h1 style={{ margin: "0 1.25rem" }}>Cart</h1>
              </Grid>
              {cartItems.map((item) => {
                return (
                  <Grid key={item.product.id} item xs={12} md={6}>
                    <Link
                      to={{
                        pathname: `/product/${item.product.category.name}/${item.product.slug}`,
                        state: { product: item.product },
                      }}
                    >
                      <CartItem badge={item.qty}>
                        <CartItemImage src={item.product.photo} />
                        <CartItemDetails>
                          <CartItemName>{item.product.name}</CartItemName>
                          <CartItemPrice>
                            &#x20B9; {item.product.price}
                          </CartItemPrice>
                        </CartItemDetails>
                      </CartItem>
                    </Link>
                  </Grid>
                );
              })}
              <Grid item xs={12} md={6}>
                <BtnAction
                  onClick={handlePlaceOrder}
                  style={{ margin: "0 1.25rem" }}
                >
                  Place order
                </BtnAction>
              </Grid>
            </Grid>
          </>
        )}
      </ScrollView>
    </>
  );
}
