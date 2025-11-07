import { useState } from 'react'
import classes from './Floors.module.css'

export default function Floors({className}){
	const [floor, setFloor] = useState(1)
	const handleFloorChange = (fl)=>{
		setFloor(fl);
	}
    return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					maxHeight: 'fit-content',
					maxWidth: 'auto',
					position: 'absolute',
					top: '30%',
					left: '-10%'
				}}
				className={className}
			>
				<button
					onClick={() => handleFloorChange(3)}
					className={`${classes.floor} ${floor === 3 ? classes.active : ''}`}
				>
					3
				</button>
				<button
					onClick={() => handleFloorChange(2)}
					className={`${classes.floor} ${floor === 2 ? classes.active : ''}`}
				>
					2
				</button>
				<button
					onClick={() => handleFloorChange(1)}
					className={`${classes.floor} ${floor === 1 ? classes.active : ''}`}
				>
					1
				</button>
				<button
					onClick={() => handleFloorChange(-1)}
					className={`${classes.floor} ${floor === -1 ? classes.active : ''}`}
				>
					-1
				</button>
			</div>
		)
}