import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://clumsy-shoe-worm.cyclic.app/inventory`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Stack direction={"row"} spacing={"5em"} w={"90%"} m={"auto"} mt={"3rem"} mb={"3rem"}>
        {cars &&
          cars.map((ele) => {
            return <Card key={ele._id} {...ele} />;
          })}
      </Stack>
    </div>
  );
};

export default Home;
