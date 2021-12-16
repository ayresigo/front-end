import styled from "styled-components";
import * as F from "../../styles/fonts";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 72%,
    rgba(219, 219, 219, 1) 100%
  );
  color: black;
  width: 100%;
  height: 100%;
`;

export const JournalTitle = styled.div`
  ${F.JournalTitleFace}
  font-family: 'CloisterBlack', sans-serif;
  font-size: 70px;
`;

export const JournalContent = styled.div`
  padding: 16px;
`;

export const FirstContentImageAndLabel = styled.div`
  width: 400px;
`;

export const FirstContentImage = styled.img`
  border-radius: 15px;
  object-fit: cover;
  height: 350px;
`;
