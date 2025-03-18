import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import CreateTask from "../components/CreateTask";
import { useAuthStore } from "../store/authStore";
import { useTaskStore } from "../store/taskStore";

const HomePage = () => {
  const { user } = useAuthStore();
  const { tasks, fetchTasks, createTask, updateTask, deleteTask } =
    useTaskStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleSaveTask = async (newTask) => {
    if (currentTask) {
      await updateTask(currentTask._id, newTask);
    } else {
      await createTask(newTask);
    }
    setCurrentTask(null);
    setIsModalOpen(false);
  };

  const handleEditTask = (index) => {
    setCurrentTask({ ...tasks[index], index });
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (index) => {
    await deleteTask(tasks[index]._id);
  };

  const filteredTasks =
    selectedFilter === "All"
      ? tasks
      : tasks.filter((task) => task.status === selectedFilter);

  return (
    <div className='pt-16 bg-gray-100 min-h-screen w-full flex'>
      <Sidebar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className='ml-1/4 w-3/4 p-4'>
        <TaskList
          tasks={filteredTasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onAdd={() => setIsModalOpen(true)}
        />
      </div>
      <CreateTask
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentTask(null);
        }}
        onSave={handleSaveTask}
        isAdmin={user?.role === "admin"}
        task={currentTask}
      />
    </div>
  );
};

export default HomePage;
