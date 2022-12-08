import { ITaskProps } from '../../../models/itaskprops';
import style from './Item.module.scss';

function Item({ task, time, selected, completed, id, selectTask }: ITaskProps) {
    return (
        <li
            className={`${style.item} ${selected ? style.selectedItem : ''} ${
                completed ? style.completedItem : ''
            }`}
            onClick={() =>
                !completed &&
                selectTask({
                    task,
                    time,
                    selected,
                    completed,
                    id,
                })
            }>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.completed} aria-label="completed task"></span>}
        </li>
    );
}

export default Item;
