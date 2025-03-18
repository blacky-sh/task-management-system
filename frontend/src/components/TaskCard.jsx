import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatDate } from "../utils/date";

const TaskCard = ({
  title,
  description,
  dueDate,
  status,
  onEdit,
  onDelete,
}) => {
  const statusClasses = {
    Completed: "bg-green-100 text-green-600",
    "In Progress": "bg-blue-100 text-blue-600",
    Pending: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className='bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col justify-between'>
      <div>
        <span
          className={`px-2 py-1 rounded-lg text-sm ${statusClasses[status]}`}
        >
          {status}
        </span>
        <h3 className='text-xl font-bold mt-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
        <p className='text-gray-400 text-sm'>{formatDate(dueDate)}</p>
      </div>
      <div className='flex justify-end space-x-2 mt-4'>
        <button onClick={onEdit} className='text-blue-600 hover:text-blue-800'>
          <FaEdit />
        </button>
        <button onClick={onDelete} className='text-red-600 hover:text-red-800'>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
