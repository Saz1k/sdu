import logo from '../../assets/sdu_logo.svg'
import classes from './Header.module.css'
import { useState } from 'react'
export default function Header(){
	const [active, setActive] = useState(false);
	const handleBurgerClick = ()=>{setActive(!active)};
    return (
			<header className={classes.backcolor} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<div style={{ flexGrow: 1 }}></div>
				<img src={logo} alt='sdu_logo' style={{ maxHeight: '60px', marginLeft: '10px' }} />
				<div style={{ flexGrow: 1 }}></div>
				<div className={`${classes.burgermenu} ${active ? classes.active : ''}`} onClick={handleBurgerClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</header>
		)
}