import React from "react";
import TaskList from "./TaskList";
//import "./Box.css";

const Box = ({list, name, click, click2}) => {
	return (
        <div className="fullBox">
            <h2>{name}:</h2>
            <div className="box box-items">
                <div className="listedTasks">
                    <TaskList list={list} click={click2}/>
                </div>
                <button className="button-primary" onClick={click}>+</button>
            </div>
        </div>
    )
};

export default Box;