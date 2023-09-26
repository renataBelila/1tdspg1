

export const aparelhosData = [
  {
    id: 1,
    nome: 'Os sete maridos de Evelyn Hugo',
    descricaoCurta: 'Com todo o esplendor que só a Hollywood do século passado pode oferecer, esta é uma narrativa inesquecível sobre os sacrifícios que fazemos por amor, o perigo dos segredos e o preço da fama.',
    descricaoExtensa: 'Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua “verdadeira história” ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas.',
    preco: 'R$59,99',
  
  },
  {
    id: 2,
    nome: 'Nevernight: A sombra do corvo',
    descricaoCurta: 'Nevernight é o primeiro livro de uma série escrita por Jay Kristoff, ambientada em um mundo de fantasia sombria, onde a protagonista Mia Corvere busca vingança após a execução de sua família. A história é repleta de intriga, assassinato e magia, enquanto Mia treina para se tornar uma assassina implacável.',
    descricaoExtensa: 'Destinada a destruir impérios, Mia Corvere é apenas uma criança quando tem sua primeira lição sobre a morte. Mais tarde, aos 16 anos, a jovem que cresceu nas sombras inicia sua jornada para manter a promessa feita no dia em que perdeu tudo. Entretanto, a chance de vencer inimigos tão poderosos será efêmera, e se Mia deseja vingança, deve se tornar uma assassina sem igual. Assim, ela precisará provar suas habilidades diante dos mais perigosos amigos e inimigos, e sobreviver a assassinos, mentirosos e demônios no cerne de um lugar que cultua o assassinato. A Igreja Vermelha não é uma escola comum, mas Mia Corvere também não é uma estudante qualquer. As sombras a acompanham, e bebem todo seu medo. Nevernight é o primeiro volume da trilogia best-seller As crônicas da quasinoite, agora em sua segunda edição.',
    preco: 'R$76,50',
  
  },
  {
    id: 3,
    nome: 'Mistborn Primeira Era - O império final (vol. 1)',
    descricaoCurta: 'O Império Final é o primeiro livro da trilogia "Mistborn: Primeira Era" escrita por Brandon Sanderson. A história acompanha Vin, uma jovem com habilidades mágicas, enquanto ela se junta a um grupo de rebeldes para derrubar um império opressivo.',
    descricaoExtensa: 'O que acontece se o herói da profecia falhar? Descubra em Mistborn!Certa vez, um herói apareceu para salvar o mundo. Um jovem com uma herança misteriosa, que desafiou corajosamente a escuridão que sufocava a Terra. Ele falhou...Desde então, há mil anos, o mundo é um deserto de cinzas e brumas, governado por um imperador imortal conhecido como Senhor Soberano. Todas as revoltas contra ele falharam miseravelmente.Nessa sociedade onde as pessoas são divididas em nobres e skaa classe social inferior , Kelsier, um ladrão bastardo, se torna a única pessoa a sobreviver e escapar da prisão brutal do Senhor Soberano, onde ele descobriu ter os poderes alomânticos de um Nascido da Bruma uma magia misteriosa e proibida. Agora, Kelsier planeja o seu ataque mais ousado: invadir o centro do palácio para descobrir o segredo do poder do Senhor Soberano e destruí-lo. Para ter sucesso, Kel vai depender também da determinação de uma heroína improvável, uma menina de rua que precisa aprender a confiar em novos amigos e dominar seus poderes.',
    preco: 'R$150,00',
  },
  {
    id: 4,
    nome: 'Six of crows: Sangue e mentiras',
    descricaoCurta: 'O OnePlus 9T oferece um excelente desempenho com uma tela Fluid AMOLED de 6.55 polegadas, câmera de 48MP e 256GB de armazenamento.',
    descricaoExtensa: 'O OnePlus 9T é um smartphone projetado para oferecer um desempenho excepcional. Sua tela Fluid AMOLED de 6.55 polegadas oferece uma experiência visual imersiva, enquanto a câmera de 48MP captura fotos de alta qualidade. Com 256GB de armazenamento, você terá espaço suficiente para todos os seus arquivos. Este smartphone é alimentado por um processador poderoso, garantindo que você possa executar aplicativos e jogos exigentes sem problemas. Se você busca desempenho e qualidade, o OnePlus 9T é uma escolha sólida.',
    preco: 'R$699,99',

  },
  {
    id: 5,
    nome: 'Xiaomi Mi 11 Lite',
    descricaoCurta: 'O Xiaomi Mi 11 Lite é um smartphone acessível com uma tela AMOLED de 6.55 polegadas, câmera de 64MP e 64GB de armazenamento.',
    descricaoExtensa: 'O Xiaomi Mi 11 Lite oferece um excelente custo-benefício com uma tela AMOLED de 6.55 polegadas que exibe cores vivas e detalhes nítidos. Sua câmera de 64MP permite que você capture fotos de alta resolução, e o armazenamento de 64GB oferece espaço suficiente para suas necessidades diárias. Este smartphone oferece um desempenho sólido para tarefas do dia a dia. Se você procura um smartphone acessível com recursos de qualidade, o Xiaomi Mi 11 Lite é uma excelente escolha.',
    preco: 'R$499,99',

  }
];

export const getAparelhos = () => {
  return aparelhosData;
};

export const addAparelho = (aparelho) => {
  aparelho.id = (aparelhosData[aparelhosData.length - 1].id+1);
  aparelhosData.push(aparelho);
};

export const updateAparelho = (aparelho) => {
  const index = aparelhosData.findIndex((item) => item.id === aparelho.id);
    if(index !== -1) {
      aparelhosData[index] = aparelho;
    }
};

export const deleteAparelho = (id) => {
  aparelhosData = aparelhosData.filter((item) => item.id
  !== id);
};

export default aparelhosData;
