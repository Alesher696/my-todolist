import React from 'react';

type TitlePropType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: TitlePropType) => {
    let TasksList;

    (props.tasks.length === 0) ? TasksList = <span>Empty</span> : TasksList = props.tasks.map( el =>{

        return (
            <li> <input type="checkbox" checked ={el.isDone}/>
                <span>{el.title}</span></li>
        )

    })
    return (
        <div className='Todolist'>
            <div>
                {props.title}
            </div>
            <div>
                <input/>
                <button>+</button>
            </div>
            <div>
                <ul>
                    {TasksList}
                </ul>

            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Complete</button>
            </div>
        </div>
    )

}


// type TodolistPropType = {
//     title: string,
//     tasks: Array<TaskType>
// }
//
// export type TaskType = {
//     id: number,
//     title: string,
//     isDone: boolean
//
// }
// const Todolist = (props: TodolistPropType) => {
//     let tasksList;
//
//     (props.tasks.length === 0)
//         ? tasksList = <span>Empty</span>
//         : tasksList = props.tasks.map((task: TaskType) => {
//         return   <li><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
//     })
//
//     return (
//
//         <div>
//             <h3>{props.title}</h3>
//             <div>
//                 <input/>
//                 <button>+</button>
//             </div>
//             <ul>
//                 {tasksList}
//
//                 <li>
//                     <input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
//             </ul>
//             <div>
//                 <button>All</button>
//                 <button>Active</button>
//                 <button>Completed</button>
//             </div>
//         </div>
//     );
// };
//
// export default Todolist;


//add task_2 in created todolist_2