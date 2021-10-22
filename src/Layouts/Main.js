import "../styles/Main.scss";
import React, { Component } from "react";
import { TaskList, ImportantTaskList } from "../components/TaskList";
import FinishedTasksList from "../components/FinishedTasksList";

class Main extends Component {
  state = {
    currentId: 0,
    currentTitle: "",
    currentDescription: "",
    currentDate: "",
    tasks: { normalTasks: [], importantTasks: [] },
    finishedTasks: [],
    importantTask: false,
    sortDirection: false,
    dateCheck: false,
  };

  sortingMethodNormal = React.createRef();
  sortingMethodImportant = React.createRef();
  sortingMethodFinished = React.createRef();

  componentDidMount() {
    this.setState({ sortDirection: true });
  }
  handleSubmit = (e) => {
    const {
      currentId,
      currentTitle,
      currentDescription,
      currentDate,
      tasks,
      importantTask,
    } = this.state;

    e.preventDefault();
    const task = {
      id: currentId,
      title: currentTitle,
      description: currentDescription,
      date: currentDate,
    };
    const date = new Date().toISOString().slice(0, 10);
    if (currentDate.slice(0, 10) < date) {
      this.setState({ dateCheck: true });
      return;
    } else {
      this.setState({ dateCheck: false });
    }

    if (importantTask === false) {
      this.setState((prevState) => ({
        tasks: {
          ...prevState.tasks,
          normalTasks: [...tasks.normalTasks, task],
        },
        currentId: this.state.currentId + 1,
      }));
    } else {
      this.setState((prevState) => ({
        tasks: {
          ...prevState.tasks,
          importantTasks: [...tasks.importantTasks, task],
        },
        currentId: this.state.currentId + 1,
      }));
    }
  };

  handleChange = (e) => {
    const name = e.target.name;
    if (name === "currentDate") {
      const date = e.target.value.slice(0, 10);
      const time = e.target.value.slice(11);
      const dateTime = date + " " + time;
      this.setState({ [name]: dateTime });
    } else {
      this.setState({ [name]: e.target.value });
    }
    if (name === "importantTask" && e.target.checked) {
      this.setState({ [name]: true });
    } else if (name === "importantTask") {
      this.setState({ [name]: false });
    }
  };

  finishTaskHandle = (id, recognizer) => {
    if (recognizer === "FinishedNormalTask") {
      const clickedTask = this.state.tasks.normalTasks.findIndex(
        (x) => x.id === id
      );
      this.state.finishedTasks.push(this.state.tasks.normalTasks[clickedTask]);
      this.setState({ finishedTasks: [...this.state.finishedTasks] });
      this.state.tasks.normalTasks.splice(clickedTask, 1);
      this.setState((prevState) => ({
        tasks: {
          ...prevState.tasks,
          normalTasks: [...this.state.tasks.normalTasks],
        },
      }));
    } else {
      const clickedTask = this.state.tasks.importantTasks.findIndex(
        (x) => x.id === id
      );
      this.state.finishedTasks.push(
        this.state.tasks.importantTasks[clickedTask]
      );
      this.setState({ finishedTasks: [...this.state.finishedTasks] });
      this.state.tasks.importantTasks.splice(clickedTask, 1);
      this.setState((prevState) => ({
        tasks: {
          ...prevState.tasks,
          importantTasks: [...this.state.tasks.importantTasks],
        },
      }));
    }
  };

  deleteTaskHandle = (id, recognizer) => {
    if (recognizer === "finished") {
      const clickedTask = this.state.finishedTasks.findIndex(
        (x) => x.id === id
      );
      this.state.finishedTasks.splice(clickedTask, 1);
      this.setState({ finishedTasks: this.state.finishedTasks });
    } else if (recognizer === "notFinishedNormalTask") {
      const clickedTask = this.state.tasks.normalTasks.findIndex(
        (x) => x.id === id
      );
      this.state.tasks.normalTasks.splice(clickedTask, 1);
      this.setState((prevState) => ({
        tasks: {
          ...prevState.tasks,
          normalTasks: [...this.state.tasks.normalTasks],
        },
      }));
    } else {
      const clickedTask = this.state.tasks.importantTasks.findIndex(
        (x) => x.id === id
      );
      this.state.tasks.importantTasks.splice(clickedTask, 1);
      this.setState((prevState) => ({
        tasks: {
          ...prevState.tasks,
          importantTasks: [...this.state.tasks.importantTasks],
        },
      }));
    }
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div className="inputInfo">
            <h1>Enter information</h1>
            <label>
              <span>Title:</span>{" "}
              <input
                name="currentTitle"
                type="text"
                onChange={this.handleChange}
                required
              />
            </label>
            <br />
            <label>
              <span>Description:</span>{" "}
              <input
                name="currentDescription"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              <span>Date:</span>{" "}
              <input
                name="currentDate"
                type="datetime-local"
                onChange={this.handleChange}
                className="dateInput"
              />
            </label>
            {this.state.dateCheck ? <br></br> : null}
            {this.state.dateCheck ? (
              <span style={{ color: "red", fontWeight: "bold" }}>
                Too old date
              </span>
            ) : null}
            <br />
            <label>
              <span>Important:</span>{" "}
              <input
                name="importantTask"
                type="checkbox"
                onChange={this.handleChange}
                className="importantCheckbox"
              />
            </label>
            <button>Add</button>
          </div>
        </form>
        <div className="normalTasks">
          <p>
            <span>Todo tasks</span>
            <select ref={this.sortingMethodNormal} onChange={this.handleChange}>
              <option value="A-Z" selected>
                A-Z
              </option>
              <option value="Z-A">Z-A</option>
              <option value="New-old">New - old</option>
              <option value="Old-new">Old - new</option>
            </select>
          </p>
          <TaskList
            className="taskList"
            tasks={this.state.tasks}
            finished={this.finishTaskHandle}
            deleted={this.deleteTaskHandle}
            sort={this.sortingMethodNormal}
            sortDirection={this.state.sortDirection}
          />
        </div>
        <div className="importantTasks">
          <p>
            <span>Important tasks</span>
            <select
              ref={this.sortingMethodImportant}
              onChange={this.handleChange}
            >
              <option value="A-Z" selected>
                A-Z
              </option>
              <option value="Z-A">Z-A</option>
              <option value="New-old">New - old</option>
              <option value="Old-new">Old - new</option>
            </select>
          </p>
          <ImportantTaskList
            className="importantTaskList"
            tasks={this.state.tasks}
            finished={this.finishTaskHandle}
            deleted={this.deleteTaskHandle}
            sort={this.sortingMethodImportant}
            sortDirection={this.state.sortDirection}
          />
        </div>
        <div className="finishedTasks">
          <p>
            <span>Finished tasks</span>
            <select
              ref={this.sortingMethodFinished}
              onChange={this.handleChange}
            >
              <option value="A-Z" selected>
                A-Z
              </option>
              <option value="Z-A">Z-A</option>
              <option value="New-old">New - old</option>
              <option value="Old-new">Old - new</option>
            </select>
          </p>
          <FinishedTasksList
            className="finishedTasksList"
            finishedTasks={this.state.finishedTasks}
            deleted={this.deleteTaskHandle}
            sort={this.sortingMethodFinished}
            sortDirection={this.state.sortDirection}
          />
        </div>
      </section>
    );
  }
}

export default Main;
