import library from '@/assets/library.svg'
import lobby from '@/assets/lobby.svg'
import dblock from '@/assets/d-block.svg'
import eblock from '@/assets/e-block.svg'
import fblock from '@/assets/f-block.svg'
import gblock from '@/assets/g-block.svg'
import hblock from '@/assets/h-block.svg'
import iblock from '@/assets/i-block.svg'
import "./Map.css"

export default function Map(){
    return (
			<>
				<div className='map-container'>
					<img src={iblock} alt='iblock' style={{ maxWidth: '500px' }} className='block' />
					<img src={hblock} alt='hblock' style={{ maxWidth: '500px' }} className='block'/>
					<img src={gblock} alt='gblock' style={{ maxWidth: '500px' }} className='block'/>
					<img src={fblock} alt='fblock' style={{ maxWidth: '500px' }} className='block'/>
					<img src={eblock} alt='eblock' style={{ maxWidth: '500px' }} className='block'/>
					<img src={dblock} alt='dblock' style={{ maxWidth: '500px' }} className='block'/>
					<img src={lobby} alt='lobby' style={{ maxWidth: '500px' }} className='block'/>
					<img src={library} alt='library' style={{ maxWidth: '500px' }} className='block'/>
				</div>
			</>
		)
}