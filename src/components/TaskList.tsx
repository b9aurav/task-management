import React from "react";
import { Table, Thead, Tbody, Td, Tr, Th, Box } from "@chakra-ui/react";

const TaskList = () => {
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
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};

export default TaskList;
