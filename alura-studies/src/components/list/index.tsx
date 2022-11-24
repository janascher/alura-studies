import Item from './Item';
import style from './Lists.module.scss';

function List() {
    const tasks = [
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
    ];
    return (
        <aside className={style.todoList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item key={index} task={item.task} time={item.time} />
                ))}
            </ul>
        </aside>
    );
}

export default List;
