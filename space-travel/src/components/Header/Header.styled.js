import styled from "styled-components";

export const HeaderContainer = styled.header`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.4rem;
  }

  button {
    background-color: #312b3e;
    color: #fff;
    padding: 0.4rem;
    border-radius: 0.2rem;
    border: 1px solid #fff;

    :hover {
      background-color: #120f19;
      transition: 0.2s;
      cursor: pointer;
    }
    :active {
      background-color: #312b3e;
    }
  }
`;
