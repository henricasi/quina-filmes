import React from 'react';
import {Link} from 'react-router-dom';

const About = (props) => {

  return (
    <div className="about-container">
      {props.width < 992 && <><h1 className="page-title-mobile dark">a quina</h1><hr className="mobile-hr hr-dark"/></>}
      <div className="logo">

      </div>
      <div className="about-description">
        <p>Criada em 2018, a Quina é uma produtora de audiovisual sediada em São Paulo, composta por Amanda Carvalho, Caio Antônio, Francisco Miguez, Luisa Noriko e Mauricio Battistuci, formados em Audiovisual na ECA USP.</p>
        <p>Atuamos na produção e finalização de obras audiovisuais, dentre elas curta-metragens de ficção, documentários, vídeodanças e vídeo-instalações.</p>
        <p>Em 2019, nossos trabalhos circularam em diversos festivais e exposições. Além destes trabalhos, atuamos em parcerias de projetos de artes visuais, teatro, dança e música, interessados em pesquisar estratégias audiovisuais que traduzam a obra para o vídeo.</p>
      </div>
      {props.width < 992 && <Link to="/" className="back-link back-link-mobile dark">← voltar</Link>}
    </div>
  )

}

export default About;
