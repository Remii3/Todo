import { useState } from "react";
import useFormCheck from "../../hooks/useFormCheck";
import TaskForm from "./TaskForm";

const TaskFormFunctionality = (props) => {
  const { addTaskHandler } = props;

  const [currentId, setCurrentId] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [importantTask, setImportantTask] = useState(false);

  const {
    titleCheck,
    dateCheck,
    descCheck,
    titleBlurHandler,
    dateBlurHandler,
    descBlurHandler,
  } = useFormCheck(currentTitle, currentDate, currentDescription);

  const submitHandler = (e) => {
    e.preventDefault();

    if (titleCheck || dateCheck || descCheck) {
      return;
    }

    const task = {
      id: currentId,
      title: currentTitle,
      description: currentDescription,
      date: currentDate,
    };

    if (importantTask === false) {
      addTaskHandler(task, false);
      setCurrentId((prevState) => prevState + 1);
    } else {
      addTaskHandler(task, true);
      setCurrentId((prevState) => prevState + 1);
    }
  };

  const changeHandler = (e) => {
    const name = e.target.name;

    if (name === "currentDate") {
      const date = e.target.value.slice(0, 10);
      const time = e.target.value.slice(11);
      const dateTime = date + " " + time;
      setCurrentDate(dateTime);
    } else {
      if (name === "currentTitle") {
        setCurrentTitle(e.target.value);
      } else if (name === "currentDescription") {
        setCurrentDescription(e.target.value);
      }
    }

    if (name === "importantTask" && e.target.checked) {
      setImportantTask(true);
    } else if (name === "importantTask") {
      setImportantTask(false);
    }
  };

  return (
    <TaskForm
      submitHandler={submitHandler}
      changeHandler={changeHandler}
      titleCheck={titleCheck}
      dateCheck={dateCheck}
      descCheck={descCheck}
      titleBlurHandler={titleBlurHandler}
      dateBlurHandler={dateBlurHandler}
      descBlurHandler={descBlurHandler}
    />
  );
};

export default TaskFormFunctionality;
