import React from "react";

const AddTaskCard = ({ onAdd }) => {
  return (
    <div
      className='bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col justify-center items-center cursor-pointer border-dashed border-2 border-gray-300'
      onClick={onAdd}
    >
      <div className='text-gray-400 text-lg'>Add New Task</div>
    </div>
  );
};

export default AddTaskCard;
