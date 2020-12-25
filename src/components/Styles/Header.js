import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-directon: row;
  justify-content: space-between;
  width: -webkit-fill-available;
  padding: 0.2em;
  box-shadow: ${(props) => (props.shadow ? "0 1px 6px -4px black;" : "none;")}
  position: sticky;
  top: 0;
  background: white;
`;

export const HeaderItem = styled.div`
  padding: 0.8em;
  display: block;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -1px;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-directon: row;
  justify-content: space-between;
  width: -webkit-fill-available;
  overflow: auto;
  padding: 1em 0.4em;
  position: sticky;
  box-shadow: 0 1px 6px -4px black;
`;

export const SubHeaderItem = styled.div`
  margin: 0 0.4em;
  white-space: nowrap;
  padding: 0.6em 1.2em;
  display: block;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 4px 6px -5px #7070708f;
  background: #ecececab;
`;

export const SearchField = styled.input`
  border-radius: 50px;
  font-size: 1em;
  border: 1px solid;
  padding: 0.6em;

  &:focus {
    outline: none;
  }
`;
