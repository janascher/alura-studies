import { ITask } from '../../../models/types/itasktype';
import style from '../Lists.module.scss';

function Item({ task, time, selected, completed, id }: ITask) {
    
    console.log('item atual: ', { task, time, selected, completed, id });

    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    );
}

/* function Item(props: ITask) {

    const { task, time, selected, completed, id } = props;
    console.log('item atual: ', { task, time, selected, completed, id });

    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    );
} */

export default Item;
