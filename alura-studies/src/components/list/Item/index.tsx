import { ITaskProps } from '../../../models/types/itasktype';
import style from './Item.module.scss';

function Item({ task, time, selected, completed, id, selectTask }: ITaskProps) {
    return (
        <li
            className={`${style.item} ${selected ? style.selectedItem : ''}`}
            onClick={() =>
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
        </li>
    );
}

export default Item;
