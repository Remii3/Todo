import "../styles/App.scss";
import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Main from "../Layouts/Main";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>{<Header />}</header>
          <main>{<Main />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </div>
    );
  }
}

export default App;
