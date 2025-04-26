import {
  Button,
  Checkbox,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { BiSort, BiFilter } from "react-icons/bi";

type props = {
  onAddTaskModalOpen: () => void;
  onSort: (sortOrder: "asc" | "desc") => void;
  onFilter: (filters: { priority?: string; status?: string }) => void;
};

const PageHeader = ({ onAddTaskModalOpen, onSort, onFilter }: props) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isFilteredByPriority, setIsFilteredByPriority] = useState(false);
  const [isFilteredByStatus, setIsFilteredByStatus] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<string>("low");
  const [selectedStatus, setSelectedStatus] = useState<string>("pending");

  const handleSortChange = (value: "asc" | "desc") => {
    setSortOrder(value);
    onSort(value);
  };

  const handleFilterChange = () => {
    const filters: { priority?: string; status?: string } = {};
    if (isFilteredByPriority) filters.priority = selectedPriority;
    if (isFilteredByStatus) filters.status = selectedStatus;
    onFilter(filters);
  };

  const handlePriorityCheckboxChange = (isChecked: boolean) => {
    setIsFilteredByPriority(isChecked);
    if (isChecked && !selectedPriority) {
      setSelectedPriority("low");
    }
  };

  const handleStatusCheckboxChange = (isChecked: boolean) => {
    setIsFilteredByStatus(isChecked);
    if (isChecked && !selectedStatus) {
      setSelectedStatus("pending");
    }
  };

  return (
    <div className="w-full px-8 flex justify-between items-center">
      <text className="text-2xl font-bold">Tasks</text>
      <div className="gap-2 flex">
        <Button
          leftIcon={<TbPlus />}
          variant="solid"
          onClick={onAddTaskModalOpen}
        >
          Add Task
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button leftIcon={<BiSort />} variant="outline">
              Sort
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Due Date</PopoverHeader>
            <PopoverBody>
              <RadioGroup
                value={sortOrder}
                onChange={(value) => handleSortChange(value as "asc" | "desc")}
              >
                <Stack direction="column">
                  <Radio value="asc">Ascending</Radio>
                  <Radio value="desc">Descending</Radio>
                </Stack>
              </RadioGroup>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover placement="top-end">
          <PopoverTrigger>
            <Button leftIcon={<BiFilter />} variant="outline">
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <Checkbox
                isChecked={isFilteredByPriority}
                onChange={(e) => handlePriorityCheckboxChange(e.target.checked)}
              >
                Priority
              </Checkbox>
            </PopoverHeader>
            <PopoverBody>
              <Select
                isDisabled={!isFilteredByPriority}
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </PopoverBody>
            <Divider />
            <PopoverHeader>
              <Checkbox
                isChecked={isFilteredByStatus}
                onChange={(e) => handleStatusCheckboxChange(e.target.checked)}
              >
                Status
              </Checkbox>
            </PopoverHeader>
            <PopoverBody>
              <Select
                isDisabled={!isFilteredByStatus}
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
              </Select>
            </PopoverBody>
            <Divider />
            <PopoverBody>
              <Button colorScheme="blue" size="sm" onClick={handleFilterChange}>
                Apply Filters
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default PageHeader;
