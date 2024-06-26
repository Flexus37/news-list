import { Header } from '@/components/header/Header'

import { Toolbar } from '@/components/toolbar/Toolbar'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Header />
        <hr className={styles.line} />
        <Toolbar />
      </div>
    </main>
  );
}
