import { Button } from "@chakra-ui/react";
import React from "react";
import { TbPlus } from "react-icons/tb";
import { BiSort, BiFilter } from "react-icons/bi";

type props = {
  onAddTaskModalOpen: () => void;
};

const PageHeader = ({ onAddTaskModalOpen }: props) => {
  return (
    <div className="w-full px-8 flex justify-between items-center">
      <text className="text-2xl font-bold">Tasks</text>
      <div className="gap-2 flex">
        <Button leftIcon={<TbPlus />} variant="solid" onClick={onAddTaskModalOpen}>
          Add Task
        </Button>
        <Button leftIcon={<BiSort />} variant="outline">
          Sort
        </Button>
        <Button leftIcon={<BiFilter />} variant="outline">
          Filter
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
