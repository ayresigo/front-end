import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  outline-style: solid;
  outline-width: 1px;

  width: 200px;
  height: 80px;

  .black {
    opacity: 0;
  }

  h1 {
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    outline-width: 2px;
    outline-style: solid;
    outline-color: black;

    .bg {
      filter: blur(3px) grayscale(75%);
    }

    .black {
      opacity: 0.7;
    }

    h1 {
      opacity: 1;
    }
  }
`;

export const BlackWrapper = styled.div`
  position: fixed;
  width: inherit;
  height: inherit;
  background-color: black;
`;

export const BackgroundWrapper = styled.div`
  display: block;
  background: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80px;
`;

export const InfoWrapper = styled.h1`
  display: flex;
  position: fixed;
  display: block;
  text-align: center;
  width: inherit;
  font-size: 13px;

  h1,
  h2,
  h3,
  h4 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  h1 {
    justify-content: center;
    color: white;
    background-color: black;
    width: inherit;
  }

  h2 {
    color: red;
  }

  h3 {
    color: yellow;
  }

  h4 {
    color: green;
  }
`;

export const Basic = styled.div``;
