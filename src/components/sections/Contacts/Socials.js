
import instagram from '../../../assets/icons/Instagram_black.svg'
import facebook from '../../../assets/icons/Facebook_black.svg'
import vk from '../../../assets/icons/VK_black.svg'
export default function Socials() {
  return (
      <div className='column center-x gap-30'>
          <a href='#'>
              <img width={40} height={40} src={instagram} alt='instagram' />
          </a>
          <a href='#'>
              <img width={40} height={40} src={facebook} alt='facebook' />
          </a>
          <a href='#'>
              <img width={40} height={40} src={vk} alt='vk' />
          </a>
      </div>
  )
}
