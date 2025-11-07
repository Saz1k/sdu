import { Viewer, utils } from '@photo-sphere-viewer/core'
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'
import '@photo-sphere-viewer/core/index.css'
import { useEffect, useRef } from 'react'
import Panoramas from './Panoramas' // твой список панорам [{id, panorama}]

export default function Panoram({ currentPanoramaId, className }) {
	const viewerRef = useRef()
	const autorotateRef = useRef()
	const isInitRef = useRef(true)

	useEffect(() => {
		const currentPanorama = Panoramas.find(p => p.id === currentPanoramaId)
		if (!currentPanorama) return

		const viewer = new Viewer({
			container: viewerRef.current,
			panorama: currentPanorama.panorama,
			navbar: ['autorotate', 'zoom', 'caption', 'fullscreen'],
			plugins: [
				[AutorotatePlugin, { autostartOnIdle: false, autorotatePitch: 0 }],
			],
            defaultTransition : {
                speed : 1000,
                rotation : true,
                effect : 'fade',
            },
		})

		autorotateRef.current = viewer.getPlugin(AutorotatePlugin)

		const animatedValues = {
			pitch: { start: -Math.PI / 2, end: 0 },
			yaw: { start: Math.PI / 2, end: 0 },
			zoom: { start: 0, end: 50 },
			maxFov: { start: 130, end: 90 },
			fisheye: { start: 2, end: 0 },
		}

		const intro = (pitch, yaw) => {
			isInitRef.current = false
			autorotateRef.current.stop()

			new utils.Animation({
				properties: {
					...animatedValues,
					pitch: { start: animatedValues.pitch.start, end: pitch },
					yaw: { start: animatedValues.yaw.start, end: yaw },
				},
				duration: 2500,
				easing: 'inOutQuad',
				onTick: properties => {
					viewer.setOptions({
						fisheye: properties.fisheye,
						maxFov: properties.maxFov,
					})
					viewer.rotate({ yaw: properties.yaw, pitch: properties.pitch })
					viewer.zoom(properties.zoom)
				},
			}).then(() => {
				autorotateRef.current.start()
				viewer.setOptions({
					mousemove: true,
					mousewheel: true,
				})
			})
		}
		viewer.addEventListener('ready', () => {
			setTimeout(() => {
				if (isInitRef.current) {
					intro(animatedValues.pitch.end, animatedValues.yaw.end)
				}
			}, )
		})
		return () => {
			viewer.destroy()
		}
	}, [currentPanoramaId])

	return (
		<div
			ref={viewerRef}
			style={{
				width: '100%',
				height: '700px',
			}}
			className={className}
		></div>
	)
}
