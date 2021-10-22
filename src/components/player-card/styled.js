import styled from "styled-components";

export const PlayerCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #494b50;
  border-radius: 25px 25px 0 0;
  width: 100%;
  height: 180px;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const PlayerAvatarWrapper = styled.img`
  display: block;
  border-radius: 50%;
  margin-top: 8px;
  max-height: 150px;
`;

export const CurrentStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const PlayerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  width: 250px;
  color: #fff;
`;

export const PlayerPersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 8px;

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 12px;
  }
`;

export const PlayerStatusWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 20px 30px;
  list-style: none;
  text-align: center;
  justify-items: start;

  margin-bottom: 8px;
`;

export const Example = styled.div`
  /* display: flex; */
`;
