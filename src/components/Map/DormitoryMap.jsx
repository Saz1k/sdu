import { useState } from 'react'
import dormitorySvg from '../../assets/dormitory.svg'
import location from '../../assets/Location.svg'
import classes from './DormitoryMap.module.css'

const DormitoryPoints = [
	{ id: 901, left: 60, top: 50, src: location },
	{ id: 902, left: 85, top: 90, src: location },
	{ id: 903, left: 65, top: 130, src: location },
	{ id: 904, left: 90, top: 170, src: location },
	{ id: 905, left: 70, top: 210, src: location },
]

export default function DormitoryMap({ onMapClick }) {
	const [hover, setHover] = useState(null)

	const handlePointClick = pointId => {
		if (onMapClick) {
			onMapClick(pointId)
		}
	}

	return (
		<div className={classes.dormitoryContainer}>
			<div className={classes.svgWrapper}>
				<img src={dormitorySvg} alt='Dormitory' className={classes.dormitorySvg} />
				<div className={classes.pointsContainer}>
					{DormitoryPoints.map(point => (
						<div key={point.id} className={classes.pointWrapper}>
							<div
								style={{ left: `${point.left}px`, top: `${point.top}px` }}
								className={classes.point}
								onMouseEnter={() => setHover(point.id)}
								onMouseLeave={() => setHover(null)}
								onClick={() => handlePointClick(point.id)}
							>
								<img src={point.src} alt={`Point ${point.id}`} />
							</div>
							{hover === point.id && (
								<div
									className={classes.info}
									style={{
										left: `${point.left - 45}px`,
										top: `${point.top - 50}px`,
									}}
								>
									<h4>Room {point.id}</h4>
									<p>Click to view panorama</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

