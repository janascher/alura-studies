import { IClockProps } from '../../../models/iclockprops';
import style from './Clock.module.scss';

function Clock({ time = 0 }: IClockProps) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnit] = String(seconds).padStart(2, '0');
    /* padStart():  permite que tenhamos uma cadeia de caracteres padrão e se não tiver o número mínimo de cadeia de caracteres, ele pega esses valores e transforma em padrão. */

    return (
        <>
            <span className={style.clockNumber}>{minuteTen}</span>
            <span className={style.clockNumber}>{minuteUnit}</span>
            <span className={style.divisionClock}>:</span>
            <span className={style.clockNumber}>{secondTen}</span>
            <span className={style.clockNumber}>{secondUnit}</span>
        </>
    );
}

export default Clock;
