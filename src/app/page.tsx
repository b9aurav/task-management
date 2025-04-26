"use client";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageHeader />
      <TaskList />
    </>
  );
}
