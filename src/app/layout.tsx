import { Header } from '@/components/header/Header'
import "@/styles/globals.scss"
import type { Metadata } from "next"
import styles from './layout.module.scss'

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
        <main>
          <div className={styles.container}>
            <Header />
            <hr className={styles.line} />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
