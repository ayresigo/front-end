import styled from "styled-components";

export const MainDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh;

  border-radius: 15px;
  outline-style: solid;
  outline-width: 1px;

  .avatar {
    border-radius: 50%;
  }

  h1 {
    color: red;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CharacterWrapper = styled.div``;
export const AvatarDiv = styled.div``;
