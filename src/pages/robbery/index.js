import { Select } from "@chakra-ui/select";
import React, { useEffect, useState } from "react";
import Character from "../../components/character-status";
import { RobberyMock } from "./mock";
import * as S from "./styled";

function Robbery() {
  const [value, setValue] = useState({ value: undefined });
  const [robberyData, setRobberyData] = useState(null);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    var robbery = RobberyMock.filter((item) => {
      return item.option === value.value;
    });
    var _robbery = null;
    if (value.value) {
      _robbery = robbery[0];

      setRobberyData({
        nome: _robbery.nome,
        option: _robbery.option,
        description: _robbery.description,
        difficulty: _robbery.difficulty,
        reward: _robbery.reward,
        stamina: _robbery.stamina,
      });
      setIsSet(true);
    }
  }, [value]);

  return (
    <S.MainWrapper>
      Robbery
      <Select
        size="sm"
        placeholder="Escolha quem roubar"
        textAlign="center"
        onChange={(e) => setValue({ value: e.target.value })}
      >
        {RobberyMock.map((item, id) => {
          return <option value={item.option}>{item.nome}</option>;
        })}
      </Select>
      <div>
        {isSet ? (
          <>
            <div>{robberyData.description}</div>
            <div>{robberyData.difficulty}</div>
            <div>{robberyData.reward}</div>
            <div>{robberyData.stamina}</div>
          </>
        ) : (
          <>
            <div>Descrição</div>
            <div>Dificuldade</div>
            <div>Premiação</div>
            <div>Stamina nescessária</div>
          </>
        )}
      </div>
      Selecione o personagem:
      <Character />
    </S.MainWrapper>
  );
}

export default Robbery;
