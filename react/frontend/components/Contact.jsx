import React, { useEffect, useState } from "react";
import "../style/css/Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    level: "",
    message: "",
    hp: "", // honeypot
  });
  const [sending, setSending] = useState(false);

  // ✅ Récupération Vite env
  const SERVICE_ID  = "service_rgrjous"
  const TEMPLATE_ID = "template_7c35m9n"
  const PUBLIC_KEY  = "SIZGC2DBlU1D-bJmY"

  // ✅ Init EmailJS une seule fois
  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init({ publicKey: PUBLIC_KEY });
    }
  }, [PUBLIC_KEY]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.name.trim()) return "Merci d’indiquer votre nom.";
    if (!emailOk) return "L’adresse e-mail n’est pas valide.";
    if (form.message.trim().length < 10) return "Le message est trop court (≥ 10 caractères).";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.hp) return; // bot détecté
    const err = validate();
    if (err) return alert(err);

    setSending(true);
    try {
      // ⚠️ adapte les champs aux variables de ton template EmailJS
      const params = {
        from_name: form.name,
        reply_to: form.email,  // souvent 'reply_to' dans EmailJS
        level: form.level,
        message: form.message,
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
      console.log("EmailJS OK:", res.status, res.text);
      alert("Votre message a été envoyé ✅");
      setForm({ name: "", email: "", level: "", message: "", hp: "" });
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      alert("Erreur lors de l’envoi. Vérifiez vos IDs EmailJS et réessayez.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="Contact_all" id="contact">
      <div className="titles">Contactez-nous</div>
      <p>
        Dites-nous votre besoin (PFE, mémoire, thèse). Nous revenons rapidement avec une proposition adaptée.
      </p>

      <div className="content">
        <div className="left">
          <div>
            <div className="title">Informations</div>
            <p>Encadrement personnalisé, confidentialité assurée, délais respectés.</p>
          </div>
          <div className="coordonne">
            <div><div>+44 7901 910703</div></div>
            <div><div>mzlearninghub@gmail.com</div></div>
          </div>
        </div>

        <div className="right">
          <div className="title">Formulaire de contact</div>
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            {/* Honeypot */}
            <input
              type="text"
              name="hp"
              value={form.hp}
              onChange={onChange}
              autoComplete="off"
              style={{ display: "none" }}
              tabIndex={-1}
            />

            <input
              placeholder="Votre nom"
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              required
            />

            <input
              placeholder="Votre e-mail"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
            />

            <input
              placeholder="Niveau (Licence, Master, Doctorat) — optionnel"
              type="text"
              name="level"
              value={form.level}
              onChange={onChange}
            />

            <textarea
              placeholder="Votre message"
              name="message"
              rows="5"
              value={form.message}
              onChange={onChange}
              required
            />

            <button type="submit" className="send" disabled={sending}>
              {sending ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
