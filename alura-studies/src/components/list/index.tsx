import { ITask } from '../../models/types/itasktype';
import Item from './Item';
import style from './Lists.module.scss';

function List({ tasks }: { tasks: ITask[] }) {
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
                {tasks.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    );
}

export default List;
