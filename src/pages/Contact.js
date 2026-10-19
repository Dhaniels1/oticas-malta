import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="malta-contact-page">
      <section className="malta-interior-hero">
        <div className="malta-container"><p className="malta-overline">ENTRE EM CONTATO / INFORMAÇÕES</p><h1>A experiência começa <em>com uma conversa.</em></h1><p>Este é um projeto demonstrativo de frontend. Os canais comerciais precisam de confirmação antes de qualquer divulgação oficial.</p></div>
      </section>
      <section className="malta-container malta-simple-grid">
        <article className="malta-contact-card"><span className="malta-card-icon">↗</span><p className="malta-overline">EXPLORE O SITE</p><h2>Descubra nossa coleção.</h2><p>Navegue pelos modelos de armações, conheça as marcas ilustrativas e utilize os filtros da galeria.</p><Link className="malta-btn malta-btn-gold" to="/galeria">Ver modelos ↗</Link></article>
        <article className="malta-contact-card soft"><span className="malta-card-icon">i</span><p className="malta-overline">TRANSPARÊNCIA</p><h2>Site de demonstração.</h2><p>Não recebemos mensagens nesta página, não realizamos reservas e não há integração comercial ativa. Os contatos e horários da empresa não foram validados neste projeto.</p><Link to="/sobre" className="malta-more-link">Saiba mais sobre o projeto →</Link></article>
      </section>
    </div>
  );
}
