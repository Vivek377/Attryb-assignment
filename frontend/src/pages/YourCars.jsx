import { Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const YourCars = () => {
  const [cars, setCars] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get(`https://drab-red-cape-buffalo-tutu.cyclic.app/inventory/yourcars`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => setCars(res.data))
      .catch((e) => console.log(e));
  }, []);

  if (!token) {
    return (
      <div>
        <Text fontSize={"4xl"} mt={"3rem"}>You need to log in first to see your cars</Text>
      </div>
    );
  }

  return (
    <div>
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
            return <Card key={ele._id} {...ele} />;
          })}
      </Grid>
    </div>
  );
};

export default YourCars;
