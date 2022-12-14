import Logo from '../../assets/logo.png'
import iconeSol from '../../assets/sun.png'
import iconeLua from '../../assets/moon.png'

import './style.css'

const Topo = (props) => {

    return (

        <header className={props.corPadrao ? 'topo-modo-escuro' : 'topo-modo-claro'}>
            <img src={Logo} className='logo'></img>
            <button onClick={props.alterarCor} className={props.corPadrao ? 'button-modo-escuro' : 'button-modo-claro'}>
            <img className='iconesBtn' src={props.corPadrao ? iconeSol : iconeLua}></img>
            </button>
        </header>
    )
}

export default Topo;