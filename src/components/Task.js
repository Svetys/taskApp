import React from "react";
//import "./Task.css";

const TaskList = ({el, click, id}) => {
    let taskClass = "";
    if (el.done === 1) {
        taskClass = "single-task completed-task";
    } else {
        taskClass = "single-task";
    }
    return (
        <div className={taskClass}>
            <textarea>{el.task}</textarea>
            <button className="btn-secondary" onClick={click} id={id}>✓</button>
        </div>
    )
        
};

export default TaskList;