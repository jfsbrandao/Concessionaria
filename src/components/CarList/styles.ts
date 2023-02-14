import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 40px 80px 0px 80px;

  div {
    opacity: 1;
    transition: opacity 1s;
    padding: 0px 20px;
  }
  &:hover div {
    transition: opacity 0.5s;
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
