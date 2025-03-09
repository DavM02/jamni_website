import instagram from '../../../assets/icons/Instagram_white.svg'
import facebook from '../../../assets/icons/Facebook_white.svg'
import vk from '../../../assets/icons/VK_white.svg'
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Socials() {
    return (
        <div className='column center-y gap-30'>
            <Link className='logo' to={'/'}><img src={logo} alt='logo' /></Link>
            <div className='footer-socials row gap-25 center-x'>
                <a className='social' href='#'>
                    <img src={instagram} alt='instagram' />
                </a>
                <a className='social' href='#'>
                    <img src={facebook} alt='facebook' />
                </a>
                <a className='social' href='#'>
                    <img src={vk} alt='vk' />
                </a>
            </div>
        </div>
    )
}
