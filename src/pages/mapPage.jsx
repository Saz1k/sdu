import { useState } from 'react'
import Map from '../components/Map/Map'
import Panoram from '../components/Panoram/Panoram'
import classes from './mapPage.module.css'
import Points from '../components/Map/Points/Points'
import Descriptions from '../components/descriptions/descriptions'
export default function mapPage(){
    const [currentPanoramaId, setPanoramaId] = useState(710);
    const handleMapClick = (id)=> setPanoramaId(id);
    return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Map className={classes.map} onMapClick={handleMapClick}></Map>
				<Panoram
					currentPanoramaId={currentPanoramaId}
					className={classes.panoram}
				></Panoram>
				<Descriptions currentDescription={currentPanoramaId		}></Descriptions>
			</div>
		)
}