import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: red;

  .robbery_info {
    opacity: 0;
  }

  .head {
    background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
  }

  .foot {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
  }

  &:hover {
    /* color: blue; */
    .robbery_info {
      opacity: 1;
    }
  }
`;

export const FixedInfo = styled.div`
  width: 100%;
  background-color: black;
`;

export const Button = styled.button`
  background: url(${(props) => props.bg});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  width: 200px;
`;
