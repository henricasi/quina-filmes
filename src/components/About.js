import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

const About = (props) => {
  const [counter, setCounter] = useState(0);
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false);

  useEffect(() => {
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
                <p>Criada em 2018, a <strong>Quina</strong> é uma produtora de audiovisual sediada em São Paulo, composta por Amanda Carvalho, Caio Antônio, Francisco Miguez, Luisa Noriko e Mauricio Battistuci, formados em Audiovisual na ECA-USP.</p>
                <p>Atuamos na produção e finalização de obras audiovisuais, dentre elas curta-metragens de ficção, documentários, vídeodanças e vídeo-instalações.</p>
                <p>Em 2019, nossos trabalhos circularam em diversos festivais e exposições. Além destes trabalhos, atuamos em parcerias de projetos de artes visuais, teatro, dança e música, interessados em pesquisar estratégias audiovisuais que traduzam a obra para o vídeo.</p>
              </div>
            </div>
              <div className="media-links-container" >
                <h5 className="details-section-header media-links-header">siga a quina</h5>
                <div className="media-link-group">
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/fb.png" alt="Facebook"/></a>
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/ig.png" alt="Instagram"/></a>
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.vimeo.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/vimeo.png" alt="Vimeo"/></a>
                </div>
              </div>
          </section>
          <section className="about-section mt-4">
            <h2 className="details-section-header">biografias</h2>
            <div className="bios-container">
              <div className="bios-column">
                <p><strong>Amanda Carvalho</strong> é graduada em Audiovisual pela ECA-USP. Como diretora e montadora, atua no campo do documentário, no qual realizou os curtas-metragens "Cantos de Kuidou" (2017) e "Ver a China" (2019), ambos produzidos entre a China e o Brasil a partir de um programa da Universidade Regular de Pequim que promove jovens realizadores estrangeiros. Seu último documentário está em fase de circulação e compôs a programação de festivais nacionais e internacionais como o Festival Internacional de Curtas do Rio de Janeiro e o 25º É Tudo Verdade Festival Internacional de Documentários. Atualmente, atua como produtora e montadora do longa-metragem documentário provisoriamente intitulado como "Angela", em fase de montagem.</p>
                <p><strong>Caio Antônio</strong> foi aluno do curso de Audiovisual na ECA/ USP. Foi diretor de fotografia do curta Ronda (2019). Fez correção de cor para peças publicitárias como "Vivo - Joga Junto" (2018), "Coca Cola - Vai no Gás" (2019) além de conteúdos para TV e Internet, tais como Mundo S.A. - Globo News (2018-2019) e matérias da Repórter Brasil. Atualmente trabalha na produtora Pródigo Filmes na área de finalização, com projetos documentais, séries para Netflix e publicidades em geral.</p>
                <p><strong>Luisa Noriko</strong> é montadora e assistente de montagem formada em Audiovisual pela ECA/USP. Editou os curtas metragens "Dobras" e "Ronda" entre outros. Foi assistente de montagem de Idê Lacreta no longa documentário "Fotografação" (2019) e na série televisiva "Itinerários do Olhar" (2019).</p>
              </div>
              <div className="bios-column">
                <p><strong>Francisco Miguez</strong> é graduado em Audiovisual pela ECA/USP e atua na realização e crítica de cinema, trabalhando em variados formatos. Dirigiu e escreveu "Ronda" junto a Mauricio Battistuci e atualmente trabalha em um longa documentário intitulado provisoriamente como "Angela", em fase de montagem. Além disso, produziu dois curtas documentários, "Invenção sem futuro" e "Estado de Crise" e uma videoinstalação em dois canais, "Ciclo do sono . Também produziu algumas videodanças, como "Dobras", dirigido junto a Pedro Nishi, em parceria com a São Paulo Companhia de Dança), e "Todos os Pontos da Curva", em parceria com a dançarina Bibi Dória. Como crítico, é redator da Revista Cinética desde 2018.</p>
                <p><strong>Mauricio Battistuci</strong> Mauricio Battistuci é diretor, roteirista e produtor. Entre outros projetos com a Quina filmes, escreveu e dirigiu junto a Francisco Miguez o curta-metragem "Ronda" (2019), que circulou nacional e internacionalmente. Também realizou trabalhos audiovisuais e de assistência de pesquisa em dramaturgia junto à Cia do Latão de teatro de São Paulo. Foi produtor e curador do CINUSP (Cinema da Universidade de São Paulo), realizando mostras, exibições e debates. Atualmente trabalha na direção do curta-metragem "Ensaios de Ana" em fase de pós-produção e na dramaturgia da peça infantil "Mancala ou as Sementes de Akin", comissionada para o 21° Cultura Inglesa Festival.</p>
              </div>
            </div>
            {/* <div className="gallery">
            <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img onLoad={() => setCounter(counter + 1)} src="/img/filler_v.jpg" alt="a quina" className="thumb-img about-img"/></a>
            <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img onLoad={() => setCounter(counter + 1)} src="/img/filler_h.jpg" alt="a quina" className="thumb-img about-img"/></a>
            <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img onLoad={() => setCounter(counter + 1)} src="/img/filler_h.jpg" alt="a quina" className="thumb-img about-img"/></a>
            </div> */}
          </section>
          {props.width < 992 && <Link to="/" className="back-link dark">← voltar</Link>}
        </div>
      </article>
    </div>
  )

}

export default About;
