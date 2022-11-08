import './task-list.css';

import { useState } from 'react';
import { Task } from '../Task/Task';

export const TaskList = ({ taskList: initTaskList, onDelete }) => {
    console.log({ initTaskList });

    const [taskList, setUpdateTaskList] = useState(initTaskList);
    console.log('state:', { taskList });

    const handleSave = (updatedtask) => {
        setUpdateTaskList([...taskList.filter((task) => task.id !== updatedtask.id), { text: updatedtask.text }]);
    };

    return (
        <section className='task-list'>
            <h2>Tasks</h2>
            <ul id='tasks'>
                {initTaskList.map((task, i) => {
                    task.id = `${task.text}-${i}`;
                    return <Task id={task.id} task={task} key={task.id} onDelete={onDelete} onSave={handleSave} />;
                })}
            </ul>
        </section>
    );
};
