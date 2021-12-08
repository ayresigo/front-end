import React, { useState } from "react";
import * as S from "./styled";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { SkeletonCircle, Skeleton, SkeletonText } from "@chakra-ui/skeleton";

function PlayerMenu() {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const toggleLoad = () => {
    if (pageIsLoaded) setPageIsLoaded(false);
    else setPageIsLoaded(true);
  };
  return (
    <S.MainDiv>
      {/* {pageIsLoaded ? <Avatar /> : <SkeletonCircle />} */}
      <SkeletonCircle isLoaded={pageIsLoaded}>
        <Avatar size="m" />
      </SkeletonCircle>
      <Skeleton isLoaded={pageIsLoaded}>
        <div>Birabi dabi ridudou</div>
      </Skeleton>
      <Button
        onClick={() => {
          toggleLoad();
        }}
      >
        Toggle Load
      </Button>
    </S.MainDiv>
  );
}

export default PlayerMenu;
