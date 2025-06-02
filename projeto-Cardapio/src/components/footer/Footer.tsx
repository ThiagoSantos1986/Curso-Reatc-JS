import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Cardápio Digital Restaurante</h3>
                <p>
                    © 2025 <a href="https://www.mamamia-restaurante.com" target="_blank" rel="noopener noreferrer">Mamamia-Massas.com</a> — Desenvolvido por Thiago Cosme dos Santos
                </p>
                <div className="footer-social">
                    <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                        <FaWhatsapp />
                    </a>
                    <a href="https://facebook.com/siteficticio" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com/siteficticio" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

