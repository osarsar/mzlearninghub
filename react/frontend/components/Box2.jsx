import "../style/css/Box2.css";

export default function Box2() {
  const steps = [
    {
      title: "1. Diagnostic & Devis",
      desc: "Nous analysons votre besoin et proposons un plan d’accompagnement adapté à votre sujet, votre niveau et vos délais.",
    },
    {
      title: "2. Plan & Jalons",
      desc: "Nous définissons ensemble la structure du travail, les étapes clés et les objectifs de chaque livrable.",
    },
    {
      title: "3. Production & Suivi",
      desc: "Rédaction, analyse ou mise en page : nous travaillons avec vous à chaque étape, avec révisions et échanges continus.",
    },
    {
      title: "4. Livraison & Soutenance",
      desc: "Remise finale du document conforme, assistance à la présentation PowerPoint et préparation à la soutenance.",
    },
  ];

  return (
    <div className="methodo_all" id="methodo">
      <h1 className="methodo_title">Notre Méthodologie</h1>

      <div className="methodo_steps">
        {steps.map((step, index) => (
          <div key={index} className="methodo_card">
            <div className="methodo_number">{index + 1}</div>
            <div className="methodo_text">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
