import { Header } from '@/components/header/Header'
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Suspense } from 'react'
import styles from './layout.module.scss'
import Loading from './loading'

export const metadata: Metadata = {
  title: "Список новостей",
  description: "Новости с других ресурсов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en,ru">
      <body>
        <div className={styles.container}>
          <Suspense fallback={<Loading />}>
            <Header />
          </Suspense>
        </div>
        <main>
          <div className={styles.container}>
              <hr className={styles.line} />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
        </main>
      </body>
    </html>
  );
}
