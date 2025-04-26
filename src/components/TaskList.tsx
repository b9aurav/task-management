import React from "react";
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
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { useTaskContext } from "@/context/TaskContext";

const TaskList = ({
  searchQuery,
  onEditTask,
  onDeleteTask,
}: {
  searchQuery: string,
  onEditTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}) => {
  const { tasks, editTask } = useTaskContext();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePriorityChange = (
    taskId: string,
    newPriority: "low" | "medium" | "high"
  ) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      editTask({ ...task, priority: newPriority });
    }
  };

  return (
    <div className="w-full p-8 flex justify-center items-center">
      <Box
        border="1px solid"
        borderColor="brand.primary"
        borderRadius="10px"
        overflow="hidden"
        className="w-full"
      >
        <Table>
          <Thead>
            <Tr>
              <Th>SL.No.</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Due Date</Th>
              <Th>Status</Th>
              <Th>Priority</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTasks.map((task, index) => (
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
            ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};

export default TaskList;
