import logo from '../assets/sdu_logo.svg'
export default function Header(){
    return(
        <header style={{display:'flex', justifyContent:'center'}}>
            <img src={logo} alt="sdu_logo" style={{maxHeight: '80px'}}/>
        </header>
    )
}