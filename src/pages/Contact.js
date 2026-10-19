import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
 return <div className="malta-contact-page">
  <section className="malta-interior-hero"><div className="malta-container">
   <p className="malta-overline">ATELIÊ LUME / CENÁRIO FICTÍCIO</p>
   <h1>Conheça o <em>universo Lume.</em></h1>
   <p>Uma página informativa de um projeto acadêmico. Não há empresa real, atendimento, agendamentos ou canal comercial associado a este website.</p>
  </div></section>
  <section className="malta-container malta-simple-grid">
   <article className="malta-contact-card">
    <span className="malta-card-icon">✧</span>
    <p className="malta-overline">CENÁRIO DEMONSTRATIVO</p>
    <h2>Endereço e contato imaginários.</h2>
    <p><strong>Local ilustrativo:</strong> Avenida do Imaginário, 000 — Cidade Exemplo / Estado Fictício.</p>
    <p><strong>E-mail ilustrativo:</strong> contato@lume-optico.example</p>
    <p>Os dados acima são inventados. O domínio .example é reservado para documentação e não deve receber mensagens.</p>
   </article>
   <article className="malta-contact-card soft">
    <span className="malta-card-icon">i</span>
    <p className="malta-overline">TRANSPARÊNCIA</p>
    <h2>Sem atendimento ou vendas.</h2>
    <p>Este site mostra elementos visuais de uma ótica fictícia. Não disponibilizamos preços, estoque, exames, reservas ou formulários de envio. Todos os personagens e ambientes são imagens de IA.</p>
    <Link to="/galeria" className="malta-more-link">Explorar catálogo imaginário →</Link>
   </article>
  </section>
 </div>;
}
