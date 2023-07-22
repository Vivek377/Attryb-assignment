import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://clumsy-shoe-worm.cyclic.app/inventory`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        w={"90%"}
        m={"auto"}
        mt={"3rem"}
        p={"3rem"}
        gap={6}
      >
        {cars &&
          cars.map((ele) => {
            return <HomeCard key={ele._id} {...ele} />;
          })}
      </Grid>
    </Box>
  );
};

export default Home;
