import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import React from "react";
import * as S from "./styled";
import {
  Heading,
  IconButton,
  Icon,
  Button,
  Text,
  Wrap,
  WrapItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Badge,
  CircularProgress,
  Progress,
  CircularProgressLabel,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
} from "@chakra-ui/react";
import { MdMale } from "react-icons/md";
import { EditIcon } from "@chakra-ui/icons";

function Character(props) {
  const calculatePerc = (current, total) => {
    return (current / total) * 100;
  };

  return (
    <Popover>
      <PopoverTrigger>
        <button>
          <S.Character>
            <AvatarGroup max={2} spacing="-15">
              <Avatar src={props.avatar}>
                <AvatarBadge
                  borderColor="green.900"
                  bg="green.500"
                  boxSize="1em"
                />
              </Avatar>
              {props.item ? <Avatar size="sm" /> : null}
            </AvatarGroup>
            <Progress
              mt="3px"
              width="100%"
              value={calculatePerc(props.currentHealth, props.health)}
              size="xs"
              colorScheme="green"
            />
            <Progress
              width="100%"
              value={calculatePerc(props.currentStamina, props.stamina)}
              size="xs"
              colorScheme="yellow"
            />
          </S.Character>
        </button>
      </PopoverTrigger>
      <PopoverContent borderColor="black" bgColor="blue.900">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>#{props.characterId}</PopoverHeader>
        <PopoverBody>
          <S.PopoverBody>
            <S.PopoverAvatarAndStatus>
              <Avatar size="xl" src={props.avatar} />
              <S.Badge>
                <Badge variant="outline" colorScheme="blue">
                  {props.rarity}
                </Badge>
              </S.Badge>
              <h4>{props.status.name}</h4>
            </S.PopoverAvatarAndStatus>
            <S.PopoverCharacterInfo>
              <S.PopoverName>
                <Icon as={MdMale} />

                <Tooltip hasArrow placement="top-start" label={props.name}>
                  <Heading size="md" marginLeft="4px" maxW="138px" isTruncated>
                    {props.name}
                  </Heading>
                </Tooltip>

                <IconButton
                  disabled
                  ml="2"
                  variant="ghost"
                  icon={<EditIcon />}
                  size="xs"
                />
              </S.PopoverName>
              <div>
                <S.ProgressLabel>
                  <Text>Health</Text>
                  <Text fontSize="xs" marginTop="4px">
                    ({props.currentHealth}/{props.health})
                  </Text>
                </S.ProgressLabel>
                <Progress
                  isAnimated
                  hasStripe
                  value={calculatePerc(props.currentHealth, props.health)}
                  max={100}
                  min={0}
                  colorScheme="green"
                  // bg="black"
                />
              </div>
              <div>
                <S.ProgressLabel>
                  <Text>Stamina</Text>
                  <Text fontSize="xs" marginTop="4px">
                    ({props.currentStamina}/{props.stamina})
                  </Text>
                </S.ProgressLabel>
                <Progress
                  isAnimated
                  hasStripe
                  value={calculatePerc(props.currentStamina, props.stamina)}
                  max={100}
                  min={0}
                  colorScheme="yellow"
                  // bg="black"
                />
              </div>
              {/* <S.HealthAndStamina>
          <div>
            <Text fontSize="lg">Health</Text>
            <Text fontSize="xs" marginTop="-8px">
              (30/100)
            </Text>
            <CircularProgress value={40} color="green.400">
              <CircularProgressLabel>
                40%
              </CircularProgressLabel>
            </CircularProgress>
          </div>
          <div>
            <Text fontSize="lg">Stamina</Text>
            <Text fontSize="xs" marginTop="-8px">
              (35/100)
            </Text>
            <CircularProgress value={35} color="yellow.400">
              <CircularProgressLabel>
                35%
              </CircularProgressLabel>
            </CircularProgress>
          </div>
        </S.HealthAndStamina> */}
              <S.ProgressLabel>
                <Text>Power</Text>
                <Text>{props.power}</Text>
              </S.ProgressLabel>
              <S.ProgressLabel>
                <Text>Job</Text>
                <div>
                  <Badge variant="outline" colorScheme="white">
                    {props.job}
                  </Badge>
                </div>
              </S.ProgressLabel>
              <S.ProgressLabel>
                <Text>Affiliation</Text>
                <div>
                  <Badge variant="outline" colorScheme="red">
                    {props.affiliation}
                  </Badge>
                </div>
              </S.ProgressLabel>
              <S.ProgressLabel>
                <Text>Creation Date</Text>
                <div>
                  <Badge variant="outline" colorScheme="white">
                    {props.creationDate}
                  </Badge>
                </div>
              </S.ProgressLabel>
            </S.PopoverCharacterInfo>
          </S.PopoverBody>
        </PopoverBody>
        <PopoverFooter>
          <Button>Select</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default Character;
