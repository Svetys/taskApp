import React, { Component } from "react";
import AppHeader from "../src/components/AppHeader";
import Box from "../src/components/Box";
import AppFooter from "../src/components/AppFooter";
import "./App.css";


class App extends Component {
  // State values
  constructor() {
    super();
    this.state = {
      Daily: [{
        task: 'Client call',
        done: 1
      },
      {
        task: 'Fill workday',
        done: 0
      },
      {
        task: 'Update Jira notes',
        done: 1
      }],
      Development: [{
        task: 'Learn CSS flexbox',
        done: 1,
      },
      {
        task: 'Learn how to cook',
        done: 0
      }],
      HPC: [{
        task: 'Update playbook',
        done: 0
      },
      {
        task: 'Prepare training',
        done: 1
      }]
    };
  }

  addTaskDaily = () => {
    let newList = this.state.Daily;
    newList.push({
      task: 'New Task...',
      done: 0
    });
    this.setState({Daily: newList});
  };

  addTaskDevelopment = () => {
    let newList = this.state.Development;
    newList.push({
      task: 'New Task...',
      done: 0
    });
    this.setState({Development: newList});
  };

  addTaskHPC = () => {
    let newList = this.state.HPC;
    newList.push({
      task: 'New Task...',
      done: 0
    });
    this.setState({HPC: newList});
  };

  taskDoneDaily = (click) => {
    let id = click.target.id;
    let newListDaily = this.state.Daily;
    if (newListDaily[id].done) {
      newListDaily[id].done = 0;
    } else {
      newListDaily[id].done = 1;
    }
    this.setState({Daily: newListDaily})
  }

  taskDoneDevelopment = (click) => {
    let id = click.target.id;
    let newListDevelopment = this.state.Development;
    if (newListDevelopment[id].done) {
      newListDevelopment[id].done = 0;
    } else {
      newListDevelopment[id].done = 1;
    }
    this.setState({Development: newListDevelopment})
  }

  taskDoneHPC = (click) => {
    let id = click.target.id;
    let newListHPC = this.state.HPC;
    if (newListHPC[id].done) {
      newListHPC[id].done = 0;
    } else {
      newListHPC[id].done = 1;
    }
    this.setState({HPC: newListHPC})
  }



 // Me trying to do stuff 
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="App_boxes">
          <Box name={'Daily'} click={this.addTaskDaily} list={this.state.Daily} click2={this.taskDoneDaily} />
          <Box name={'Development'} click={this.addTaskDevelopment} list={this.state.Development} click2={this.taskDoneDevelopment} />
          <Box name={'HPC'} click={this.addTaskHPC} list={this.state.HPC} click2={this.taskDoneHPC} />
        </div>
        <AppFooter />
      </div>
      );
  }
}

export default App;
