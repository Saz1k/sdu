import { useEffect, useState } from 'react'
import classes from './PlaceholderSection.module.css'

export default function PlaceholderSection({ title, onBack }) {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true)
		}, 50)
	}, [])

	return (
		<div className={`${classes.container} ${isVisible ? classes.visible : ''}`}>
			<div className={classes.content}>
				<h1 className={classes.title}>{title}</h1>
				<p className={classes.message}>This section is coming soon...</p>
				<button className={classes.backButton} onClick={onBack}>
					<svg
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19 12H5M5 12L12 19M5 12L12 5'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Back to Home
				</button>
			</div>
		</div>
	)
}

