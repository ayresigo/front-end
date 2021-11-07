import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  border-radius: 15px;
  outline-style: solid;
  outline-width: 1px;
`;

export const ProfileWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SocialInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  h1 {
    font-size: 20px;
  }

  h2 {
    margin-top: -8px;
    font-size: 12px;
  }
`;

export const StatusWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;

  li {
    text-align: center;
  }

  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 12px;
  }
`;

export const CharactersWrapper = styled.ul`
    display: flex;
    width: 100%;
`;
