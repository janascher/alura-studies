import style from './Button.module.scss';
import { IButtonProps } from '../../models/ibuttonprops';

function Button({ children }: IButtonProps) {
    return <button className={style.button}>{children}</button>;
}

export default Button;
