import { useEffect, useRef, useState } from "react";

import "../../styles/SCSS/main.scss";

import TaskFormFunctionality from "../Tasks/TaskForm/TaskFormFunctionality";
import TaskList from "../Tasks/TaskList/TaskList";
import SortList from "../UI/SortList";

const Main = (props) => {
  const {
    tasks,
    finishTaskHandle,
    deleteTaskHandle,
    addTaskHandler,
    taskTypes,
  } = props;

  const [sortDirection, setSortDirection] = useState(false);

  const sortingMethodNormal = useRef("");
  const sortingMethodImportant = useRef("");
  const sortingMethodFinished = useRef("");

  useEffect(() => {
    setSortDirection({ sortDirection: true });
  }, []);

  const changeHandler = (e) => {
    const name = e.target.name;
    setSortDirection({ [name]: e.target.value });
  };

  return (
    <main id="mainSection">
      <TaskFormFunctionality addTaskHandler={addTaskHandler} />
      <section className="mainSection_taskSpace">
        <div className="taskSpace_titleAndSortSpace">
          <h3 className="titleAndSortSpace_title">Todo tasks</h3>
          <SortList
            sortingMethod={sortingMethodNormal}
            changeHandler={changeHandler}
          />
        </div>
        <div className="taskSpace_taskListSpace">
          <ul className="taskListSpace_taskList">
            <TaskList
              type={taskTypes.normal}
              tasks={tasks}
              finished={finishTaskHandle}
              deleted={deleteTaskHandle}
              sort={sortingMethodNormal}
              sortDirection={sortDirection}
            />
          </ul>
        </div>
      </section>
      <section className="mainSection_taskSpace">
        <div className="taskSpace_titleAndSortSpace">
          <h3 className="titleAndSortSpace_Title">Important tasks</h3>
          <SortList
            sortingMethod={sortingMethodImportant}
            changeHandler={changeHandler}
          />
        </div>
        <div className="taskSpace_taskListSpace">
          <ul className="taskListSpace_taskList">
            <TaskList
              type={taskTypes.important}
              tasks={tasks}
              finished={finishTaskHandle}
              deleted={deleteTaskHandle}
              sort={sortingMethodImportant}
              sortDirection={sortDirection}
            />
          </ul>
        </div>
      </section>
      <section className="mainSection_taskSpace">
        <div className="taskSpace_titleAndSortSpace">
          <h3 className="titleAndSortSpace_Title">Finished tasks</h3>
          <SortList
            sortingMethod={sortingMethodFinished}
            changeHandler={changeHandler}
          />
        </div>
        <div className="taskSpace_taskListSpace">
          <ul className="taskListSpace_taskList">
            <TaskList
              type={taskTypes.finished}
              tasks={tasks}
              deleted={deleteTaskHandle}
              sort={sortingMethodFinished}
              sortDirection={sortDirection}
            />
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
