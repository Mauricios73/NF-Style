import './sections4.scss'
import { InstaIcon } from './icon/insta-icon';
import { EmailIcon } from "./icon/email-icon";
import { TwitterIcon } from "./icon/twitter-icon";

import './icon/social-btns.scss'

const Section4 = () => {
  return (
    <section className='container-section4'>
      <div className="contact">
        <h1>Fale Conosco</h1>
        <p>Rua Qualquer, 123</p>
        <p>Cidade Qualquer - SP</p>
        <p>(42) 9 9824 - 9716</p>

        <div className="socialbtn">
          <a href="https://www.instagram.com/josias.barbernf">
          <InstaIcon />
          </a>
          <a href="">
            <EmailIcon />
          </a>
          <a href="">
            <TwitterIcon />
          </a>
        </div>        
        <div className='developer'>
          <button className="ui-btn">
            <span>
              <a href="https://github.com/Mauricios73/#">Developer</a>
            </span>
          </button>
        </div>
      </div>

      <div className='contact-img'>
        <img
          src="./barberTalk.jpg"
          alt="barbershop"
          height={560}
          width={560}
        />
      </div>
      
    </section>
  )
}

export default Section4;