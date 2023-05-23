import {SidebarProps} from './Sidebar.props';
import Menu from '../Menu/Menu';
import Logo from '../logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({className, ...props}: SidebarProps) => {
	return (
		<aside {...props} className={cn(className, styles.sidebar)}>
			<Logo className={styles.logo}/>
			<div>Search</div>
			<Menu/>
		</aside>
	);
};
