import React, { useState } from "react";
import {
  Text,
  Box,
  Button,
  Container,
  Flex,
  Menu,
  MenuOptionGroup,
  MenuItemOption,
  Divider,
} from "native-base";
import Header from "./Header";
import Gravatar from "react-gravatar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <Flex direction="row" width="100%" height="100%">
      <Box
        width={
          isOpen
            ? ["0%", "0%", "0%", "13%", "13%"]
            : ["0%", "0%", "0%", "3%", "3%"]
        }
      >
        <Sidebar handleToggle={handleToggle} isOpen={isOpen} />
      </Box>
      <Box
        width={
          isOpen
            ? ["100%", "100%", "100%", "87%", "87%"]
            : ["100%", "100%", "100%", "97%", "97%"]
        }
      >
        <Header />
      </Box>

      {/* <Menu
        trigger={(triggerProps: any) => {
          return (
            <Button {...triggerProps} bg="teal.2" color="white">
              <Gravatar
                email="meenum@geekyants.com"
                size={40}
                rating="pg"
                style={{ borderRadius: 50, marginRight: 10 }}
                default="monsterid"
              />
              <Text
                fontWeight={600}
                fontFamily="sans-serif"
                //color="rgba(255, 255, 255, 0.65)"
                color="white"
                display={["none", "none", "none", "block"]}
              >
                Vidhi Kataria
              </Text>
            </Button>
          );
        }}
        px={2}
        closeOnSelect={true}
        alignItems="center"
        borderWidth={0}
      >
        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
          <MenuItemOption value="asc">Ascending</MenuItemOption>
          <MenuItemOption value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
        <Divider />
        <MenuOptionGroup title="Country" type="checkbox">
          <MenuItemOption value="email">Email</MenuItemOption>
          <MenuItemOption value="phone">Phone</MenuItemOption>
          <MenuItemOption value="country">Country</MenuItemOption>
        </MenuOptionGroup>
      </Menu> */}
    </Flex>
  );
};

export default Dashboard;
