import { ISelectTask } from '../../models/types/itasktype';
import Item from './Item';
import style from './Lists.module.scss';

function List({ tasks, selectTask }: ISelectTask) {
    /* const [oldTasks, setOldTask] = useState([
        {
            task: 'React',
            time: '02:00:00',
        },
        {
            task: 'JavaScript',
            time: '02:00:00',
        },
        {
            task: 'TypeScript',
            time: '03:00:00',
        },
    ]); */
    /* const tasks = [
        {
            task: 'React',
            time: '02:00:00',
        },
        {
            task: 'JavaScript',
            time: '02:00:00',
        },
        {
            task: 'TypeScript',
            time: '03:00:00',
        },
    ]; */
    return (
        <aside className={style.todoList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item selectTask={selectTask} key={item.id} {...item} />
                ))}
            </ul>
        </aside>
    );
}

export default List;
