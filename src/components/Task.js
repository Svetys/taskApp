import React from "react";
//import "./Task.css";

const TaskList = ({defaultValue, click, id}) => {
    let taskClass = "";
    if (defaultValue.done === 1) {
        taskClass = "single-task completed-task";
    } else {
        taskClass = "single-task";
    }
    return (
        <div className={taskClass}>
            <textarea defaultValue={defaultValue.task}></textarea>
            <button className="btn-secondary" onClick={click} id={id}>✓</button>
        </div>
    )
        
};

export default TaskList;