import styled from "styled-components";

export const TabBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: -webkit-fill-available;
  margin: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 0.2em;

  //background: linear-gradient(45deg, #585dfc, #cc01ffeb);
  //color: white;

  box-shadow: 0px -1px 12px -8px black;
`;

export const TabBarItem = styled.div`
  display: block;
  padding: 0.8em;
`;
