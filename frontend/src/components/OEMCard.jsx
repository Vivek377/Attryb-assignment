import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const OEMCard = ({
  image,
  title,
  price,
  power,
  model,
  modelYear,
  maxSpeed,
  mileage,
  _id
}) => {
  return (
    <div>
      <Box
        p={"1rem"}
        borderRadius={"1em"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      >
        <Link to={`/oem/${_id}`}>
          <Image w={"100%"} src={image} />
          <Text fontWeight={"semibold"} fontSize={"xl"}>
            {title}
          </Text>
          <Text>{model}</Text>
          <Text>{modelYear}</Text>
          <Text>{price} ₹</Text>
          <Text>{power} HP</Text>
          <Text>{maxSpeed}KM/hr Top Speed</Text>
          <Text>{mileage}km/L Mileage</Text>
        </Link>
      </Box>
    </div>
  );
};

export default OEMCard;
