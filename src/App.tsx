import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./todolist";


export const App = () => {
    const title_1: string = "What's learn?"
    const title_2: string = "What's buy?"
    const task_1: Array<TaskType> = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'TS', isDone: true},
        {id: 3, title: 'JS', isDone: true},
        {id: 4, title: 'JSX', isDone: true}
    ]
    const task_2: Array<TaskType> = [
        {id: 1, title: 'tomato', isDone: false},
        {id: 2, title: 'potato', isDone: false},
        {id: 3, title: 'meat', isDone: false}
    ]
    return (<div className='App'>

        <Todolist title={title_1} tasks={task_1}/>
        <Todolist title={title_2} tasks={task_2}/>
    </div>)

}


// import Todolist from './todolist';
// import {TaskType} from "./todolist";
// function App() {
//     const todoList_1: string = "What to learn?";
//     const todoList_2: string = "What to buy";
//     const tasks_1: Array<TaskType> = [
//         {id: 1, title: 'HTML' , isDone:true},
//         {id: 2, title: 'TS', isDone: true},
//         {id: 3, title: 'JS', isDone:true}]
//     return (
//         <div className="App">
//             <Todolist title={todoList_1} tasks = {tasks_1}/>
//
//         </div>
//     );
// }
//
// export default App;
