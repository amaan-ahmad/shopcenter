import React, { useContext, useState, useEffect } from "react";
import Tabs from "../components/Nav/Tabs";
import { BrandHeader } from "../components/Nav/Headers";
import { BtnAction, InputField } from "../components/Styles/Common";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BUYER_LOGIN } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { UserContext, UserDispatchContext } from "../context/UserProvider";
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
  const [formInfo, setFormInfo] = useState({});
  const history = useHistory();
  const { userId, AuthToken } = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  useEffect(() => {
    if (userId !== "" || AuthToken !== "") {
      history.push("/settings");
    }
  }, [userId, AuthToken, history]);

  const setLocalStore = ({ AuthToken, userId }) => {
    localStorage.setItem("AuthToken", AuthToken);
    localStorage.setItem("userId", userId);
  };

  const [buyerLogin] = useMutation(BUYER_LOGIN, {
    onCompleted: (data) => {
      const userData = {
        AuthToken: data?.buyerLogin?.token,
        userId: data?.buyerLogin?.userId,
      };
      setLocalStore(userData);
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

  const handleLogin = () => {
    buyerLogin({
      variables: formInfo,
    });
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
          <label for="email">Email:</label>
          <InputField
            name="email"
            type="text"
            placeholder="your email"
            onChange={handleFormChange}
          />
          <label for="password">Password:</label>
          <InputField
            name="password"
            type="password"
            placeholder="your password"
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12}>
          <BtnAction onClick={handleLogin}>Login</BtnAction>
          <span
            className={classes.subText}
            onClick={() => history.push("/signup")}
          >
            {" "}
            Create a new account{" "}
          </span>
        </Grid>
      </Grid>
    </>
  );
}
