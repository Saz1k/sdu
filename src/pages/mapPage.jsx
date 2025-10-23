import Map from '../components/Map/Map'
import Panoram from '../components/Panoram/Panoram'
import classes from './mapPage.module.css'
export default function mapPage(){
    return(
        <div style={{display:'flex'}}>  
        <Map className={classes.map}></Map>
        <Panoram></Panoram>
        </div>
    )
}