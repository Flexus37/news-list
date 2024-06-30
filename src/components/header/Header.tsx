'use client'

import RefreshIcon from '@/public/icons/header/refresh.svg'
import SearchIcon from '@/public/icons/header/search.svg'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { createQueryString } from '@/utils/queryString'
import handleRevalidate from '@/utils/revalidateData'
import { useEffect, useState } from 'react'
import styles from './header.module.scss'

export function Header() {
	const [searchInputValue, setSearchInputValue] = useState<string>('');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

	useEffect(() => {
		setSearchInputValue(searchParams.get('search') ?? '');
	}, [])

  // Изменение фильтра поиска
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInputValue(e.target.value);
    const searchTerm = e.target.value.trim().toLowerCase();

    // Замена query params search=
    router.replace(`/1/?${createQueryString(searchParams, 'search', searchTerm)}`);
  }

  // Ручная перезагрузка данных и сброс всех фильтров
	const handleRefresh = async () => {
		const newSearchParams = createQueryString(searchParams, 'filter', 'все');
    const finalSearchParams = createQueryString(newSearchParams, 'search', '');
		setSearchInputValue('');

    router.replace(`${pathname}?${finalSearchParams}`);

    // Ревалидация данных
    await handleRevalidate();
	}

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <h1 className={styles.title}>Список новостей</h1>
        <button
          onClick={() => handleRefresh()}
          className={styles.refresh}
        >
          <RefreshIcon className={styles.refreshIcon} alt='Cбросить' />
        </button>
      </div>

      <div className={styles.item}>
        <div className={styles.searchWrapper}>
          <input
            className={styles.search}
            type='search'
						value={searchInputValue ?? ''}
            onChange={(e) => handleSearchChange(e)}

          />
          <button className={styles.searchBtn}>
            <SearchIcon className={styles.searchIcon} alt='Найти' />
          </button>
        </div>
      </div>
    </header>
  )
}
