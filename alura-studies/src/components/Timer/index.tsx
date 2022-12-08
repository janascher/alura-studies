import { useState } from 'react';
import timeToSeconds from '../../common/utils/time';
import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';
import { ITaskSelected } from '../../models/types/itasktype';

function Timer({ selected }: ITaskSelected) {
    const [time, setTime] = useState<number>();

    if(selected?.time){
        setTime(timeToSeconds(selected.time))
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            Tempo: {time}
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>Começar!</Button>
        </div>
    );
}

export default Timer;
