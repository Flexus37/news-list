import RefreshIcon from '@/public/icons/refresh.svg'
import SearchIcon from '@/public/icons/search.svg'
import styles from './header.module.scss'

export function Header() {
	return (
		<header className={styles.header}>

			<div className={styles.item}>
				<h1 className={styles.title}>Список новостей</h1>
				<button className={styles.refresh}>
					<RefreshIcon className={styles.refresh__icon} alt='Cбросить' />
				</button>
			</div>

			<div className={styles.item}>
				<div className={styles.search__wrapper}>
					<input className={styles.search} type='search' />
					<button className={styles.search__btn}>
						<SearchIcon className={styles.search__icon} alt='Найти' />
					</button>
				</div>

			</div>
		</header>
	)
}
