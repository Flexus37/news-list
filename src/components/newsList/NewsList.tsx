'use client'

import { RootState } from '@/store'
import { useSelector } from 'react-redux'

import { setViewMode, ViewMode } from '@/store/appSlice'
import { RssItem } from '@/types/rss'
import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import NewsCard from '../newsCard/NewsCard'
import styles from './newsList.module.scss'

interface INewsList {
	newsData: RssItem[]
}

export default function NewsList({newsData}: INewsList) {
	const viewMode = useSelector((state: RootState) => state.app.viewMode);
	const filter = useSelector((state: RootState) => state.app.filter);

	const dispatch = useDispatch();

	useEffect(() => {
		const savedViewMode = localStorage.getItem('viewMode');
		if (savedViewMode) {
			dispatch(setViewMode(savedViewMode as ViewMode))
		}
	}, [])

	const sortedNewsData = useMemo(() => {
		return newsData.slice().sort((a, b) =>
			b.pubDate.getTime() - a.pubDate.getTime()
		);
	}, [newsData])

	const renderNews = () => {

		const filteredNews = filter === 'Все'
		? sortedNewsData
		: sortedNewsData.filter(item => {
			if (filter.toLowerCase() === item.source) {
				return item
			}
		})

		const news = filteredNews.map((item, index) => {
			return <NewsCard key={index} newsItem={item} viewMode={viewMode} />;
		})

		return (
			<div className={viewMode === 'grid' ? styles.gridMode : styles.listMode}>
				{news}
			</div>
		)

	}

	return renderNews();
}

