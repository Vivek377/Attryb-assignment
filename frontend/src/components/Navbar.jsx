import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Links = [
  { name: "All Cars", path: "/" },
  { name: "", path: "/recipe" },
  { name: "Original Cars", path: "/oem" },
  { name: "Your Cars", path: "/yourCars" },
  { name: "Add Cars", path: "/addCar" },
  { name: "Login", path: "/login" },
];

const Navbar = () => {
  return (
    <Box>
      <Flex
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"1em"}
        justifyContent={"center"}
        gap={"9rem"}
      >
        {Links.map((link) => (
          <NavLink
            style={({ isActive }) => ({
              padding: "0.3rem",
              borderBottom: isActive
                ? "2px solid #2F855A"
                : "2px solid transparent",
            })}
            key={link.name}
            to={link.path}
          >
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              {link.name}
            </Text>
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
};

export default Navbar;
