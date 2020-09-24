import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

const About = (props) => {
  const [counter, setCounter] = useState(0);
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false);

  useEffect(() => {
    document.title = "Quina - Quina filmes"
    if (counter === 3) {
      setImagesHaveLoaded(true);
    }
  }, [counter]) 

  return (
    <div className="page">
      <div className={imagesHaveLoaded ? "loader noshow" : "loader"}>
        <Loader type="Oval" color="#F2F2F2" height={80} width={80}/>
      </div>

      <article className={imagesHaveLoaded ? "list about-page" : "list noshow"}>
        <div className="about-content">
          <section className="about-section about-section-1">
            <div className="about-description">
              <h1 className="details-section-header">quina filmes</h1>
              <div>  
                <p>Criada em 2018, a <strong>Quina</strong> é uma produtora de audiovisual sediada em São Paulo, composta por Amanda Carvalho, Caio Antônio, Francisco Miguez, Luisa Noriko e Mauricio Battistuci, formados em Audiovisual pela ECA-USP.</p>
                <p>Atuamos na produção e finalização de obras audiovisuais, dentre elas curta-metragens de ficção, documentários, videodanças e vídeo-instalações.</p>
                <p>Em 2019, nossos trabalhos circularam em diversos festivais e exposições. Além destes trabalhos, atuamos em parcerias de projetos de artes visuais, teatro, dança e música, interessados em pesquisar estratégias audiovisuais que traduzam a obra para o vídeo.</p>
              </div>
            </div>
              <div className="media-links-container" >
                <h5 className="details-section-header media-links-header">siga a quina</h5>
                <div className="media-link-group">
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/iconfb.png" alt="Facebook"/></a>
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/iconig.png" alt="Instagram"/></a>
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.vimeo.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/iconvimeo.png" alt="Vimeo"/></a>
                </div>
              </div>
          </section>
          <section className="about-section mt-4">
            <h2 className="details-section-header">biografias</h2>
            <div className="bios-container">
              <div className="bios-column">
                <p><strong>Amanda Carvalho</strong> é diretora e produtora. Como diretora, atua no campo do documentário, no qual realizou os curtas-metragens "Cantos de Kuidou" (2017) e "Ver a China" (2019), ambos produzidos entre a China e o Brasil a partir de um programa da Universidade Regular de Pequim que promove jovens realizadores estrangeiros. Seu último documentário está em fase de circulação e compôs a programação de festivais nacionais e internacionais. Atualmente trabalha como produtora e montadora do longa-metragem documentário provisoriamente intitulado como "Angela", em fase de montagem.</p>
                <p><strong>Caio Antônio</strong> é colorista e finalizador. Trabalhando em produtoras de grande porte como Gullane e Pródigo teve contato com os processos de produção e finalização de longa-metragens e séries como "Bingo - o Rei das Manhãs" (2017) e "Rompendo o Silêncio" (HBO - a ser exibida), além de produções para a Netflix como "Coisa Mais Linda" (2018). Formado em Audiovisual pela USP, dirigiu fotografia de "Ronda" (2019) e faz color grading para peças publicitárias como "Netflix Pride 2020" e "Vivo Joga Junto" (2018). Com um interesse em tecnologia e dispositivos de áudio e vídeo, realiza diversas parcerias e colaborações com artistas visuais, ativações de marcas em eventos além de projetos pessoais.</p>
                <p><strong>Luisa Noriko</strong> é montadora e assistente de montagem. Editou os curtas metragens "Dobras" e "Ronda" entre outros projetos da Quina Filmes. Foi assistente de montagem de Idê Lacreta no longa documentário "Fotografação" (2019, dir. Lauro Escorel), na série televisiva "Itinerários do Olhar" (2019, dir. Lauro Escorel), no longa "Diário de Viagem" (WIP, dir. Paula Kim), e assistente de Vânia Debs no longa documentário "Alvorada" (WIP, dir. Anna Muylaert).</p>
              </div>
              <div className="bios-column">
                <p><strong>Francisco Miguez</strong> atua na realização e crítica de cinema, trabalhando em variados formatos. Dirigiu e escreveu junto a Mauricio Battistuci "Ronda", que circulou em festivais em 2019. Atualmente trabalha em um longa documentário intitulado provisoriamente como "Angela", em fase de montagem e finaliza o curta documentário "Uma Invenção sem futuro". Dirigiu as videodanças "Dobras" junto com Pedro Nishi, em parceria com a São Paulo Companhia de Dança, e "Todos os Pontos da Curva", em parceria com a coreógrafa Bibi Dória. Expôs em 2015 "Ciclo do sono", uma videoinstalação em dois canais. Como crítico, é redator da Revista Cinética desde 2018.</p>
                <p><strong>Mauricio Battistuci</strong> é diretor, roteirista e produtor. Entre outros projetos com a Quina filmes, escreveu e dirigiu junto a Francisco Miguez o curta-metragem "Ronda" (2019). Também realizou trabalhos audiovisuais e de assistência de pesquisa em dramaturgia junto à Cia do Latão de teatro de São Paulo. Foi produtor e curador do CINUSP (Cinema da Universidade de São Paulo), realizando mostras, exibições e debates. Atualmente trabalha na direção do curta-metragem "Ensaios de Ana" em fase de pós-produção e na dramaturgia da peça infantil "Mancala ou as Sementes de Akin", comissionada para o 21° Cultura Inglesa Festival.</p>
              </div>
            </div>
          {props.width < 640 && <Link to="/" className="back-link dark">← voltar</Link>}
          </section>
        </div>
      </article>
    </div>
  )

}

export default About;
