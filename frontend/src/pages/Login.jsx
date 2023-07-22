import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      email,
      password,
    };

    axios
      .post("https://clumsy-shoe-worm.cyclic.app/dealers/login", payload)
      .then((res) => {
        toast({
          title: "Logged In.",
          description: "You're logged in now.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box p={"3rem"}>
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
      >
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Login
        </Text>
        <Input
          placeholder="Emter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Emter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box>
          <Text fontSize={"s"} textDecoration={"underline"} cursor={"pointer"}>
            <Link to={"/signup"}>No Account? Click to Signup</Link>
          </Text>
        </Box>

        <Button onClick={handleClick} _hover={{ bg: "blue.200" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
