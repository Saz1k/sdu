import { useState } from 'react'
import Hblock from './h-block.jsx'
import Iblock from './i-block.jsx'
import Gblock from './g-block.jsx'
import Fblock from './f-block.jsx'
import Eblock from './e-block.jsx'
import Dblock from './d-block.jsx'
import Lobby from './lobby.jsx'
import Library from './library.jsx'
import Floors from './Floors/Floors.jsx'
import Points from './Points/Points.jsx'
import './Map.css'


export default function Map(props) {

	const [floor, setFloor] = useState(1)

	const handleFloorChange = fl => {
		setFloor(fl)
	}

	return (
		<>
			<div className={`${props.className} map-container`}>
				<Iblock></Iblock>
				<Hblock></Hblock>
				<Gblock></Gblock>
				<Fblock></Fblock>
				<Eblock></Eblock>
				<Dblock></Dblock>
				<Lobby></Lobby>
				<Library></Library>
				<Floors className='floors' floor={floor} handle={handleFloorChange}></Floors>
				<Points className='points' pointClick={props.onMapClick} floor={floor}></Points>
			</div>
		</>
	)
}
