import style from './Button.module.scss';
import { IButtonProps } from '../../models/ibuttonprops';
import { IButtonType } from '../../models/types/ibuttontype';

function Button({ children }: IButtonProps, {type, onClick}: IButtonType) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    );
}

export default Button;
