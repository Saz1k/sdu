import { useEffect, useState } from 'react'
import classes from './HomeScreen.module.css'
import logo from '../assets/sdu_logo.svg'
import panorama from '../assets/panorama.svg'
import classroom from '../assets/classroom.svg'
import events from '../assets/events.svg'

export default function HomeScreen({ onSelectSection, isExiting }) {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true)
		}, 100)
	}, [])

	const handleCardClick = section => {
		if (onSelectSection && !isExiting) {
			onSelectSection(section)
		}
	}

	return (
		<div
			className={`${classes.homeScreen} ${isVisible ? classes.visible : ''} ${
				isExiting ? classes.exiting : ''
			}`}
		>
			<div className={classes.container}>
				<div className={classes.header}>
					<img src={logo} alt='SDU Logo' className={classes.logo} />
					<h1 className={classes.title}>Explore SDU Campus</h1>
					<p className={classes.subtitle}>Choose what you want to see</p>
				</div>

				<div className={classes.cardsGrid}>
					<button
						className={classes.card}
						onClick={() => handleCardClick('panorama')}
						aria-label='View Panoramas'
					>
						<div className={classes.cardIcon}>
							<img src={panorama} alt='Panoramas' />
						</div>
						<h3 className={classes.cardTitle}>Panoramas</h3>
						<p className={classes.cardDescription}>
							Explore 360° views of campus locations
						</p>
					</button>

					<button
						className={classes.card}
						onClick={() => handleCardClick('empty-rooms')}
						aria-label='View Empty Rooms'
					>
						<div className={classes.cardIcon}>
							<img src={classroom} alt='Empty Rooms' />
						</div>
						<h3 className={classes.cardTitle}>Empty Rooms</h3>
						<p className={classes.cardDescription}>Find free rooms to study</p>
					</button>

					<button
						className={classes.card}
						onClick={() => handleCardClick('events')}
						aria-label='View Events'
					>
						<div className={classes.cardIcon}>
							<img src={events} alt='Events' />
						</div>
						<h3 className={classes.cardTitle}>Events</h3>
						<p className={classes.cardDescription}>
							Check out campus events and activities
						</p>
					</button>
				</div>
			</div>

			<div className={classes.backgroundPattern}></div>
		</div>
	)
}
