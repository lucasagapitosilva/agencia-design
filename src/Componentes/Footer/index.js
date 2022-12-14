import Logo from '../../assets/logo.png'
import iconeFb from '../../assets/facebook.png'
import iconeTw from '../../assets/twitter.png'
import iconeLink from '../../assets/linkedin.png'
import iconeDri from '../../assets/dribble.png'
import iconeBeh from '../../assets/behance.png'
import iconeGoo from '../../assets/google-plus.png'

import './style.css'

const Footer = (props) => {

    return(

        <div id='container-footer' className={props.corPadrao ? 'modo-escuro-footer' : 'modo-claro-footer'}>
            <img src={Logo}></img>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

            <div className='logos-socias'>
                <img src={iconeFb}></img>
                <img src={iconeTw}></img>
                <img src={iconeLink}></img>
                <img src={iconeDri}></img>
                <img src={iconeBeh}></img>
                <img src={iconeGoo}></img>
            </div>

            <p className='desenvolvedor'>Copyright 2022 © - <span>Desenvolvedor Lucas Agapito</span></p>
        </div>
    )
}

export default Footer;