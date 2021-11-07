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
import { MdOutlineSell } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import React from "react";
import * as S from "./styled";

const Character = ({
  id,
  characterAvatar,
  currentHealth,
  totalHealth,
  currentStamina,
  totalStamina,
  currentStatus,
  rarity,
}) => {
  id = 1;
  characterAvatar = "none";
  currentHealth = 35;
  totalHealth = 100;
  currentStamina = 50;
  totalStamina = 100;
  rarity = "Legendary";
  currentStatus = "Working";

  const calculateHealth = (currentHealth, totalHealth) => {
    return (currentHealth / totalHealth) * 100;
  };

  const calculateStamina = (currentStamina, totalStamina) => {
    return (currentStamina / totalStamina) * 100;
  };

  return (
    <S.MainWrapper>
      <Popover placement="top-start">
        <PopoverTrigger>
          <button>
            <Avatar size="md" src={characterAvatar}>
              <AvatarBadge boxSize="1.15em" bg="green.500" />
            </Avatar>
            <Progress
              mt="1"
              value={calculateHealth(currentHealth, totalHealth)}
              size="xs"
            />
            <Progress
              value={calculateStamina(currentStamina, totalStamina)}
              size="xs"
            />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">#{id}</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <S.BodyWrapper>
              <S.StatusWrapper>
                <Avatar size="xl" src={characterAvatar} />
                <h1>{currentStatus}</h1>
              </S.StatusWrapper>
              <S.InfoWrapper>
                <S.NameWrapper>
                  <h1>Name</h1>
                  <IconButton
                    ml="2"
                    variant="ghost"
                    aria-label="Call Sage"
                    icon={<EditIcon />}
                    size="xs"
                  />
                </S.NameWrapper>
                <S.HealthWrapper>
                  <S.BadgesWrapper>
                    <Badge variant="outline" colorScheme="orange">
                      {rarity}
                    </Badge>
                  </S.BadgesWrapper>
                  <h2>
                    Health{" "}
                    <h3>
                      ({currentHealth}/{totalHealth})
                    </h3>
                  </h2>
                  <Progress
                    value={calculateHealth(currentHealth, totalHealth)}
                    size="xs"
                  />
                </S.HealthWrapper>
                <S.StaminaWrapper>
                  <h2>
                    Stamina{" "}
                    <h3>
                      ({currentStamina}/{totalStamina})
                    </h3>
                  </h2>
                  <Progress
                    value={calculateStamina(currentStamina, totalStamina)}
                    size="xs"
                  />
                </S.StaminaWrapper>
                <h4>Power: 5000</h4>
                <h4>Money/d: 3000</h4>
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
              </S.InfoWrapper>
            </S.BodyWrapper>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </S.MainWrapper>
  );
};

export default Character;
