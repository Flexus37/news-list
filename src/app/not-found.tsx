import styles from '@/styles/pages/not-found.module.scss'
import Link from 'next/link'


export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>404</h2>
      <p>Страница не найдена</p>
      <Link href="/1">Вернуться на главную</Link>
    </div>
  )
}