import { useState, useEffect } from 'react'
import classes from './WelcomeScreen.module.css'
import logo from '../../assets/sdu_logo.svg'

export default function WelcomeScreen({ onComplete }) {
	const [isVisible, setIsVisible] = useState(true)
	const [isAnimating, setIsAnimating] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsAnimating(false)
			setTimeout(() => {
				setIsVisible(false)
				if (onComplete) {
					onComplete()
				}
			}, 500)
		}, 3000)

		return () => clearTimeout(timer)
	}, [onComplete])

	if (!isVisible) return null

	return (
		<div
			className={`${classes.welcomeScreen} ${
				isAnimating ? classes.visible : ''
			}`}
		>
			<div className={classes.content}>
				<div className={classes.logoContainer}>
					<img src={logo} alt='SDU Logo' className={classes.logo} />
				</div>
				<div className={classes.title}>Welcome to SDU Campus</div>
				<div className={classes.subtitle}>Explore our interactive map</div>
			</div>
			<div className={classes.backgroundPattern}></div>
		</div>
	)
}
