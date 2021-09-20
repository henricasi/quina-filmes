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
                <p><strong>Amanda Carvalho</strong> é diretora, produtora e editora de som. Como diretora, atua no campo do documentário, no qual realizou os curtas-metragens "Cantos de Kuidou" (2017) e "Ver a China" (2019), ambos produzidos entre a China e o Brasil a partir de um programa da Universidade Regular de Pequim que promove jovens realizadores estrangeiros. Seu último documentário foi premiado com a Menção Honrosa da Competição Brasileira de Curtas-Metragens do 25º Festival 'É Tudo Verdade'. Assina o desenho de som na vídeo-instalação "Camboa" (2020, dir. Bruno Moreno, exibida no Festival Junta e no 67º Salão Paranaense do MAC Paraná), na web-série "Quando Zumbi Chegar" (2017, dir. Maitê Freitas, edição e finalização de som ao lado de Jonas Amâncio) e nos curta-metragens "Uma Invenção Sem Futuro" e "Ana quer ser uma grande atriz" (2021, Quina filmes).</p>
                <p><strong>Caio Antônio</strong> é colorista e diretor de fotografia. Realiza trabalhos de cunho autoral pela Quina Filmes, produtora fundada com colegas do curso do Audiovisual, encabeçando desde a fotografia e finalização de curtas ("Ronda" - 2019) até colaborações com roteiro e desenvolvimento ("Uma Invenção sem Futuro" - 2021). Trabalhando em produtoras de grande porte como Gullane e Pródigo teve contato com os processos de produção e finalização de longa-metragens e séries como "Cidade Invisível" (2021 - Netflix) "Coisa Mais Linda" (2018 - Netflix) "Bingo - o Rei das Manhãs" (2017) e "Rompendo o Silêncio" (2021 - HBO Max). Com um interesse em glitch, tecnologia e dispositivos de áudio e vídeo, realiza diversas parcerias e colaborações com artistas visuais, eventos em festivais como Lollapalooza e Rock in Rio, além de projetos pessoais.</p>
                <p><strong>Luisa Noriko</strong> atua como montadora e assistente de montagem de cinema. Editou os curtas metragens "Dobras" e "Ronda" entre outros projetos da Quina Filmes. Seus trabalhos circularam por mostras e festivais de cinema no Brasil e no exterior. Também trabalha como editora freelancer em vídeos institucionais e publicitários. Foi assistente da montadora Idê Lacreta no longa documentário "Fotografação" (2019, dir. Lauro Escorel) e no longa "Zimba" (2021, dir. Joel Pizzini), dentre outros projetos. Ainda, trabalhou como assistente da montadora Vania Debs no longa documentário "Alvorada" (2021, dir. Anna Muylaert e Lô Politi).</p>
              </div>
              <div className="bios-column">
                <p><strong>Francisco Miguez</strong> é realizador e pesquisador de cinema de São Paulo, Brasil. Junto a Quina filmes, dirigiu "Uma Invenção sem futuro" (2021) e "Ronda" (2019, escrito e dirigido com Mauricio Battistuci). Dirigiu as vídeo-danças "Dobras" (2018, dirigido junto a Pedro Nishi, em parceria com a São Paulo Companhia de Dança); e "Todos os pontos da curva" (2019, em parceria com a coreógrafa Bibi Dória). Em 2015, expôs a vídeo-instalação em dois canais, "Ciclo do sono" (23a Mostra Nascente - menção honrosa). Foi assistente de direção de Rodrigo Siqueira, Pedro Nishi e assistente de produção de Tamar Guimarães. Foi membro do grupo de programação das Subsessões: Avenida Paulista no MASP e do cineclube da Galeria Vermelho (2017), com organização da artista e professora Dora Longo Bahia. É redator da Revista Cinética desde 2018. É residente de investigação RAW - Residências Arché-Work 2021, nos festivais DocLisboa e Márgenes em Madri, pesquisando os usos da entrevista e a mediação de personagens ficcionais no documentário.</p>
                <p><strong>Mauricio Battistuci</strong> é diretor, roteirista e produtor. Entre outros projetos com a Quina filmes, escreveu e dirigiu junto a Francisco Miguez o curta-metragem "Ronda" (2019). Também realizou trabalhos audiovisuais e de assistência de pesquisa em dramaturgia junto à Cia do Latão de teatro de São Paulo. Foi produtor e curador do CINUSP (Cinema da Universidade de São Paulo), realizando mostras, exibições e debates. Atualmente trabalha na direção do curta-metragem "Ana quer ser uma grande atriz" em fase de pós-produção e na dramaturgia da peça infantil "Mancala ou as Sementes de Akin", comissionada para o 21° Cultura Inglesa Festival.</p>
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
