import { useState } from 'react'
import dormitorySvg from '../../assets/dormitory.svg'
import location from '../../assets/Location.svg'
import classes from './DormitoryMap.module.css'

const DormitoryPoints = [
	{ id: 901, left: 133, top: 120, src: location },
	{ id: 902, left: 65, top: 85, src: location },
	{ id: 903, left: 115, top: 200, src: location },
	{ id: 904, left: 105, top: 130, src: location },
]

export default function DormitoryMap({ onMapClick, clas}) {
	const [hover, setHover] = useState(null)

	const handlePointClick = pointId => {
		if (onMapClick) {
			onMapClick(pointId)
		}
	}

	return (
		<div className={classes.dormitoryContainer + ' ' + clas}>
			<div className={classes.svgWrapper}>
				<img
					src={dormitorySvg}
					alt='Dormitory'
					className={classes.dormitorySvg}
				/>
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
