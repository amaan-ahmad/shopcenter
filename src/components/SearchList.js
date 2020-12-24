import React from "react";
import {
  SearchListScroll,
  SearchListItem,
  SearchListItemName,
  SearchListItemImage,
} from "../components/Styles/SearchListStyle";
export default function SearchList() {
  return (
    <>
      <SearchListScroll>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
          return (
            <>
              <SearchListItem key={index}>
                <SearchListItemImage src="https://placehold.it/100x100" />
                <SearchListItemName>Popular dress</SearchListItemName>
              </SearchListItem>
            </>
          );
        })}
      </SearchListScroll>
    </>
  );
}
