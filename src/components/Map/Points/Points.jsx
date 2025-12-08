import classes from './Points.module.css'
import { useState } from 'react'
import PointsLocation from './PointsLocation'

export default function Points(props){
    const [hover, setHover] = useState(null);
    const handlePointClick = (point) => {
        if(props.pointClick){
            props.pointClick(point)
        }
    }
	if (props.floor === -1) {
		return (
			<div
				className={`${classes.container} ${props.className}`}
				style={{ zIndex: 10 }}
			>
				{PointsLocation.map(e => {
					if (e.id % 100 >= 0 && e.id % 100 < 10) {
						return (
							<>
								<div
									style={{ left: `${e.left}px`, top: `${e.top}px` }}
									className={classes.svgs}
								>
									<img
										src={e.src}
										onMouseEnter={() => setHover(e.id)}
										onMouseLeave={() => setHover(0)}
										style={{ left: 'inherit', top: 'inherit' }}
										onClick={() => handlePointClick(e.id)}
									/>
								</div>
								{hover === e.id && (
									<div
										className={classes.info}
										style={{
											left: `${e.left - 45}px`,
											top: `${e.top - 50}px`,
										}}
									>
										<h4>{e.title}</h4>
										<p>{e.description}</p>
									</div>
								)}
							</>
						)
					}
					return null
				})}
			</div>
		)
	} else if (props.floor === 1) {
		return (
			<div
				className={`${classes.container} ${props.className}`}
				style={{ zIndex: 10 }}
			>
				{PointsLocation.map(e => {
					if (e.id % 100 >= 10 && e.id % 100 < 20) {
						return (
							<>
								<div
									style={{ left: `${e.left}px`, top: `${e.top}px` }}
									className={classes.svgs}
								>
									<img
										src={e.src}
										onMouseEnter={() => setHover(e.id)}
										onMouseLeave={() => setHover(0)}
										style={{ left: 'inherit', top: 'inherit' }}
										onClick={() => handlePointClick(e.id)}
									/>
								</div>
								{hover === e.id && (
									<div
										className={classes.info}
										style={{
											left: `${e.left - 45}px`,
											top: `${e.top - 50}px`,
										}}
									>
										<h4>{e.title}</h4>
										<p>{e.description}</p>
									</div>
								)}
							</>
						)
					}
					return null
				})}
			</div>
		)
	} else if (props.floor === 2) {
		return (
			<div
				className={`${classes.container} ${props.className}`}
				style={{ zIndex: 10 }}
			>
				{PointsLocation.map(e => {
					if (e.id % 100 >= 20 && e.id % 100 < 30) {
						return (
							<>
								<div
									style={{ left: `${e.left}px`, top: `${e.top}px` }}
									className={classes.svgs}
								>
									<img
										src={e.src}
										onMouseEnter={() => setHover(e.id)}
										onMouseLeave={() => setHover(0)}
										style={{ left: 'inherit', top: 'inherit' }}
										onClick={() => handlePointClick(e.id)}
									/>
								</div>
								{hover === e.id && (
									<div
										className={classes.info}
										style={{
											left: `${e.left - 45}px`,
											top: `${e.top - 50}px`,
										}}
									>
										<h4>{e.title}</h4>
										<p>{e.description}</p>
									</div>
								)}
							</>
						)
					}
					return null
				})}
			</div>
		)
	} else if (props.floor === 3) {
		return (
			<div
				className={`${classes.container} ${props.className}`}
				style={{ zIndex: 10 }}
			>
				{PointsLocation.map(e => {
					if (e.id % 100 >= 30 && e.id % 100 < 40) {
						return (
							<>
								<div
									style={{ left: `${e.left}px`, top: `${e.top}px` }}
									className={classes.svgs}
								>
									<img
										src={e.src}
										onMouseEnter={() => setHover(e.id)}
										onMouseLeave={() => setHover(0)}
										style={{ left: 'inherit', top: 'inherit' }}
										onClick={() => handlePointClick(e.id)}
									/>
								</div>
								{hover === e.id && (
									<div
										className={classes.info}
										style={{
											left: `${e.left - 45}px`,
											top: `${e.top - 50}px`,
										}}
									>
										<h4>{e.title}</h4>
										<p>{e.description}</p>
									</div>
								)}
							</>
						)
					}
					return null
				})}
			</div>
		)
	}
}
