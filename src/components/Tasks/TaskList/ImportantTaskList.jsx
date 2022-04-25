import sortTasks from "../../../functions/sortTasks";
import "../../../styles/SCSS/taskList.scss";

const ImportantTaskList = (props) => {
  const { sortDirection, sort, tasks } = props;

  const sortedTasks = sortTasks(sortDirection, tasks.importantTasks, sort);

  const task = sortedTasks.map((item) => {
    return (
      <li key={"it" + item.id} className="taskList_task">
        <h4 className="task_title">{item.title}</h4>

        <p className="task_date">{item.date}</p>
        <p className="task_description">{item.description}</p>
        <div className="task_buttonSpace">
          <button
            onClick={() => props.deleted(item.id, "notFinishedImportantTask")}
            className="buttonSpace_deleteButton"
          >
            Delete
          </button>
          <button
            onClick={() => props.finished(item.id, "FinishedImportantTask")}
            className="buttonSpace_finishButton"
          >
            Finish
          </button>
        </div>
      </li>
    );
  });
  return task;
};
export default ImportantTaskList;
