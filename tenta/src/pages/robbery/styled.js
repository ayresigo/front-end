import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Banner = styled.img`
  align-self: center;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  /* height: px; */

  /* -webkit-box-reflect: below 4px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)); */
`;

export const RobberyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RobberyContent = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 16px;
  justify-content: space-around;
`;
