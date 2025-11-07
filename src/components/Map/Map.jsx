import Hblock from './h-block.jsx'
import Iblock from './i-block.jsx'
import Gblock from './g-block.jsx'
import Fblock from './f-block.jsx'
import Eblock from './e-block.jsx'
import Dblock from './d-block.jsx'
import Lobby from './lobby.jsx'
import Library from './library.jsx'
import Floors from './Floors/Floors.jsx'
import './Map.css'

export default function Map(props) {
	// Create useState variable for changing the currentPanoramaId. And then find a way to send it to Panom component
	// Call calback function from here(Map.js) to mapPage
	const mappedBtns = [
		{
			id: 1,
			component: <Iblock></Iblock>,
		},
		{
			id: 2,
			component: <Hblock></Hblock>,
		},
		{
			id: 3,
			component: <Gblock></Gblock>
		},
		{
			id: 4,
			component: <Fblock></Fblock>
		},
		{
			id: 5,
			component: <Eblock></Eblock>
		},
		{
			id: 6,
			component: <Dblock></Dblock>
		},
		{
			id: 7,
			component: <Lobby></Lobby>
		},
		{
			id: 8,
			component: <Library></Library>
		}
	]

	const mapClicked = (btn)=>{
		if(props.onMapClick){
			props.onMapClick(btn.id)
		}
	}
	const renderBtns = () => mappedBtns.map(btn => (
		<div key={btn.id} onClick={()=>mapClicked(btn)}>{btn.component}</div>
	))

	return (
		<>
			<div className={`${props.className} map-container`}>
				{renderBtns()}
				<Floors className='floors'></Floors>
			</div>
		</>
	)
}
