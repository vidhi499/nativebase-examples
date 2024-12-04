import React, { useState } from "react";
import { Box, Icon, IconButton, Path, Image, HStack, Row } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import SidebarItems from "./SidebarItems";
// let logo = require("../../Asset/Images/geekyants.png");
const Sidebar = ({ handleToggle, isOpen }: any) => {
  return (
    <ScrollView>
      <Box
        bg="white"
        position="fixed"
        height="100%"
        width="100%"
        pt={5}
        display={["none", "none", "none", "block", "block"]}
      >
        <Box width="100%" bg="white">
          <Row alignIems="center" justifyContent="space-between" px={3}>
            <Box
              display={isOpen ? "block" : "none"}
              width="70%"
              py={1}
              pl={2}
              bg="white"
            >
              <Image
                p={3}
                alt="me"
                width="80%"
                height="15"
                source="https://media.designrush.com/agencies/97612/conversions/GeekyAnts-logo-profile.jpg"
              />
            </Box>
            <IconButton
              px={isOpen ? 5 : 0}
              onPress={handleToggle}
              icon={
                <Icon viewBox="0 0 512 512" mt={1} color="black">
                  <Path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
                  <Path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />
                  <Path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20    C512,404.954,503.046,396,492,396z" />
                </Icon>
              }
            />
          </Row>
        </Box>
        <SidebarItems />
      </Box>
    </ScrollView>
  );
};

export default Sidebar;
