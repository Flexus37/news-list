import RefreshIcon from '@/public/icons/header/refresh.svg'
import SearchIcon from '@/public/icons/header/search.svg'
import styles from './header.module.scss'

export function Header() {
	return (
		<header className={styles.header}>

			<div className={styles.item}>
				<h1 className={styles.title}>Список новостей</h1>
				<button className={styles.refresh}>
					<RefreshIcon className={styles.refreshIcon} alt='Cбросить' />
				</button>
			</div>

			<div className={styles.item}>
				<div className={styles.search__wrapper}>
					<input className={styles.search} type='search' />
					<button className={styles.searchBtn}>
						<SearchIcon className={styles.searchIcon} alt='Найти' />
					</button>
				</div>

			</div>
		</header>
	)
}
