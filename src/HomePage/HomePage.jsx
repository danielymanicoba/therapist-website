import './HomePage.scss'
import Header from '../Header/Header'
import borboleta from '../assets/borboleta.png'
import Button from '../Button/Button'

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Header/>
            <section className='HomePage__welcome'>
                <img src={borboleta} alt='desenho de uma borboleta'/>
                <h2>Quer aprender a lidar melhor com suas emoções e melhorar sua qualidade de vida?</h2>
                <Button />
            </section>
        </div>
    )
}

export default HomePage