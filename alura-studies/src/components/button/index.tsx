import style from './Button.module.scss';
import { IButtonProps } from '../../models/ibuttonprops';

function Button({ children, type, onClick }: IButtonProps) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    );
}

export default Button;
