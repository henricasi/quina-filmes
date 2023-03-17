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
                <p><strong>Caio Antônio</strong> é artista audiovisual formado na ECA-USP, tendo cursado também um ano de engenharia elétrica na UNICAMP. Realiza trabalhos, pesquisas e experimentações com tecnologia e glitch art, analógico e digital, contribuindo com trabalhos como "Ciclo do Sono" (2015) e "SHOW DE CRISE" (2017), construção de pedais e instrumentos, além do resultado visual de seu TCC, a vídeo-instalação "enTro" (2019), exibido na mostra "Tecnologias do sensível: técnicas e expressões" em Porto Alegre (2023). Mais recentemente, as experimentações se desdobraram em obras como "Frio e Escuro" (2021), exibido no "Extremely Shorts Film Festival no Texas" e no "International Festival of Mountain Films" na Eslováquia, "Era Morro, Morro Eu" (2023) exibido no "Montanha Pico Festival", em Açores, além do média metragem "Teto de Casa" (2022), retratando a banda "Os Amanticidas" interpretando o álbum Teto. Na Quina Filmes, produtora-coletivo encabeça desde a fotografia como em "Ronda" (2019) até colaborações com o roteiro e desenvolvimento do curta "Uma Invenção sem Futuro" (2021).</p>
                <p><strong>Luisa Noriko</strong> atua como montadora e assistente de montagem de cinema. Editou os curtas metragens "Dobras" e "Ronda" entre outros projetos da Quina Filmes. Seus trabalhos circularam por mostras e festivais de cinema no Brasil e no exterior. Também trabalha como editora freelancer em vídeos institucionais e publicitários. Foi assistente da montadora Idê Lacreta no longa documentário "Fotografação" (2019, dir. Lauro Escorel) e no longa "Zimba" (2021, dir. Joel Pizzini), dentre outros projetos. Ainda, trabalhou como assistente da montadora Vania Debs no longa documentário "Alvorada" (2021, dir. Anna Muylaert e Lô Politi).</p>
              </div>
              <div className="bios-column">
                <p><strong>Francisco Miguez</strong>  é realizador, montador e pesquisador de cinema, graduado em Audiovisual pela ECA/USP (2014-2018). Foi residente RAW - Arché Work em 2021, no contexto dos festivais DocLisboa e Márgenes em Madri, pesquisando estratégias de mediação no documentário. Seu curta-metragem "Ronda" (2019, escrito e dirigido com Mauricio Battistuci) foi exibido em mais de 10 festivais nacionais e internacionais. Em documentário, dirigiu o curta "Uma Invenção sem futuro" (2021). Atualmente trabalha no longa "Na Passagem do Trópico", contemplado pelo ProAC 2022.  Também realizou as vídeo-danças "Dobras" , (2018, dirigido junto a Pedro Nishi, em parceria com a São Paulo Companhia de Dança) que circulou em festivais em 2018 e 2019, na Europa, EUA e Brasil; e "Todos os Pontos da Curva" (2019, em parceria com a dançarina Bibi Dória), que circulou em festivais na Europa e América Latina. Em 2015, expôs a vídeo-instalação em dois canais, "Ciclo do sono"  (23ª Mostra Nascente - menção honrosa). Trabalhou como assistente de João Batista de Andrade, Daniela Thomas, Rodrigo Siqueira, Alice Riff, Miguel Ramos e Tamar Guimarães. Foi redator e organizador do grupo de pesquisa da Revista Cinética entre 2018 e 2022.</p>
                <p><strong>Mauricio Battistuci</strong> é diretor, roteirista e produtor. Entre outros projetos com a Quina filmes, escreveu e dirigiu junto a Francisco Miguez o curta-metragem "Ronda" (2019). Realizou trabalhos audiovisuais e de assistência de pesquisa em dramaturgia junto à Cia do Latão de teatro de São Paulo na criação das peças inéditas "Estação da Luz" e "Lugar Nenhum". Foi produtor e curador do CINUSP (Cinema da Universidade de São Paulo), realizando mostras, exibições e debates. Foi roteirista e diretor do curta-metragem "Ana quer ser uma grande atriz" (2022), exibido em festivais nacionais e internacionais e vencedor do Prêmio Especial do Júri no 12º FICBC (Festival Internacional de Cinema em Balneário Camboriú).</p>
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
