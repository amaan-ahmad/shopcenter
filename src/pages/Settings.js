import React, { useState } from "react";
import Tabs from "../components/Nav/Tabs";
import { BrandHeader } from "../components/Nav/Headers";
import { BtnAction, InputField } from "../components/Styles/Common";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subText: {
    color: "gray",
    fontWeight: "300",
    textAlign: "center",
    display: "block",
    "&:hover": {
      "text-decoration": "underline",
      cursor: "pointer",
    },
  },
});

export default function Settings() {
  const classes = useStyles();
  const [comp, setComp] = useState("LOGIN");

  return (
    <>
      <Tabs />
      <BrandHeader />
      {comp === "LOGIN" ? (
        <Grid
          container
          style={{
            padding: "0.4rem",
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <label for="email">Email:</label>
            <InputField name="email" type="text" placeholder="your email" />
            <label for="password">Password:</label>
            <InputField
              name="password"
              type="password"
              placeholder="your password"
            />
          </Grid>
          <Grid item xs={12}>
            <BtnAction>Login</BtnAction>
            <span className={classes.subText} onClick={() => setComp("SIGNUP")}>
              {" "}
              Create a new account{" "}
            </span>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          style={{
            padding: "0.4rem",
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <label for="email">Full Name:</label>
            <InputField name="email" type="text" placeholder="john@shop.com" />
            <label for="email">Email:</label>
            <InputField name="email" type="text" placeholder="john@shop.com" />
            <label for="password">Password:</label>
            <InputField name="password" type="password" placeholder="secret" />
            <label for="password">Select Account type:</label>
            <select mame="account_type">
              <option value="">Account type</option>
              <option value="BUYER">Buyer</option>
              <option value="SELLER">Seller</option>
            </select>
          </Grid>
          <Grid item xs={12}>
            <BtnAction>Sign up</BtnAction>
            <span className={classes.subText} onClick={() => setComp("LOGIN")}>
              {" "}
              Already Registered? Login here.{" "}
            </span>
          </Grid>
        </Grid>
      )}
    </>
  );
}
