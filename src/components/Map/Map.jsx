import Hblock from './h-block.jsx'
import Iblock from './i-block.jsx'
import Gblock from './g-block.jsx'
import Fblock from './f-block.jsx'
import Eblock from './e-block.jsx'
import Dblock from './d-block.jsx'
import Lobby from './lobby.jsx'
import Library from './library.jsx'
import './Map.css'

export default function Map(props) {
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
			</div>
		</>
	)
}
