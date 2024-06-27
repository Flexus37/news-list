'use client'

import { RootState } from '@/store'
import { setFilter, setViewMode } from '@/store/appSlice'
import { useDispatch, useSelector } from 'react-redux'

import GridMode from '@/public/icons/viewMode/grid.svg'
import ListMode from '@/public/icons/viewMode/list.svg'
import styles from './toolbar.module.scss'

export function Toolbar() {
	const viewMode = useSelector((state: RootState) => state.app.viewMode);
	const filter = useSelector((state: RootState) => state.app.filter);

	const dispatch = useDispatch();

	return (
		<div className={styles.toolbar}>
			<ul className={styles.filter}>
				<li
					onClick={() => dispatch(setFilter('Все'))}
					className={filter === 'Все' ? styles.active : ''}
				>
					Все
				</li>
				<li
					onClick={() => dispatch(setFilter('Lenta.ru'))}
					className={filter === 'Lenta.ru' ? styles.active : ''}
				>
					Lenta.ru
				</li>
				<li
					onClick={() => dispatch(setFilter('Mos.ru'))}
					className={filter === 'Mos.ru' ? styles.active : ''}
				>
					Mos.ru
				</li>
			</ul>
			<div className={styles.viewMode}>
				<button
					onClick={() => dispatch(setViewMode('list'))}
					className={viewMode === 'list' ? styles.active : ''}
				>
					<ListMode className={styles.icon} />
				</button>
				<button
					onClick={() => dispatch(setViewMode('grid'))}
					className={viewMode === 'grid' ? styles.active : ''}
				>
					<GridMode className={styles.icon} />
				</button>
			</div>
		</div>
	)
}
