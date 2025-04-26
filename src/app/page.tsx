"use client";
import AddTask from "@/components/AddTask";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TaskList from "@/components/TaskList";
import { useDisclosure } from "@chakra-ui/react";

export default function Home() {
  const {
    isOpen: isAddTaskModalOpen,
    onOpen: onAddTaskModalOpen,
    onClose: onAddTaskModalClose,
  } = useDisclosure();

  return (
    <>
      <Navbar />
      <PageHeader onAddTaskModalOpen={onAddTaskModalOpen} />
      <TaskList />
      <AddTask isOpen={isAddTaskModalOpen} onClose={onAddTaskModalClose} />
    </>
  );
}
