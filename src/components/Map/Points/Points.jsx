import classes from './Points.module.css'
import clothingStore from '../../../assets/clothingStore.svg'
import book from '../../../assets/book.svg'
import location from '../../../assets/Location.svg'
import Library from '../../../assets/Library.svg'
import { use, useState } from 'react'

export default function Points(props){
    const [hover, setHover] = useState(0);
    const handlePointClick = (point) => {
        if(props.pointClick){
            props.pointClick(point)
        }
    }
    if(props.floor === 1){
        return (
					<div
						className={`${classes.container} ${props.className}`}
						style={{ zIndex: 10 }}
					>
						<div
							style={{ left: '49px', top: '382px' }}
							className={classes.svgs}
						>
							<img
								src={Library}
								onMouseEnter={() => setHover(810)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(810)}
							/>
							{hover === 810 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>

						<div
							style={{ left: '89px', top: '342px' }}
							className={classes.svgs}
						>
							<img
								src={clothingStore}
								onMouseEnter={() => setHover(712)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(712)}
							/>
							{hover === 712 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>

						<div
							style={{ left: '105px', top: '343px' }}
							className={classes.svgs}
						>
							<img
								src={location}
								onMouseEnter={() => setHover(711)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(711)}
							/>
							{hover === 711 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '125px', top: '352px' }}
							className={classes.svgs}
						>
							<img
								src={location}
								onMouseEnter={() => setHover(710)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(710)}
							/>
							{hover === 710 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '100px', top: '268px' }}
							className={classes.svgs}
						>
							<img
								src={location}
								onMouseEnter={() => setHover(610)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(610)}
							/>
							{hover === 610 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '95px', top: '300px' }}
							className={classes.svgs}
						>
							<img
								src={location}
								onMouseEnter={() => setHover(611)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(611)}
							/>
							{hover === 611 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '120px', top: '315px' }}
							className={classes.svgs}
						>
							<img
								src={book}
								onMouseEnter={() => setHover(612)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(612)}
							/>
							{hover === 612 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '115px', top: '295px' }}
							className={classes.svgs}
						>
							<img
								src={book}
								onMouseEnter={() => setHover(613)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(613)}
							/>
							{hover === 613 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '118px', top: '273px' }}
							className={classes.svgs}
						>
							<img
								src={book}
								onMouseEnter={() => setHover(614)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(614)}
							/>
							{hover === 614 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '105px', top: '238px' }}
							className={classes.svgs}
						>
							<img
								src={location}
								onMouseEnter={() => setHover(510)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(510)}
							/>
							{hover === 510 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '105px', top: '180px' }}
							className={classes.svgs}
						>
							<img
								src={location}
								onMouseEnter={() => setHover(410)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(410)}
							/>
							{hover === 410 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div
							style={{ left: '95px', top: '127px' }}
							className={classes.svgs}
						>
							<img
								src={location}
								onMouseEnter={() => setHover(310)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(310)}
							/>
							{hover === 310 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div style={{ left: '85px', top: '69px' }} className={classes.svgs}>
							<img
								src={location}
								onMouseEnter={() => setHover(210)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(210)}
							/>
							{hover === 210 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
						<div style={{ left: '85px', top: '9px' }} className={classes.svgs}>
							<img
								src={location}
								onMouseEnter={() => setHover(110)}
								onMouseLeave={() => setHover(0)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(110)}
							/>
							{hover === 110 && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
					</div>
				)
    }
    else if(props.floor === 2){
        return (
					<div>
						<div
							style={{ left: '100px', top: '142px' }}
							className={classes.svgs}
						>
							<img
								src={clothingStore}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
								style={{ left: 'inherit', top: 'inherit' }}
								onClick={() => handlePointClick(712)}
							/>
							{hover && (
								<div className={classes.info}>
									<h4>SDU Store</h4>
									<p></p>
								</div>
							)}
						</div>
					</div>
				)
    }
}
