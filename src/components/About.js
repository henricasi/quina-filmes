import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

const About = (props) => {
  const [counter, setCounter] = useState(0);
  const [imagesHaveLoaded, setImagesHaveLoaded] = useState(false);

  useEffect(() => {
    if (counter === 4) {
      setImagesHaveLoaded(true);
    }
  }, [counter]) 

  return (
    <div className="page">
      <div className={imagesHaveLoaded ? "loader noshow" : "loader"}>
        <Loader type="Oval" color="#F2F2F2" height={80} width={80}/>
      </div>

      <article className={imagesHaveLoaded ? "list about-page" : "list noshow"}>
        {props.width >= 1025 && <>
        <h1 className="page-title">quina filmes</h1>
        <hr className="title-hr hr-less-margin"/></>}
        <div className="about-content">
          <section className="about-section about-section-1">
            <div className="about-description">
              {props.width < 1025 && <>
              <h1 className="page-title dark">quina filmes</h1>
              <hr className="title-hr page-hr hr-dark"/></>}
              <div>  
                <p>Criada em 2018, a <strong>Quina</strong> é uma produtora de audiovisual sediada em São Paulo, composta por Amanda Carvalho, Caio Antônio, Francisco Miguez, Luisa Noriko e Mauricio Battistuci, formados em Audiovisual na ECA-USP.</p>
                <p>Atuamos na produção e finalização de obras audiovisuais, dentre elas curta-metragens de ficção, documentários, vídeodanças e vídeo-instalações.</p>
                <p>Em 2019, nossos trabalhos circularam em diversos festivais e exposições. Além destes trabalhos, atuamos em parcerias de projetos de artes visuais, teatro, dança e música, interessados em pesquisar estratégias audiovisuais que traduzam a obra para o vídeo.</p>
              </div>
              <div className="media-links-container" >
                <h5 className="details-section-header media-links-header">siga a quina</h5>
                <div className="media-link-group">
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/fb.png" alt="Facebook"/></a>
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/ig.png" alt="Instagram"/></a>
                  <a className="media-link" target="_blank" rel="noopener noreferrer" href="http://www.vimeo.com/quinafilmes"><img onLoad={() => setCounter(counter + 1)} className="icon" src="/img/icon/vimeo.png" alt="Vimeo"/></a>
                </div>
              </div>
            </div>
            <div className="pb-0 mb-3">
              <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img onLoad={() => setCounter(counter + 1)} src="/img/filler_h.jpg" alt="a quina" className="thumb-img about-img"/></a>
            </div>
          </section>
          <section className="about-section mt-4">
            <div className="about-description w-100 mt-3 pt-1">
              <h2 className="details-section-header mb-4">biografias</h2>
              <p><strong>Amanda Carvalho</strong> é graduada em Audiovisual na ECA/ USP. Como diretora, realizou os documentários “Cantos de Kuidou” (2017) e, “Ver a China” (2019), exibido no 29º Festival Internacional de Curtas do Rio de Janeiro - Curta Cinema e no 25º É Tudo Verdade - Festival Internacional de Documentários 2020. É uma das produtoras e sóciofundadoras do grupo Quina Filmes.</p>
              <p><strong>Caio Antônio</strong> foi aluno do curso de Audiovisual na ECA/ USP. Foi diretor de fotografia do curta Ronda (2019). Fez correção de cor para peças publicitárias como “Vivo - Joga Junto” (2018), “Coca Cola - Vai no Gás” (2019) além de conteúdos para TV e Internet, tais como Mundo S.A. - Globo News (2018-2019) e matérias da Repórter Brasil. Atualmente trabalha na produtora Pródigo Filmes na área de finalização, com projetos documentais, séries para Netflix e publicidades em geral.</p>
              <p><strong>Luisa Noriko</strong> é montadora e assistente de montagem formada em Audiovisual pela ECA/USP. Editou os curtas metragens “Dobras” e “Ronda” entre outros. Foi assistente de montagem de Idê Lacreta no longa documentário “Fotografação” (2019) e na série televisiva “Itinerários do Olhar” (2019).</p>
              <p><strong>Francisco Miguez</strong> é graduado em Audiovisual pela ECA/USP e atua na realização e crítica de cinema, trabalhando em variados formatos. Dirigiu e escreveu junto a Mauricio Battistuci Ronda e atualmente trabalha em um longa documentário intitulado provisoriamente como "Angela", em fase de montagem. Além disso, produziu dois curtas documentários, “Invenção sem futuro” e “Estado de Crise” e uma videoinstalação em dois canais, “Ciclo do sono . Também produziu algumas videodanças, como “Dobras”, dirigido junto a Pedro Nishi, em parceria com a São Paulo Companhia de Dança), e “Todos os Pontos da Curva”, em parceria com a dançarina Bibi Dória. Como crítico, é redator da Revista Cinética desde 2018.</p>
              <p><strong>Mauricio Battistuci</strong> é graduado em Audiovisual na ECA/USP. Escreveu e dirigiu o curta-metragem Ronda (2019), em fase de circulação por diversos festivais nacionais einternacionais como o 21º FestCurtasBH, XV Panorama Coisa de Cinema, Festival Primeiro Plano, Mostra SESC de cinema, recebendo o prêmio Leit Motiff de destaque no 21ºFBCU (Festival Brasileiro de Cinema Universitário). Realizou trabalhos de fotografia/vídeo e de assistência de pesquisa em dramaturgia junto à Companhia do Latão de teatro de São Paulo, nas remontagens de Experimento H e Patrão Cordial, e na criação das peças inéditas Estação da Luz e Lugar Nenhum, a última dessas tendo circulação nacional. Em outros formatos, produziu e realizou a direção de fotografia da vídeo-dança Todos os Pontos da Curva,em fase de circulação em festivais da Europa e América Latina. Trabalhou como produtor e curador do CINUSP (Cinema da Universidade de São Paulo), realizando mostras, exibições e debates, algumas em parceria com cinematecas e consulados de diversos países, inclusive a Cinemateca Brasileira.</p>
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
