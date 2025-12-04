import { useEffect, useState } from 'react'
import classes from './Sidebar.module.css'
import logo from '../../assets/sdu_logo.svg'

const menuItems = [
	{
		label: 'Campus',
		children: [
			{ label: 'Campus map' },
			{ label: 'Dormitory map' },
			{ label: 'SDU life map' },
		],
	},
	{ label: 'Events' },
	{ label: 'Classes' },
]

export default function Sidebar({ isOpen, onClose, campusChanger}) {
	const [expandedSection, setExpandedSection] = useState(null)

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

	const handleMenuItemClick = item => {
		if (item.children && item.children.length) {
			setExpandedSection(prev => (prev === item.label ? null : item.label))
			return
		}
		onClose()
	}

	const handleSubItemClick = (subItemLabel) => {
		if (subItemLabel === 'Campus map') {
			campusChanger(1)
		} else if (subItemLabel === 'Dormitory map') {
			campusChanger(2)
		} else if (subItemLabel === 'SDU life map') {
			campusChanger(3)
		}
		onClose()
	}

	const handleFooterItemClick = () => {
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
					{menuItems.map(item => {
						const isExpanded = expandedSection === item.label

						return (
							<div key={item.label} className={classes.menuGroup}>
								<button
									type='button'
									className={classes.menuItem}
									onClick={() => handleMenuItemClick(item)}
									aria-expanded={item.children ? isExpanded : undefined}
									aria-controls={
										item.children ? `${item.label}-submenu` : undefined
									}
								>
									<span>{item.label}</span>
									{item.children && (
										<svg
											className={`${classes.chevron} ${
												isExpanded ? classes.chevronOpen : ''
											}`}
											width='16'
											height='16'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											aria-hidden='true'
										>
											<path
												d='M6 9L12 15L18 9'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									)}
								</button>

								{item.children && isExpanded && (
									<div
										className={classes.submenu}
										id={`${item.label}-submenu`}
										role='group'
										aria-label={`${item.label} submenu`}
									>
										{item.children.map(child => (
											<button
												type='button'
												className={classes.submenuItem}
												onClick={() => handleSubItemClick(child.label)}
												key={child.label}
											>
												<span>{child.label}</span>
											</button>
										))}
									</div>
								)}
							</div>
						)
					})}
				</nav>

				<div className={classes.sidebarFooter}>
					<button
						type='button'
						className={classes.menuItem}
						onClick={handleFooterItemClick}
					>
						<span>About us</span>
					</button>
				</div>
			</aside>
		</>
	)
}