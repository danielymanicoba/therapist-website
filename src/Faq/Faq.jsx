import { useState } from 'react';
import { faqList } from './faqData';
import './Faq.scss';

const Faq = () => {
  const [faq, setFaq] = useState(faqList.map(item => ({ ...item, open: false })));

  const toggleFaq = (index) => {
    setFaq(prev =>
      prev.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false
      }))
    );
  };

  return (
    <section className="faq" id='faq'>
      <div className="faq__container">
        <div className="faq__header">
          <h2>Perguntas Frequentes</h2>
          <p>
            Sabemos que começar a terapia pode despertar muitas perguntas. 
            Preparamos este espaço para responder às dúvidas mais comuns e 
            te ajudar a se sentir mais seguro(a) e acolhido(a). 
            Sinta-se à vontade para explorar as perguntas abaixo — e, se ainda
            restar alguma dúvida, é só entrar em contato.
          </p>
        </div>

        <div className="faq__list">
          {faq.map((item, index) => (
            <div key={index} className="faq__item">
              <button
                type="button"
                className="faq__question"
                onClick={() => toggleFaq(index)}
                aria-expanded={item.open}
                aria-controls={`faq-content-${index}`}
                id={`faq-toggle-${index}`}
              >
                <span>{item.question}</span>
                <span className={`faq__icon ${item.open ? 'open' : ''}`}>&#9660;</span>
              </button>

              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-toggle-${index}`}
                className={`faq__answer ${item.open ? 'visible' : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="faq__footer">
          Não encontrou o que procurava?{' '}
          <a href="#">Entre em contato, ficarei feliz em te ajudar.</a>
        </p>
      </div>
    </section>
  );
};

export default Faq;