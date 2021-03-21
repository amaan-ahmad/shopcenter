import styled from "styled-components";

export const SizeOption = styled.div`
  width: 30px;
  height: 30px;
  border: ${({ isActive }) => (isActive ? "2px solid gray" : "0")};
  padding: 0.6em;
  background: whitesmoke;
  color: black;
  border-radius: 50%;
  text-align: center;
  margin-right: 0.4em;
  margin-top: 1em;
  vertical-align: middle;
  font-weight: 600;
`;
