// src/pages/HomePage.js
import React from 'react';
import Header from '../components/header';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <section id="sobre">
          <h2>Sobre</h2>
          <p>Informações sobre mim e minha marca.</p>
        </section>
        <section id="estatisticas">
          <h2>Estatísticas</h2>
          <p>Dados sobre meu público e engajamento.</p>
        </section>
        <section id="parcerias">
          <h2>Parcerias</h2>
          <p>Informações sobre oportunidades de parceria.</p>
        </section>
        <section id="contato">
          <h2>Contato</h2>
          <p>Formulário ou informações para entrar em contato.</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
