import {
  Button,
  
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const EditModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      
    </div>
  );
};

export default EditModal;
