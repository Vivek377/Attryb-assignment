import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex
        border={"1px solid black"}
        justifyContent={"center"}
        gap={"15rem"}
        p={"1rem"}
        bg={"orange.200"}
        color={"white"}
      >
        <Box>
          <Link to={"/"}>
            <Text fontWeight={"semibold"} fontSize={"xl"}>BUYC</Text>
          </Link>
        </Box>

        <Box>
          <Link to={"/oem"}>
            <Text fontWeight={"semibold"} fontSize={"2xl"}>
              Original car specs
            </Text>
          </Link>
        </Box>

        <Box>
          <Link to={"/addCar"}>
            <Text fontWeight={"semibold"} fontSize={"2xl"}>
              Add cars
            </Text>
          </Link>
        </Box>

        <Box>
          <NavLink to={"/login"}>
            <Text fontWeight={"semibold"} fontSize={"2xl"}>
              Login
            </Text>
          </NavLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
