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
  };

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
    if (importantTask === false) {
      this.setState((prevState) => ({
        tasks: {
          ...prevState.tasks,
          normalTasks: [...tasks.normalTasks, task],
        },
        currentId: this.state.currentId + 1,
      }));
      console.log(this.state.tasks);
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
      const time = e.target.value.slice(12);
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
              Title:{" "}
              <input
                name="currentTitle"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Description:{" "}
              <input
                name="currentDescription"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Date:{" "}
              <input
                name="currentDate"
                type="datetime-local"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Important
              <input
                name="importantTask"
                type="checkbox"
                onChange={this.handleChange}
              />
            </label>
            <button>Add</button>
          </div>
        </form>
        <div className="normalTasks">
          <h3>Todo tasks</h3>
          <ul>
            <TaskList
              key="test"
              className="taskList"
              tasks={this.state.tasks}
              finished={this.finishTaskHandle}
              deleted={this.deleteTaskHandle}
            />
          </ul>
        </div>
        <div className="importantTasks">
          <h3>important tasks</h3>
          <ul>
            <ImportantTaskList
              key="test2"
              className="importantTaskList"
              tasks={this.state.tasks}
              finished={this.finishTaskHandle}
              deleted={this.deleteTaskHandle}
            />
          </ul>
        </div>
        <div className="finishedTasks">
          <h3>Done tasks</h3>
          <ul>
            <FinishedTasksList
              className="finishedTasksList"
              finishedTasks={this.state.finishedTasks}
              deleted={this.deleteTaskHandle}
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Main;
