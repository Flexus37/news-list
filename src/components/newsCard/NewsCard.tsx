'use client'

import { ViewMode } from '@/store/appSlice'
import { RssItem } from '@/types/rss'
import Image from 'next/image'
import styles from './newsCard.module.scss'

interface INewsCard {
	newsItem: RssItem;
	viewMode: ViewMode
}

export default function NewsCard({newsItem, viewMode}: INewsCard) {
	const { title, link, source, pubDate, description, enclosure } = newsItem;

	const stringDate = pubDate.toLocaleDateString();

	const renderCardGridMode = () => {
		return (
			<div className={styles.card}>
				<div className={styles.cardGridMode}>
					<h2>
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
						>{title}</a>
					</h2>
					<p>{description}</p>
					<a
						className={styles.newsLink}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>Подробнее</a>
					<div className={styles.metaInfo}>
						<div className={styles.metaInfoInner}>
							<a
								className={styles.resourceLink}
								href={`https://${source}/`}
								target="_blank"
								rel="noopener noreferrer"
							>{source}</a>
							<time dateTime={stringDate}>{stringDate}</time>
						</div>
					</div>
				</div>

			</div>
		)
	}

	const renderCardListMode = () => {
		return (
			<div className={styles.card}>
				<div className={styles.cardListMode}>
					<div className={styles.cardListModeInner}>
						<Image
							className={styles.image}
							src={enclosure.url}
							alt='Картинка новости'
							width={338}
							height={166}
							priority
						/>
						<div>
							<h2>
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>{title}</a>
							</h2>
							<p>{description}</p>
							<a
								className={styles.newsLink}
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>Подробнее</a>
						</div>
					</div>
					<div className={styles.metaInfo}>
						<div className={styles.metaInfoInner}>
						<a
								className={styles.resourceLink}
								href={`https://${source}/`}
								target="_blank"
								rel="noopener noreferrer"
							>{source}</a>
							<time dateTime={stringDate}>{stringDate}</time>
						</div>
					</div>
				</div>

			</div>
		)
	}

	return viewMode === 'grid' ? renderCardGridMode() : renderCardListMode();

}
