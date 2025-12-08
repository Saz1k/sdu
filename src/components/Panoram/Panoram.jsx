import { Viewer, utils } from '@photo-sphere-viewer/core'
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'
import '@photo-sphere-viewer/core/index.css'
import classes from './Panoram.module.css'
import { useEffect, useRef } from 'react'
import Panoramas from './Panoramas' // твой список панорам [{id, panorama}]

export default function Panoram({ currentPanoramaId, className }) {
	const viewerRef = useRef()
	const autorotateRef = useRef()
	const isInitRef = useRef(true)
	const index = useRef(0)
	const dotsRef = useRef([])


	const renderNavbar = (currentPanorama, index) => {
		const updateDots = () => {
			dotsRef.current.forEach((dot, i) => {
				dot.style.background = i === index.current ? '#3c3c7e' : 'white'
			})
		}

		if (!currentPanorama?.items)
			return ['autorotate', 'zoom', 'caption', 'fullscreen']

		return [
			'autorotate',
			'zoom',
			'caption',
			{
				id: 'change@left',
				title: 'Change image',
				content: '<',
				onClick(viewer) {
					index.current--
					if (index.current === -1)
						index.current = currentPanorama.items.length - 1
					viewer.setPanorama(currentPanorama.items[index.current].panorama)
					updateDots() 
				},
				className: classes.imageChanger,
			},
			{
				id: 'dots',
				title: 'Image indexer',
				content: (() => {
					const wrapper = document.createElement('div')
					wrapper.style.display = 'flex'
					wrapper.style.alignItems = 'center'
					wrapper.style.gap = '6px'

					dotsRef.current = []

					for (let i = 0; i < currentPanorama.items.length; i++) {
						const dot = document.createElement('div')
						dot.style.width = '8px'
						dot.style.height = '8px'
						dot.style.borderRadius = '50%'
						dot.style.background = i === index.current ? '#3c3c7e' : 'white'

						dotsRef.current.push(dot)
						wrapper.appendChild(dot)
					}

					return wrapper
				})(),
			},

			{
				id: 'change@right',
				title: 'Change image',
				content: '>',
				onClick(viewer) {
					index.current++
					if (index.current === currentPanorama.items.length) index.current = 0
					viewer.setPanorama(currentPanorama.items[index.current].panorama)
					updateDots() 
				},
				className: classes.imageChanger + ' ' + classes.marginRight + ' ' + classes.marginLeft,
			},
			'fullscreen',
		]
	}

	useEffect(() => {
		index.current = 0 
		let currentPanorama = Panoramas.find(p => p.id === currentPanoramaId)
		if (!currentPanorama) return

		const viewer = new Viewer({
			container: viewerRef.current,
			panorama:
				'panorama' in currentPanorama
					? currentPanorama.panorama
					: currentPanorama.items[index.current].panorama,
			navbar:
				'panorama' in currentPanorama
					? renderNavbar()
					: renderNavbar(currentPanorama, index),
			plugins: [
				[AutorotatePlugin, { autostartOnIdle: false, autorotatePitch: 0 }],
			],
			defaultTransition: {
				speed: 1000,
				rotation: true,
				effect: 'fade',
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
			})
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
