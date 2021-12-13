import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect, useState } from "react";
import RobberyItem from "../../components/robbery_item";
import api from "../../services/api";
import * as S from "./styled";

const Robbery = () => {
  const [robberies, setRobberies] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const _api = new api();

  useEffect(() => {
    const getRobberies = async () => {
      var _robberies = await (await _api.getRobberies()).data;
      setRobberies({ data: _robberies });
      setIsLoaded(true);
    };

    getRobberies();
  }, []);

  return (
    <S.MainDiv>
      <Wrap justify="center">
        {isLoaded ? (
          robberies.data.map((robbery, id) => {
            return (
              <WrapItem p="2">
                <RobberyItem
                  name={robbery.name}
                  description={robbery.description}
                  reward={robbery.reward}
                  duration={robbery.duration}
                  stamina={robbery.stamina}
                  power={robbery.power}
                  minParticipants={robbery.minParticipants}
                  maxParticipants={robbery.maxParticipants}
                  ambushRisk={robbery.ambushRisk}
                  prisonRisk={robbery.prisonRisk}
                  deathRist={robbery.deathRisk}
                  background={robbery.background}
                />
              </WrapItem>
            );
          })
        ) : (
          <Spinner />
        )}
      </Wrap>
    </S.MainDiv>
  );
};

export default Robbery;
