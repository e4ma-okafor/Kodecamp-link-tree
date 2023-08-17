import share from '../assets/share.svg'
import menu from '../assets/menu.svg'

const Share = () => {
    return (
        <>
          <img src={menu} alt="Mobile menu" className='hide'/>
          <img src={share} alt="Share profile" className='none' />
        </>
    )
};

export default Share;