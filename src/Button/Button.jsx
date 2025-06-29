import './Button.scss'
import icon from '../assets/icon-whatsapp.svg'

const Button = () => {
    return (
        <a className='button' href='#'>
            Agende sua consulta
            <img src={icon} alt="Ícone whatsapp"/>
            <i></i>
        </a>
    )
}

export default Button