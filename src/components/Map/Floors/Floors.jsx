
import classes from './Floors.module.css'

export default function Floors({className, floor, handle}){
	
    return (
			<div
				style={{
					position: 'absolute',
					top: '30%',
					left: '-10%',
				}}
				className={className}
			>
				<div className={classes.floorsSet}>
				<button
					onClick={() => handle(3)}
					className={`${classes.floor} ${floor === 3 ? classes.active : ''}`}
				>
					3
				</button>
				<button
					onClick={() => handle(2)}
					className={`${classes.floor} ${floor === 2 ? classes.active : ''}`}
				>
					2
				</button>
				<button
					onClick={() => handle(1)}
					className={`${classes.floor} ${floor === 1 ? classes.active : ''}`}
				>
					1
				</button>
				<button
					onClick={() => handle(-1)}
					className={`${classes.floor} ${floor === -1 ? classes.active : ''}`}
				>
					-1
				</button>
				</div>
			</div>
		)
}