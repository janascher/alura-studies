import { ISelectTask } from '../../models/itaskprops';
import Item from './Item';
import style from './Lists.module.scss';

function List({ tasks, selectTask }: ISelectTask) {
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
