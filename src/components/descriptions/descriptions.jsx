import description from './description_text'
import classes from './descriptions.module.css'

export default function Descriptions({ currentDescription }) {
	const currentDesc = description.find(d => d.id === currentDescription)

	if (!currentDesc) return null

	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.textSection}>
					<h3 className={classes.title}>{currentDesc.title || 'Location'}</h3>
					<p className={classes.description}>{currentDesc.description}</p>
				</div>
				<div className={classes.imagesSection}>
					{currentDesc.images && currentDesc.images.length > 0 && (
						<>
							<img
								src={currentDesc.images[0]}
								alt='Location view 1'
								className={classes.image}
							/>
							{currentDesc.images[1] && (
								<img
									src={currentDesc.images[1]}
									alt='Location view 2'
									className={classes.image}
								/>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	)
}
