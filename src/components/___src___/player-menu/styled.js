import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const PlayerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px 30px 25px 25px;
  height: 750px;
  width: 400px;
  margin: 8px;
  background-color: #494b50;
`;

export const TabsWrapper = styled(Tabs)`
  display: flex;
  flex-direction: column;
`;

export const TabListWrapper = styled(TabList)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 8px;
  cursor: pointer;

  .is-selected {
    color: #fff;
  }
`;
TabListWrapper.tabsRole = "TabList";

export const TabWrapper = styled(Tab)`
  :hover {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

TabWrapper.tabsRole = "Tab";

export const TabPanelWrapper = styled(TabPanel)``;
TabPanelWrapper.tabsRole = "TabPanel";

export const ListWrapper = styled.div``;
