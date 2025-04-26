"use client";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";
import EditTask from "@/components/EditTask";
import DeleteTask from "@/components/DeleteTask";
import { useTaskContext } from "@/context/TaskContext";

export default function Home() {
  const {
    isOpen: isAddTaskOpen,
    onOpen: onAddTaskOpen,
    onClose: onAddTaskClose,
  } = useDisclosure();
  const {
    isOpen: isEditTaskOpen,
    onOpen: onEditTaskOpen,
    onClose: onEditTaskClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteTaskOpen,
    onOpen: onDeleteTaskOpen,
    onClose: onDeleteTaskClose,
  } = useDisclosure();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<{ priority?: string; status?: string }>(
    {}
  );
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const { deleteTask } = useTaskContext();

  const handleEditTask = (taskId: string) => {
    setSelectedTaskId(taskId);
    onEditTaskOpen();
  };

  const handleDeleteTask = (taskId: string) => {
    setSelectedTaskId(taskId);
    onDeleteTaskOpen();
  };

  const confirmDeleteTask = () => {
    if (selectedTaskId) {
      deleteTask(selectedTaskId);
      setSelectedTaskId(null);
      onDeleteTaskClose();
    }
  };

  return (
    <>
      <Navbar onSearch={(query) => setSearchQuery(query)} />
      <PageHeader
        onAddTaskModalOpen={onAddTaskOpen}
        onSort={(order) => setSortOrder(order)}
        onFilter={(newFilters) => setFilters(newFilters)}
      />
      <TaskList
        searchQuery={searchQuery}
        sortOrder={sortOrder}
        filters={filters}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      <AddTask isOpen={isAddTaskOpen} onClose={onAddTaskClose} />
      <EditTask
        isOpen={isEditTaskOpen}
        onClose={onEditTaskClose}
        taskId={selectedTaskId}
      />
      <DeleteTask
        isOpen={isDeleteTaskOpen}
        onClose={onDeleteTaskClose}
        onDelete={confirmDeleteTask}
      />
    </>
  );
}
