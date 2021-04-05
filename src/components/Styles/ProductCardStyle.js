import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  padding: 0.4em;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 75%;
  height: auto;
  margin: auto;
  padding: 1.2em;
`;

export const ProductPrice = styled.div`
  display: block;
  font-weight: 700;
  font-size: 14px;
  padding: 0 0.4em;
`;

export const ProductCaption = styled.div`
  display: block;
  font-weight: 200;
  font-size: 12px;
  padding: 0.4em 0.6em;
`;
