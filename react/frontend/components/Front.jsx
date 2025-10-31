import "../style/css/Front.css";
import home from "../style/image/home1.png";
import { useNavigate } from "react-router-dom";

export default function Front() {
  const navigate = useNavigate();

  const handleScrollTo = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <div className="front">
      <img className="hero-img" src={home} alt="Etudiant travaillant" />

      <div className="hero-box">
        <div className="hero-text">
          <h1 className="hero-title">
            Besoin d’un soutien fiable pour votre <span>PFE</span>, mémoire ou thèse ?
          </h1>
          <p className="hero-subtitle">
            MZ Learning Hub vous accompagne de la méthodologie à la soutenance :
            <br /> un encadrement personnalisé, rapide et confidentiel.
          </p>
          <div className="hero-buttons">
            <a onClick={() => handleScrollTo("contact")}>
              <button className="btn-primary">Demander un devis</button>
            </a>
            <a href="https://wa.me/447901910703">
              <button className="btn-secondary">WhatsApp direct</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
