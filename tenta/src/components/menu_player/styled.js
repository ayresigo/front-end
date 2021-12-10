import styled from "styled-components";

export const MainDiv = styled.div`
  background-image: linear-gradient(
    to bottom,
    #000d21,
    #000c1e,
    #000b1c,
    #000a19,
    #000916
  );
  margin-top: 8px;
  margin-left: 8px;
  color: white;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 80vh;

  border-radius: 15px;
  /* outline-style: solid; */
  /* outline-width: 1px; */

  .avatar {
    border-radius: 50%;
  }

  h1 {
    color: red;
  }

  .chakra-stat__group {
    justify-content: space-between;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  h2 {
    text-align: center;
  }
`;

export const StatusDiv = styled.div`
  text-align: center;
`;

export const ArrowButtons = styled.button`
  transform: scale(2);
  color: ${(props) => props.color || "rgba(255, 255, 255, 0.5)"};
`;

export const PanelContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
`;
