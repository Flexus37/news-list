'use client'

import styles from '@/styles/pages/error.module.scss'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.error}>
      <h2>Что-то пошло не так...</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Попробовать ещё раз
      </button>
    </div>
  )
}