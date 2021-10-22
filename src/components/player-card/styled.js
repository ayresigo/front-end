import styled from "styled-components";

export const PlayerCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d9d9d9;
  border-radius: 25px 25px 0 0;
  width: 100%;
  height: 180px;
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
`;

export const PlayerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  width: 100%;
`;

export const PlayerPersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 8px;
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
