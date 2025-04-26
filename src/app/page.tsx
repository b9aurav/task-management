"use client";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";
import EditTask from "@/components/EditTask";

export default function Home() {
  const { isOpen: isAddTaskOpen, onOpen: onAddTaskOpen, onClose: onAddTaskClose } =
    useDisclosure();
  const { isOpen: isEditTaskOpen, onOpen: onEditTaskOpen, onClose: onEditTaskClose } =
    useDisclosure();
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const handleEditTask = (taskId: string) => {
    setSelectedTaskId(taskId);
    onEditTaskOpen();
  };

  return (
    <>
      <Navbar />
      <PageHeader onAddTaskModalOpen={onAddTaskOpen} />
      <TaskList onEditTask={handleEditTask} />
      <AddTask isOpen={isAddTaskOpen} onClose={onAddTaskClose} />
      <EditTask
        isOpen={isEditTaskOpen}
        onClose={onEditTaskClose}
        taskId={selectedTaskId}
      />
    </>
  );
}