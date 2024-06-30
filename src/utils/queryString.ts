/**
 * Создание строки параметров запроса (query params)
 * @param {URLSearchParams} searchParams - Объект, содержащий параметры поиска текущего URL-адреса
 * @param {string} name - Имя параметра
 * @param {string} value - Значение параметра
 * @returns {URLSearchParams} Параметры запроса
 */
export const createQueryString = (searchParams: URLSearchParams, name: string, value?: string): URLSearchParams => {
  const params = new URLSearchParams(searchParams.toString());

  if (value) {
    params.set(name, value);
  } else {
    params.delete(name);
  }

  return params;
};

