import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OEMCard from "../components/OEMCard";

const OEM = () => {
  const [cars, setCars] = useState([]);
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const handleSort = (sortBy, order) => {
    setSortBy(sortBy);
    setOrder(order);
  };

  useEffect(() => {
    axios
      .get(`https://drab-red-cape-buffalo-tutu.cyclic.app/oem?q=${q}&sortBy=${sortBy}&order=${order}`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, [q, sortBy, order]);

  return (
    <Box fontFamily={"sans-serif"} p={"3rem"}>
      <Flex
        mt={"2rem"}
        boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
        justifyContent={"right"}
        gap={"3rem"}
        p={"1em"}
        borderRadius={"1em"}
        mr={"3rem"}
      >
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Sort by Mileage
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button onClick={() => handleSort("mileage", "asc")}>
                  Low to High
                </Button>
                <Button onClick={() => handleSort("mileage", "desc")}>
                  High to Low
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Sort by Price
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button onClick={() => handleSort("price", "asc")}>
                  Low to High
                </Button>
                <Button onClick={() => handleSort("price", "asc")}>
                  High to Low
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Filter by Color
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Select
                  onChange={(e) => [
                    setSortBy("color"),
                    setOrder(e.target.value),
                  ]}
                >
                  <option>Select colors</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="orange">Orange</option>
                  <option value="gray">Gray</option>
                  <option value="purple">Purple</option>
                  <option value="yellow">Yellow</option>
                </Select>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Input
            placeholder="Search Cars by name"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </Box>
      </Flex>
      <Grid
        templateColumns="repeat(4, 1fr)"
        w={"90%"}
        m={"auto"}
        mt={"3rem"}
        mb={"3rem"}
        gap={6}
      >
        {cars &&
          cars.map((ele) => {
            return <OEMCard key={ele._id} {...ele} />;
          })}
      </Grid>
    </Box>
  );
};

export default OEM;
