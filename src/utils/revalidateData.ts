'use server'

import { revalidateTag } from 'next/cache'

/**
 * Ручное обновление данных
 */
export default async function handleRevalidate() {
	revalidateTag('news');
}