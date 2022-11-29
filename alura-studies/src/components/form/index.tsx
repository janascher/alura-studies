import React, { useState } from 'react';
import { IFormProps } from '../../models/iformprops';
import Button from '../Button';
import style from './Forms.module.scss';
import { v4 as uuidv4 } from 'uuid';

function Form({ setTasks }: IFormProps) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00');

    function addTasks(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTasks((oldTasks) => [
            ...oldTasks,
            { task, time, selected: false, completed: false, id: uuidv4() },
        ]);
        setTask('');
        setTime('00:00');
    }

    return (
        <form className={style.newTask} onSubmit={addTasks}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button>Adicionar</Button>
        </form>
    );
}

export default Form;
