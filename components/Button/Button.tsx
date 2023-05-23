import {FC} from 'react';
import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';
import Arrow from './arrow.svg';

export const Button: FC<ButtonProps> = ({appearance, arrow = 'none', children, className, ...props}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow === 'down',
			})}>
				<Arrow/>
			</span>}
		</button>
	);
};

