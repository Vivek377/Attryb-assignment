import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      name,
      email,
      password,
    };

    axios
      .post("https://clumsy-shoe-worm.cyclic.app/dealers/signup", payload)
      .then((res) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        console.log(res.data);
        navigate("/login");

      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        w={"30%"}
        m={"auto"}
        mt={"2rem"}
        gap={"2rem"}
        p={"2rem"}
        borderRadius={"2em"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        bg={"pink.200"}
        color={"white"}
      >
        <Heading>Signup</Heading>
        <Input
          placeholder="Enter name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box>
          <Text fontSize={"xs"} textDecoration={"underline"} cursor={"pointer"}>
            <Link to={"/login"}>Already have an Account Click to login</Link>
          </Text>
        </Box>

        <Button onClick={handleClick} _hover={{ bg: "blue.200" }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Signup;
