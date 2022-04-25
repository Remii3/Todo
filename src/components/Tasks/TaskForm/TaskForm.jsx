import "../../../styles/SCSS/taskForm.scss";
const TaskForm = (props) => {
  const {
    submitHandler,
    changeHandler,
    titleCheck,
    dateCheck,
    descCheck,
    titleBlurHandler,
    dateBlurHandler,
    descBlurHandler,
  } = props;

  return (
    <div className="taskFormSpace">
      <form onSubmit={submitHandler} className="taskFormSpace_taskForm">
        <h1 className="taskForm_title">Enter information</h1>
        <div className="taskForm_informationSpace">
          <label className="informationSpace_title">Title:</label>{" "}
          <input
            className="informationSpace_input"
            name="currentTitle"
            type="text"
            onChange={changeHandler}
            onBlur={titleBlurHandler}
          />
        </div>
        {titleCheck && (
          <p className="taskForm_errorMessage">Please provide title.</p>
        )}
        <div className="taskForm_informationSpace">
          <label className="informationSpace_title">Date:</label>{" "}
          <input
            className="informationSpace_input informationSpace_input-date"
            name="currentDate"
            type="datetime-local"
            onChange={changeHandler}
            onBlur={dateBlurHandler}
          />
        </div>
        {dateCheck && (
          <p className="taskForm_errorMessage">Please select future date.</p>
        )}
        <div className="taskForm_informationSpace">
          <label className="informationSpace_title">Description:</label>{" "}
          <textarea
            className="informationSpace_input"
            name="currentDescription"
            rows={8}
            onChange={changeHandler}
            onBlur={descBlurHandler}
          />
        </div>
        {descCheck && (
          <p className="taskForm_errorMessage">Please provide description.</p>
        )}
        <div className="taskForm_informationSpace">
          <label className="informationSpace_title">Important:</label>{" "}
          <input
            className="informationSpace_input informationSpace_input-importantCheckbox"
            name="importantTask"
            type="checkbox"
            onChange={changeHandler}
          />
        </div>
        <div className="taskForm_buttonSpace">
          <button type="submit" className="buttonSpace_button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
