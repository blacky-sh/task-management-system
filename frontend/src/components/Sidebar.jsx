import React from "react";

const Sidebar = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className='w-1/6 mt-8 ml-4 p-4 bg-white rounded-lg shadow-md  top-16 left-0 h-full'>
      <h2 className='text-xl font-bold mb-4'>Filter by Status</h2>
      <ul>
        <li className='mb-2'>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg ${
              selectedFilter === "All"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("All")}
          >
            All Tasks
          </button>
        </li>
        <li className='mb-2'>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg ${
              selectedFilter === "Pending"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("Pending")}
          >
            Pending
          </button>
        </li>
        <li className='mb-2'>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg ${
              selectedFilter === "In Progress"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("In Progress")}
          >
            In Progress
          </button>
        </li>
        <li className='mb-2'>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg ${
              selectedFilter === "Completed"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("Completed")}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
