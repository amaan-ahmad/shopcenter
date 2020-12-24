import styled from "styled-components";

export const SearchListScroll = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4em;
`;

export const SearchListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.6em;
  justify-item: space-between;
`;

export const SearchListItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 0.8em;
`;

export const SearchListItemName = styled.div`
  display: block;
  font-weight: 600;
  font-size: 1.2em;
`;
