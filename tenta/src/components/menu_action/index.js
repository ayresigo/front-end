import { Button } from "@chakra-ui/button";
import { Divider } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import React from "react";
import { MenuItems } from "./action_items";
import * as S from "./styled";

function ActionMenu() {
  return (
    <div>
      <S.MenuWrapper>
        <h1>Menu</h1>
        <Divider />
        {MenuItems.map((item, index) => {
          return (
            <Button variant="ghost">
              <Link to={item.url}>{item.title}</Link>
            </Button>
          );
        })}
      </S.MenuWrapper>
    </div>
  );
}

export default ActionMenu;
