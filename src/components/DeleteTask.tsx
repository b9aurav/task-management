import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
  } from "@chakra-ui/react";
  import React from "react";
  
  type DeleteTaskProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
  };
  
  const DeleteTask = ({ isOpen, onClose, onDelete }: DeleteTaskProps) => {
    return (
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={{ base: "sm", md: "xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="">Are you sure that you wish to delete this task?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <div className="flex w-full gap-2">
            <Button variant="outline" onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onDelete} className="w-full">
              Delete
            </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default DeleteTask;