import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OEMDetails = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://drab-red-cape-buffalo-tutu.cyclic.app/oem/${id}`)
      .then((res) => setCar(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  if (car.colors) {
    return (
      <Box p={"3rem"}>
        <Box textAlign={"center"} mt={"1rem"}>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Car Details
          </Text>
        </Box>
        <Flex
          w={"90%"}
          m={"auto"}
          boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
          gap={"3rem"}
          borderRadius={"1em"}
          mt={"3rem"}
          p={"2rem"}
        >
          <Box>
            <Image src={car.image} borderRadius={"1em"} />
          </Box>
          <Box
            textAlign={"center"}
            lineHeight={"2rem"}
            w={"50%"}
            fontSize={"xl"}
          >
            <Text fontSize={"4xl"} fontWeight={"bold"} mb={"2rem"}>
              {car.title}
            </Text>
            <Text>{car.price} ₹</Text>
            Colors avaialable:
            <HStack direction={"row"} justifyContent={"center"}>
              {car &&
                car?.colors.map((ele) => (
                  <Box
                    h={"1em"}
                    w={"1em"}
                    bg={ele}
                    borderRadius={"50%"}
                    key={ele}
                  ></Box>
                ))}
            </HStack>
            <Text>model: {car.model}</Text>
            <Text>model Year: {car.modelYear}</Text>
            <Text>Top Speed: {car.maxSpeed} KM/hr</Text>
            <Text>Mileage: {car.mileage} km/L</Text>
            <Text>Power: {car.power} HP</Text>
          </Box>
        </Flex>
      </Box>
    );
  }
};

export default OEMDetails;
