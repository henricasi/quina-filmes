const filmesData = [
  {
    title: "Ronda",
    year: 2019,
    duration: 25,
    format: "ficção",
    support: "digital",
    director: "Mauricio Battistuci e Francisco Miguez",
    summary: "Segurança desempregado, Hélio cai em uma espiral de encontros em São Paulo. Enquanto faz promessas de ascensão para sua companheira que ainda não veio para a capital, passa a rondar a cidade, sem rumo, por sua função.",
    crew: [
      {
        name:"Elenco",
        content: "João Filho, Georgette Fadel, Rogério Bandeira, Érika Rocha, Eliane Weinfurter, Sérgio Pires"
      },
      {
        name: "Direção e roteiro",
        content: "Mauricio Battistuci e Francisco Miguez"
      },
      {
        name: "Montagem",
        content: "Luisa Noriko"
      },
      {
        name: "Produção",
        content: "Tarsila Varallo"
      },
      {
        name: "Assistentes de direção",
        content: "Amanda Carvalho e João Pedro Durigan"
      },
      {
        name: "Continuidade",
        content: "Paulo Martins Filho"
      },
      {
        name: "Assistentes de produção",
        content: "Júlia Fávero, Fernando Borba e Francisco Grasso"
      },
      {
        name: "Direção de fotografia",
        content: "Caio Antônio"
      },
      {
        name: "1º assistente de câmera",
        content: "Mateus Albino"
      },
      {
        name: "2º assistente de câmera",
        content: "Lígia Agreste"
      },
      {
        name: "Gaffer",
        content: "Thomás Ceschin"
      },
      {
        name: "Técnico de som direto",
        content: "Jonas Amâncio"
      },
      {
        name: "Microfonista",
        content: "Bia Hong"
      },
      {
        name: "Direção de arte",
        content: "Joana Lorenzetti"
      },
      {
        name: "Assistentes de arte",
        content: "Ana Iajuc e Anita Lisboa"
      },
      {
        name: "Maquiadora",
        content: "Amanda Hiruta"
      },
      {
        name: "Trilha sonora",
        content: "Nicholas Rabinovitch e Estúdio Terra de lá"
      },
      {
        name: "Música original",
        content: "Joera Rodrigues"
      },
      {
        name: "Edição de som",
        content: "Jonas Amâncio, Lucca Chiavone e Bia Hong"
      },
      {
        name: "Mixagem",
        content: "Sandro Dalla Costa"
      },
      {
        name: "Correção de cor",
        content: "Caio Antônio"
      },
      {
        name: "Composição de imagem",
        content: "Paulo Hernani Chedid"
      },
      {
        name: "AGRADECIMENTOS",
        content: "Amanda Monteiro, Antonio Luiz Sampaio Carvalho, Cecília Mello, Celso Bonadio, Companhia Do Latão, Eduardo Freitas, Estacionamento MBA Park, Fabio Miguez, Fernanda Mendes Luiz, Giulia Castro, Henrique Casimiro Mandruzato, João Godoy, João Guilherme Dos Santos (Madureira), João Lucca Piovan, João Pedro Mb Bim, Luca Dourado, Macário Moura , Maíra Do Nascimento, Manoela Cezar, Maria Luiza Tutu Mesquita, Matheus Biscaro, Naomi Takiya Bonadio, Pedro Nishi, Subprefeitura De Pinheiros, Sofia Maruci, Tania Battistuci, Thaís Orchi Abdala, Meia e Firma"
      },
      {
        name: "EQUIPE CTR",
        content: "Daniel Alves da Silva, Douglas Borges Giudice, Edson da Conceição, Ferdinand Machado Coimbra, Francisco Carlos Medina Coca, Gabriel Barreto, Guido Agovino, Ivone Vantini, Joel Yamaji, Marcelo Henrique Leite , Marcos José da Silva Pinto, Marcus Kurtinaitis, Mauricio Nakasato, Paulo César Ferreira, Thiago Afonso De André, Victor Yuji Shirai, Vilma Do Prado Muller"
      },
      {
        name: "APOIO",
        content: "Spcine e Pródigo Films"
      },
    ],
    festivals: [
      "XV Panorama Internacional Coisa de Cinema - Mostra Competitiva (Salvador BA / novembro 2019)",
      "III Mostra Sesc de Cinema – Panorama Paulista (São Paulo SP / novembro e dezembro 2019)",
      "FestCurtasBH | 21º Festival Internacional de Curtas de Belo Horizonte - Mostra Competitiva Nacional – (Belo Horizonte MG / setembro 2019)",
      "Primeiro Plano | Festival de Cinema de Juiz de Fora e Mercocidades – Mostra Mercocidades (Juiz de Fora MG, dezembro 2019)",
      "FBCU | 21º Festival Brasileiro de Cinema Universitário - Mostra Competitiva (Niterói RJ / setembro 2019) – Prêmio Leit Motiff",
      "Metrô | 3º Festival do Cinema Universitário Brasileiro - Mostra Panorama (Curitiba PA / novembro 2019)",
      "Toró | 5º Festival Audiovisual Universitário de Belém – Mostra Competitiva (Belém PR / novembro 2019)",
      "Intersessões | 2º Festival de Cinema Itinerante – Seleção Oficial (Ubá MG / dezembro 2019)",
      "FIEC | 19 Festival Internacional de Escuelas de Cine (Montevideo, Uruguai / agosto 2019)",
      "FICU | 2º Festival Internacional de Cine Universitario (Buenos Aires, Argentina / maio 2019)",
      "Muestra FEISAL | 7ª Mostra Federação das Escolas da Imagem e do Som da América Latina (plataforma online / 2018-2019)",
      "CINENOVA | 2º Portugal Interuniversity Film Festival – Mostra Competitiva Internacional (Lisboa, Portugal / março 2020)"
    ],
    reviews: [
      {
        name: "21º FESTCURTASBH – Catálogo, p. 43",
        author: "Hannah Serrat",
        content: "Hélio é um segurança desempregado, já não tem casa, nem pertences, nem amigos. Quem sabe agora só lhe acompanhem os devaneios de quem, mesmo cansado e ferido, já não pode descansar. Nem o desemprego lhe permite abandonar o ofício que se apoderou de seu corpo e de seus gestos. Como filmar um sintoma coletivo – esse que nos adoece pelo excesso de medo, de controle, de exaustão, de abandono? Em meio ao caos, é preciso produzir brechas em narrativas quaisquer, ir ao encontro do outro, retomar nossa disposição para o perigo.",
        link: "http://www.festivaldecurtasbh.com.br/wp-content/uploads/2019/09/21_FESTCURTASBH_CATALOGO_WEB.pdf"
      },
      {
        name: "CINÉTICA: “Deus ajuda quem cedo madruga” – Considerações tardias sobre o 21º Festival Brasileiro de Cinema Universitário",
        author: "Gabriel Morais",
        content: "A recusa é pedagogicamente acompanhada por uma reorganização do pacto de representação, que associa os limites das ultrapassadas concepções das relações de trabalho aos limites das ultrapassadas abordagens do drama social realista, ambas como formas esgarçadas de enfrentar as novas questões do mundo e do trabalho. O filme vira-se, portanto, para uma investigação acerca de modelos estéticos e políticos de enfrentamento que estejam a par da reconfiguração dos desafios.",
        link: "http://revistacinetica.com.br/nova/deus-ajuda-quem-cedo-madruga-consideracoes-tardias-sobre-o-21o-festival-brasileiro-de-cinema-universitario/"
      },
      {
        name: "21º FBCU 2019 – Prêmio LeitMotif",
        author: "Equipe LeitMotif",
        content: "Ronda, filme de Mauricio Battistuci e Francisco Miguez, parece buscar não dicotomizar as questões internas do indivíduo e da cidade, mas encontrar suas raras intersecções e espaços em comum. A construção auditiva da cidade é invasiva, caótica, não procura polidez ou \"educação\" sonora. O metal range, buzinas soam sobre diálogos, a serra de mão, depois o bafo dos carros, por último uma voz, que briga por espaço. Primeiro os gritos do passageiro de metrô que batalha contra o espaço fechado, depois outro profeta que luta contra o Golias do espaço aberto. Os espaços da cidade são construções arquitetônicas reservadas a não-construção pelo universo visual - que se reserva a planos fixos e pouco reveladores, mas construídos em nossa percepção sônica. O que não vemos dos espaços, ouvimos. E o que não ouvimos ou vemos do protagonista, a cidade parece nos contar. Enquanto batalha os sons do dia, as comunicações em celulares e dentro de carros e em ruas ruidosas não são tão diferentes de sua ronda quase quixotesca em busca de um lugar onde estar em um espaço que parece completamente tomado. O espaço encontrado, afinal, traduz-se não tanto na imagem, mas através de uma nova arquitetura sonora que reorganiza os espaços que parecem ali já existir e constrói novos espaços negativos, e define, finalmente, um lugar para o protagonista antes perdido.",
        link: "http://www.festivaldecurtasbh.com.br/wp-content/uploads/2019/09/21_FESTCURTASBH_CATALOGO_WEB.pdf"
      },
    ],
    english: {
      title: "Patrol",
      summary: "Helio, an unemployed security guard, spirals through a series of strange encounters in São Paulo. As he makes promises to his companion who still hasn't come to the capital, he begins to patrol the city, aimlessly, searching for his post."
    },
    spanish: {
      title: "Ronda",
      summary: "Vigilante desempleado, Helio cae en una espiral de encuentros en Sao Paulo. Mientras hace promesas de ascenso a su compañera que aún no ha venido a la capital, pasa a rondar la ciudad, sin rumbo, por su función."
    },
    images: {
      banner: "",
      thumbs: "",
    },
    url: "ronda"
  },
]

export default filmesData;