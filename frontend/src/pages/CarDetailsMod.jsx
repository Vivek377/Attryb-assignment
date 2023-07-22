import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  Input,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CarDetalis = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const handleDelete = () => {
    axios
      .delete(`https://clumsy-shoe-worm.cyclic.app/inventory/delete/${id}`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        toast({
          title: "Car Deleted.",
          description: "Car deleted Successfully.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/yourCars");
      })
      .catch((e) => {
        console.log(e);
        toast({
          title: "You're not authorized",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };

  const fillDetails = () => {
    setAccidents(car.accidents);
    setColors(car.colors);
    setImage(car.image);
    setKm(car.km);
    setOriginalPaint(car.originalPaint);
    setPrevBuyers(car.prevBuyers);
    setPrice(car.price);
    setScratches(car.scratches);
    setTitle(car.title);
    setregistrationPlace(car.registrationPlace);
    onOpen();
  };

  const handleEdit = () => {
    const payload = {
      title,
      image,
      price,
      colors: colors.split(","),
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
        .patch(
          `https://clumsy-shoe-worm.cyclic.app/inventory/edit/${id}`,
          payload,
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((res) => {
          toast({
            title: "Car Detalis edited.",
            description: "Car updated Successfully.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate("/yourCars");
          onClose();
        })
        .catch((e) => {
          console.log(e);
          toast({
            title: "You're not authorized",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
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

  useEffect(() => {
    axios
      .get(`https://clumsy-shoe-worm.cyclic.app/inventory/${id}`)
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
          boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
          borderRadius={"1em"}
          w={"90%"}
          m={"auto"}
          gap={"3rem"}
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
            <Text fontSize={"4xl"} fontWeight={"bold"} mb={"1em"}>
              {car.title}
            </Text>
            <Text>{car.price} ₹</Text>
            <Text>{car.km} KMs run</Text>
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
            <Text>No. of scratches: {car.scratches}</Text>
            <Text>No. of accidents: {car.accidents}</Text>
            <Text>No. of previous Buyers: {car.prevBuyers}</Text>
            <Text>Original Paint: {car.originalPaint}</Text>
            <Text>Registration Place: {car.registrationPlace}</Text>
            <Flex gap={"2rem"} mt={"2rem"} justifyContent={"center"}>
              <Button onClick={fillDetails}>Edit</Button>
              <Button onClick={handleDelete}>Delete</Button>
            </Flex>
          </Box>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update car details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Enter title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Enter image"
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
                placeholder="Enter scratches"
                type="text"
                value={scratches}
                onChange={(e) => setScratches(e.target.value)}
              />
              <Input
                placeholder="Enter accidents"
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
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={handleEdit} mr={3}>
                Edit
              </Button>
              <Button onClick={onClose} variant="ghost">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
};

export default CarDetalis;
