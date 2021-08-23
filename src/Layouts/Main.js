import "../styles/Main.scss";
import React, { Component } from "react";
import TaskList from "../components/TaskList";
import FinishedTasksList from "../components/FinishedTasksList";

class Main extends Component {
  state = {
    currentId: 0,
    currentTitle: "",
    currentDescription: "",
    currentDate: "",
    tasks: [],
    finishedTasks: [],
  };

  handleSubmit = (e) => {
    const { currentId, currentTitle, currentDescription, currentDate, tasks } =
      this.state;
    e.preventDefault();
    const task = {
      id: currentId,
      title: currentTitle,
      description: currentDescription,
      date: currentDate,
    };

    this.setState({
      tasks: [...tasks, task],
      currentId: this.state.currentId + 1,
    });
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
  };

  finishTaskHandle = (id) => {
    const clickedTask = this.state.tasks.findIndex((x) => x.id === id);
    this.state.finishedTasks.push(this.state.tasks[clickedTask]);
    this.setState({ finishedTasks: [...this.state.finishedTasks] });
    this.state.tasks.splice(clickedTask, 1);
    this.setState({ tasks: this.state.tasks });
  };

  deleteTaskHandle = (id, recognizer) => {
    if (recognizer === "finished") {
      const clickedTask = this.state.finishedTasks.findIndex(
        (x) => x.id === id
      );
      this.state.finishedTasks.splice(clickedTask, 1);
      this.setState({ finishedTasks: this.state.finishedTasks });
    } else {
      const clickedTask = this.state.tasks.findIndex((x) => x.id === id);
      this.state.tasks.splice(clickedTask, 1);
      this.setState({ tasks: this.state.tasks });
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
          <ul></ul>
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
