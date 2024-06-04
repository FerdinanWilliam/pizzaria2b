import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import '../App.css'

const Inicio = () => {

    return (
        <div>
            <h2>Título da página</h2>
            <p>Outra tela Inicial</p>
            <img className='img-fluid' 
            src={logo} alt='logo' ></img>
           
        </div>
    )
}
export default Inicio
