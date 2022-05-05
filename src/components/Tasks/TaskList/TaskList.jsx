import sortTasks from "../../../functions/sortTasks";

import "../../../styles/SCSS/taskList.scss";

const TaskList = (props) => {
  const { sortDirection, sort, tasks, type } = props;

  let taskList = tasks.normalTasks;

  if (type === "IMPORTANT") taskList = tasks.importantTasks;
  else if (type === "FINISHED") taskList = tasks.finishedTasks;

  const actualDate = new Date().toLocaleString();

  const sortedTasks = sortTasks(sortDirection, taskList, sort);

  return sortedTasks.map((item) => {
    return (
      <li key={type.slice(0, 3) + item.id} className="taskList_task">
        <h4 className="task_title">{item.title}</h4>
        <p className="task_date">{item.date}</p>
        {type === "FINISHED" && (
          <p className="task_date">(Termination date: {actualDate})</p>
        )}
        <p className="task_description">{item.description}</p>
        <div className="task_buttonSpace">
          <button
            className="buttonSpace_deleteButton"
            onClick={() => props.deleted(item.id, type)}
          >
            Delete
          </button>
          {type !== "FINISHED" && (
            <button
              className="buttonSpace_finishButton"
              onClick={() => props.finished(item.id, type)}
            >
              Finish
            </button>
          )}
        </div>
      </li>
    );
  });
};

export default TaskList;
