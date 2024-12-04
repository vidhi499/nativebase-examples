import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Input,
  Menu,
  MenuItem,
  MenuItemOption,
  MenuOptionGroup,
  Path,
  Row,
  Text,
} from "native-base";
import Gravatar from "react-gravatar";

export default function ProfileMenu() {
  return (
    <Menu
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
    </Menu>
  );
}
