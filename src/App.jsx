import { useState } from "react";

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";

import "./styles/SCSS/app.scss";

const App = () => {
  const [tasks, setTasks] = useState({ normalTasks: [], importantTasks: [] });
  const [finishedTasks, setFinishedTasks] = useState({ finishedTasks: [] });

  const finishTaskHandle = (id, recognizer) => {
    if (recognizer === "FinishedNormalTask") {
      const clickedTask = tasks.normalTasks.findIndex((x) => x.id === id);

      finishedTasks.finishedTasks.push(tasks.normalTasks[clickedTask]);

      setFinishedTasks((prevState) => ({
        finishedTasks: [...prevState.finishedTasks],
      }));

      tasks.normalTasks.splice(clickedTask, 1);

      setTasks((prevState) => ({
        normalTasks: [...tasks.normalTasks],
        importantTasks: [...prevState.importantTasks],
      }));
    } else {
      const clickedTask = tasks.importantTasks.findIndex((x) => x.id === id);

      finishedTasks.finishedTasks.push(tasks.importantTasks[clickedTask]);

      setFinishedTasks((prevState) => ({
        finishedTasks: [...prevState.finishedTasks],
      }));

      tasks.importantTasks.splice(clickedTask, 1);

      setTasks((prevState) => ({
        normalTasks: [...prevState.normalTasks],
        importantTasks: [...tasks.importantTasks],
      }));
    }
  };

  const deleteTaskHandle = (id, recognizer) => {
    if (recognizer === "finished") {
      const clickedTask = finishedTasks.finishedTasks.findIndex(
        (x) => x.id === id
      );

      finishedTasks.finishedTasks.splice(clickedTask, 1);

      setFinishedTasks((prevState) => ({
        finishedTasks: [...prevState.finishedTasks],
      }));
    } else if (recognizer === "notFinishedNormalTask") {
      const clickedTask = tasks.normalTasks.findIndex((x) => x.id === id);

      tasks.normalTasks.splice(clickedTask, 1);

      setTasks((prevState) => ({
        normalTasks: [...tasks.normalTasks],
        importantTasks: [...prevState.importantTasks],
      }));
    } else {
      const clickedTask = tasks.importantTasks.findIndex((x) => x.id === id);

      tasks.importantTasks.splice(clickedTask, 1);

      setTasks((prevState) => ({
        normalTasks: [...prevState.normalTasks],
        importantTasks: [...tasks.importantTasks],
      }));
    }
  };

  const addTaskHandler = (newTask, importance) => {
    if (importance === false) {
      setTasks((prevState) => ({
        normalTasks: [...tasks.normalTasks, newTask],
        importantTasks: [...prevState.importantTasks],
      }));
    } else if (importance === true) {
      setTasks((prevState) => ({
        normalTasks: [...prevState.normalTasks],
        importantTasks: [...tasks.importantTasks, newTask],
      }));
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <Main
        tasks={tasks}
        finishedTasks={finishedTasks}
        finishTaskHandle={finishTaskHandle}
        deleteTaskHandle={deleteTaskHandle}
        addTaskHandler={addTaskHandler}
      />
      <Footer />
    </div>
  );
};

export default App;
