'use client'

import { RootState } from '@/store'
import { setViewMode } from '@/store/appSlice'
import { Filter } from '@/types/types'
import { createQueryString } from '@/utils/queryString'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'

import GridMode from '@/public/icons/viewMode/grid.svg'
import ListMode from '@/public/icons/viewMode/list.svg'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from './toolbar.module.scss'

export function Toolbar() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Получение query params filter
	const filter = searchParams.get('filter')?.toString();

	const viewMode = useSelector((state: RootState) => state.app.viewMode);

	const dispatch = useDispatch();

	// Если фильтр не установлен, то ставиться 'все' по умолчанию
	useEffect(() => {
		if (!filter) {
			handleChangeFilter('все');
		}
	}, [])

	// Ручное изменение фильтр и указание фильтра в URL строке
	const handleChangeFilter = (filterName: Filter) => {
		const newQueryString = createQueryString(searchParams, 'filter', filterName);
		router.replace(`${pathname}?${newQueryString}`);
	}

	return (
		<div className={styles.toolbar}>
			<ul className={styles.filter}>
				<li
					onClick={() => handleChangeFilter('все')}
					className={filter === 'все' ? styles.active : ''}
				>
					Все
				</li>
				<li
					onClick={() => handleChangeFilter('lenta.ru')}
					className={filter === 'lenta.ru' ? styles.active : ''}
				>
					Lenta.ru
				</li>
				<li
					onClick={() => handleChangeFilter('mos.ru')}
					className={filter === 'mos.ru' ? styles.active : ''}
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
