import "../styles/TaskList.css";

const TaskList = (props) => {
  const task = props.tasks.map((item) => {
    return (
      <>
        <li key={"li" + item.id}>
          <h4>
            <button onClick={() => props.deleted(item.id, "notFinished")}>
              X
            </button>
            {item.title}
          </h4>
          <p>{item.date}</p>
          <span>{item.description}</span>
          <button onClick={() => props.finished(item.id)}>Finish</button>
        </li>
      </>
    );
  });
  console.log(props.tasks);
  return task;
};

export default TaskList;
