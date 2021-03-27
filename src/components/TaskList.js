import React from "react";
import Task from "./Task";
//import "./Task.css";

const TaskList = ({list, click}) => {
    if (list) {
        return  list.map((el, id) => {
        return (
            <Task el={el} key={id} click={click} id={id}/>
            );
		});
    } else return (
        <h4>Add New Task</h4>
        
        
    )
        
};

export default TaskList;