import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-directon: row;
  justify-content: space-between;
  width: -webkit-fill-available;
  padding: 0.2em;
  box-shadow: 0 1px 6px -4px black;
  position: sticky;
  top: 0;
`;

export const HeaderItem = styled.div`
  padding: 0.8em;
  display: block;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -1px;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-directon: row;
  justify-content: space-around;
  width: -webkit-fill-available;
  overflow: hidden;
  padding: 0.8em;
  border-bottom: 1px solid lightgrey;
  position: sticky;
`;

export const SubHeaderItem = styled.div`
  padding: 0.2em;
  display: block;
  font-size: 12px;
  font-weight: 600;
`;
