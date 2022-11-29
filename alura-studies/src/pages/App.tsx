import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import '../index.css';
import { ITask } from '../models/types/itasktype';
import style from './App.module.scss';

function App() {
    const [tasks, setTasks] = useState<ITask[] | []>([]);

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List tasks={tasks} />
            <Timer />
        </div>
    );
}

export default App;
