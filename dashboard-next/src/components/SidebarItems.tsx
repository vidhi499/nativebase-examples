import React from "react";
import Home from "../../Asset/Icons/Home";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Icon,
  IconButton,
  Path,
  Row,
  Text,
} from "native-base";
import Copy from "../../Asset/Icons/Copy";
import Switch from "../../Asset/Icons/Switch";
import Form from "../../Asset/Icons/Form";
import Table from "../../Asset/Icons/Tables";
import Map from "../../Asset/Icons/Map";
import Widget from "../../Asset/Icons/Widget";
import Chart from "../../Asset/Icons/Chart";
import Calender from "../../Asset/Icons/Calender";
import CustomAccordian from "./CustomAccordian";

export default function SidebarItems() {
  return (
    <Box mt={10}>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.3" }}>
            <HStack mx={2} space={5}>
              <Home color="#5F72E4" />
              <Text
                pt={1}
                fontWeight={500}
                fontFamily="sans-serif"
                isTruncated={true}
              >
                Dashboards
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CustomAccordian data={["Dashboard", "Alternatives"]} />
          </AccordionPanel>
        </AccordionItem>

        {/* new accordian */}
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.3" }}>
            <HStack ml={2} space={5}>
              <Copy color="#FB6440" />
              <Text fontWeight={500} fontFamily="sans-serif">
                Examples
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CustomAccordian
              data={[
                "Pricing",
                "Login",
                "Register",
                "Lock",
                "Timeline",
                "Profile",
                "RTL Support",
              ]}
            />
          </AccordionPanel>
        </AccordionItem>

        {/* new accordian */}
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.3" }}>
            <HStack ml={2} space={5}>
              <Switch color="#0CCDEF" />
              <Text pt={2} fontWeight={500} fontFamily="sans-serif">
                Components
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CustomAccordian
              data={[
                "Buttons",
                "Cards",
                "Grid",
                "Notifications",
                "Icons",
                "Typography",
                "Multi Level",
              ]}
            />
          </AccordionPanel>
        </AccordionItem>

        {/* new accordian */}
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.3" }}>
            <HStack ml={2} space={5}>
              <Form color="#F4A4B5" />
              <Text fontWeight={500} fontFamily="sans-serif">
                Forms
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CustomAccordian data={["Elements", "Components", "Validations"]} />
          </AccordionPanel>
        </AccordionItem>

        {/* new accordian */}
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.3" }}>
            <HStack ml={2} space={5}>
              <Table color="black" />
              <Text fontWeight={500} fontFamily="sans-serif">
                Tables
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CustomAccordian data={["Tables", "Sortable", "React BS Tables"]} />
          </AccordionPanel>
        </AccordionItem>

        {/* new accordian */}
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.3" }}>
            <HStack ml={2} space={5}>
              <Map color="#5F72E4" />
              <Text fontWeight={500} fontFamily="sans-serif">
                Maps
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CustomAccordian data={["Google", "Vector"]} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Row my={3} ml={3}>
        <IconButton
          icon={
            <HStack ml={2} space={5}>
              <Widget color="#2DCE89" />
              <Text fontWeight={500} fontSize={14} fontFamily="sans-serif">
                Widgets
              </Text>
            </HStack>
          }
        ></IconButton>
      </Row>

      <Row my={3} ml={3}>
        <IconButton
          icon={
            <HStack ml={2} space={5}>
              <Chart color="#0CCDEF" />
              <Text fontWeight={500} fontSize={14} fontFamily="sans-serif">
                Charts
              </Text>
            </HStack>
          }
        ></IconButton>
      </Row>

      <Row my={3} ml={3}>
        <IconButton
          icon={
            <HStack ml={2} space={5}>
              <Calender color="#F6375B" />
              <Text fontWeight={500} fontSize={14} fontFamily="sans-serif">
                Calenders
              </Text>
            </HStack>
          }
        ></IconButton>
      </Row>
    </Box>
  );
}
