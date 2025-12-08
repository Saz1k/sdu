import { useState, useCallback } from 'react'
import logo from '../../assets/sdu_logo.svg'
import classes from './Header.module.css'
import Sidebar from './Sidebar'

export default function Header(props) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = useCallback(() => {
		setIsSidebarOpen(prev => !prev)
	}, [])

	const closeSidebar = useCallback(() => {
		setIsSidebarOpen(false)
	}, [])

	return (
		<>
			<header className={classes.backcolor}>
				<button
					type='button'
					className={`${classes.burgermenu} ${
						isSidebarOpen ? classes.active : ''
					}`}
					onClick={toggleSidebar}
					aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div style={{ flexGrow: 1 }}></div>
				<div
					className={classes.logoWrapper}
					onClick={props.onHomeClick}
					style={props.onHomeClick ? { cursor: 'pointer' } : {}}
				>
					<img src={logo} alt='sdu_logo' className={classes.logo} />
				</div>
				<div style={{ flexGrow: 1 }}></div>
			</header>
			<Sidebar
				isOpen={isSidebarOpen}
				onClose={closeSidebar}
				campusChanger={id => {
					if (props.onClic) {
						props.onClic(id)
					}
				}}
				screenChanger={props.onScreenChange}
			/>
		</>
	)
}
