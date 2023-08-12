import './App.css'
import profile from './assets/e4ma.png'
import share from './assets/share.svg'
import menu from './assets/menu.svg'
import slack from './assets/slack.svg'
import githubImg from './assets/github.svg'
import kodecamp from './assets/kodecamp-logo.svg'
import kodehauz from './assets/kodehauz-logo.svg'

function App() {  

  return (
    <>
      <div className='box'>
        <div className='container'>
          <div className='main-section'>
            <div className='share'>
              <img src={menu} alt="Mobile menu" className='hide'/>
              <img src={share} alt="Share profile" className='none' />
            </div>
            <div className='profile-section'>
              <img className='profileImg' src={profile} alt="Ifeoma"/>
              <p className='profileName'>Ifeoma Okafor</p>
            </div>
            <div className='link-section'>
              <a href="https://twitter.com/" type='button'>Twitter Link</a>
              <a href="#" type='button'>KodeCamp Team</a>
              <a href="#" type='button'>KodeCamp Books</a>
              <a href="#" type='button'>Python Books</a>
              <a href="#" type='button'>Background Check for Coders</a>
              <a href="#" type='button'>Design books</a>
            </div>  
          </div>  
          <div className='social-section'>
            <a href="https://slack.com/">
              <img src={slack} alt="Slack profile"/>  
            </a> 
            <a href="https://github.com/e4ma-okafor">
              <img src={githubImg} alt="Github profile"/>  
            </a>            
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
