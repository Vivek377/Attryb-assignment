import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColors] = useState([]);
  const [km, setKm] = useState("");
  const [scratches, setScratches] = useState("");
  const [accidents, setAccidents] = useState("");
  const [prevBuyers, setPrevBuyers] = useState("");
  const [originalPaint, setOriginalPaint] = useState("");
  const [registrationPlace, setregistrationPlace] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      title,
      image,
      price,
      colors: colors.split(" "),
      km,
      scratches,
      accidents,
      prevBuyers,
      originalPaint,
      registrationPlace,
    };

    if (
      title &&
      image &&
      price &&
      colors &&
      km &&
      scratches &&
      accidents &&
      prevBuyers &&
      originalPaint &&
      registrationPlace
    ) {
      axios
        .post("https://clumsy-shoe-worm.cyclic.app/inventory/add", payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          toast({
            title: "Car Added.",
            description: "We've added your car for selling.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate("/");
        })
        .catch((err) => {
          toast({
            title: "Please login first",
            description: "Please login to add car",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          console.log(err);
        });
    } else {
      toast({
        title: "Please fill fields",
        description: "some fileds are missing",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={"3rem"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        w={"35%"}
        m={"auto"}
        mt={"2rem"}
        gap={"2rem"}
        p={"2rem"}
        borderRadius={"2em"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        fontFamily={"sans-serif"}
      >
        <Heading fontFamily={"sans-serif"}>Add Your Car</Heading>
        <Input
          placeholder="Enter title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Enter image url"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          placeholder="Enter price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          placeholder="Enter kms run"
          type="text"
          value={km}
          onChange={(e) => setKm(e.target.value)}
        />
        <Input
          placeholder="Enter colors available (give space in b/w)"
          type="text"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />
        <Input
          placeholder="Enter scratches on car"
          type="text"
          value={scratches}
          onChange={(e) => setScratches(e.target.value)}
        />
        <Input
          placeholder="Enter accidents happened"
          type="text"
          value={accidents}
          onChange={(e) => setAccidents(e.target.value)}
        />
        <Input
          placeholder="Enter number of previous buyers"
          type="text"
          value={prevBuyers}
          onChange={(e) => setPrevBuyers(e.target.value)}
        />
        <Input
          placeholder="Enter original paint"
          type="text"
          value={originalPaint}
          onChange={(e) => setOriginalPaint(e.target.value)}
        />
        <Input
          placeholder="Enter registration Place"
          type="text"
          value={registrationPlace}
          onChange={(e) => setregistrationPlace(e.target.value)}
        />
        <Button onClick={handleClick} _hover={{ bg: "blue.200" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddCar;
