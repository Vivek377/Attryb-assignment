import { Box, Flex, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OEMCard from "../components/OEMCard";

const OEM = () => {
  const [cars, setCars] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    axios
      .get(`https://clumsy-shoe-worm.cyclic.app/oem?q=${q}`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, [q]);

  return (
    <div>
      <Flex mt={"2rem"} justifyContent={"right"} mr={"3rem"}>
        <Input
          w={"20%"}
          placeholder="Search Cars by name"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </Flex>
      <Stack direction={"row"} spacing={"5em"} w={"90%"} m={"auto"} mt={"3rem"}>
        {cars &&
          cars.map((ele) => {
            return <OEMCard key={ele._id} {...ele} />;
          })}
      </Stack>
    </div>
  );
};

export default OEM;
