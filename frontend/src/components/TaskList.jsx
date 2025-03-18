import React from "react";
import TaskCard from "./TaskCard";
import AddTaskCard from "./AddTaskCard";

const TaskList = ({ tasks, onEdit, onDelete, onAdd }) => {
  return (
    <div className='w-full p-4 overflow-y-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            status={task.status}
            onEdit={() => onEdit(index)}
            onDelete={() => onDelete(index)}
          />
        ))}
        <AddTaskCard onAdd={onAdd} />
      </div>
    </div>
  );
};

export default TaskList;
