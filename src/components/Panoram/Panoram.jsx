import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/core/index.css';
import { useEffect, useRef} from 'react';

export default function Panoram(){
    const viewerRef = useRef();
    useEffect(()=>{
        const viewer = new Viewer({
            container: viewerRef.current,
            panorama: '/kris-guico-rsB-he-ye7w-unsplash.jpg'
        })
    },[])
    return (
			<div
				ref={viewerRef}
				style={{
					width: '100%',
					height: '700px',
				}}
			></div>
		)
}
