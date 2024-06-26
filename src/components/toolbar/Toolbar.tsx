import GridMode from '@/public/icons/viewMode/grid.svg'
import ListMode from '@/public/icons/viewMode/list.svg'
import styles from './toolbar.module.scss'

export function Toolbar() {
	return (
		<div className={styles.toolbar}>
			<ul className={styles.filter}>
				<li className={styles.active}>Все</li>
				<li>Lenta.ru</li>
				<li>Mos.ru</li>
			</ul>
			<div className={styles.viewMode}>
				<button className={styles.active}>
					<ListMode className={styles.icon} />
				</button>
				<button className={''}>
					<GridMode className={styles.icon} />
				</button>
			</div>
		</div>
	)
}
