import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const YourCars = () => {
  const [cars, setCars] = useState([]);

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
