import styled from "styled-components";

export const TabBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  position: fixed;
  bottom: -1px;
  width: -webkit-fill-available;
  height: fit-content;
  margin: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 0.2em;
  z-index: 999;
  box-shadow: 0px -1px 12px -8px black;
  background: white;
`;

export const TabBarItem = styled.div`
  color : ${(props) => {
    return props.isActive ? "black;" : "#0000005c;";
  }}
  display: block;
  padding: 0.8em;
`;
