import Header from './components/Header/Header'
import MapPage from './pages/mapPage'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import HomeScreen from './pages/HomeScreen'
import PlaceholderSection from './components/PlaceholderSection/PlaceholderSection'
import { useState } from 'react'
import classes from './App.module.css'

export default function App() {
	const [campusId, setCampusId] = useState(1)
	const [welcomeDone, setWelcomeDone] = useState(false)
	const [screen, setScreen] = useState('home') // 'home', 'panorama', 'rooms', 'events', 'campus-info'
	const [isTransitioning, setIsTransitioning] = useState(false)

	const handleWelcomeComplete = () => {
		setWelcomeDone(true)
		setScreen('home')
	}

	const handleScreenSelect = selectedScreen => {
		if (screen === 'home') {
			setIsTransitioning(true)
			// Wait for fade-out animation to complete
			setTimeout(() => {
				setScreen(selectedScreen)
				setIsTransitioning(false)
			}, 500)
		} else {
			// Direct transition when not on home
			setScreen(selectedScreen)
		}
	}

	const handleBackToHome = () => {
		setScreen('home')
	}

	return (
		<>
			{!welcomeDone && <WelcomeScreen onComplete={handleWelcomeComplete} />}

			{welcomeDone && screen === 'home' && (
				<HomeScreen
					onSelectSection={handleScreenSelect}
					isExiting={isTransitioning}
				/>
			)}

			{welcomeDone && screen === 'panorama' && (
				<div className={classes.screenWrapper}>
					<Header
						onClic={id => {
							setCampusId(id)
							setScreen('panorama')
						}}
						onHomeClick={handleBackToHome}
					/>
					<MapPage campusId={campusId} />
				</div>
			)}

			{welcomeDone && screen === 'rooms' && (
				<div className={classes.screenWrapper}>
					<PlaceholderSection title='Rooms Section' onBack={handleBackToHome} />
				</div>
			)}

			{welcomeDone && screen === 'events' && (
				<div className={classes.screenWrapper}>
					<PlaceholderSection
						title='Events Section'
						onBack={handleBackToHome}
					/>
				</div>
			)}

			{welcomeDone && screen === 'campus-info' && (
				<div className={classes.screenWrapper}>
					<PlaceholderSection
						title='Campus Information'
						onBack={handleBackToHome}
					/>
				</div>
			)}
		</>
	)
}
