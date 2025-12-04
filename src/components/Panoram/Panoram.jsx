import { Viewer, utils } from '@photo-sphere-viewer/core'
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'
import '@photo-sphere-viewer/core/index.css'
import classes from './Panoram.module.css'
import { useEffect, useRef, useState } from 'react'
import Panoramas from './Panoramas'

const ArrowIcon = ({ direction }) => (
	<svg
		width='16'
		height='16'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d={direction === 'prev' ? 'M15 18L9 12L15 6' : 'M9 18L15 12L9 6'}
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

export default function Panoram({ currentPanoramaId, className }) {
	const viewerRef = useRef()
	const autorotateRef = useRef()
	const isInitRef = useRef(true)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [totalPanoramas, setTotalPanoramas] = useState(0)
	const viewerInstanceRef = useRef(null)
	const currentPanoramaDataRef = useRef(null)

	useEffect(() => {
		// Find panorama by ID
		let panorama = Panoramas.find(p => p.id === currentPanoramaId)
		let index = 0

		if (!panorama) {
			for (const p of Panoramas) {
				if (p.items) {
					const foundItem = p.items.find(item => item.id === currentPanoramaId)
					if (foundItem) {
						panorama = p
						index = p.items.findIndex(item => item.id === currentPanoramaId)
						break
					}
				}
			}
		}

		if (!panorama) return

		currentPanoramaDataRef.current = panorama
		const hasItems = panorama.items && panorama.items.length > 0

		setTotalPanoramas(hasItems ? panorama.items.length : 0)
		setCurrentIndex(hasItems ? index : 0)

		const viewer = new Viewer({
			container: viewerRef.current,
			panorama: hasItems ? panorama.items[index].panorama : panorama.panorama,
			navbar: ['autorotate', 'zoom', 'caption', 'fullscreen'],
			plugins: [
				[AutorotatePlugin, { autostartOnIdle: false, autorotatePitch: 0 }],
			],
			defaultTransition: { speed: 1000, rotation: true, effect: 'fade' },
		})

		viewerInstanceRef.current = viewer
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
				onTick: props => {
					viewer.setOptions({ fisheye: props.fisheye, maxFov: props.maxFov })
					viewer.rotate({ yaw: props.yaw, pitch: props.pitch })
					viewer.zoom(props.zoom)
				},
			}).then(() => {
				autorotateRef.current.start()
				viewer.setOptions({ mousemove: true, mousewheel: true })
			})
		}

		let panoramaLoadedHandler = null
		if (hasItems) {
			panoramaLoadedHandler = e => {
				const itemIndex = panorama.items.findIndex(
					item => item.panorama === e.panorama
				)
				if (itemIndex !== -1) {
					setCurrentIndex(itemIndex)
				}
			}
			viewer.addEventListener('panorama-loaded', panoramaLoadedHandler)
		}

		const readyHandler = () => {
			setTimeout(() => {
				if (isInitRef.current) {
					intro(animatedValues.pitch.end, animatedValues.yaw.end)
				}
			}, 100)
		}
		viewer.addEventListener('ready', readyHandler)

		return () => {
			if (panoramaLoadedHandler) {
				viewer.removeEventListener('panorama-loaded', panoramaLoadedHandler)
			}
			viewer.removeEventListener('ready', readyHandler)
			viewer.destroy()
			viewerInstanceRef.current = null
		}
	}, [currentPanoramaId])

	const changePanorama = newIndex => {
		const panorama = currentPanoramaDataRef.current
		if (!panorama?.items || !viewerInstanceRef.current) return

		setCurrentIndex(newIndex)
		viewerInstanceRef.current.setPanorama(panorama.items[newIndex].panorama)
	}

	const handlePrev = () => {
		const panorama = currentPanoramaDataRef.current
		if (!panorama?.items) return
		const newIndex =
			currentIndex === 0 ? panorama.items.length - 1 : currentIndex - 1
		changePanorama(newIndex)
	}

	const handleNext = () => {
		const panorama = currentPanoramaDataRef.current
		if (!panorama?.items) return
		const newIndex =
			currentIndex === panorama.items.length - 1 ? 0 : currentIndex + 1
		changePanorama(newIndex)
	}

	const handleDotClick = index => changePanorama(index)

	return (
		<div className={classes.panoramWrapper}>
			<div
				ref={viewerRef}
				style={{ width: '100%', height: '700px' }}
				className={className}
			/>
			{totalPanoramas > 1 && (
				<div className={classes.navigation}>
					<button
						className={classes.navButton}
						onClick={handlePrev}
						aria-label='Previous panorama'
					>
						<ArrowIcon direction='prev' />
					</button>
					<div className={classes.dots}>
						{Array.from({ length: totalPanoramas }).map((_, i) => (
							<button
								key={i}
								className={`${classes.dot} ${
									i === currentIndex ? classes.dotActive : ''
								}`}
								onClick={() => handleDotClick(i)}
								aria-label={`Go to panorama ${i + 1}`}
							/>
						))}
					</div>
					<button
						className={classes.navButton}
						onClick={handleNext}
						aria-label='Next panorama'
					>
						<ArrowIcon direction='next' />
					</button>
				</div>
			)}
		</div>
	)
}
