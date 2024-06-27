/**
 * Извлекает домен из URL.
 * @param {string} url - URL для извлечения домена.
 * @returns {string} - Домен из URL без префикса www.
 */
const getSourceFromUrl = (url: string): string => {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, '');
  } catch (error) {
    console.error('Invalid URL:', url);
    return '';
  }
};

export default getSourceFromUrl;
