import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddTask = ({ isOpen, onClose }: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col gap-4">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Description" rows={5}/>
            </FormControl>
            <FormControl>
              <FormLabel>Choose Due Date</FormLabel>
              <Input placeholder="Due Date" size="md" type="date" />
            </FormControl>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="flex w-full gap-2">
            <Button variant="outline" onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button className="w-full">Add Task</Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTask;
