const FinishedTasksList = (props) => {
  const actualDate = new Date().toLocaleString();
  const finishedTask = props.finishedTasks.map((item) => {
    return (
      <>
        <li key={"fi" + item.id}>
          <h4>
            <button onClick={() => props.deleted(item.id, "finished")}>
              X
            </button>
            {item.title}
          </h4>
          <p>
            {item.date} (Termination date: {actualDate})
          </p>
          <span>{item.description}</span>
        </li>
      </>
    );
  });
  return finishedTask;
};

export default FinishedTasksList;
