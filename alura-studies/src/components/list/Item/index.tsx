import style from '../Lists.module.scss';

function Item(props: { task: string; time: string }) {

    const { task, time } = props;

    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    );
}

export default Item;