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
  import React, { useState } from "react";
  import { useTaskContext } from "@/context/TaskContext";
  
  const AddTask = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const { addTask } = useTaskContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
  
    const handleAddTask = () => {
      if (!title || !description || !dueDate) {
        alert("Please fill in all fields.");
        return;
      }
  
      const newTask = {
        id: Date.now().toString(),
        title,
        description,
        dueDate,
        status: "pending" as "pending" | "in-progress" | "completed",
        priority: "low" as "low" | "medium" | "high"
      };
  
      addTask(newTask);
      setTitle("");
      setDescription("");
      setDueDate("");
      onClose();
    };
  
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
                <Input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Choose Due Date</FormLabel>
                <Input
                  placeholder="Due Date"
                  size="md"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </FormControl>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleAddTask}>Add Task</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default AddTask;