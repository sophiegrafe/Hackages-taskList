import { useRef, useState } from 'react';
import './App.css';
import { TaskList } from './components/TaskList/TaskList';

function App() {
    const [taskList, setTaskList] = useState([]);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([...taskList, { text: inputRef.current.value }]);
        inputRef.current.value = '';
    };

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    return (
        <div className='App'>
            <header>
                <h1>Task List for the JS/React Bootcamp</h1>
                <form id='new-task-form' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='new-task-input'
                        id='new-task-input'
                        placeholder='What do you have planned today?'
                        ref={inputRef}
                    />
                    <input className='btn_add-task' type='submit' id='new-task-submit' />
                </form>
            </header>
            <main>
                <TaskList taskList={taskList} onDelete={handleDelete} />
            </main>
        </div>
    );
}

export default App;
