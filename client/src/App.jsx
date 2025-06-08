import { use, useEffect, useState } from "react";
import CreateTask from "./components/CreateTask"
import Modal from "./components/Modal"
import axios from "axios";
import TasksList from "./components/TasksList";

function App() {
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tasks');
      if (!response || !response?.data) {
        throw new Error("something went wrong while fethching tasks", response);
      }
      console.log("Response from server:", response.data);
      setTasks(response.data?.tasks || []);
    } catch (error) {
      console.error("error fetching tasks:", error);
    }
    finally { }
  }

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const taskTitle = formData.get('taskTitle');
      const taskDetails = formData.get('taskDetails');
      console.log("Task Title:", taskTitle);
      console.log("Task Details", taskDetails)
      const response = await axios.post('http://localhost:3000/api/tasks', {
        title: taskTitle,
        details: taskDetails
      })
      if (!response || !response?.data) {
        throw new Error("No response from server");
      }
      console.log("Response from server:", response.data);

    } catch (error) {
      console.error("error in handleTaskSubmit:", error);
      return;
    } finally {
      setIsCreateTaskOpen(false);
      fetchTasks();
      e.target.reset();
    }
  }

  const handleTaskModalOpen = () => {
    setIsCreateTaskOpen(true);
  }

  const handleTaskModalClose = () => {
    setIsCreateTaskOpen(false);
  }

  return (
    <div>
      <h1>Welcome to the task management system.</h1>
      <div>
        <button onClick={handleTaskModalOpen}> Create tasks here</button>
      </div>
      <Modal
        isOpen={isCreateTaskOpen}
        onClose={handleTaskModalClose}
        secondaryButtonTitle="Cancel"
        children={<CreateTask handleSubmit={handleTaskSubmit} />}
      />
      <TasksList data={tasks} />
    </div>
  )
}

export default App
