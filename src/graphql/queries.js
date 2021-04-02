import { gql } from "@apollo/client";

export const GET_BUYER = gql`
  query {
    buyer {
      name
      email
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query {
    all_products {
      id
      name
      price
      slug
      photo
      category {
        name
      }
      seller {
        name
      }
    }
  }
`;
