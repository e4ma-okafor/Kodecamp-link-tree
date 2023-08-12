import './App.css'

function App() {  

  return (
    <>
      <div className='box'>
        <div className='container'>
          <div className='main-section'>
            <div className='share'>
              <img src="/src/assets/menu.svg" alt="Mobile menu" className='hide'/>
              <img src="/src/assets/share.svg" alt="Share profile" className='none' />
            </div>
            <div className='profile-section'>
              <img className='profileImg' src="/src/assets/e4ma.png" alt="Ifeoma"/>
              <p className='profileName'>Ifeoma Okafor</p>
            </div>
            <div className='link-section'>
              <a href="twitter.com" type='button'>Twitter Link</a>
              <a href="twitter.com" type='button'>KodeCamp Team</a>
              <a href="twitter.com" type='button'>KodeCamp Books</a>
              <a href="twitter.com" type='button'>Python Books</a>
              <a href="twitter.com" type='button'>Background Check for Coders</a>
              <a href="twitter.com" type='button'>Design books</a>
            </div>  
          </div>  
          <div className='social-section'>
            <a href="slack.com">
              <img src="/src/assets/slack.svg" alt="Slack profile"/>  
            </a> 
            <a href="https://github.com/e4ma-okafor">
              <img src="/src/assets/github.svg" alt="Github profile"/>  
            </a>            
          </div>      
        </div>  
        <div className='footer-section'>
          <img src="/src/assets/kodecamp-logo.svg" alt="Kodecamp"/>
          <p className='footerText'>KodeCamp Internship Task</p>
          <img src="/src/assets/kodehauz-logo.svg" alt="Kodehauz"/>             
        </div>    
      </div>
    </>
  )
}

export default App
