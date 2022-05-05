import { useState } from "react";

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";

import "./styles/SCSS/app.scss";

const App = () => {
  const [tasks, setTasks] = useState({
    normalTasks: [],
    importantTasks: [],
    finishedTasks: [],
  });

  const TASK_TYPES = {
    normal: "NORMAL",
    important: "IMPORTANT",
    finished: "FINISHED",
  };

  const finishTaskHandle = (id, recognizer) => {
    if (recognizer === TASK_TYPES.normal) {
      const clickedTask = tasks.normalTasks.findIndex((x) => x.id === id);

      tasks.finishedTasks.push(tasks.normalTasks[clickedTask]);
      tasks.normalTasks.splice(clickedTask, 1);

      setTasks((prevState) => ({
        normalTasks: [...tasks.normalTasks],
        importantTasks: [...prevState.importantTasks],
        finishedTasks: [...prevState.finishedTasks],
      }));
    } else if (recognizer === TASK_TYPES.important) {
      const clickedTask = tasks.importantTasks.findIndex((x) => x.id === id);

      tasks.finishedTasks.push(tasks.importantTasks[clickedTask]);
      tasks.importantTasks.splice(clickedTask, 1);

      setTasks((prevState) => ({
        normalTasks: [...prevState.normalTasks],
        importantTasks: [...tasks.importantTasks],
        finishedTasks: [...prevState.finishedTasks],
      }));
    }
  };

  const deleteTaskHandle = (id, recognizer) => {
    let clickedTask;
    switch (recognizer) {
      case TASK_TYPES.finished:
        clickedTask = tasks.finishedTasks.findIndex((x) => x.id === id);

        tasks.finishedTasks.splice(clickedTask, 1);

        setTasks((prevState) => ({
          normalTasks: [...tasks.normalTasks],
          importantTasks: [...prevState.importantTasks],
          finishedTasks: [...prevState.finishedTasks],
        }));
        break;

      case TASK_TYPES.normal:
        clickedTask = tasks.normalTasks.findIndex((x) => x.id === id);

        tasks.normalTasks.splice(clickedTask, 1);

        setTasks((prevState) => ({
          normalTasks: [...tasks.normalTasks],
          importantTasks: [...prevState.importantTasks],
          finishedTasks: [...prevState.finishedTasks],
        }));
        break;

      case TASK_TYPES.important:
        clickedTask = tasks.importantTasks.findIndex((x) => x.id === id);

        tasks.importantTasks.splice(clickedTask, 1);

        setTasks((prevState) => ({
          normalTasks: [...prevState.normalTasks],
          importantTasks: [...tasks.importantTasks],
          finishedTasks: [...prevState.finishedTasks],
        }));
        break;
      default:
        setTasks((prevState) => ({
          normalTasks: [...prevState.normalTasks],
          importantTasks: [...prevState.importantTasks],
          finishedTasks: [...prevState.finishedTasks],
        }));
        break;
    }
  };

  const addTaskHandler = (newTask, importance) => {
    if (importance === false) {
      setTasks((prevState) => ({
        normalTasks: [...tasks.normalTasks, newTask],
        importantTasks: [...prevState.importantTasks],
        finishedTasks: [...prevState.finishedTasks],
      }));
    } else if (importance === true) {
      setTasks((prevState) => ({
        normalTasks: [...prevState.normalTasks],
        importantTasks: [...tasks.importantTasks, newTask],
        finishedTasks: [...prevState.finishedTasks],
      }));
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <Main
        taskTypes={TASK_TYPES}
        tasks={tasks}
        finishTaskHandle={finishTaskHandle}
        deleteTaskHandle={deleteTaskHandle}
        addTaskHandler={addTaskHandler}
      />
      <Footer />
    </div>
  );
};

export default App;
