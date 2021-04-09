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

export const GET_PRODUCT = gql`
  query getProductByID($id: ID, $slug: String) {
    product(id: $id, slug: $slug) {
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

export const GET_CART = gql`
  query {
    cart {
      product {
        id
        name
        price
        photo
        slug
        category {
          name
        }
        seller {
          name
          id
        }
      }
      qty
    }
  }
`;
