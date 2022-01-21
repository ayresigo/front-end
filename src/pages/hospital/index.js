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

const Hospital = () => {
  const [robberies, setRobberies] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const _api = new api();

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
            Hospitals
          </Heading>
        </Skeleton>
        <S.RobberyContent>
          <Skeleton isLoaded={isLoaded} h="250px" w="250px" borderRadius="15px">
            <S.Banner src="https://exame.com/wp-content/uploads/2020/08/leito.uti_.hospital.de_.campanha.rj_-1.jpg" />
          </Skeleton>
          <S.RobberyText>
            <SkeletonText
              isLoaded={isLoaded}
              w="750px"
              noOfLines={5}
              spacing={4}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Mauris vitae ultricies leo integer malesuada nunc vel. Non diam
                phasellus vestibulum lorem sed risus. Volutpat ac tincidunt
                vitae semper quis. Nulla malesuada pellentesque elit eget.
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
      </S.MainDiv>
    </>
  );
};

export default Hospital;
