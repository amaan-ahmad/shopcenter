import React, { useContext, useState } from "react";
import Tabs from "../components/Nav/Tabs";
import { BrandHeader } from "../components/Nav/Headers";
import { BtnAction, InputField } from "../components/Styles/Common";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BUYER_SIGNUP } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { UserDispatchContext } from "../context/UserProvider";
import { useHistory } from "react-router";
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
  const [formInfo, setFormInfo] = useState({ account_type: "BUYER" });
  const history = useHistory();
  const setUserDetails = useContext(UserDispatchContext);

  const [buyerSignup] = useMutation(BUYER_SIGNUP, {
    onCompleted: (data) => {
      const userData = {
        AuthToken: data?.buyerLogin?.token,
        userId: data?.buyerLogin?.userId,
      };
      setUserDetails(userData);
      history.location?.state?.ref
        ? history.push(history.location.state.ref)
        : history.push("/");
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const handleFormChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    switch (formInfo?.account_type) {
      case "SELLER": {
        console.log("i want to sell");
        break;
      }
      case "BUYER": {
        buyerSignup({
          variables: formInfo,
        });
        break;
      }

      default: {
        console.log("i am a dev");
        break;
      }
    }
    console.log(formInfo);
  };

  return (
    <>
      <Tabs />
      <BrandHeader />

      <Grid
        container
        style={{
          padding: "0.4rem",
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <label for="email">Full Name:</label>
          <InputField
            name="name"
            type="text"
            placeholder="Ex: Amaan Ahmad"
            onChange={handleFormChange}
          />
          <label for="email">Email:</label>
          <InputField
            name="email"
            type="text"
            placeholder="Ex: hello@amaan.codes"
            onChange={handleFormChange}
          />
          <label for="password">Password:</label>
          <InputField
            name="password"
            type="password"
            placeholder="shh! this is secret"
            onChange={handleFormChange}
          />
          {/* <label for="account_type" onChange={handleFormChange}>
            Select Account type:
          </label>
          <select name="account_type" onChange={handleFormChange}>
            <option value="">Account type</option>
            <option value="BUYER">Buyer</option>
            <option value="SELLER">Seller</option>
          </select> */}
        </Grid>
        <Grid item xs={12}>
          <BtnAction onClick={handleSignup}>Sign up</BtnAction>
          <span
            className={classes.subText}
            onClick={() => history.push("/login")}
          >
            {" "}
            Already Registered? Login here.{" "}
          </span>
        </Grid>
      </Grid>
    </>
  );
}
