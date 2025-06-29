import './Button.scss'
import icon from '../assets/icon-whatsapp.svg'

const Button = () => {
    return (
        <a className='button' target="_blank" href='https://wa.me/5537999829709?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20terapia'>
            Agende sua consulta
            <img src={icon} alt="Ícone whatsapp"/>
            <i></i>
        </a>
    )
}

export default Button