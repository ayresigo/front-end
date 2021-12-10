import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import React from "react";

function Character(props) {
  return (
    <AvatarGroup max={2} spacing="-15">
      <Avatar>
        <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1em" />
      </Avatar>
      {props.item ? <Avatar size="sm" /> : null}
    </AvatarGroup>
  );
}

export default Character;
