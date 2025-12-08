import { useState, useEffect, useMemo } from 'react'
import cabinetsData from '../data/cabinets.json'
import classes from './EmptyRoomsPage.module.css'
import Header from '../components/Header/Header'

const DAYS = [
	{ value: 1, label: 'Monday' },
	{ value: 2, label: 'Tuesday' },
	{ value: 3, label: 'Wednesday' },
	{ value: 4, label: 'Thursday' },
	{ value: 5, label: 'Friday' },
	{ value: 6, label: 'Saturday' },
]

const TIMES = [
	'08:30',
	'09:30',
	'10:30',
	'11:30',
	'12:30',
	'13:30',
	'14:30',
	'15:30',
	'16:30',
	'17:30',
	'18:30',
	'19:30',
]

export default function EmptyRoomsPage({ onBack, onScreenChange }) {
	const [searchQuery, setSearchQuery] = useState('')
	const [showOnlyFree, setShowOnlyFree] = useState(false)
	const [selectedDay, setSelectedDay] = useState(() => {
		const today = new Date().getDay()
		return today === 0 ? 1 : today === 6 ? 5 : today
	})
	const [selectedTime, setSelectedTime] = useState(() => {
		const now = new Date()
		const hours = now.getHours().toString().padStart(2, '0')
		const minutes = now.getMinutes().toString().padStart(2, '0')
		const currentTime = `${hours}:${minutes}`
		// Find closest time slot
		const closestTime = TIMES.find(time => time >= currentTime) || TIMES[0]
		return closestTime
	})

	// Get all unique cabinets from data (excluding VR cabinets)
	const allCabinets = useMemo(() => {
		const cabinetMap = new Map()
		cabinetsData.forEach(entry => {
			entry.cabinets.forEach(cabinet => {
				// Exclude VR cabinets
				if (!cabinet.name.toUpperCase().includes('VR')) {
					if (!cabinetMap.has(cabinet.id)) {
						cabinetMap.set(cabinet.id, {
							id: cabinet.id,
							name: cabinet.name,
							parent_building_en: cabinet.parent_building_en,
						})
					}
				}
			})
		})
		return Array.from(cabinetMap.values())
	}, [])

	// Get free cabinets for selected day and time
	const freeCabinets = useMemo(() => {
		const entry = cabinetsData.find(
			e => e.week_day === selectedDay && e.time === selectedTime
		)
		return entry ? entry.cabinets.map(c => c.id) : []
	}, [selectedDay, selectedTime])

	// Filter cabinets based on search and free filter
	const filteredCabinets = useMemo(() => {
		let filtered = allCabinets

		// Filter by search query
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase()
			filtered = filtered.filter(
				cabinet =>
					cabinet.name.toLowerCase().includes(query) ||
					cabinet.parent_building_en.toLowerCase().includes(query)
			)
		}

		// Filter by free only
		if (showOnlyFree) {
			filtered = filtered.filter(cabinet => freeCabinets.includes(cabinet.id))
		}

		return filtered.sort((a, b) => a.name.localeCompare(b.name))
	}, [allCabinets, searchQuery, showOnlyFree, freeCabinets])

	const getDayLabel = dayValue => {
		const day = DAYS.find(d => d.value === dayValue)
		return day ? day.label : 'Monday'
	}

	const isToday = selectedDay === new Date().getDay()

	return (
		<div className={classes.container}>
			<Header onHomeClick={onBack} onScreenChange={onScreenChange} />
			<div className={classes.content}>
				<h1 className={classes.title}>Cabinets List</h1>

				<input
					type='text'
					placeholder='Поиск кабинетов...'
					className={classes.searchInput}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				<div className={classes.filtersContainer}>
					<label className={classes.checkboxLabel}>
						<input
							type='checkbox'
							className={classes.checkbox}
							checked={showOnlyFree}
							onChange={e => setShowOnlyFree(e.target.checked)}
						/>
						Показать только свободные кабинеты
					</label>

					<div className={classes.selectsContainer}>
						<div className={classes.selectGroup}>
							<label className={classes.selectLabel}>Выбрать день</label>
							<select
								className={classes.select}
								value={selectedDay}
								onChange={e => setSelectedDay(Number(e.target.value))}
							>
								{DAYS.map(day => (
									<option key={day.value} value={day.value}>
										{isToday && day.value === selectedDay
											? `Сегодня (${day.label})`
											: day.label}
									</option>
								))}
							</select>
						</div>

						<div className={classes.selectGroup}>
							<label className={classes.selectLabel}>Выбрать время</label>
							<select
								className={classes.select}
								value={selectedTime}
								onChange={e => setSelectedTime(e.target.value)}
							>
								{TIMES.map(time => (
									<option key={time} value={time}>
										{selectedTime === time && isToday
											? `Текущее время (${time})`
											: time}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<ul className={classes.cabinetsGrid}>
					{filteredCabinets.length > 0 ? (
						filteredCabinets.map(cabinet => {
							const isFree = freeCabinets.includes(cabinet.id)
							return (
								<li
									key={cabinet.id}
									className={`${classes.cabinetItem} ${
										isFree ? classes.cabinetFree : ''
									}`}
								>
									<a
										href={`/cabinets/${cabinet.id}`}
										className={classes.cabinetLink}
									>
										{cabinet.name}
									</a>
								</li>
							)
						})
					) : (
						<li className={classes.noResults}>
							<p>Кабинеты не найдены</p>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

