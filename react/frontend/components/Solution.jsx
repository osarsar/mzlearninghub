import "../style/css/Solution.css";
import data from "../style/image/analyse.png";
import correction from "../style/image/correction.png";
import soutenance from "../style/image/teach.png";
import page from "../style/image/conforme.png";
import biblio from "../style/image/methodologie.png";

export default function Solution() {
  return (
    <div className="solution_all" id="services">
      <h1 className="solution_title">Nos Services</h1>

      <div className="solution_grid">
        <div className="solution_card">
          <img src={data} alt="Analyse des données" />
          <h3>Analyse & Traitement des données</h3>
          <p>
            Assistance pour vos analyses quantitatives ou qualitatives (SPSS, R,
            Python). Interprétation claire et résultats exploitables.
          </p>
        </div>

        <div className="solution_card">
          <img src={correction} alt="Relecture et correction" />
          <h3>Relecture, correction & reformulation</h3>
          <p>
            Relecture orthographique et grammaticale, amélioration de la
            cohérence et du style académique.
          </p>
        </div>

        <div className="solution_card">
          <img src={page} alt="Mise en page universitaire" />
          <h3>Mise en page conforme aux normes</h3>
          <p>
            Mise en page professionnelle selon les standards universitaires :
            marges, citations, tables, bibliographie.
          </p>
        </div>

        <div className="solution_card">
          <img src={soutenance} alt="Accompagnement soutenance" />
          <h3>Accompagnement à la soutenance</h3>
          <p>
            Aide à la préparation de votre présentation PowerPoint, gestion du
            temps et entraînement oral.
          </p>
        </div>

        <div className="solution_card">
          <img src={biblio} alt="Aide bibliographique" />
          <h3>Aide méthodologique & bibliographique</h3>
          <p>
            Soutien à la structuration du mémoire, choix du sujet, rédaction
            scientifique et gestion des sources.
          </p>
        </div>
      </div>
    </div>
  );
}
