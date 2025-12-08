import { useState } from 'react'
import sduLife from '../../assets/sduLife.svg'
import location from '../../assets/Location.svg'
import gym  from '../../assets/gym.svg'
import volleball from '../../assets/volleball.svg'
import classes from './DormitoryMap.module.css'

 const sduLifePoints = [
		{ id: 11, left: 75, top: 180, src: location },
		{ id: 12, left: 35, top: 120, src: gym },
		{ id: 13, left: 103, top: 130, src: location },
		{ id: 14, left: 100, top: 70, src: volleball },
 ]

export default function SduLifeMap({ onMapClick, clas }) {
	const [hover, setHover] = useState(null)

	const handlePointClick = pointId => {
			onMapClick?.(pointId)
	}

	return (
		<div className={classes.dormitoryContainer + ' ' + clas}>
			<div className={classes.svgWrapper}>
				<img src={sduLife} alt='sduLife' className={classes.dormitorySvg} />
				<div className={classes.pointsContainer}>
					{sduLifePoints.map(point => (
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
