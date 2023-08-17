import slack from '../assets/slack.svg'
import githubImg from '../assets/github.svg'

const Socials = () => {
    return (
        <>
          <a href="https://slack.com/">
            <img src={slack} alt="Slack profile"/>  
          </a> 
          <a href="https://github.com/e4ma-okafor">
            <img src={githubImg} alt="Github profile"/>  
          </a>
        </>
    )
};

export default Socials;