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
  Select,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useTaskContext } from "@/context/TaskContext";

type EditTaskProps = {
  isOpen: boolean;
  onClose: () => void;
  taskId: string | null;
};

const EditTask = ({ isOpen, onClose, taskId }: EditTaskProps) => {
  const { tasks, editTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState<"pending" | "in-progress" | "completed">(
    "pending"
  );
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

  useEffect(() => {
    if (taskId) {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.dueDate);
        setStatus(task.status);
        setPriority(task.priority);
      }
    }
  }, [taskId, tasks]);

  const handleEditTask = () => {
    if (!title || !description || !dueDate) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedTask = {
      id: taskId!,
      title,
      description,
      dueDate,
      status,
      priority,
    };

    editTask(updatedTask);
    onClose();
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={{ base: "sm", md: "xl" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
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
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value as "pending" | "in-progress" | "completed"
                  )
                }
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </Select>
            </FormControl>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="flex w-full gap-2">
            <Button variant="outline" onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button onClick={handleEditTask} className="w-full">
              Edit Task
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTask;
