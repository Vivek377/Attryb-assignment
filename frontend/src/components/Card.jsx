import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, km, _id }) => {
  return (
    <div>
      <Box
        p={"1rem"}
        borderRadius={"1em"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      >
        <Link to={`/${_id}`}>
          <Image w={"100%"} src={image} />
          <Text fontWeight={"semibold"} fontSize={"xl"}>
            {title}
          </Text>
          <Text>{price} ₹</Text>
          <Text>{km} KMs run</Text>
        </Link>
      </Box>
    </div>
  );
};

export default Card;
