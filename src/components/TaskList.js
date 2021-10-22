import "../styles/TaskList.scss";

const TaskList = (props) => {
  let obj = props.tasks.normalTasks;
  switch (props.sortDirection ? props.sort.current.value : "A-Z") {
    case "A-Z":
      obj.sort((a, b) => (a.title > b.title ? 1 : -1));
      break;
    case "Z-A":
      obj.sort((a, b) => (a.title < b.title ? 1 : -1));
      break;
    case "New-old":
      obj.sort((a, b) => (a.date > b.date ? 1 : -1));
      break;
    case "Old-new":
      obj.sort((a, b) => (a.date < b.date ? 1 : -1));
      break;
    default:
      return obj.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
  const task = obj.map((item) => {
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
  let obj = props.tasks.importantTasks;

  switch (props.sortDirection ? props.sort.current.value : "A-Z") {
    case "A-Z":
      obj.sort((a, b) => (a.title > b.title ? 1 : -1));
      break;
    case "Z-A":
      obj.sort((a, b) => (a.title < b.title ? 1 : -1));
      break;
    case "New-old":
      obj.sort((a, b) => (a.date > b.date ? 1 : -1));
      break;
    case "Old-new":
      obj.sort((a, b) => (a.date < b.date ? 1 : -1));
      break;
    default:
      return obj.sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  const task = obj.map((item) => {
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
