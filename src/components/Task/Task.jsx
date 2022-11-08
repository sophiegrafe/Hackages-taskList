import { useState } from 'react';
import './task.css';

export const Task = ({ task: initialTask, onDelete, onSave, id }) => {
    const [task, setTask] = useState(initialTask);
    const [editable, setEditable] = useState(false);

    const onEditandSave = () => {
        setEditable(!editable);
        onSave(task);
    };

    const onChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <li className='task'>
            <div className='content'>
                <input type='text' className='text' value={task.text} onChange={onChange} readOnly={!editable} />
            </div>
            <div className='actions'>
                <button className='edit' onClick={onEditandSave}>
                    {editable ? 'Save' : 'Edit'}
                </button>
                <button className='delete' onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};
