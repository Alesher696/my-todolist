import React from 'react';
import './App.css';
import Todolist from './todolist';
import {TaskType} from "./todolist";
function App() {
    const todoList_1: string = "What to learn?";
    const todoList_2: string = "What to buy";
    const tasks_1: Array<TaskType> = [
        {id: 1, title: 'HTML' , isDone:true},
        {id: 2, title: 'TS', isDone: true},
        {id: 3, title: 'JS', isDone:true}]
    return (
        <div className="App">
            <Todolist title={todoList_1} tasks = {tasks_1}/>

        </div>
    );
}

export default App;
