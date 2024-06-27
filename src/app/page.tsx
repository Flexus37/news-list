import parseRss from '@/utils/rssParser'

import { Header } from '@/components/header/Header'
import NewsList from '@/components/newsList/NewsList'
import { Toolbar } from '@/components/toolbar/Toolbar'
import StoreProvider from '@/store/StoreProvider'
import styles from './page.module.scss'

const _mosRuRssUrl = 'https://www.mos.ru/rss';
const _lentaRuRssUrl = 'https://lenta.ru/rss/news';

export default async function Home() {

  const mosRuData = await parseRss(_mosRuRssUrl);
  const lentaRuData = await parseRss(_lentaRuRssUrl);

  const newsData = [...mosRuData, ...lentaRuData]

  return (
    <main>
      <div className={styles.container}>
        <StoreProvider>
          <Header />
          <hr className={styles.line} />
          <Toolbar />
          <NewsList newsData={newsData} />
        </StoreProvider>
      </div>
    </main>
  );
}
