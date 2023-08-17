import './App.css'
import profile from './assets/e4ma.png'
import kodecamp from './assets/kodecamp-logo.svg'
import kodehauz from './assets/kodehauz-logo.svg'
import Link from './components/Link'
import Share from './components/Share'
import Socials from './components/Social'

const links = [
  {
    id: 1,
    link: `https://twitter.com/`,
    title: `Twitter Link`
  },
  {
    id: 2,
    link: `#`,
    title: `KodeCamp Team`
  },
  {
    id: 3,
    link: `#`,
    title: `KodeCamp Books`
  },
  {
    id: 4,
    link: `#`,
    title: `Python Books`
  },
  {
    id: 5,
    link: `#`,
    title: `Background Check for Coders`
  },
  {
    id: 6,
    link: `#`,
    title: `Design books`
  }
]

function App() { 
  return (    
<>
<div className='box'>
  <div className='container'>
    <div className='main-section'>
      <div className='share'>
       <Share />       
      </div>
      <div className='profile-section'>
        <img className='profileImg' src={profile} alt="Ifeoma"/>
        <p className='profileName'>Ifeoma Okafor</p>
      </div>
      <div className='link-section'>
        {
          links.map((link) => (
            <Link key = {link.id} {...link} />
          ))                  
         }              
      </div>  
    </div>  
    <div className='social-section'>
      <Socials />                       
    </div>      
  </div>  
  <div className='footer-section'>
    <img src={kodecamp} alt="Kodecamp"/>
    <p className='footerText'>KodeCamp Internship Task</p>
    <img src={kodehauz} alt="Kodehauz" className='kodehz'/>             
  </div>    
</div>
</>
  )
}

export default App