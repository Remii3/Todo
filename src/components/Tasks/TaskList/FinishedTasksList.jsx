import sortTasks from "../../../functions/sortTasks";
import "../../../styles/SCSS/taskList.scss";

const FinishedTasksList = (props) => {
  const { sortDirection, sort, finishedTasks } = props;

  const sortedTasks = sortTasks(
    sortDirection,
    finishedTasks.finishedTasks,
    sort
  );

  const actualDate = new Date().toLocaleString();

  const finishedTask = sortedTasks.map((item) => {
    return (
      <li key={"ft" + item.id} className="taskList_task">
        <h4 className="task_title">{item.title}</h4>
        <p className="task_date">{item.date}</p>
        <p className="task_date">(Termination date: {actualDate})</p>
        <p className="task_description">{item.description}</p>
        <div className="task_buttonSpace">
          <button
            className="buttonSpace_deleteButton"
            onClick={() => props.deleted(item.id, "finished")}
          >
            Delete
          </button>
        </div>
      </li>
    );
  });
  return finishedTask;
};

export default FinishedTasksList;
