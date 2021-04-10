import styled from "styled-components";

export const BtnAction = styled.button`
  width: -webkit-fill-available;
  text-align: center;
  height: fit-content;
  padding: 1em;
  background: black;
  color: white;
  border-radius: 6px;
  border: 0;
  font-weight: 700;
  margin: 1em 0;
`;

export const InputField = styled.input`
  border: 1;
  padding: 1rem;
  border-color: gray;
  margin: 0.5rem 0;
  width: -webkit-fill-available;
  border-radius: 6px;
`;

export const Toast = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  border: black 2px solid;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &::before {
    content: "🚀";
  }
`;
