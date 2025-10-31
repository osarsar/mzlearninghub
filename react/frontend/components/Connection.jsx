import "../style/css/Connection.css";
// import badge from "../style/image/badge.png";
import badge from "../style/image/logo1.png";


export default function Connection() {
  return (
    <div className="connection_all" id="why-us">
      <h1 className="connection_title">MZ Learning Hub — Reach Academic Excellence</h1>

      <div className="connection_content">
        {/* Bloc Pourquoi nous choisir */}
        <div className="connection_block">
          <h3 className="block_title">Pourquoi choisir MZ Learning Hub&nbsp;?</h3>
          <ul className="checklist">
            <li>Encadrement personnalisé</li>
            <li>Confidentialité assurée</li>
            <li>Livraison rapide et respect des délais</li>
            <li>Résultats professionnels garantis</li>
          </ul>
        </div>

        {/* Illustration / badge (optionnel) */}
        <div className="connection_visual">
          <img src={badge} alt="Qualité académique" />
        </div>

        {/* Bloc À qui s’adresse notre service */}
        <div className="connection_block">
          <h3 className="block_title">À qui s’adresse notre service&nbsp;?</h3>
          <ul className="target_list">
            <li>Étudiants en Licence, Master et Doctorat</li>
            <li>Projets de recherche en sciences de gestion</li>
          </ul>
        </div>
      </div>

    
    </div>
  );
}
