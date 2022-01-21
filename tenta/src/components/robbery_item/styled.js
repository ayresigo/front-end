import styled from "styled-components";

export const MainDiv = styled.div`
  /* background-color: red; */

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

    .overlay {
      height: inherit;
    }
  }
`;

export const FixedInfo = styled.div`
  width: 100%;
  background-color: black;
`;

export const PopInfo = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
  align-items: center;
  justify-content: flex-end;
  opacity: 1;
`;

export const LockedInfo = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

export const PopInfoIndividualStat = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopInfoMultiStat = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: inherit;
`;

export const AuxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PopInfoMultiIndividualStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  z-index: 0;
  position: absolute;
  border-radius: inherit;
  background: red;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 0.65) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  overflow: hidden;
  width: inherit;
  height: 0;
  transition: 0.25s ease;
`;

export const Button = styled.button`
  border-radius: 0 0 15px 15px;
  position: relative;
  background: url(${(props) => props.bg});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  width: 200px;
`;

export const ModalMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  /* background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 0.65) 65%,
    rgba(0, 0, 0, 0) 100%
  ); */
`;

export const SelectedCharactersMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SelectedCharactersRobberyInfo = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 280px;
`;

export const SelectedCharactersIndividualRobberyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedCharactersIndividualLabelRobberyInfo = styled.div``;

export const SelectedCharactersIndividualValueRobberyInfo = styled.div`
  display: flex;
`;

export const SelectedCharactersIndividualModifierRobberyInfo = styled.div`
  color: green;
`;
