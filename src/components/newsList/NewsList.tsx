'use client'

import Pagination from '@/components/pagination/Pagination'
import { RootState } from '@/store'
import { setViewMode, ViewMode } from '@/store/appSlice'
import { RssItem } from '@/types/rss'
import { Filter } from '@/types/types'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsCard from '../newsCard/NewsCard'
import styles from './newsList.module.scss'

interface INewsList {
  newsData: RssItem[];
  pageSlug: string;
}

// Количество новостей на страницу
const GRID_PAGE_SIZE = 4; // в режиме grid
const LIST_PAGE_SIZE = 3; // в режиме list

export default function NewsList({ newsData, pageSlug }: INewsList) {
  const viewMode = useSelector((state: RootState) => state.app.viewMode);
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') ?? 'все';
  const searchTerm = searchParams.get('search') ?? '';
  const currentPage = Number(pageSlug) ?? 1;

  const dispatch = useDispatch();

  // Получение режима отображения из локального хранилища
  useEffect(() => {
    const savedViewMode = localStorage.getItem('viewMode');
    if (savedViewMode) {
      dispatch(setViewMode(savedViewMode as ViewMode))
    }
  }, [dispatch])

  // Сортировка новостей по дате публикации
  const sortedNewsData = useMemo(() => {
    return newsData.slice().sort((a, b) =>
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
  }, [newsData])

  // Фильтрация новостей по домену RSS лент и поисковому фильтру
  const filteredNews = useMemo(() => {
    let filtered = sortedNewsData;

    if (filter !== 'все') {
      filtered = filtered.filter(item => item.source === filter);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description?.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [sortedNewsData, searchParams])

  // Отображение сообщения если ничего не найдено
  if (filteredNews.length === 0) {
    return (
      <>
        <h2 style={{fontSize: '3rem', marginBottom: '2rem', lineHeight: '1'}}> К сожалению ничего не найдено</h2>
        <p>Попробуйте изменить формулировку поиска или фильтры</p>
      </>
    )
  }

  // Общее количество новостей
  const totalPages = Math.ceil(filteredNews.length / (viewMode === 'grid' ? GRID_PAGE_SIZE : LIST_PAGE_SIZE));

  const renderNews = () => {
    // Количество новостей на странице в зависимости от режима отображения
    const currentPageSize = viewMode === 'grid' ? GRID_PAGE_SIZE : LIST_PAGE_SIZE;
    const startIndex = (currentPage - 1) * currentPageSize;
    const endIndex = startIndex + currentPageSize;
    const newsToShow = filteredNews.slice(startIndex, endIndex);

    return (
      <>
        <div className={viewMode === 'grid' ? styles.gridMode : styles.listMode}>
          {newsToShow.map((item, index) => (
            <NewsCard key={index} newsItem={item} viewMode={viewMode} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          filter={filter as Filter}
          searchTerm={searchTerm}
        />
      </>
    );
  }

  return renderNews();
}
