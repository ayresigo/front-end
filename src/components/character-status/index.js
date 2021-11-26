import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { Progress } from "@chakra-ui/progress";
import { EditIcon } from "@chakra-ui/icons";
import { Badge, Stack } from "@chakra-ui/layout";
import {
  MdBloodtype,
  MdOutlineBloodtype,
  MdOutlineCheckCircleOutline,
  MdOutlineFamilyRestroom,
  MdOutlineSell,
} from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Icon from "@chakra-ui/icon";
import Timer from "../../pages/timer";

const Character = (props) => {
  const [count, setCount] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const calculateHealth = (currentHealth, totalHealth) => {
    return (currentHealth / totalHealth) * 100;
  };

  const calculateStamina = (currentStamina, totalStamina) => {
    return (currentStamina / totalStamina) * 100;
  };

  const handleClick = (e) => {
    props.sendData(props.characterId);
  };

  var currentHealth = 100;
  var currentStamina = 50;

  useEffect(() => {
    if (props.timeLeft <= 0) {
      setCount(false);
    }
  }, [props.timeLeft]);

  return (
    <S.MainWrapper>
      <Popover placement="top-start">
        <PopoverTrigger>
          <button>
            <Avatar size="md" src={props.avatar}>
              <AvatarBadge boxSize="1.15em" bg={props.status[0].bgColor}>
                {/* <Iconx'
                  as={props.status[0].icon}
                  color={props.status[0].iconColor}
                  w="4"
                  h="4"
                /> */}
              </AvatarBadge>
            </Avatar>
            <Progress
              mt="1"
              value={calculateHealth(currentHealth, props.health)}
              size="xs"
            />
            <Progress
              value={calculateStamina(currentStamina, props.stamina)}
              size="xs"
            />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">
            #{props.characterId}
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <S.BodyWrapper>
              <S.StatusWrapper>
                <Avatar size="xl" src={props.avatar} />
                <h1>{props.status[0].name}</h1>

                {count ? (
                  <>
                    <h2>Time left: </h2>
                    <Timer seconds={props.timeLeft} />
                  </>
                ) : (
                  <Button>Claim</Button>
                )}
              </S.StatusWrapper>
              <S.InfoWrapper>
                <S.NameWrapper>
                  <h1>{props.name}</h1>
                  <IconButton
                    ml="2"
                    variant="ghost"
                    icon={<EditIcon />}
                    size="xs"
                  />
                </S.NameWrapper>
                <S.HealthWrapper>
                  <S.BadgesWrapper>
                    <Badge variant="outline" colorScheme="orange">
                      {props.rarity}
                    </Badge>
                  </S.BadgesWrapper>
                  <h2>
                    Health{" "}
                    <h3>
                      ({currentHealth}/{props.health})
                    </h3>
                  </h2>
                  <Progress
                    value={calculateHealth(currentHealth, props.health)}
                    size="xs"
                  />
                </S.HealthWrapper>
                <S.StaminaWrapper>
                  <h2>
                    Stamina{" "}
                    <h3>
                      ({currentStamina}/{props.stamina})
                    </h3>
                  </h2>
                  <Progress
                    value={calculateStamina(currentStamina, props.stamina)}
                    size="xs"
                  />
                </S.StaminaWrapper>
                <h4>Power: {props.power}</h4>
                <h4>Money/d: {props.moneyRatio}</h4>
                {props.showSellingOptions ? (
                  <Stack direction="row" spacing={4} align="center">
                    <Button
                      leftIcon={<BiTransfer />}
                      variant="ghost"
                      size="sm"
                      disabled
                    >
                      Transfer
                    </Button>
                    <Button
                      rightIcon={<MdOutlineSell />}
                      variant="ghost"
                      size="sm"
                      disabled
                    >
                      Sell
                    </Button>
                  </Stack>
                ) : null}

                {props.selectable ? (
                  <Button
                    rightIcon={<MdOutlineCheckCircleOutline />}
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    Select
                  </Button>
                ) : null}
              </S.InfoWrapper>
            </S.BodyWrapper>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </S.MainWrapper>
  );
};

export default Character;
