import { useState, useEffect } from 'react';
import timeToSeconds from '../../common/utils/time';
import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';
import { ITaskSelected } from '../../models/itaskprops';

function Timer({ selected, endTask }: ITaskSelected) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected?.time));
        }
    }, [selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)}>Começar!</Button>
        </div>
    );
}

export default Timer;
