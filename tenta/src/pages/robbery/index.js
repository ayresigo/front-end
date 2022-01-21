import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Skeleton, Button, SkeletonText, Fade } from "@chakra-ui/react";
import {
  Divider,
  Heading,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect, useState } from "react";
import RobberyItem from "../../components/robbery_item";
import api from "../../services/api";
import * as S from "./styled";
import { ColorModeScript } from "@chakra-ui/react";
import RobberyEvents from "../../components/robbery_event";
import { FaVideoSlash } from "react-icons/fa";

const Robbery = () => {
  const [robberies, setRobberies] = useState(null);
  const [myRobberies, setMyRobberies] = useState([
    { name: "Velha", participants: 1, duration: 500, claimable: true },
    {
      name: "Radio de carro",
      participants: 2,
      duration: 3500,
      claimable: false,
    },
    { name: "Velha", participants: 1, duration: 320, claimable: false },
  ]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalIsOpened, setModalIsOpened] = useState(false);
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
    <>
      <S.MainDiv>
        <Skeleton
          isLoaded={isLoaded}
          w="fit-content"
          mt="8px"
          ml="40px"
          borderRadius="15px"
        >
          <Heading size="3xl" width="fit-content">
            Robbery
          </Heading>
        </Skeleton>
        <S.RobberyContent>
          <Skeleton isLoaded={isLoaded} h="250px" w="250px" borderRadius="15px">
            <S.Banner src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb2d4621334149.562ff6d3a8353.jpg" />
          </Skeleton>
          <S.RobberyText>
            <SkeletonText
              isLoaded={isLoaded}
              w="750px"
              noOfLines={5}
              spacing={4}
            >
              <Text>
                O crime perfeito é aquele que não deixa vestígios...Seja rápido
                na ação e preciso nos detalhes e talvez você consiga escapar com
                uma boa grana. Às vezes tu sozinho não dá conta do recado, e é
                aí que entra a sua gangue: com a ajuda de seus comparsas você
                poderá executar roubos mais quentes. Você irá descobrir mais
                roubos e dificuldades após a conclusão de novos níveis!
              </Text>
            </SkeletonText>
            {isLoaded ? (
              <Alert
                w="inherit"
                status="warning"
                variant="top-accent"
                bg="rgba(251, 211, 141, 0.3)"
              >
                <AlertIcon />
                Verifique todas as informações de roubo para não ser pego de
                surpresa.
              </Alert>
            ) : null}
          </S.RobberyText>
        </S.RobberyContent>
        <Divider />
        Your robberies:
        <RobberyEvents myRobberies={myRobberies} />
        <Divider mt="2" />
        Selecione um roubo:
        <Wrap justify="center">
          {isLoaded ? (
            robberies.data.map((robbery, id) => {
              return (
                <WrapItem p="2">
                  <Fade in={isLoaded}>
                    <RobberyItem
                      id={robbery.id}
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
                      deathRisk={robbery.deathRisk}
                      background={robbery.background}
                    />
                  </Fade>
                </WrapItem>
              );
            })
          ) : (
            <WrapItem>
              <Spinner size="xl" />
            </WrapItem>
          )}
          <Button
            colorScheme="pink"
            variant="ghost"
            onClick={() => {
              if (isLoaded) setIsLoaded(false);
              else setIsLoaded(true);
            }}
          >
            {isLoaded ? "Unload" : "Load"}
          </Button>
        </Wrap>
      </S.MainDiv>
    </>
  );
};

export default Robbery;
