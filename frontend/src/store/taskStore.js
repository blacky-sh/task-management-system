import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks";

axios.defaults.withCredentials = true;

export const useTaskStore = create((set) => ({
  tasks: [],
  isLoading: false,
  error: null,

  fetchTasks: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(API_URL);
      set({ tasks: response.data, isLoading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error fetching tasks",
        isLoading: false,
      });
    }
  },

  createTask: async (task) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/create`, task);
      set((state) => ({
        tasks: [...state.tasks, response.data],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error.response?.data?.message || "Error creating task");
      set({
        error: error.response?.data?.message || "Error creating task",
        isLoading: false,
      });
    }
  },

  updateTask: async (id, task) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put(`${API_URL}/update/${id}`, task);
      set((state) => ({
        tasks: state.tasks.map((t) => (t._id === id ? response.data : t)),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error updating task",
        isLoading: false,
      });
    }
  },

  deleteTask: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      set((state) => ({
        tasks: state.tasks.filter((task) => task._id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error deleting task",
        isLoading: false,
      });
    }
  },
}));
