import NewsList from '@/components/newsList/NewsList'

import { Toolbar } from '@/components/toolbar/Toolbar'
import StoreProvider from '@/store/StoreProvider'
import parseRss from '@/utils/rssParser'

// Ссылки на RSS ленты
const _mosRuRssUrl = 'https://www.mos.ru/rss';
const _lentaRuRssUrl = 'https://lenta.ru/rss/news'

interface PageProps {
  params: {
    pageSlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const pageSlug = params.pageSlug;

	const mosRuData = await parseRss(_mosRuRssUrl);
  const lentaRuData = await parseRss(_lentaRuRssUrl);

	const newsData = [...mosRuData, ...lentaRuData];

  return (
		<StoreProvider>
			<Toolbar />
			<NewsList pageSlug={pageSlug} newsData={newsData} />
		</StoreProvider>
  );
}


