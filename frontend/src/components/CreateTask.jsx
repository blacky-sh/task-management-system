import React, { useState, useEffect } from "react";

const CreateTask = ({ isOpen, onClose, onSave, isAdmin, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");
  const [assignedUser, setAssignedUser] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
      setDueDate(formatDateForInput(task.dueDate));
      setAssignedUser(task.assignedUser || "");
    } else {
      setTitle("");
      setDescription("");
      setStatus("Pending");
      setDueDate("");
      setAssignedUser("");
    }
  }, [task]);

  const handleSave = () => {
    const newTask = { title, description, status, dueDate };
    if (assignedUser) {
      newTask.assignedUser = assignedUser;
    }
    onSave(newTask);
  };

  const formatDateForInput = (date) => {
    const d = new Date(date);
    const pad = (n) => (n < 10 ? "0" + n : n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
      d.getDate()
    )}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-1/3'>
        <h2 className='text-2xl font-bold mb-4'>
          {task ? "Edit Task" : "Create New Task"}
        </h2>
        <div className='mb-4'>
          <label className='block mb-2'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='w-full p-2 border rounded'
          >
            <option value='Pending'>Pending</option>
            <option value='In Progress'>In Progress</option>
            <option value='Completed'>Completed</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Due Date</label>
          <input
            type='datetime-local'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className='w-full p-2 border rounded'
          />
        </div>
        {isAdmin && (
          <div className='mb-4'>
            <label className='block mb-2'>Assigned User</label>
            <input
              type='text'
              value={assignedUser}
              onChange={(e) => setAssignedUser(e.target.value)}
              className='w-full p-2 border rounded'
            />
          </div>
        )}
        <div className='flex justify-end'>
          <button
            onClick={onClose}
            className='bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2'
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className='bg-blue-600 text-white px-4 py-2 rounded'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
