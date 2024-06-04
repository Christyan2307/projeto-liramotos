import React from 'react';
import './App.css';

const Header = () => (
  <header>
    <nav className="header-nav">
      <a href="#"><img className="logo" src="img/liramoto-removebg-preview.png" alt="La Brasa Logo" /></a>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#oficina">Oficina</a></li>
        <li><a href="#sobre">Sobre</a></li>
      </ul>
    </nav>
  </header>
);

const Banner = () => (
  <section className="banner" id="home">
    <div className="texto">
      <h1 className="titulo">Aqui você encontra a melhor loja de motos!</h1>
      <h2 className="sub_titulo">E o mais incrível são os preços, que cabem no seu bolso!</h2>
    </div>
  </section>
);

const MainSection = () => (
  <main>
    <div className="meio">
      <a href="honda.html"><img src="img/logohonda.png" alt="" /></a>
      <a href="yamaha.html"><img src="img/logoyamaha.png" alt="" /></a>
      <a href="kawasaki.html"><img src="img/logokawasaki.png" alt="" /></a>
    </div>
  </main>
);

const Oficina = () => (
  <section className="oficina" id="oficina">
    <div className="textos">
      <h1 className="titulo2">Essa é a nossa oficina</h1>
      <h2 className="sub_titulo2">onde tudo acontece,</h2>
      <h2 className="sub_titulo2">desde ao preparamento, a</h2>
      <h2 className="sub_titulo2">pintura da sua moto de cross</h2>
    </div>
  </section>
);

const About = () => (
  <section className="sobre" id="sobre">
    <div className="text">
      <h1 className="h1">Sobre nós</h1>
      <p>Era uma vez, em uma pequena cidade rodeada por belas paisagens naturais, existia uma oficina de motocross chamada Liramotos. Localizada no coração da cidade, Liramotos era um lugar onde os apaixonados por motocicletas se reuniam para compartilhar suas histórias, aprimorar suas habilidades e se preparar para as emocionantes competições de motocross.</p>
      <p>O proprietário da oficina, Lira, era um ex-piloto de motocross renomado. Ele havia competido em várias corridas e conquistado muitos troféus ao longo dos anos. No entanto, Lira decidiu se aposentar das competições para dedicar seu tempo e conhecimento para ensinar e orientar os jovens pilotos da cidade.</p>
      <p>A oficina Liramotos era um lugar animado e cheio de energia. Todas as tardes, os pilotos se reuniam para treinar em uma pista especialmente projetada para motocross, localizada atrás da oficina. Lira estava sempre presente, orientando e motivando os pilotos a darem o melhor de si.</p>
      <p>Havia um grupo de jovens promissores que frequentava a oficina regularmente. Lucas, um adolescente corajoso e determinado, era um dos pilotos mais talentosos. Ele sonhava em se tornar um campeão de motocross e estava disposto a treinar duro para alcançar seu objetivo.</p>
      <p>Com o passar do tempo, a oficina Liramotos começou a receber reconhecimento na região. Pilotos de outras cidades vinham em busca do conhecimento de Lira e da oportunidade de treinar na pista de motocross. A reputação de Liramotos crescia, e os pilotos se tornaram conhecidos por sua paixão, dedicação e habilidades excepcionais.</p>
      <p>Certo dia, Lira recebeu uma notícia empolgante: a cidade seria sede de uma competição de motocross regional. Era uma oportunidade única para os pilotos da oficina Liramotos mostrarem seu talento em casa. A notícia se espalhou rapidamente, e a expectativa tomou conta de todos.</p>
      <p>Os pilotos da Liramotos se dedicaram intensamente aos treinos. Lira aumentou a frequência das aulas, fornecendo dicas valiosas e aprimorando as habilidades de cada um. Lucas estava determinado a se destacar na competição e treinava incansavelmente, buscando aperfeiçoar cada salto, cada curva e cada manobra.</p>
      <p>Chegou o dia da competição. A pista estava repleta de pilotos ansiosos para mostrar seu talento. Os espectadores se aglomeravam ao redor, aguardando o início das corridas. A energia no ar era contagiante.</p>
      <p>Lucas estava confiante, mas também sentia a pressão. O coração batia forte enquanto ele aguardava sua vez na linha de largada. A bandeira caiu, e a corrida começou. Os pilotos aceleravam suas motos, saltando pelos obstáculos e deslizando pelas curvas com habilidade.</p>
      <p>Lucas demonstrou toda a sua técnica e coragem durante a corrida. Ele ultrapassava seus adversários com precisão, mostrando seu domínio sobre a moto. O público vibrava a cada manobra executada com perfeição.</p>
      <a href="#top"><button className="button">Voltar</button></a>
      <h1 className="h1">A Oficina LiraMoto deseja otimas compras</h1>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p style={{ color: 'black' }}>
        <b> Christyan Ferreira Lira </b> criador do site LiraMotos Agradece a todos.
        <strong><a href="https://www.instagram.com/christyan_da_titan160/">Christyan</a></strong>
      </p>
    </div>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Banner />
    <MainSection />
    <Oficina />
    <MainSection />
    <About />
    <Footer />
  </div>
);

export default App;
