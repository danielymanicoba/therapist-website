import './AboutTherapy.scss'

const AboutTherapy = () => {
    return (
        <section className="AboutTherapy" id='terapia'>
            <h2>Temas em que posso te ajudar</h2>
            <div className='AboutTherapy__cards'>
                <div>
                    <h3>Ansiedade</h3>
                    <p>
                        Vamos entender os gatilhos, 
                        controlar pensamentos acelerados
                        e reduzir os sintomas físicos, com
                        técnicas práticas da TCC.
                    </p>
                </div>
                <div>
                    <h3>Depressão</h3>
                    <p>
                        Juntos, identificamos padrões negativos, reconstruímos sua rotina e resgatamos o sentido e prazer nas pequenas coisas.
                    </p>
                </div>
                <div>
                    <h3>Autoestima</h3>
                    <p>
                        Iremos trabalhar sua autopercepção, fortalecer sua identidade e construir um olhar mais gentil sobre quem você é.
                    </p>
                </div>
                <div>
                    <h3>Resolução de problemas</h3>
                    <p>
                        Auxilio no desenvolvimento de estratégias para lidar com desafios do dia a dia de forma mais clara e eficaz.
                    </p>
                </div>
                <div>
                    <h3>Estabilidade emocional</h3>
                    <p>
                        Através do autoconhecimento, você aprende a reconhecer e regular suas emoções com mais equilíbrio.
                    </p>
                </div>
                <div>
                    <h3>Motivação</h3>
                    <p>
                        Exploramos suas metas, valores e bloqueios, para retomar a iniciativa e construir uma vida mais alinhada com seus desejos.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default AboutTherapy;
