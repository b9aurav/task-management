import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Box,
  Badge,
  Select,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp, FaRegEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { useTaskContext } from "@/context/TaskContext";

const TaskList = ({
  searchQuery,
  sortOrder,
  filters,
  onEditTask,
  onDeleteTask,
}: {
  searchQuery: string;
  sortOrder: "asc" | "desc";
  filters: { priority?: string; status?: string };
  onEditTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}) => {
  const { tasks, editTask } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  useEffect(() => {
    let updatedTasks = [...tasks];

    if (searchQuery) {
      updatedTasks = updatedTasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filters.priority) {
      updatedTasks = updatedTasks.filter(
        (task) => task.priority === filters.priority
      );
    }
    if (filters.status) {
      updatedTasks = updatedTasks.filter(
        (task) => task.status === filters.status
      );
    }

    updatedTasks.sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredTasks(updatedTasks);
  }, [tasks, searchQuery, sortOrder, filters]);

  const handlePriorityChange = (
    taskId: string,
    newPriority: "low" | "medium" | "high"
  ) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      editTask({ ...task, priority: newPriority });
    }
  };

  const toggleRow = (taskId: string) => {
    setExpandedRow((prev) => (prev === taskId ? null : taskId));
  };

  return (
    <div className="w-full p-4 flex justify-center items-center">
      <Box
        border="1px solid"
        borderColor="brand.primary"
        borderRadius="10px"
        overflow="hidden"
        className="w-full"
      >
        {/* Table for larger screens */}
        <Table className="hidden md:table">
          <Thead>
            <Tr>
              <Th>SL.No</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Due Date</Th>
              <Th>Status</Th>
              <Th>Priority</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <Tr key={task.id}>
                  <Td>{index + 1}</Td>
                  <Td>{task.title}</Td>
                  <Td>{task.description}</Td>
                  <Td>{task.dueDate}</Td>
                  <Td>
                    <Badge
                      bg={
                        task.status === "pending"
                          ? "red"
                          : task.status === "completed"
                          ? "#03A229"
                          : "#F5D20E"
                      }
                    >
                      {task.status}
                    </Badge>
                  </Td>
                  <Td>
                    <Select
                      value={task.priority}
                      onChange={(e) =>
                        handlePriorityChange(
                          task.id,
                          e.target.value as "low" | "medium" | "high"
                        )
                      }
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </Select>
                  </Td>
                  <Td>
                    <div className="flex gap-2 w-full justify-center items-center">
                      <FaRegEdit
                        size="24px"
                        cursor="pointer"
                        onClick={() => onEditTask(task.id)}
                      />
                      <HiOutlineTrash
                        size="24px"
                        cursor="pointer"
                        onClick={() => onDeleteTask(task.id)}
                      />
                    </div>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={7} textAlign="center">
                  No task found
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>

        {/* Card layout for mobile screens */}
        <div className="block md:hidden">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <div key={task.id} className={ index % 2 != 0 ? "bg-[#FFF9F8] p-4" : "p-4"}>
                <div className="flex justify-between items-center">
                  <table className="w-full">
                    <tr>
                      <td className="w-[30%]">
                        <span className="text-[#941B0F]">SL.No.</span>
                      </td>
                      <td className="flex justify-between">
                        <span className="m-1">{index + 1}</span>
                        <button
                          onClick={() => toggleRow(task.id)}
                          className="text-gray-500"
                        >
                          {expandedRow === task.id ? (
                            <FaChevronUp size={20} />
                          ) : (
                            <FaChevronDown size={20} />
                          )}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%]">
                        <span className="text-[#941B0F]">Title</span>
                      </td>
                      <td className="flex justify-between">
                        <span className="m-1">{task.title}</span>
                      </td>
                    </tr>
                    {expandedRow === task.id && (
                      <>
                        <tr>
                          <td className="w-[30%]">
                            <span className="text-[#941B0F]">Description</span>
                          </td>
                          <td className="flex justify-between">
                            <span className="m-1">{task.description}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-[30%]">
                            <span className="text-[#941B0F]">Due Date</span>
                          </td>
                          <td className="flex justify-between">
                            <span className="m-1">{task.dueDate}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-[30%]">
                            <span className="text-[#941B0F]">Status</span>
                          </td>
                          <td className="flex justify-between">
                            <span className="m-1">
                              <Badge
                                bg={
                                  task.status === "pending"
                                    ? "red"
                                    : task.status === "completed"
                                    ? "#03A229"
                                    : "#F5D20E"
                                }
                              >
                                {task.status}
                              </Badge>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-[30%]">
                            <span className="text-[#941B0F]">Priority</span>
                          </td>
                          <td className="flex justify-between">
                            <span className="m-1">
                              <Select
                                value={task.priority}
                                onChange={(e) =>
                                  handlePriorityChange(
                                    task.id,
                                    e.target.value as "low" | "medium" | "high"
                                  )
                                }
                              >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                              </Select>
                            </span>
                            <div className="flex justify-end items-center gap-2">
                              <FaRegEdit
                                size="24px"
                                cursor="pointer"
                                onClick={() => onEditTask(task.id)}
                              />
                              <HiOutlineTrash
                                size="24px"
                                cursor="pointer"
                                onClick={() => onDeleteTask(task.id)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-[30%]"></td>
                          <td className="flex justify-between"></td>
                        </tr>
                      </>
                    )}
                  </table>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No task found</div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default TaskList;
