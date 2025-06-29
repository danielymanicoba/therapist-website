import './AboutMe.scss'
import picture from '../assets/picture.png'
import decor from '../assets/decor.svg'

const AboutMe = () => {
    return (
        <section className="about-me" id='sobre'>
            <h2>Sobre Mim</h2>

            <div className='about-me__content'>
                <div className='about-me__text-wrapper'>
                    <div class="right-line"></div>
                    <div class="bottom-line"></div>
                        <img
                        src={decor}
                        class="corner-img"
                        alt="flor decorativa"
                        />
                    <p>
                        Olá, prazer! Me chamo Letícia Campos, sou psicóloga e atuo com a abordagem da 
                        Terapia Cognitivo-Comportamental (TCC), atendendo adolescentes e adultos.
                        Meu objetivo é oferecer um espaço acolhedor, seguro e empático, onde você possa
                        se expressar, compreender melhor seus pensamentos e emoções, e refletir sobre como
                        eles influenciam seus comportamentos e escolhas no dia a dia.
                        Trabalho de forma colaborativa com cada paciente, buscando juntos caminhos práticos
                        e eficazes para promover mais equilíbrio emocional, bem-estar e qualidade de vida.
                        A TCC tem como foco ajudar você a desenvolver maior autonomia para lidar com os 
                        desafios da vida. Por meio do autoconhecimento e de estratégias terapêuticas, você 
                        aprenderá a reconhecer padrões disfuncionais, reformular pensamentos e encontrar 
                        formas mais saudáveis de enfrentar as dificuldades. Se você está enfrentando ansiedade,
                        depressão, problemas de autoestima, conflitos de relacionamento, transições de vida ou 
                        simplesmente busca um espaço de escuta e reflexão, estou aqui para caminhar ao seu lado. 
                        A terapia é um processo de transformação e, juntos, podemos construir caminhos mais 
                        saudáveis para sua vida emocional.
                    </p>
                </div>

                <img src={picture} alt="foto da psicóloga Letícia Campos" />
            </div>
        </section>
    )
}

export default AboutMe