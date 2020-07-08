import React from 'react';
import {Link} from 'react-router-dom';

const About = (props) => {

  return (
    <div className="page">

      <article className="list">
        <h1 className="page-title">a quina</h1>
        <hr className="title-hr hr-less-margin"/>
        <div className="about-content">
          <section className="about-section about-section-1">
            <div className="about-description">
              <div>  
                <p>Criada em 2018, a <strong>Quina</strong> é uma produtora de audiovisual sediada em São Paulo, composta por Amanda Carvalho, Caio Antônio, Francisco Miguez, Luisa Noriko e Mauricio Battistuci, formados em Audiovisual na ECA-USP.</p>
                <p>Atuamos na produção e finalização de obras audiovisuais, dentre elas curta-metragens de ficção, documentários, vídeodanças e vídeo-instalações.</p>
                <p>Em 2019, nossos trabalhos circularam em diversos festivais e exposições. Além destes trabalhos, atuamos em parcerias de projetos de artes visuais, teatro, dança e música, interessados em pesquisar estratégias audiovisuais que traduzam a obra para o vídeo.</p>
              </div>
              <div className="media-links-container" >
                <h5 className="details-section-header media-links-header">siga a quina</h5>
                <div className="media-link-group">
                  <a className="media-link" target="_blank" href="http://www.facebook.com/quinafilmes"><img className="icon" src="/img/icon/fb.png" alt="Facebook"/></a>
                  <a className="media-link" target="_blank" href="http://www.instagram.com/quinafilmes"><img className="icon" src="/img/icon/ig.png" alt="Instagram"/></a>
                  <a className="media-link" target="_blank" href="http://www.vimeo.com/quinafilmes"><img className="icon" src="/img/icon/vimeo.png" alt="Vimeo"/></a>
                </div>
              </div>
            </div>
            <div className="gallery pb-0">
              <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img src="/img/filler_h.jpg" alt="a quina" className="thumb-img about-img"/></a>
            </div>
          </section>
          <section className="about-section mt-5">
            <div className="about-description w-100 mt-2 pt-1">
              <p><strong>Amanda Carvalho</strong> é graduada em Audiovisual na ECA/ USP. Como diretora, realizou os documentários “Cantos de Kuidou” (2017) e, “Ver a China” (2019), exibido no 29º Festival Internacional de Curtas do Rio de Janeiro - Curta Cinema e no 25º É Tudo Verdade - Festival Internacional de Documentários 2020. É uma das produtoras e sóciofundadoras do grupo Quina Filmes.</p>
              <p><strong>Caio Antônio</strong> foi aluno do curso de Audiovisual na ECA/ USP. Foi diretor de fotografia do curta Ronda (2019). Fez correção de cor para peças publicitárias como “Vivo - Joga Junto” (2018), “Coca Cola - Vai no Gás” (2019) além de conteúdos para TV e Internet, tais como Mundo S.A. - Globo News (2018-2019) e matérias da Repórter Brasil. Atualmente trabalha na produtora Pródigo Filmes na área de finalização, com projetos documentais, séries para Netflix e publicidades em geral.</p>
              <p><strong>Luisa Noriko</strong> é montadora e assistente de montagem formada em Audiovisual pela ECA/USP. Editou os curtas metragens “Dobras” (dir. Pedro Nishi e Francisco Miguez, direção geral Cristian Borges, 2018) exibido no 30º Festival Internacional de Curtas Metragens de São Paulo e nos festivais de videodança Dança em Foco, Frame Rush (Inglaterra) e no EIVV - Meeting on Videodance (Espanha); e “Ronda” (dir. Francisco Miguez e Mauricio Battistuci, 2019) selecionado para as mostras competitivas do 21º Festival Internacional de Curtas de Belo Horizonte e do FBCU - 21º Festival Brasileiro do Cinema Universitário. Foi assistente de montagem de Idê Lacreta no longa documentário “Fotografação” (2019) e na série televisiva “Itinerários do Olhar” (2019), ambos com direção de Lauro Escorel.</p>
              <p><strong>Francisco Miguez</strong> é graduado em Audiovisual pela ECA/USP e atua na realização e crítica de cinema, trabalhando em variados formatos. Seu curta-metragem “Ronda” (escrito e dirigido com Mauricio Battistuci) foi exibido em mais de 10 festivais nacionais e internacionais como 21º FestCurtasBH, XV Panorama Coisa de Cinema, Festival Primeiro Plano, Mostra SESC de cinema, CineNOVA em Lisboa. Atualmente trabalha em um longa documentário intitulado provisoriamente como "Angela", em fase de montagem. Além disso, produziu dois curtas documentários, “Invenção sem futuro” e “Estado de Crise” e uma vídeoinstalação em dois canais, “Ciclo do sono” (23ª Mostra Nascente, 2015). Também produziu algumas vídeodanças, como “Dobras”, (dirigido junto a Pedro Nishi, em parceria com a São Paulo Companhia de Dança) que circulou em festivais em 2018 e 2019, na Europa, EUA e Brasil, e “Todos os Pontos da Curva” (em parceria com a dançarina Bibi Dória), em fase de circulação em festivais na Europa e América Latina. Como crítico, é redator da Revista Cinética. Foi membro do grupo de seleção do cineclube da galeria Vermelho e das Subsessões: Avenida Paulista no MASP, com organização da artista Dora Longo Bahia.</p>
              <p><strong>Mauricio Battistuci</strong> é graduado em Audiovisual na ECA/USP. Escreveu e dirigiu o curta-metragem Ronda (2019), em fase de circulação por diversos festivais nacionais einternacionais como o 21º FestCurtasBH, XV Panorama Coisa de Cinema, Festival Primeiro Plano, Mostra SESC de cinema, recebendo o prêmio Leit Motiff de destaque no 21ºFBCU (Festival Brasileiro de Cinema Universitário). Realizou trabalhos de fotografia/vídeo e de assistência de pesquisa em dramaturgia junto à Companhia do Latão de teatro de São Paulo, nas remontagens de Experimento H e Patrão Cordial, e na criação das peças inéditas Estação da Luz e Lugar Nenhum, a última dessas tendo circulação nacional. Em outros formatos, produziu e realizou a direção de fotografia da vídeo-dança Todos os Pontos da Curva,em fase de circulação em festivais da Europa e América Latina. Trabalhou como produtor e curador do CINUSP (Cinema da Universidade de São Paulo), realizando mostras, exibições e debates, algumas em parceria com cinematecas e consulados de diversos países, inclusive a Cinemateca Brasileira.</p>
            </div>
            <div className="gallery">
            <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img src="/img/filler_v.jpg" alt="a quina" className="thumb-img about-img"/></a>
            <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img src="/img/filler_h.jpg" alt="a quina" className="thumb-img about-img"/></a>
            <a href="/img/filler_v.jpg" data-lightbox="gallery" className="thumb-link"><img src="/img/filler_h.jpg" alt="a quina" className="thumb-img about-img"/></a>
            </div>
          </section>
          {props.width < 992 && <Link to="/" className="back-link back-link-mobile dark">← voltar</Link>}
        </div>
      </article>
    </div>
  )

}

export default About;
