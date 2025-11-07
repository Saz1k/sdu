import { useState } from 'react'
import Map from '../components/Map/Map'
import Panoram from '../components/Panoram/Panoram'
import classes from './mapPage.module.css'
import Descriptions from '../components/descriptions/descriptions'
export default function mapPage(){
    const [currentPanoramaIds, setPanoramaId] = useState(1);
    const handleMapClick = (id)=> setPanoramaId(id);
    return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Map className={classes.map} onMapClick={handleMapClick}></Map>
				<Panoram
					currentPanoramaId={currentPanoramaIds}
					className={classes.panoram}
				></Panoram>
				<Descriptions currentDescription={currentPanoramaIds}></Descriptions>
			</div>
		)
}