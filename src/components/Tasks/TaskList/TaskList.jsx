import sortTasks from "../../../functions/sortTasks";
import "../../../styles/SCSS/taskList.scss";

const TaskList = (props) => {
  const { sortDirection, sort, tasks } = props;
  const sortedTasks = sortTasks(sortDirection, tasks.normalTasks, sort);

  const task = sortedTasks.map((item) => {
    return (
      <li key={"t" + item.id} className="taskList_task">
        <h4 className="task_title">{item.title}</h4>
        <p className="task_date">{item.date}</p>
        <p className="task_description">{item.description}</p>
        <div className="task_buttonSpace">
          <button
            className="buttonSpace_deleteButton"
            onClick={() => props.deleted(item.id, "notFinishedNormalTask")}
          >
            Delete
          </button>
          <button
            className="buttonSpace_finishButton"
            onClick={() => props.finished(item.id, "FinishedNormalTask")}
          >
            Finish
          </button>
        </div>
      </li>
    );
  });
  return task;
};

export default TaskList;
