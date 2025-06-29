import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-infos">
                    <h3>Letícia Campos</h3>
                <div>
                    <p>Psicóloga - CRP 04/79986</p>
                    <p>Atendimento online – Sigilo e flexibilidade.</p> 
                </div>
                <div>
                    <p>Contato</p>
                    <p>@psi.leticiacamposs</p>
                    <p>(37) 99982-3709</p>
                </div>

            </div>
            <div className="footer-divider"> </div>
            <p className="footer-copyright">
                © 2025 Letícia Campos. Todos os direitos reservados.
            </p>
        </div>
    );
};

export default Footer;
