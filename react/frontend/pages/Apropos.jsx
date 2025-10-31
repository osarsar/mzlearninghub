import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import big from "../style/image/big.jpg"
import histo from "../style/image/histo.jpg"
import valeur from "../style/image/valeur.png"
import valeur2 from "../style/image/valeur2.png"
import valeur3 from "../style/image/valeur3.png"

import "../style/css/Apropos.css"

function Apropos()
{
    return (
        <div className="Apropos_all">
            <Navbar />
            <img className="firsts" src={big} alt="flag"></img>
            <section id="quisomme">
                <div className="box1">
                    <img src={histo} alt="flag"></img>
                    <p className="title"><span>- Qui Somme Nous ?</span><br/><br/>
                    Fondée en 2021, Hassouni Protrans est une société de transport de marchandises 
                    opérant à la fois sur le plan national et international. Notre entreprise se distingue 
                    par son engagement à respecter toutes les normes juridiques et procédurales, choisissant 
                    de travailler dans un cadre formel pour garantir 
                    la qualité et la fiabilité de nos services.</p>
                </div>
            </section>
            <section id="valeur">
            <div className="box2">
                <p className="title"><span>- Nos Valeurs et Engagements</span><br/><br/>
                Chez Hassouni Protrans, nous croyons fermement en une économie qui allie performance 
                sociale et respect de l’environnement. Nos valeurs reposent sur la création 
                d’une économie sociale et environnementale, que ce soit en milieu rural ou urbain.
                Nos ouvriers sont des jeunes issus des établissements de formation technique de la région, 
                ce qui favorise non seulement l’emploi local mais aussi le développement des compétences techniques.</p>
                <img src={valeur} alt="flag"></img>
            </div>
            </section>
            <section id="activite">
            <div className="box1">
                <img src={valeur2} alt="flag"></img>
                <p className="title"><span>- Nos Activités</span><br/><br/>
                Nous nous spécialisons dans le transport routier, offrant une gamme de services complets pour répondre à vos besoins de transport de marchandises. En plus des tâches classiques de notre secteur, nous nous engageons à respecter rigoureusement les normes suivantes :
                Qualité : Nous assurons un haut niveau de service à travers une gestion rigoureuse et des contrôles de qualité réguliers.
                Environnement : Nos pratiques respectent les normes environnementales.
                Sécurité et Santé au Travail : La sécurité de nos employés et la création d'un environnement de travail sain sont des priorités absolues.
                Respect de nos Engagements : Nous honorons tous nos engagements envers nos clients, partenaires et employés.</p>
            </div>
            </section>
            <section id="activite">
            <div className="box2">
                <p className="title">
                Hassouni Protrans est plus qu’une entreprise de transport. Nous sommes un partenaire 
                engagé dans le développement durable et social, prêt à répondre à tous vos besoins de 
                transport avec professionnalisme et intégrité</p>
                <img src={valeur3} alt="flag"></img>
            </div>
            </section>
            
            <Footer />
        </div>
);
};


export default Apropos
