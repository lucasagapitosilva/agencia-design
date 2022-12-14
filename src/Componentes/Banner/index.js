

import './style.css'

const Banner = (props) => {

    return (

        <div id='banner' className={props.corPadrao ? 'modo-escuro-banner' : 'modo-claro-banner'}>
            <div id='imagem-banner' className={props.corPadrao ? 'modo-escuro-banner' : 'modo-claro-banner'}></div>
            <div className='banner-texto'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>Agência de Branding</h1>
                <h2>e design digital</h2>
            </div>
        </div>
    )
}

export default Banner;