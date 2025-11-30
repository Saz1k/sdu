import { useEffect } from 'react'
import classes from './Sidebar.module.css'
import logo from '../../assets/sdu_logo.svg'

const menuItems = [
	{ label: 'Campus view' },
	{ label: 'Events' },
	{ label: 'Classes' },
]

export default function Sidebar({ isOpen, onClose }) {
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset'
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	useEffect(() => {
		const handleEscape = event => {
			if (event.key === 'Escape' && isOpen) {
				onClose()
			}
		}
		document.addEventListener('keydown', handleEscape)
		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [isOpen, onClose])

	const handleMenuItemClick = () => {
		onClose()
	}

	return (
		<>
			<div
				className={`${classes.overlay} ${isOpen ? classes.overlayOpen : ''}`}
				onClick={onClose}
				aria-hidden='true'
			></div>

			<aside
				className={`${classes.sidebar} ${isOpen ? classes.sidebarOpen : ''}`}
				aria-label='Navigation menu'
				aria-hidden={!isOpen}
			>
				<div className={classes.sidebarHeader}>
					<img src={logo} alt='SDU Logo' className={classes.logo} />
					<button
						type='button'
						className={classes.closeButton}
						onClick={onClose}
						aria-label='Close menu'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
						>
							<path
								d='M6 6L18 18M6 18L18 6'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					</button>
				</div>

				<nav className={classes.menu} aria-label='Main navigation'>
					{menuItems.map(item => (
						<button
							type='button'
							className={classes.menuItem}
							onClick={handleMenuItemClick}
							key={item.label}
						>
							<span>{item.label}</span>
						</button>
					))}
				</nav>

				<div className={classes.sidebarFooter}>
					<button
						type='button'
						className={classes.menuItem}
						onClick={handleMenuItemClick}
					>
						<span>About us</span>
					</button>
				</div>
			</aside>
		</>
	)
}