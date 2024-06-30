'use server'

import { RssData, RssItem } from '@/types/rss'
import xml2js from 'xml2js'
import getSourceFromUrl from './getSourceFromUrl'

/**
 * Парсер для получения данных из RSS ленты
 * @param {string} url - URL RSS ленты
 * @returns {Promise<RssItem[]>} - Promise массива с данными
 */
const parseRss = async (url: string): Promise<RssItem[]> => {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600, // 1 час
        tags: ['news']
      }
    });

    if (!response.ok) {
      return [];
    }

    const text = await response.text();
    const data: RssData = await xml2js.parseStringPromise(text, {
      trim: true,
      mergeAttrs: true,
    });

    const items = data.rss.channel[0].item;

    return items.map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      source: getSourceFromUrl(item.link[0]),
      pubDate: new Date(item.pubDate[0]),
      description: item.description ? item.description[0] : '',
      enclosure: {
        url: item.enclosure[0].url[0]
      },
    }));
  } catch (error) {
    console.error('Error fetching or parsing RSS feed', error);
    return [];
  }
};

export default parseRss;


