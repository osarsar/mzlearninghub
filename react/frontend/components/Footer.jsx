import "../style/css/Footer.css";
import logo from "../style/image/logo1.png";
import facebook from "../style/image/facebook.png";
import instagram from "../style/image/instagram.png";
import linkedin from "../style/image/linkedin.png";
import whatsapp from "../style/image/whatsapp.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleScrollTo = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <footer className="footer_all">
      {/* ------- Colonne gauche ------- */}
      <div className="footer_col left">
        <a href="/">
          <img src={logo} alt="MZ Learning Hub" className="footer_logo" />
        </a>
        <p className="footer_about">
          MZ Learning Hub accompagne les étudiants dans la rédaction, l’analyse
          et la mise en valeur de leurs travaux académiques. <br />
          <strong>Reach Academic Excellence</strong>
        </p>
        <div className="footer_socials">
          {/* <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
          <a href="#"><img src={linkedin} alt="LinkedIn" /></a> */}
          <a href="https://wa.me/447901910703"><img src={whatsapp} alt="WhatsApp" /></a>
        </div>
      </div>

      {/* ------- Colonne milieu ------- */}
      <div className="footer_col middle">
        <h4>Contact</h4>
        <p>
          <strong>Téléphone :</strong> +44 7901 910703 <br />
          <strong>Email :</strong> mzlearninghub@gmail.com <br />
          <strong>Disponibilité :</strong> Lun - Ven, 09h à 18h <br />
        </p>
      </div>

      {/* ------- Colonne droite ------- */}
      <div className="footer_col right">
        <h4>Navigation</h4>
        <a href="/">Accueil</a>
        <a onClick={() => handleScrollTo("services")}>Services</a>
        <a onClick={() => handleScrollTo("methodo")}>Méthodologie</a>
        <a onClick={() => handleScrollTo("why-us")}>Pourquoi nous</a>
        <a onClick={() => handleScrollTo("contact")}>Contact</a>
      </div>

      {/* ------- Bas du footer ------- */}
      <div className="footer_bottom">
        <p>
          © {new Date().getFullYear()} MZ Learning Hub — Tous droits réservés. |
          <a href="/mentions-legales"> Mentions légales</a>
        </p>
      </div>
    </footer>
  );
}
