import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <h1>Letícia Campos</h1>
        <ul className='header__nav'>
          <li>
            <a href="#terapia">SERVIÇOS</a>
          </li>
          <li>
            <a href="#sobre">SOBRE</a>
          </li>
          <li>
            <a href="#faq">DÚVIDAS</a>
          </li>
        </ul>
    </div>
  )
}

export default Header