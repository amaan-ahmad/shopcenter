import { gql } from "@apollo/client";

export const SELLER_SIGNUP = gql`
  mutation {
    sellerSignup(
      name: $name
      email: $email
      mobile_no: $mobile_no
      password: $password
    ) {
      token
      userId
    }
  }
`;

export const SELLER_LOGIN = gql`
  mutation {
    sellerLogin(email: $email, password: $password) {
      token
      userId
    }
  }
`;
export const BUYER_LOGIN = gql`
  mutation buyerLogin($email: String!, $password: String!) {
    buyerLogin(email: $email, password: $password) {
      token
      userId
    }
  }
`;
export const BUYER_SIGNUP = gql`
  mutation buyerLogin($name: String!, $email: String!, $password: String!) {
    buyerSignup(name: $name, email: $email, password: $password) {
      token
      userId
    }
  }
`;
