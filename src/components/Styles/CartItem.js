import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  margin: 0.5em 1em;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.25);
  position: relative;
  border-radius: 6px;
  &::after {
    content: "${(props) => (props.badge ? props.badge.toString() : 0)}";
    position: absolute;
    top: -5px;
    right: -5px;
    background: black;
    color: white;
    padding: 0.1rem;
    width: 18px;
    height: 18px;
    text-align: center;
    align-content: center;
    font-size: 0.8rem;
    border-radius: 100%;
  }
`;

export const CartItemImage = styled.img`
  border-radius: 100%;
  aspect-ratio: 4/5;
  height: 4rem;
  object-fit: scale-down;
  margin-right: 1em;
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CartItemName = styled.span`
  font-weight: bold;
  font-size: 1rem;
  line-height: 22px;
  color: #4f4f4f;
`;

export const CartItemPrice = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 21px;
  color: #4f4f4f;
`;
