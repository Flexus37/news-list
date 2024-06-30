import { Filter } from '@/types/types'
import Link from 'next/link'
import styles from './pagination.module.scss'

interface IPagination {
  currentPage: number;
  totalPages: number;
  filter: Filter;
  searchTerm: string
}

export default function Pagination({
  currentPage,
  totalPages,
  filter,
  searchTerm
}: IPagination) {

  // Получение страниц пагинации
  const getPagination = () => {
		if (totalPages <= 1) {
			return [];
		}

    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    // Если многоточие, то вернуться номера всех страниц
		if (isNaN(currentPage)) {
			for (let i = 1; i <= totalPages; i++) {
				range.push(i);
			}
			return range;
		}

    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }
    range.push(totalPages);

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  const pages = getPagination();

  return (
    <div className={styles.pagination}>
			<div className={styles.paginationInner}>
				{pages.map((page, index) => (
					<Link
						key={index}
						href={`/${page}?filter=${filter}&search=${searchTerm}`}
						className={`${styles.pageLink} ${currentPage === page ? styles.active : ''}`}
					>
						{page}
					</Link>
				))}
			</div>
    </div>
  );
}
