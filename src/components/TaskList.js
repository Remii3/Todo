import "../styles/TaskList.css";

const TaskList = (props) => {
  const task = props.tasks.normalTasks.map((item) => {
    return (
      <>
        <li key={"li" + item.id}>
          <h4>
            <button
              onClick={() => props.deleted(item.id, "notFinishedNormalTask")}
            >
              X
            </button>
            {item.title}
          </h4>
          <p>{item.date}</p>
          <span>{item.description}</span>
          <button onClick={() => props.finished(item.id, "FinishedNormalTask")}>
            Finish
          </button>
        </li>
      </>
    );
  });
  console.log(props.tasks);
  return task;
};
const ImportantTaskList = (props) => {
  const task = props.tasks.importantTasks.map((item) => {
    return (
      <>
        <li key={"im" + item.id}>
          <h4>
            <button
              onClick={() => props.deleted(item.id, "notFinishedImportantTask")}
            >
              X
            </button>
            {item.title}
          </h4>
          <p>{item.date}</p>
          <span>{item.description}</span>
          <button
            onClick={() => props.finished(item.id, "FinishedImportantTask")}
          >
            Finish
          </button>
        </li>
      </>
    );
  });
  console.log(props.tasks);
  return task;
};

export { TaskList, ImportantTaskList };
