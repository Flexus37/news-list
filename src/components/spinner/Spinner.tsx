'use client'

import Lottie from 'lottie-react'
import lottieSpinner from './loadingSpinner.json'
import styles from './spinner.module.scss'

export function Spinner() {
	return (
		<div className={styles.wrapper}>
			<Lottie className={styles.spinner} animationData={lottieSpinner} loop={true} />
		</div>
	)
}
