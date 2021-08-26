const FinishedTasksList = (props) => {
  let obj = props.finishedTasks;
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
  const actualDate = new Date().toLocaleString();
  const finishedTask = obj.map((item) => {
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
