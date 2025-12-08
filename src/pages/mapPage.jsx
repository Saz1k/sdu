import { useState, useEffect } from 'react'
import Map from '../components/Map/Map'
import DormitoryMap from '../components/Map/DormitoryMap'
import SduLifeMap from '../components/Map/SduLifeMap'
import Panoram from '../components/Panoram/Panoram'
import classes from './mapPage.module.css'
import Descriptions from '../components/descriptions/descriptions'

export default function mapPage({ campusId = 1 }) {
	const [currentPanoramaId, setPanoramaId] = useState(
		campusId === 2 ? 905 : 710
	)

	useEffect(() => {
		setPanoramaId(
			campusId === 2 ? 903 : campusId === 3 ? 11 : campusId === 4 ? 1 : 710
		)
	}, [campusId])

	const handleMapClick = id => setPanoramaId(id)

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{campusId === 2 ? (
				<DormitoryMap clas={classes.map} onMapClick={handleMapClick} />
			) : campusId === 3 ? (
				<SduLifeMap clas={classes.map} onMapClick={handleMapClick} />
			) : campusId === 4 ? null : (
				<Map className={classes.map} onMapClick={handleMapClick} />
			)}
			<Panoram
				currentPanoramaId={currentPanoramaId}
				className={classes.panoram}
			/>
			<Descriptions currentDescription={currentPanoramaId} />
		</div>
	)
}
