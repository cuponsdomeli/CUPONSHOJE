
// Dados exportados do Python de forma automatizada
const categories = [
  "Alimentos & Bebidas",
  "Artesanato & Artes",
  "Automotivo",
  "Bebês & Crianças",
  "Beleza & Cuidados Pessoais",
  "Casa & Decoração",
  "Celulares & Telefonia",
  "Comércio & Indústria",
  "Eletrodomésticos",
  "Eletrônicos & Áudio",
  "Esportes & Lazer",
  "Ferramentas & Construção",
  "Games & Consoles",
  "Informática",
  "Jardim & Agricultura",
  "Joias & Acessórios",
  "Livros & Papelaria",
  "Moda & Calçados",
  "Pets",
  "Saúde & Suplementos",
  "Utilidades Gerais",
  "casa & Decoração"
];
const products = [
  {
    "id": 1,
    "nome": "Calça Jeans Masculina Tradicional Básica Corte Reto Mzoco",
    "preco": "R$52,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_741853-MLB112459929996_062026-O.webp",
    "link": "https://meli.la/1rfdWF5",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 2,
    "nome": "Manta Microfibra Casal Macia Quentinha Antialérgica Cereja Cereja 1.1 G Branca",
    "preco": "R$59,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_803042-MLB109551660386_042026-O.webp",
    "link": "https://meli.la/1GF1rRw",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 3,
    "nome": "Kit Karssellé Máscara 500g + Cond 1l + Shampoo 1l +óleo 60ml",
    "preco": "R$52,24",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_873185-MLB116489909327_082026-O.webp",
    "link": "https://meli.la/1eUs5U6",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 4,
    "nome": "Kit 2 Capas Protetoras Impermeáveis Percal 180 Fios Algodão Travesseiros Marca Temima Cor Branco",
    "preco": "R$42,21",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_907470-MLA118782424113_102026-O.webp",
    "link": "https://meli.la/2C92sQL",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 5,
    "nome": "Carrinho Dobrável para Camping e Praia de 50L Reforçado em Aço, da Clampzy",
    "preco": "R$247",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_611668-MLA115989721160_092026-O.webp",
    "link": "https://meli.la/1sjpYnt",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 6,
    "nome": "Adubo Ureia Granulado Gramados E Plantas Fracione 5kg",
    "preco": "R$49,90",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_762420-MLB113642779608_072026-O.webp",
    "link": "https://meli.la/1FSQ2qh",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 7,
    "nome": "Luminaria Teto Led,pendente Lustre Moderna Para Quarto Sala 127/220v Branco",
    "preco": "R$78,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_642862-MLB114399449596_082026-O.webp",
    "link": "https://meli.la/1GAspr5",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 8,
    "nome": "Interruptor 1 Tecla Simples Com Placa Liz Branco Tramontina",
    "preco": "R$19,53",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_950058-MLB114994947888_082026-O.webp",
    "link": "https://meli.la/1niA3F3",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 9,
    "nome": "Kit 6 Capas Protetora P/ Travesseiro Percal 180 Fios Impermeável Temima",
    "preco": "R$107,61",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_776346-MLA118782606391_102026-O.webp",
    "link": "https://meli.la/1Vy5gKF",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 10,
    "nome": "Limpa Tenis Premium Limpeza Profunda Spray A Seco Sapato Azul-claro",
    "preco": "R$34,82",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_647071-MLA109294652345_032026-O.webp",
    "link": "https://meli.la/2EzmiVJ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 11,
    "nome": "Mini Retífica Portátil Multifuncional Sem Fio 57 Em 1",
    "preco": "R$113,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_728142-MLB117909940021_092026-O.webp",
    "link": "https://meli.la/29t2AGD",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 12,
    "nome": "Interruptor Inteligente Fosco Zigbee Vênus Soft Touch Smart 2 Botões Alexa Google Home Cor Branco Ekaza",
    "preco": "R$75,65",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_843156-MLA107755249118_032026-O.webp",
    "link": "https://meli.la/19L6YCF",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 13,
    "nome": "Ômega 3 Biobalance Omega Pure 500mg 90% Pureza Cápsulas Neutro",
    "preco": "R$175",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_687043-MLA99912317865_112025-O.webp",
    "link": "https://meli.la/1gpzsZP",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 14,
    "nome": "Kit 4kg Elevador De Alcalinidade Para Limpeza De Piscina",
    "preco": "R$46,52",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_604104-MLB113537732558_072026-O.webp",
    "link": "https://meli.la/1aiozMT",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 15,
    "nome": "Mochila Viagem 40L Grande Expansível Antifurto Impermeável Aviao Mala De Mao Item Pessoal Masculina Feminina Yorepek Liso",
    "preco": "R$154,23",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_750702-MLA96868780077_102025-O.webp",
    "link": "https://meli.la/2iawXhS",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 16,
    "nome": "Bota Motociclista Acero Coturno Cano Alto Couro Speed Moto",
    "preco": "R$325,71",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_750677-MLB88933664618_082025-O.webp",
    "link": "https://meli.la/2389Aqg",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 17,
    "nome": "Mala de Viagem Grande 23kg Allabard Pisa Preto Casco ABS Premium",
    "preco": "R$308",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_718350-MLA111998154059_052026-O.webp",
    "link": "https://meli.la/2Ep5UBh",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 18,
    "nome": "Bota Adventure Extra Leve Cano Baixo One Mid Palmilha Acero",
    "preco": "R$311,60",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_812002-MLB96075043132_102025-O.webp",
    "link": "https://meli.la/2yKQbMh",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 19,
    "nome": "Esmerilhadeira Angular Sem Fio Wetoke 48V 8500rpm Disco 100mm",
    "preco": "R$339,49",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_615394-MLA111389572457_052026-O.webp",
    "link": "https://meli.la/33F4cpC",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 20,
    "nome": "Kit Talher Descartável Preto - Garfo, Faca Caixa   C/250",
    "preco": "R$106,70",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922767-MLB83248361866_042025-O.webp",
    "link": "https://meli.la/1tRMvzG",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 21,
    "nome": "Broca Escalonada 4-32 Aco Rapido Prof. Espiral 1pc Mtx",
    "preco": "R$68,14",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_725433-MLB115779876439_082026-O.webp",
    "link": "https://meli.la/1gLABvu",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 22,
    "nome": "Interruptor Inteligente Fosco Zigbee Vênus Soft Touch Smart 1 Botões Alexa Google Home Cor Branco Ekaza",
    "preco": "R$75,96",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_841904-MLA107753500612_032026-O.webp",
    "link": "https://meli.la/1tyz78z",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 23,
    "nome": "Proteção De Bicos Amarok 2.0 4c Cp4 Kit Completo",
    "preco": "R$187",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_983565-MLB90422153300_082025-O.webp",
    "link": "https://meli.la/2kW7CdA",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 24,
    "nome": "Conjunto Fitness Feminino Arm Top E Legging Bolso Lateral",
    "preco": "R$97,77",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_994936-MLB92232868389_092025-O.webp",
    "link": "https://meli.la/1Pie25x",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 25,
    "nome": "Sacola Plástica Transparente Hortifruti Sacolão Frutas - 36x50 cm - 600 Un",
    "preco": "R$64,99",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_654515-MLA114381705925_072026-O.webp",
    "link": "https://meli.la/2s97svc",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 26,
    "nome": "Controlador Full Gauge Tc-900e",
    "preco": "R$189,23",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_760684-MLA116552832130_092026-O.webp",
    "link": "https://meli.la/1fw3kHK",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 27,
    "nome": "Suporte Celular Prova D'agua Para Moto/ Bicicleta Universal",
    "preco": "R$138,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_730941-MLB112897756402_072026-O.webp",
    "link": "https://meli.la/2DJnsMk",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 28,
    "nome": "Kit 100 Sachês Shampoo 2 em 1 30ml + 100 Sabonetes 15g Castanha do Pará Hotel",
    "preco": "R$180,78",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_648396-MLA99888116887_112025-O.webp",
    "link": "https://meli.la/2SRBn9Y",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 29,
    "nome": "Moonwalk: A Autobiografia De Michael Jackson, De Michael Jackson. Capa Dura Editora Estética Torta, Em Português, 2022",
    "preco": "R$189,90",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_992686-MLA99974720487_112025-O.webp",
    "link": "https://meli.la/14dpPCn",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 30,
    "nome": "Kit Motociclista Luva Proteção Touch Balaclava Motoqueiro Preto Unico",
    "preco": "R$55,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_870140-MLB112507184350_062026-O.webp",
    "link": "https://meli.la/2z1QtDv",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 31,
    "nome": "Fluido De Arrefecimento Motul Auto Cool Optimal 1l Motul",
    "preco": "R$36,20",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_666625-MLA99923154455_112025-O.webp",
    "link": "https://meli.la/2xfvJuc",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 32,
    "nome": "10 Pç Cantoneira Suporte União Em L 100x100x40mm Gabaritado",
    "preco": "R$54,18",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_881999-MLB117248794647_092026-O.webp",
    "link": "https://meli.la/28ACkXT",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 33,
    "nome": "Camiseta Dryfit Masculina Academia Treino Proteção Uv+",
    "preco": "R$38,11",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_681261-MLB97289513052_112025-O.webp",
    "link": "https://meli.la/1qnY2LJ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 34,
    "nome": "Carteira Couro Ferracini Masculina Cfb024b Cor Marrom",
    "preco": "R$149,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_959266-MLA114810208154_082026-O.webp",
    "link": "https://meli.la/1XxWAhi",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 35,
    "nome": "Peitoral Com Guia Para Cães Pet Finess Cor Pink Tamanho 2",
    "preco": "R$124,34",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787385-MLA116667813341_082026-O.webp",
    "link": "https://meli.la/2SbNLCg",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 36,
    "nome": "Suporte Celular Carro Magnético Rotativo 360dobrável Ventosa Branco",
    "preco": "R$26,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_825257-MLB115053898857_072026-O.webp",
    "link": "https://meli.la/2PeECPT",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 37,
    "nome": "Aparelho Profissional Pressão Arterial Braço Digital Branco Premier",
    "preco": "R$53",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_886643-MLA108747600004_032026-O.webp",
    "link": "https://meli.la/1x41nEZ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 38,
    "nome": "Placa Potencia Electrolux Ltd09 A30557001",
    "preco": "R$113",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_743304-MLA99467962942_112025-O.webp",
    "link": "https://meli.la/1PqFW9P",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 39,
    "nome": "Mio Inositol 2g 60 Sachês - Equilíbrio Metabólico Feminino Sem Sabor",
    "preco": "R$79,82",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_640887-MLA118524832783_092026-O.webp",
    "link": "https://meli.la/29v7RWh",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 40,
    "nome": "Kit 3x Carretel Corte Raso Roçadeira Nylon P Stihl Fs160 220 Preto",
    "preco": "R$67,35",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_688543-MLB114367174843_072026-O.webp",
    "link": "https://meli.la/1HQLT2M",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 41,
    "nome": "Miçanga De Flor Com Furo 100un 10mm Borda Dourada 1 Cm",
    "preco": "R$23,94",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_940404-MLB112455087434_062026-O.webp",
    "link": "https://meli.la/2SGEVUr",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 42,
    "nome": "Kit 2 Faixa Esfregao Dupla Escova De Banho Faixa Limpeza Profunda Corporal Esfoliante Massageador Costas Relaxante Corpo Todo Azul Boa Dica",
    "preco": "R$31,99",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_836719-MLA116185884211_082026-O.webp",
    "link": "https://meli.la/2rR44e5",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 43,
    "nome": "Ômega 3 Ultra Dha 1000 Easy Boost Epa 400mg Dha 1000mg 60 Cápsulas Total 1400mg Óleo de Peixe Selo Meg3",
    "preco": "R$67,97",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_986106-MLA99938098537_112025-O.webp",
    "link": "https://meli.la/1UeYSfB",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 44,
    "nome": "Pelúcia Casa Mágica Da Gabby Gabby's Dollhouse Boneco Cor Gata Kitty",
    "preco": "R$62,99",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_835305-MLA99908347909_112025-O.webp",
    "link": "https://meli.la/1GJcoBW",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 45,
    "nome": "Mini Porta Pallet Palete Palet Continuação Slim 200x180x80 Não Possui",
    "preco": "R$441",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_986419-MLB92376024991_092025-O.webp",
    "link": "https://meli.la/2KYGTAq",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 46,
    "nome": "Cabo Unipolar Flexível Circuity 2.5mm Azul Rolo 100m 750V Cobre Antichama",
    "preco": "R$59,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_795395-MLA99496800023_112025-O.webp",
    "link": "https://meli.la/19frvxF",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 47,
    "nome": "Alicate Decapador Para Fibra Optica Drop Flat",
    "preco": "R$25,60",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_808517-MLB111633805203_052026-O.webp",
    "link": "https://meli.la/15jGq7f",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 48,
    "nome": "Kit C/ 6 Unidades Porta Temperos Em Aço Inox / Vidro - Bares E Restaurantes! Excelente Qualidade! Saleiro E Pimenteiro Prateado",
    "preco": "R$56,49",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_613224-MLB70926348094_082023-O.webp",
    "link": "https://meli.la/2tM5dBB",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 49,
    "nome": "Café moído CASA CALUÊ Torra Média em 500g",
    "preco": "R$37",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_765395-MLA84741006106_052025-O.webp",
    "link": "https://meli.la/2Hw6KYY",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 50,
    "nome": "Colchonete Academia exercicios funcional 90x45x3 Espuma aglomerada de alto impacto Altadensidade Abdominal Fitness Tapete Azul",
    "preco": "R$58,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_757763-MLA117936208792_102026-O.webp",
    "link": "https://meli.la/1xXyvFg",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 51,
    "nome": "Coleira Antiparasitária Quays 2un para Cães e Gatos Proteção 8 Meses",
    "preco": "R$58,18",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_942619-MLA117965094534_102026-O.webp",
    "link": "https://meli.la/14hTdAf",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 52,
    "nome": "Kit Graxa E Óleo Lubrificantes Para Carretilhas E Molinetes Bra",
    "preco": "R$46,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_729436-MLB92247192832_092025-O.webp",
    "link": "https://meli.la/1462gLw",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 53,
    "nome": "Skin Para Ps5 Slim Disco Adesivo Vertical - Vários",
    "preco": "R$54,99",
    "categoria": "Games & Consoles",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_760250-MLB77112894878_062024-O.webp",
    "link": "https://meli.la/2cpNgXg",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 54,
    "nome": "Protetor Parafusos Aço Para Telhas Metálicas Telhado 100 Pçs",
    "preco": "R$38,39",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_626304-MLB102303964195_122025-O.webp",
    "link": "https://meli.la/2Bu339b",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 55,
    "nome": "Controle Remoto Para Ar Condicionado Consul Split 30,000 BTU LCD",
    "preco": "R$19",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_663522-MLA105390677954_012026-O.webp",
    "link": "https://meli.la/27DKPzK",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 56,
    "nome": "Boina Para Polimento Espuma 5  Polegadas Corte Pesado Velcro",
    "preco": "R$29",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_878384-MLB119336673095_102026-O.webp",
    "link": "https://meli.la/1fiU1A8",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 57,
    "nome": "Kit 100clips Organizador Fixador De Fios Parede Adesivo Cabo Boa Dica",
    "preco": "R$29,69",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_625270-MLA108049180622_032026-O.webp",
    "link": "https://meli.la/26AtN8o",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 58,
    "nome": "Mouse Sem Fio Recarregavel Rgb Usb Adaptador Ergonômico Azul Celeste",
    "preco": "R$21,90",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_611923-MLA115892232853_082026-O.webp",
    "link": "https://meli.la/1g9y6ZJ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 59,
    "nome": "Capa Capinha Para Samsung Case Magnética Premium Com Suporte",
    "preco": "R$32,38",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_761889-MLB102403893192_122025-O.webp",
    "link": "https://meli.la/1J5QvvB",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 60,
    "nome": "Correia Para Batedeira Philco Php500 Original",
    "preco": "R$23,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_742972-MLB70518760893_072023-O.webp",
    "link": "https://meli.la/2RYx9cU",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 61,
    "nome": "Tesoura De Cabista Para Corte Fibra Óptica (ftth) C/nf@",
    "preco": "R$20,95",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_958184-MLA107165960499_022026-O.webp",
    "link": "https://meli.la/2JKWcnV",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 62,
    "nome": "Resistência Lorenzetti Para Chuveiro Quadra Duo Shower 220v",
    "preco": "R$19,91",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894917-MLB94535005899_102025-O.webp",
    "link": "https://meli.la/2FJ1Bpo",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 63,
    "nome": "Espátula Celular Manutenção Abrir Desmontar Tablet Oferta",
    "preco": "R$13,21",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_910236-MLB50420562827_062022-O.webp",
    "link": "https://meli.la/1UaALUJ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 64,
    "nome": "Top Soutien Infantil Lupo Básico Lobinha Sem Costura Menina",
    "preco": "R$37,49",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_949179-MLB98481772243_112025-O.webp",
    "link": "https://meli.la/2DFR4fE",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 65,
    "nome": "Óculos De Sol Quadrado Blade Original Masculino Tendência",
    "preco": "R$55,23",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_839552-MLB111520179912_062026-O.webp",
    "link": "https://meli.la/2gLNPCN",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 66,
    "nome": "250un Saco De Envio Envelope Ecommerce Segurança 32x40 Preto Preto",
    "preco": "R$69,02",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_761302-MLB117415340480_102026-O.webp",
    "link": "https://meli.la/1Ur519j",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 67,
    "nome": "Kit 20 Rosas Artificiais Aveludadas Realistas Haste 50cm Vermelho",
    "preco": "R$143,91",
    "categoria": "casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_814964-MLA112856737140_072026-O.webp",
    "link": "https://meli.la/2fPE7o6",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 68,
    "nome": "Kit 4 Molas Vara De Suspensão Lavadora Electrolux 6 A 15kg",
    "preco": "R$18,61",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_664655-MLB118173113617_092026-O.webp",
    "link": "https://meli.la/1RNi8MD",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 69,
    "nome": "Liqui Moly Super Diesel Additiv 250ml",
    "preco": "R$111",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_653242-MLA99400915120_112025-O.webp",
    "link": "https://meli.la/1DBRwco",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 70,
    "nome": "Camiseta Hollister, Abercrombie E Outras Importada Original",
    "preco": "R$157,09",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_906238-MLB116260406464_092026-O.webp",
    "link": "https://meli.la/2d1eegW",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 71,
    "nome": "Oculos Sol Infantil Aviador Proteção Uv Preto Menino Haste Metal",
    "preco": "R$36",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_612126-MLA99597539222_122025-O.webp",
    "link": "https://meli.la/1g5qLjp",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 72,
    "nome": "Filtro Regulador Ar Compressor 1/4 Completo Com Conexões Mangueira 8mm",
    "preco": "R$37",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_750327-MLA99931623105_112025-O.webp",
    "link": "https://meli.la/1i57iCU",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 73,
    "nome": "Maca Peruana Negra 5g Crua (raw) Em Pó | 150g | Bigens Sabor Neutro",
    "preco": "R$69,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_771786-MLA99952075831_112025-O.webp",
    "link": "https://meli.la/1p4w9fV",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 74,
    "nome": "Basike Smart Tag Rastreador GPS Compatível iPhone Apple Localizador De Objetos Para Chaveiro Moto Veicular Pet Gato Bike Mala 2 Kits",
    "preco": "R$95,63",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_742948-MLA117648082430_102026-O.webp",
    "link": "https://meli.la/16eTfz8",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 75,
    "nome": "Kit 5 Toalhas de Banho Branca Grandes 100% Algodão Toalhas Leves Finas Lisas Macias Salão Academia Hotel Pousada Profissional Caricinha Alta Absorção Brancas Branco - 60x130 cm - Renova Enxovais",
    "preco": "R$76,69",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_771282-MLA112505564631_052026-O.webp",
    "link": "https://meli.la/2ocH5gG",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 76,
    "nome": "Sandalia Feminina Birken Fivela Dedo Confortavel Beira Rio",
    "preco": "R$99,11",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_642113-MLB86738524834_072025-O.webp",
    "link": "https://meli.la/26RaYUw",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 77,
    "nome": "Reservatório Da Água Radiador Mt 03 Yzf R3 Original Yamaha",
    "preco": "R$189",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_646103-MLB89669350983_082025-O.webp",
    "link": "https://meli.la/1vbvAqu",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 78,
    "nome": "Bíblia Sagrada Letra Hiper Gigante Com Zíper E Harpa Cristã",
    "preco": "R$39",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_744939-MLB109847156072_042026-O.webp",
    "link": "https://meli.la/1qKBUgj",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 79,
    "nome": "Placa Logotipo Identificação Acrílico 40x20 Espelhado Brilho",
    "preco": "R$56,90",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_692985-MLB90725829382_082025-O.webp",
    "link": "https://meli.la/1XSU1Dn",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 80,
    "nome": "Mini Rastreador Gps Veicular E Moto Sem Mensalidade iPhone Preto Posicionamento Global",
    "preco": "R$29",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_984800-MLB109286321449_032026-O.webp",
    "link": "https://meli.la/2nJ2VcW",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 81,
    "nome": "Kit 6 Un Mão Francesa Invertida Industrial Para Tábua 25cm",
    "preco": "R$54,13",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970388-MLA117088407835_092026-O.webp",
    "link": "https://meli.la/2gfyaJE",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 82,
    "nome": "Carregador Celular Portatil 10000mah Android Ios Universal Indução Magsafe Usb Fio Tipo C Powerbank Mag Safe Magnético Bateria Carregamento Carga Potente Turbo Ultra Rápido Azul Premium",
    "preco": "R$78,39",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_840448-MLA111990495815_052026-O.webp",
    "link": "https://meli.la/1YdhvbZ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 83,
    "nome": "Interruptor Inteligente Zigbee 3.0 Ekaza 1 Teclas Botões Cinza Click Full Mercúrio Lite Automação Tuya Smart Life Compatível Alexa Google Assistant 110v 220v Bivolt",
    "preco": "R$122,31",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_649889-MLA110225450879_042026-O.webp",
    "link": "https://meli.la/2NUbBGT",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 84,
    "nome": "Kit 5 Fita M231 Mk231 Mk 231 Pt-90 12mm Compatível Premium Cor Preto no Branco",
    "preco": "R$22,60",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_834402-MLA95351966263_102025-O.webp",
    "link": "https://meli.la/1PJRwaL",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 85,
    "nome": "Livro Crédito Vale Mais Que Dinheiro, De Eduardo Augusto Sousa, Vol. Único. Editora Life, Capa Mole (2024)",
    "preco": "R$85,57",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_789316-MLA105361481642_012026-O.webp",
    "link": "https://meli.la/2MTG3Kd",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 86,
    "nome": "Fone de Ouvido Sem Fio Bluetooth 5.4 IPX5 Tws Anc In-ear Bateria De 20 Horas De Duração 50h Em Standby Cor Branco Inova",
    "preco": "R$54,27",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_795772-MLA114297457846_082026-O.webp",
    "link": "https://meli.la/2XHgn2u",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 87,
    "nome": "Body Splash Caramello Kiss Vibez Da Vez Hinode 200ml",
    "preco": "R$79,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_659604-MLA109903141683_042026-O.webp",
    "link": "https://meli.la/1b3VLUn",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 88,
    "nome": "03 POTES do MAGNÉSIO DIMALATO - Fórmula com Máxima Concentração e Pureza - 60 comprimidos",
    "preco": "R$121,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_905386-MLA114829850540_082026-O.webp",
    "link": "https://meli.la/1XWmzwr",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 89,
    "nome": "Basike Air Tag Rastreador Bluetooth Gps Com Alarme Sonoro Localizador de Objetos Smart Tag Para Apple Compatível App Buscar, Bateria Duradoura Chaveiro Mala Moto Veicular Pet Gato Bike(3Kits)",
    "preco": "R$139,83",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807318-MLA111784341567_052026-O.webp",
    "link": "https://meli.la/2a8ttHg",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 90,
    "nome": "Suporte Celular Carro Painel Vidro Ventosa Giro 360 Graus Preto",
    "preco": "R$28,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_636550-MLB92661148287_092025-O.webp",
    "link": "https://meli.la/1rKoN74",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 91,
    "nome": "Ribbon Armor Inkanto Cera 110x74 P/argox Zebra Elgin 10 Un Preto",
    "preco": "R$58,90",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_794531-MLB100178047887_122025-O.webp",
    "link": "https://meli.la/1r5SaEh",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 92,
    "nome": "Joelheira Articulada Compressão Ortopédica Silicone Patelar Preto E Azul M",
    "preco": "R$26",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_694815-MLB103853867654_012026-O.webp",
    "link": "https://meli.la/1ASEmZE",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 93,
    "nome": "Colher Plana Caldeirao Polietileno 60 Cm Branco",
    "preco": "R$55",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_995232-MLA92142261153_092025-O.webp",
    "link": "https://meli.la/1ee6RjJ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 94,
    "nome": "Placa Proibido Estacionar Carga E Descarga 40x30cm Ps 1mm Proibido Estacionar - Carga E Descarga",
    "preco": "R$34",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_743245-MLB102361718746_122025-O.webp",
    "link": "https://meli.la/1t1pzku",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 95,
    "nome": "Kit 3 Meno Care 60 Cápsulas Suplemento Auxílio Menopausa Menocare",
    "preco": "R$139",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_712800-MLA109780006462_042026-O.webp",
    "link": "https://meli.la/2kYXSNg",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 96,
    "nome": "Fertilizante Orgânico Líquido Concentrado 2L Bokashi + Algas Marinhas",
    "preco": "R$67,97",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_744917-MLA99387174038_112025-O.webp",
    "link": "https://meli.la/24HLWPG",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 97,
    "nome": "C1 Clean Eliminador De Odores 5 Litros Linha Pet Fragrância Lavanda",
    "preco": "R$49,40",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_951928-MLA111455707189_052026-O.webp",
    "link": "https://meli.la/2EqZvPr",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 98,
    "nome": "Tinta De Ferrugem , Pasta Removedor Primer À Base De Água",
    "preco": "R$34,49",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_820248-MLB113750339851_062026-O.webp",
    "link": "https://meli.la/19oqKCw",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 99,
    "nome": "Kit 4 Mãos Francesas 12cm Invertida Multiuso Resistente",
    "preco": "R$25,42",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_801812-MLA114679907184_082026-O.webp",
    "link": "https://meli.la/2oXgV51",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 100,
    "nome": "Livro Especialista Em Pessoas - Soluções Bíblicas E Inteligentes Para Lidar Com Todo Tipo De Gente - Tiago Brunet - Capa Brochura - Editora Academia",
    "preco": "R$36,46",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_637721-MLB110742954679_042026-O.webp",
    "link": "https://meli.la/2DYnRXM",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 101,
    "nome": "Triptofano Nitech Nutrition 860mg 60 Cápsulas Precursor Serotonina",
    "preco": "R$37,30",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_912091-MLA100065640993_122025-O.webp",
    "link": "https://meli.la/255e3qf",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 102,
    "nome": "Filtro Bag Big Blue 20 X 4 1/2 Tecido E Aro De Polipropileno 10 Micras",
    "preco": "R$50,71",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_964431-MLA100085676109_122025-O.webp",
    "link": "https://meli.la/296yaA1",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 103,
    "nome": "Repelente Elétrico Ultrassônico para Ratos e Insetos Greendles, uso em Quarto e Sala",
    "preco": "R$19",
    "categoria": "casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_711549-MLA116502171773_082026-O.webp",
    "link": "https://meli.la/2BTTxGZ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 104,
    "nome": "Pantufa Masculina Dinossauro Inverno Solado Borracha",
    "preco": "R$125,34",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_946605-MLB49109449327_022022-O.webp",
    "link": "https://meli.la/2akE3ru",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 105,
    "nome": "Silicone Para Esteira Hp - Mix 200horas Galão 5litros",
    "preco": "R$558",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_746070-MLB89514670404_082025-O.webp",
    "link": "https://meli.la/2iiLkgW",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 106,
    "nome": "Protetor Saia De Porta Facilit 82cm Cor Mogno Escuro",
    "preco": "R$49",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_976277-MLA97736039867_112025-O.webp",
    "link": "https://meli.la/2RNJTED",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 107,
    "nome": "Esfoliante Facial Della & Delle Arroz 150g Rosto Dia Noite",
    "preco": "R$39,99",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_890261-MLB53353237828_012023-O.webp",
    "link": "https://meli.la/2QcAzXy",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 108,
    "nome": "Protetor De Colchão Impermeável King Size Matelassado",
    "preco": "R$76,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_698249-MLA95970665789_102025-O.webp",
    "link": "https://meli.la/2zTpX3h",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 109,
    "nome": "Kit Vinho Personalizado Maleta Luxo Couro Ecológico + 4 Peça",
    "preco": "R$91,20",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_728956-MLB110637746672_052026-O.webp",
    "link": "https://meli.la/2UfQhyD",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 110,
    "nome": "Short Praia Masculino Academia Bermuda Qualidade Superior",
    "preco": "R$26,16",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_656333-MLB111400384765_052026-O.webp",
    "link": "https://meli.la/1Yepiis",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 111,
    "nome": "7 Fitas Compatível Para Brother Pt-h110 Pt-h105 Tze 231 12mm Cor 12mm Branca",
    "preco": "R$59",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_715023-MLA99497155518_112025-O.webp",
    "link": "https://meli.la/339Dcez",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 112,
    "nome": "Kit 2 Fronha 50x70 cm 100% Algodão Malha Lisa Envelope Capa para Travesseiro Padrão Solteiro Casal Avulsa Antialérgica Respirável Macia Confortável Toque Suave Rosa Rose 2 Peças - Renova Enxovais",
    "preco": "R$33,94",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_641308-MLA109890669042_042026-O.webp",
    "link": "https://meli.la/2UYmLMH",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 113,
    "nome": "Tônico Engrossador Capilar, Crescimento + Volume, Fortalece A Raiz Penariol",
    "preco": "R$32,98",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_624497-MLA111978405100_062026-O.webp",
    "link": "https://meli.la/1eePT14",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 114,
    "nome": "Adubo KaCote 14-14-14 Liberação Lenta Granulado 1 Kg 3 Meses",
    "preco": "R$49,90",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_755010-MLA118114771873_092026-O.webp",
    "link": "https://meli.la/2s2JUQb",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 115,
    "nome": "Aparelho Lixa Pés Elétrico Esfoliante Removedor De Calos E Pele Morta Lixador Elétrico De Pés Lixadeira De Calcanhar Removedor De Rachaduras Dos Pés Removedor De Pele Morta Bivolt 110/220v Black Raipe",
    "preco": "R$23,74",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_796570-MLA111865242661_052026-O.webp",
    "link": "https://meli.la/19vZbsV",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 116,
    "nome": "Correia Para Batedeira Planetária Britania Bbp520 Turbo",
    "preco": "R$29,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_802179-MLB75609895872_042024-O.webp",
    "link": "https://meli.la/2AjABXJ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 117,
    "nome": "Interruptor Touch 2.5d Inteligente 1botão Wifi Alexa Cor Preto",
    "preco": "R$63,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_637540-MLA99937173447_112025-O.webp",
    "link": "https://meli.la/1gxG5sA",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 118,
    "nome": "Adubo Kacote Liberação Lenta 15-09-12 Granulado 1kg",
    "preco": "R$49,90",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_664540-MLA110466065855_042026-O.webp",
    "link": "https://meli.la/2ds8MMz",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 119,
    "nome": "Alicate Universal 8  Cabo Emborrachado Amarelo",
    "preco": "R$22,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_755029-MLB109464457394_042026-O.webp",
    "link": "https://meli.la/1EDNffQ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 120,
    "nome": "Kit Com 24 Potinhos De Vidro 40ml + Tampa Metálica E Lacres Cor Branco",
    "preco": "R$47,25",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_912664-MLA95684198442_102025-O.webp",
    "link": "https://meli.la/2McnXPc",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 121,
    "nome": "Tubo Lata 8x5 Para Personalizar ( 30 Pçs ) Entrega Rápida  Branco",
    "preco": "R$93,12",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_820533-MLB117263833108_102026-O.webp",
    "link": "https://meli.la/2VrjMFW",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 122,
    "nome": "Ração New Pet Original Cães Adultos Sabor Carne 7kg",
    "preco": "R$42",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_706467-MLA99847410347_112025-O.webp",
    "link": "https://meli.la/16cgCYD",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 123,
    "nome": "50 Potes De Vidro Liso 40ml Com Tampa De Rolha Cortiça Cor Incolor",
    "preco": "R$149",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_669850-MLA108221774979_032026-O.webp",
    "link": "https://meli.la/2poWenE",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 124,
    "nome": "Rádio Solar Multifuncional 5 Em 1 Com Power Bank E 3 Lâmpada Preto E Azul",
    "preco": "R$144,44",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_939644-MLB113352996567_062026-O.webp",
    "link": "https://meli.la/2ftg7j9",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 125,
    "nome": "Mochila Grande M3M Executiva Escolar Faculdade Trabalho Viagem Cor Preto Desenho do tecido Liso 35L",
    "preco": "R$92",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_977392-MLA109414723222_042026-O.webp",
    "link": "https://meli.la/2CRWYcq",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 126,
    "nome": "Lâmpada Led Emergência 20w Recarregável E27 Bateria Portátil Branco Bivolt",
    "preco": "R$53",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_755281-MLB112460482800_062026-O.webp",
    "link": "https://meli.la/2oiHpMe",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 127,
    "nome": "Copo Para Liquidificador Philco Plq1212 Preto",
    "preco": "R$64,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_633243-MLA99506910942_112025-O.webp",
    "link": "https://meli.la/1ZpE3ed",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 128,
    "nome": "Copo Liquidificador Philco Plq15a Preto 3l",
    "preco": "R$72,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973121-MLA109236674012_042026-O.webp",
    "link": "https://meli.la/2HcMx6A",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 129,
    "nome": "Fone Bluetooth Capacete Moto Comunicador 5.3 IPX67 Cancela Ruído",
    "preco": "R$54,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_763355-MLA90234095783_082025-O.webp",
    "link": "https://meli.la/2ZdCVri",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 130,
    "nome": "Andractiv 30 Cáps Suplemento Masculino Sem Sabor",
    "preco": "R$170",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_640094-MLA110118969507_042026-O.webp",
    "link": "https://meli.la/1LHcuf5",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 131,
    "nome": "Caneta de Marcação para Esterilização Steriking Cme 0.75mm Preto",
    "preco": "R$102",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_986112-MLA114277346065_072026-O.webp",
    "link": "https://meli.la/1MsRkMJ",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 132,
    "nome": "Kit De Atualização Do Álbum 120 figurinhas Panini Da Copa Do Mundo Fifa 2026",
    "preco": "R$52,49",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_822625-MLA114331280251_072026-O.webp",
    "link": "https://meli.la/1zjmmpA",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 133,
    "nome": "Micro Retífica Perfin 135W com 87 Acessórios e 6 Velocidades para Madeira, Metais e Vidro",
    "preco": "R$129",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_788764-MLA99434237192_112025-O.webp",
    "link": "https://meli.la/1VkjLfv",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 134,
    "nome": "Copo Para Multiprocessador Britânia - Bmp2000",
    "preco": "R$61,55",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_608314-MLA96507188601_102025-O.webp",
    "link": "https://meli.la/2DBiCRh",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 135,
    "nome": "Copo Original Para Liquidificador Philco Plq1412 Preto",
    "preco": "R$67,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970931-MLA115646185096_092026-O.webp",
    "link": "https://meli.la/2hvTbDw",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 136,
    "nome": "Amplificador Áudio 2ch 300w X2 Bluetooth Para Carro E Casa Preto",
    "preco": "R$195,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_657608-MLA110195233122_052026-O.webp",
    "link": "https://meli.la/1HqQrcp",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 137,
    "nome": "Substrato De Fibra De Coco Premium Para Repteis E Tartarugas 0",
    "preco": "R$27,50",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_719611-MLA112102889330_062026-O.webp",
    "link": "https://meli.la/1n5knNG",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 138,
    "nome": "Cuba de Apoio Redonda Winda 30cm Cerâmica Branca Premium Hidrófuga Fácil Limpeza com Furo para Torneira Banheiro Lavabo",
    "preco": "R$180,71",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_882059-MLA113748878022_072026-O.webp",
    "link": "https://meli.la/2KVMguW",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 139,
    "nome": "Embalagem Para Trufas E Bombom 15x16cm 100 Unidades Aliança Cor Brigadeiro",
    "preco": "R$19",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_804699-MLA112325236714_062026-O.webp",
    "link": "https://meli.la/2dLbyqu",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 140,
    "nome": "Kit Intt Bubble Vibes 3 Em 1 E Pico Pulse Menta Gel Sugador Chiclete + Menta",
    "preco": "R$152,10",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_977221-MLA112426394378_062026-O.webp",
    "link": "https://meli.la/1bJo57f",
    "cupom": "ESPECIALDESCONTOS"
  },
  {
    "id": 141,
    "nome": "Ventilador de Teto Moderno 36\" com Luz LED e Controle Remoto, Reversível, 3cct, Dimerizável, Silencioso, Para Quarto, Uso Interno/externo",
    "preco": "R$367,48",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_918041-MLA100037904061_122025-O.webp",
    "link": "https://meli.la/2k4Jgg9",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 142,
    "nome": "Filtro Refil Para Consul Modelo Cpc30,cpc31,cpb34/35/36 Cpi Branco",
    "preco": "R$56",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_833802-MLB79742091828_102024-O.webp",
    "link": "https://meli.la/1DW55VV",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 143,
    "nome": "3x Cúrcuma + Colágeno Tipo 2 - 360 Cápsulas De 500mg Ryco",
    "preco": "R$72,50",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_779435-MLA106055956750_022026-O.webp",
    "link": "https://meli.la/2i9Ggac",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 144,
    "nome": "Licença Chave Windws 11 Pro Ou Home - Original Digital 2026",
    "preco": "R$59",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_688367-MLB116864692973_082026-O.webp",
    "link": "https://meli.la/1WQWRQD",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 145,
    "nome": "Tapete Higiênico Premium Cachorro 60x60 Bamboo.dry Nekko 4 Pacotes 120 Tapetes",
    "preco": "R$158,65",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_850766-MLB113252608841_062026-O.webp",
    "link": "https://meli.la/2zmxYPQ",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 146,
    "nome": "Protetor De Colchão Queen Impermeável Comfort Malha Temima",
    "preco": "R$104,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_965143-MLA116399621823_082026-O.webp",
    "link": "https://meli.la/211r4MC",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 147,
    "nome": "Par De Alianças Feitas De Moedas Antigas Banhadas A Ouro 18k",
    "preco": "R$122,55",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_603078-MLB54971482075_042023-O.webp",
    "link": "https://meli.la/2HLHYif",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 148,
    "nome": "Kit 3 Neuro+ 60 Capsulas Nootropico Energético Foco Cafeina Taurina Magnesio Triptofano Taurina B12 L-Tirosina B3 B9 Memoria Energia Triptofano Vitaminas D Coenzima Q10 Ellym Nutrition",
    "preco": "R$72,67",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_639420-MLA112384595645_052026-O.webp",
    "link": "https://meli.la/1YMHYTv",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 149,
    "nome": "Sapateira De Porta, Organizadora Hall De Entrada. Decorativa Preto",
    "preco": "R$88,03",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_663880-MLB99741814525_112025-O.webp",
    "link": "https://meli.la/1cQBfBL",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 150,
    "nome": "Pasta Executiva Masculina Transversal Bolsa De Mão Reforçada Preto",
    "preco": "R$191,08",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_754423-MLB90701325443_082025-O.webp",
    "link": "https://meli.la/1weh6YH",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 151,
    "nome": "Kit 2 Regatas Dry Fit Masculina Academia Treino Basquete",
    "preco": "R$117,64",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_714419-MLB108277507697_032026-O.webp",
    "link": "https://meli.la/1dDNeM4",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 152,
    "nome": "Ventilador de Teto FANSVENTO 36\" com Luz LED e Controle Remoto, Motor DC Silencioso para Quarto e Sala",
    "preco": "R$347,75",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_724016-MLA99931962035_112025-O.webp",
    "link": "https://meli.la/2nnmc11",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 153,
    "nome": "Refil Para Pneu Remendo Macarrão Caixa-60 Pçs - Bremen",
    "preco": "R$32,98",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_999387-MLB53474106687_012023-O.webp",
    "link": "https://meli.la/28TGAk1",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 154,
    "nome": "Capa Capinha Silicone Com Alça Cordão P Pescoço Para iPhone",
    "preco": "R$28,81",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_863064-MLB82895991520_032025-O.webp",
    "link": "https://meli.la/2XtvLbG",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 155,
    "nome": "Pantufa Feminina Ortopédica Atoalhada Antiderrapante Puff",
    "preco": "R$106,40",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_704735-MLB92798286764_092025-O.webp",
    "link": "https://meli.la/1HXNXKR",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 156,
    "nome": "Kit 2 Pote De Vidro Retangular Hermético Essence - 1500ml Transparente",
    "preco": "R$65,25",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_823754-MLB112987691840_072026-O.webp",
    "link": "https://meli.la/2nY4wzC",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 157,
    "nome": "Suporte Para Extintor Bicromatizado - Solo",
    "preco": "R$35,50",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_976713-MLB117187206200_102026-O.webp",
    "link": "https://meli.la/2YQkSiJ",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 158,
    "nome": "Aliança Prata 925 Anatômica 2mm  Fina Namoro Compromisso",
    "preco": "R$21,57",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_998046-MLB111518995850_062026-O.webp",
    "link": "https://meli.la/2QocDdt",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 159,
    "nome": "Interruptor 1 Tecla Paralelo Com Placa 4x2 Liz Tramontina",
    "preco": "R$19,71",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_913299-MLB105361635749_012026-O.webp",
    "link": "https://meli.la/2FY1EH9",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 160,
    "nome": "Água Destilada Galão De 5 Litros P/ Autoclave Cpap Soft",
    "preco": "R$23,68",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_790080-MLA119096308951_102026-O.webp",
    "link": "https://meli.la/2qGRvFC",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 161,
    "nome": "3 Barkkies Chiken Soft Bites Cachorro Adestramento 100g",
    "preco": "R$78,99",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_933728-MLB95641239650_102025-O.webp",
    "link": "https://meli.la/2WRf8ny",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 162,
    "nome": "Kit 2 Jaquetas Corta Vento Impermeável Liso Unissex",
    "preco": "R$110,59",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_669482-MLB83135779251_032025-O.webp",
    "link": "https://meli.la/2zP7TtN",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 163,
    "nome": "Tinta Acrílica Suvinil Premium Para Piso 3,6l Cores Basicas Cinza Fosco",
    "preco": "R$122,76",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_815099-MLB117910280351_092026-O.webp",
    "link": "https://meli.la/1NE9rXV",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 164,
    "nome": "Capa Capinha Proteção Para Samsung Magsafe Com Anti Impacto",
    "preco": "R$26,89",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_954834-MLB111830096669_052026-O.webp",
    "link": "https://meli.la/24jshry",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 165,
    "nome": "Headset Com Fio Hxz-b39 Fone De Ouvido Headset Gamer Preto",
    "preco": "Confira no site",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_609761-MLA115228509770_082026-O.webp",
    "link": "https://meli.la/1iJcu6q",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 166,
    "nome": "Petisco Natural Cachorro Filé De Frango Macio 100 Gramas",
    "preco": "R$27,26",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_949458-MLA99832741077_112025-O.webp",
    "link": "https://meli.la/33qYXNC",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 167,
    "nome": "20 Blocos De Comanda C/ 100 Folhas Para Lanchonete, Barzinho",
    "preco": "R$48,99",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_650459-MLB73850568462_012024-O.webp",
    "link": "https://meli.la/2fedc5N",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 168,
    "nome": "Capa Para Tv Led Lcd 32/33' Polegadas Corino Impermeável",
    "preco": "R$32,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_862452-MLB88764096564_082025-O.webp",
    "link": "https://meli.la/2UexjpB",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 169,
    "nome": "Capa Capinha Anti Shock Para Samsung + Película Cerâmica 3d Transparente E Película A54",
    "preco": "R$19,30",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_799799-MLB112764302832_062026-O.webp",
    "link": "https://meli.la/2sgnjc3",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 170,
    "nome": "Sabão Líquido Querosene D’Casa 1 Litro para Limpeza Pesada e Desengordurante",
    "preco": "R$22,76",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_734954-MLA114599875325_072026-O.webp",
    "link": "https://meli.la/1234xSq",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 171,
    "nome": "Sementes De Tomate Híbrido Pepita Cereja Topseed Garden 30mg",
    "preco": "R$21,90",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_908905-MLB107905845981_032026-O.webp",
    "link": "https://meli.la/2WFVuAt",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 172,
    "nome": "Capa Protetora Corino Tv Led Lcd 42' 43' Polegadas Parede Preto",
    "preco": "R$39,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_621087-MLB50189543684_062022-O.webp",
    "link": "https://meli.la/2WV4K79",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 173,
    "nome": "Zcco Meias De Neoprene 3mm Térmico Beach Tennis Areia Praia",
    "preco": "R$59,49",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_791644-MLB111434568347_052026-O.webp",
    "link": "https://meli.la/2h9gANE",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 174,
    "nome": "Conjunto Calça Elastico Regata Feminino Alfaiataria Verão",
    "preco": "R$57,15",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_655440-MLB93833135821_092025-O.webp",
    "link": "https://meli.la/1bR9RaN",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 175,
    "nome": "Kit 5 Esponja De Lixa Grãos Variados Para Lixamento 120",
    "preco": "R$30,55",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_691899-MLB114914244941_072026-O.webp",
    "link": "https://meli.la/1CGKe4g",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 176,
    "nome": "Suporte Para Extintor (parede) - 5 Unidades",
    "preco": "R$28,90",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_921851-MLB49293053700_032022-O.webp",
    "link": "https://meli.la/2juPHLR",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 177,
    "nome": "Capa Capinha Proteção Premium + Película 3d Para Samsung Preto A14",
    "preco": "R$26,09",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_765737-MLB113959497299_062026-O.webp",
    "link": "https://meli.la/2ztikLf",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 178,
    "nome": "Kit 2 Pelicula Aplicador Privacidade 3d Premium Para iPhone iPhone 16 Pro Max",
    "preco": "R$49,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_697634-MLB112938963617_062026-O.webp",
    "link": "https://meli.la/2PuZwGg",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 179,
    "nome": "Kit 2 Fronhas Bebê 30x40 cm 100% Algodão Malha Lisa Envelope Berço Americano Antialérgica Respirável Macia Branca Jogo 2 Peças Capa para Travesseiro Infantil Respirável Lavável - Renova Enxovais",
    "preco": "R$23,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_917817-MLA110752967517_042026-O.webp",
    "link": "https://meli.la/2WcAFug",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 180,
    "nome": "2x Película Cerâmica Fosca Privacidade Anti Spy Para Samsung A15",
    "preco": "R$22,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_989574-MLB109227581112_042026-O.webp",
    "link": "https://meli.la/1GsDuoy",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 181,
    "nome": "4 Tintas Para Epson L3250 L3150 L3210 L3110 L5190 L5290 T544 Diversas",
    "preco": "R$39,96",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_653281-MLB112196372455_052026-O.webp",
    "link": "https://meli.la/2z8vwJ4",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 182,
    "nome": "Kit Carimbos Para Doces Corações",
    "preco": "R$21,62",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_672438-MLB106534911714_022026-O.webp",
    "link": "https://meli.la/2VjJYqF",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 183,
    "nome": "Fita De Enxertia Para Rosa Do Deserto 5cm 120m - 1000 Planta",
    "preco": "R$22,11",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676126-MLB98753652850_112025-O.webp",
    "link": "https://meli.la/23bd7oi",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 184,
    "nome": "Body Splash Desodorante Giovanna Baby Lilac 260ml",
    "preco": "R$28,62",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_798044-MLA113482075879_062026-O.webp",
    "link": "https://meli.la/2m66yTX",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 185,
    "nome": "Mousepad Bullpad 20x20cm Cores Com Fundo Emborrachado Cor Café Desenho impresso Courino",
    "preco": "R$19,30",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_729533-MLA100104761047_122025-O.webp",
    "link": "https://meli.la/1YBUNsT",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 186,
    "nome": "Espumas Fone Compatível Jbl Tune600 T450 T450bt T500bt T500 Azul",
    "preco": "R$31,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_771593-MLB96068933342_102025-O.webp",
    "link": "https://meli.la/1YXdeNP",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 187,
    "nome": "Torneira para Cozinha Cromado Pia Doméstica Água Fria Durável Brilhante Pode Girar",
    "preco": "R$129",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_614580-MLA113794577849_062026-O.webp",
    "link": "https://meli.la/2sXyJZG",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 188,
    "nome": "Kit Suporte Pasta E Escova De Dente E Gilete Banheiro Preto",
    "preco": "R$23",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894111-MLB110284222667_042026-O.webp",
    "link": "https://meli.la/2yFMqoX",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 189,
    "nome": "Balanca Portatil Digital Mala Pescaria Bolsa 50kg Preto Preto",
    "preco": "R$21,28",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_689553-MLB118056196650_102026-O.webp",
    "link": "https://meli.la/2U4NCyc",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 190,
    "nome": "Sementes De Couve Manteiga Topseed Garden 10g Cultivo Horta",
    "preco": "R$21,90",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_974207-MLB84038810475_042025-O.webp",
    "link": "https://meli.la/2hBWh9W",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 191,
    "nome": "Espumas Para Fone Jbl Tune 700bt 710 720 750btnc 760nc 770nc",
    "preco": "R$78,77",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_772918-MLB90346296370_082025-O.webp",
    "link": "https://meli.la/1BoFUkw",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 192,
    "nome": "Películas Lente Câmera Kit Para iPhone 17 Pro E 17 Pro Max Prateado",
    "preco": "R$18,99",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_941892-MLA113032985858_072026-O.webp",
    "link": "https://meli.la/2R5zV1j",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 193,
    "nome": "Kit 30 Tatames 50x50 10mm Preto Economico Preto Não Informado",
    "preco": "R$237,40",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_979661-MLB71494680296_092023-O.webp",
    "link": "https://meli.la/27e6PT7",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 194,
    "nome": "Esmalte Acetinado Base D´água Branco 3,6l Suvinil Branco Acetinado",
    "preco": "R$187,55",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_629176-MLB95369122123_102025-O.webp",
    "link": "https://meli.la/2FCkoSe",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 195,
    "nome": "Conjunto Feminino Fitness Blackout Top E Legging - Arm",
    "preco": "R$105",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_966992-MLB91812121640_092025-O.webp",
    "link": "https://meli.la/2uQT2zQ",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 196,
    "nome": "Maca Peruana Premium Revitalize 500mg",
    "preco": "R$25,50",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_600198-MLA114179012765_072026-O.webp",
    "link": "https://meli.la/1JsL5CA",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 197,
    "nome": "Suporte De Painel Veicular Starlink Mini Ventosas Antimulta Branco",
    "preco": "R$85,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_600735-MLB116955786396_092026-O.webp",
    "link": "https://meli.la/1aG1FoA",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 198,
    "nome": "Etiqueta P/ Crochê Tag Personalizado Acrílico Espelhado 50un",
    "preco": "R$50,04",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_630260-MLB105502701072_012026-O.webp",
    "link": "https://meli.la/1HzwC8F",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 199,
    "nome": "Aplicador Pistola Silicone Pu Profissional 600ml - Pro",
    "preco": "R$65",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_779398-MLB101679311485_122025-O.webp",
    "link": "https://meli.la/1oECY4C",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 200,
    "nome": "Fone de Ouvido Gamer Mtetubl HXZ-B39 Over-ear Bege com Bluetooth e Microfone",
    "preco": "R$99,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_680159-MLA109859262026_042026-O.webp",
    "link": "https://meli.la/19Utxix",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 201,
    "nome": "Promoção Crachá Broche Escovado Personalizado C/ Imã Doutor",
    "preco": "R$21,63",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807614-MLB116725225741_082026-O.webp",
    "link": "https://meli.la/1ASjMYm",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 202,
    "nome": "Placa Qr Code Display Mesa Balcão Acrílico Pix Marmorizado",
    "preco": "R$22,90",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_971614-MLB85150371316_052025-O.webp",
    "link": "https://meli.la/2SetkBo",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 203,
    "nome": "Jornal Pet Para Cachorro 500 Unid, Sem Impressão, Reciclado,tapete Papel Reciclado Cinza, Boa Absorção Top + Brinde Cinza",
    "preco": "R$69",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_977922-MLB104791234554_012026-O.webp",
    "link": "https://meli.la/2iwdgEP",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 204,
    "nome": "100 Aromatizantes Cheirinhos 6,5x6,5cm + Corte A Laser Branco",
    "preco": "R$116,11",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_626873-MLB92513891862_092025-O.webp",
    "link": "https://meli.la/1BXqWph",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 205,
    "nome": "Kit 25 Tatames Eva Preto Linha Econômica 50x50x 1cm",
    "preco": "R$199",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_681197-MLU74543665815_022024-O.webp",
    "link": "https://meli.la/1NcxXEU",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 206,
    "nome": "Buquê De 14 Tulipas Brancas Artificiais Premium Amarelo",
    "preco": "R$61",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_752663-MLB113942128571_062026-O.webp",
    "link": "https://meli.la/2B77Tch",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 207,
    "nome": "Kit 10 Calcinhas Fio Duplo Com Renda Regulagem Na Lateral Sortidas Renda G 42-44",
    "preco": "R$53,34",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_943468-MLB112509277162_062026-O.webp",
    "link": "https://meli.la/1gQq82B",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 208,
    "nome": "Tênis Feminino Academia Casual Confortável Mega Promoção Branco 34,0 Br",
    "preco": "R$48,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_853552-MLB111703531993_052026-O.webp",
    "link": "https://meli.la/1Ry1Wns",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 209,
    "nome": "Maca Peruana Negra + Boro 500mg 100% Pura 120 Cápsulas Sem Sabor",
    "preco": "R$26,24",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_840083-MLB110141268775_042026-O.webp",
    "link": "https://meli.la/2Quk755",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 210,
    "nome": "Capa Capinha Para iPhone Anti Impacto Com Proteção Câmera",
    "preco": "R$24,01",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_862443-MLB96100162232_102025-O.webp",
    "link": "https://meli.la/2oK4Gtd",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 211,
    "nome": "Kit 20 Pano De Prato Premium Estampado Extra Grande 83x43cm Branco Estampas Sortidas",
    "preco": "R$98,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_841364-MLB109514581892_042026-O.webp",
    "link": "https://meli.la/18ocE3N",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 212,
    "nome": "Bebê Reborn Realista Fio A Fio 100% Silicone Banho Manuzinha",
    "preco": "R$281,35",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_698389-MLB116386409070_092026-O.webp",
    "link": "https://meli.la/29MBrK9",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 213,
    "nome": "Vaso Decorativo Transparente Para Plantas Flores Arranjos Branco",
    "preco": "R$29,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_888571-MLB92392942980_092025-O.webp",
    "link": "https://meli.la/1WbcTmV",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 214,
    "nome": "Compressor De Ar Portátil 2 Bateria 48v Digital 120 Psi Azul 127/220v 50hz/60hz",
    "preco": "R$265,35",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_671325-MLB105887588657_012026-O.webp",
    "link": "https://meli.la/24JQJwm",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 215,
    "nome": "Viseira Sol Praia Verão Esporte Vôlei Caminhada Unissex Preto Regulagem",
    "preco": "R$24,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787401-MLB105926442795_012026-O.webp",
    "link": "https://meli.la/24wzQ2G",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 216,
    "nome": "Fita Led Cob 320led/m 12w/m Liga Direto Na Rede 110v Ou 220v",
    "preco": "R$108",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_804477-MLB119222661767_102026-O.webp",
    "link": "https://meli.la/2tWPg19",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 217,
    "nome": "Kit 10 Temperos E Condimentos 100g Cada | Mix De Sabores",
    "preco": "R$32",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_938884-MLB96522973915_102025-O.webp",
    "link": "https://meli.la/1H6WnSW",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 218,
    "nome": "Mangueira Combustivel Tecalon 6mm X 4mm 10 Metros Preto",
    "preco": "R$26",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_814109-MLB118920814709_102026-O.webp",
    "link": "https://meli.la/2TFwRjX",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 219,
    "nome": "Kit 3 Palhetas Limpador Parabrisa Chuva Ford Ka 1997 A 2009",
    "preco": "R$35,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_942954-MLB117611284860_102026-O.webp",
    "link": "https://meli.la/2Cg3hq5",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 220,
    "nome": "Spot Aletado 2 Lâmpadas Preto Duplo E-27 Startec",
    "preco": "R$39,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_895747-MLA113475453563_062026-O.webp",
    "link": "https://meli.la/2Y86Srn",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 221,
    "nome": "Kit 30 Tatames - Eva Colorido (econômico) 50x50x1 Cm",
    "preco": "R$215,10",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_667185-MLA96100910611_102025-O.webp",
    "link": "https://meli.la/1Euzeuv",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 222,
    "nome": "Cabo Arame 25m Corte De Cola Retirada Remover Parabrisa Dourado",
    "preco": "R$42,63",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_759549-MLB99704923934_122025-O.webp",
    "link": "https://meli.la/2WLhETV",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 223,
    "nome": "01 Par Chinelos Pantufa Hotel Modelo 2005 Home",
    "preco": "R$38,61",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_926308-MLB117021910095_092026-O.webp",
    "link": "https://meli.la/1ukKTSD",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 224,
    "nome": "Limpador De Telas Tv Notebook Alcool Isopropilico 99,8% 2l",
    "preco": "R$66,56",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_771946-MLB114770717557_072026-O.webp",
    "link": "https://meli.la/1iSQTv1",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 225,
    "nome": "Fio Paralelo 2 X 1,5mm Com 20 Metros + Pino Macho E Femea",
    "preco": "R$55,71",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_722083-MLB92311391923_092025-O.webp",
    "link": "https://meli.la/1vxWPtd",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 226,
    "nome": "Béquer Becker De Vidro Graduado Forma Baixa Griffin 600ml",
    "preco": "R$18,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_617341-MLB113758356475_062026-O.webp",
    "link": "https://meli.la/2rnMhzU",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 227,
    "nome": "Suporte Extintor Veicular 4Kg ECR Pó ABC Tradicional Carro",
    "preco": "R$55,22",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_680999-MLA96181763535_102025-O.webp",
    "link": "https://meli.la/2B8xGby",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 228,
    "nome": "Válvula De Retenção Soldável Hidráulico 25mm Estrela Marrom",
    "preco": "R$22,44",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_944358-MLA116049961375_082026-O.webp",
    "link": "https://meli.la/1ajQRm7",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 229,
    "nome": "2 Unidades  Desengripante Tek Bond Tek Lub 150g/300ml Laranja",
    "preco": "R$24,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_933004-MLB113460053837_062026-O.webp",
    "link": "https://meli.la/15PvLFU",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 230,
    "nome": "Fone de Ouvido Open Ear Esportivo Bluetooth com Display Digital e Microfone 3tech",
    "preco": "R$59,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_966703-MLA117256141847_092026-O.webp",
    "link": "https://meli.la/2WkfWqm",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 231,
    "nome": "Sacola Plástica Branca 5kg Reforçada Atacado Várias Medidas",
    "preco": "R$135",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_750652-MLB93402660136_092025-O.webp",
    "link": "https://meli.la/1zpJucB",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 232,
    "nome": "Pochete Esportiva Antifurto Corrida Com Suporte Para Garrafas Com Saída Fone De Ouvido Reforçada Resistente Ultra Slim Fitness Pochete Cintura Para Exercícios Academia Prova D'agua Cor Preto",
    "preco": "R$20,42",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_650852-MLA113625609749_062026-O.webp",
    "link": "https://meli.la/1n7Kp7j",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 233,
    "nome": "Fone Bluetooth Ows Open Ear Sem Fio Esportivo Com Display Digital Case Carregadora Usb-c Compatível Android iPhone Ios Academia Corrida Caminhada Trabalho Chamadas Música Branco 3tech",
    "preco": "R$59,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_839371-MLA117289336735_092026-O.webp",
    "link": "https://meli.la/1967ueg",
    "cupom": "VEMDECUPOM"
  },
  {
    "id": 234,
    "nome": "Case Suporte Veícular Teto Carro Externo Starlink Mini Imã88",
    "preco": "R$317,45",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_717569-MLB109283370016_042026-O.webp",
    "link": "https://meli.la/2Fai7VL",
    "cupom": "BateuDesconto"
  },
  {
    "id": 235,
    "nome": "Vinho Chileno Tinto Concha Y Toro Reservado Cabernet Sauvignon 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_656843-MLA114959652295_072026-O.webp",
    "link": "https://meli.la/1fGLGAg",
    "cupom": "BateuDesconto"
  },
  {
    "id": 236,
    "nome": "Basike Carregador Portátil Power Bank B205 Magsafe 10000mah PD 22.5w Turbo Rápido PD Tipo C USB C Sem Fio Universal Potente Com Display Para iPhone 15/16/17 Pro Max Samsung Galaxy S24 S25 Ultra Z Fold",
    "preco": "R$168",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_778846-MLA108206570125_032026-O.webp",
    "link": "https://meli.la/1TbBHoQ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 237,
    "nome": "Kit 10 Saco Organizador Closet Edredon Cobertor C/ Ziper Rosa",
    "preco": "R$66,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_860372-MLB50406027767_062022-O.webp",
    "link": "https://meli.la/2sVyge8",
    "cupom": "BateuDesconto"
  },
  {
    "id": 238,
    "nome": "Kit 2 Pares Chinelo Masculino Reserva Confortável E Macio Ptocinza E R 41/42",
    "preco": "R$78,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_766034-MLB115458076396_082026-O.webp",
    "link": "https://meli.la/1jknFXo",
    "cupom": "BateuDesconto"
  },
  {
    "id": 239,
    "nome": "Kit 30 Ganchos Adesivos Parede Transparente Inox Não Fura Suporte Cabide Pendura Vassoura Banheiro Cozinha",
    "preco": "R$19",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_757905-MLA110930860696_052026-O.webp",
    "link": "https://meli.la/2B31AvD",
    "cupom": "BateuDesconto"
  },
  {
    "id": 240,
    "nome": "Vinho Chileno Tinto Seco Reserva Casillero del Diablo Cabernet Sauvignon 750ml",
    "preco": "R$43,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_844479-MLA99936189677_112025-O.webp",
    "link": "https://meli.la/2X3VmBx",
    "cupom": "BateuDesconto"
  },
  {
    "id": 241,
    "nome": "Kit 4 Blusas Feminina Fitness Dry Fit  Camiseta Academia",
    "preco": "R$62,92",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_920257-MLB91454160279_092025-O.webp",
    "link": "https://meli.la/1Jkwp4u",
    "cupom": "BateuDesconto"
  },
  {
    "id": 242,
    "nome": "Kit 6 Copos Vidro 420ml Borda Dourada Versalhes Água",
    "preco": "R$76,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_741357-MLA81508960071_122024-O.webp",
    "link": "https://meli.la/33WUdRN",
    "cupom": "BateuDesconto"
  },
  {
    "id": 243,
    "nome": "Nature Liver Pro (6 Potes) Sem Sabor",
    "preco": "R$686,15",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_789022-MLA105759629539_012026-O.webp",
    "link": "https://meli.la/1g2mA2q",
    "cupom": "BateuDesconto"
  },
  {
    "id": 244,
    "nome": "Kit Berço Menino 10 Peças Safari Com Mosquiteiro Americano Safari Verde Palha",
    "preco": "R$119,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_745303-MLB114655991515_072026-O.webp",
    "link": "https://meli.la/1GpXqNt",
    "cupom": "BateuDesconto"
  },
  {
    "id": 245,
    "nome": "Ventilador de Teto Led 42cm Branco Controle Remoto Bivolt Silencioso",
    "preco": "R$54,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_795885-MLA110292802254_052026-O.webp",
    "link": "https://meli.la/1tmHaJh",
    "cupom": "BateuDesconto"
  },
  {
    "id": 246,
    "nome": "Vinho Chileno Branco Concha Y Toro Reservado Sauvignon Blanc 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_907637-MLA113098728701_062026-O.webp",
    "link": "https://meli.la/2hsqumJ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 247,
    "nome": "Fone De Ouvido Compatível Para iPhone Lightning 7 Ao 14 Branco",
    "preco": "R$39,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_943983-MLB94368255359_102025-O.webp",
    "link": "https://meli.la/27n2c2J",
    "cupom": "BateuDesconto"
  },
  {
    "id": 248,
    "nome": "Suporte De Parede Para Tv Fixa 15 A 95 Amvox Ast 65f Vesa",
    "preco": "R$37,95",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_828158-MLA95372880928_102025-O.webp",
    "link": "https://meli.la/1TR6hkU",
    "cupom": "BateuDesconto"
  },
  {
    "id": 249,
    "nome": "Al-cool Isopropilico 99,8% Limpa Telas Tv Pc Celular 1l",
    "preco": "R$37,08",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_709348-MLB113283617632_072026-O.webp",
    "link": "https://meli.la/1EPpdv9",
    "cupom": "BateuDesconto"
  },
  {
    "id": 250,
    "nome": "Kit 10 Luminária Espeto Jardim Super Led 7w Ip65 Prova Dágua 127/220v Preto /refletor Espeto Jardim Super Led Verde 7w Prova Dágua Verde Luz De Gramado E Condomínio",
    "preco": "R$94",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_659669-MLB112359478598_062026-O.webp",
    "link": "https://meli.la/1uYmJ4b",
    "cupom": "BateuDesconto"
  },
  {
    "id": 251,
    "nome": "120 Kit Lápis De Cor,desenho Artístico Com Caixa De Lapis 48 Lápis",
    "preco": "R$89,99",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_713762-MLA115775326362_092026-O.webp",
    "link": "https://meli.la/2NNSAvK",
    "cupom": "BateuDesconto"
  },
  {
    "id": 252,
    "nome": "Vinho Argentino Tinto Seco Reserva Trivento Malbec 750 ml",
    "preco": "R$44,62",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_869189-MLA113927430379_062026-O.webp",
    "link": "https://meli.la/1VoEssG",
    "cupom": "BateuDesconto"
  },
  {
    "id": 253,
    "nome": "Kit 4 X 500ml Compatível Com Canon Mega Tank G3110 Black/cyan/magenta/amarela",
    "preco": "R$54,15",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838444-MLB89539142921_082025-O.webp",
    "link": "https://meli.la/1G2Kk6L",
    "cupom": "BateuDesconto"
  },
  {
    "id": 254,
    "nome": "Suporte Reforço De Aço Placa Mercosul Moto + Lacre Antifurto",
    "preco": "R$24",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675412-MLB105024408094_012026-O.webp",
    "link": "https://meli.la/2tSGbaN",
    "cupom": "BateuDesconto"
  },
  {
    "id": 255,
    "nome": "Kit 4 Bermudas Masculinas Short Praia Tactel Academia Treino Preto/verde/cinza/azul-marinho Liso G",
    "preco": "R$73,96",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_844067-MLB110261554814_052026-O.webp",
    "link": "https://meli.la/1Jaz1mt",
    "cupom": "BateuDesconto"
  },
  {
    "id": 256,
    "nome": "Porta Passaporte Rfid Anti Roubo Dados Viagem Internacional",
    "preco": "R$60,12",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_658558-MLB86297286125_062025-O.webp",
    "link": "https://meli.la/1UeJE4p",
    "cupom": "BateuDesconto"
  },
  {
    "id": 257,
    "nome": "Vinho Chileno Tinto Seco Reserva Casillero del Diablo Cabernet Sauvignon 375 ml",
    "preco": "R$22,80",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_602596-MLA113704486344_072026-O.webp",
    "link": "https://meli.la/21SwhwU",
    "cupom": "BateuDesconto"
  },
  {
    "id": 258,
    "nome": "Fone De Ouvido Sem Fio Bluetooth 5.3 Tws Intra-auricular 50h Fone De Ouvido Bluetooth Sem Fio Tws Bateria De Longa Duração Cor Preto, Inova",
    "preco": "R$55,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_744956-MLA112647599860_062026-O.webp",
    "link": "https://meli.la/2Rovaam",
    "cupom": "BateuDesconto"
  },
  {
    "id": 259,
    "nome": "Kit 48v Chave Impacto Bateria + Esmerilhadeira Lixadeira",
    "preco": "R$419,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_740834-MLB105563130691_012026-O.webp",
    "link": "https://meli.la/2U3WqtR",
    "cupom": "BateuDesconto"
  },
  {
    "id": 260,
    "nome": "Creme Hidratante Dermatite Psoríase Coceiras 60g Natural",
    "preco": "R$29,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_745717-MLB114187632751_072026-O.webp",
    "link": "https://meli.la/2o2ohDR",
    "cupom": "BateuDesconto"
  },
  {
    "id": 261,
    "nome": "Herbicida Seletivo Elimina Tiriricas E Folhas Largas Em Gramados Kapina Plus - 60ml",
    "preco": "R$92,05",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_915260-MLA116827825710_092026-O.webp",
    "link": "https://meli.la/2333xn6",
    "cupom": "BateuDesconto"
  },
  {
    "id": 262,
    "nome": "Kit 3 Saco Organizador Capa Protetora G Cobertor Edredom Roupas Branco 60x45x22",
    "preco": "R$113,69",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_780069-MLA107894048442_032026-O.webp",
    "link": "https://meli.la/2YMMn9v",
    "cupom": "BateuDesconto"
  },
  {
    "id": 263,
    "nome": "Vinho Chileno Tinto Concha Y Toro Reservado Merlot 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_912281-MLA113704402634_072026-O.webp",
    "link": "https://meli.la/1cyLqe6",
    "cupom": "BateuDesconto"
  },
  {
    "id": 264,
    "nome": "Fone De Ouvido Sem Fio Bluetooth Tws Com Cancelamento De Ruido, Bluetooth 6.0 Bateria De 15 Horas De Duração, 100h Em Standby, Fones Com Conexão Rápid, Para Academia, Corrida, Treinos Pro, Inova",
    "preco": "R$59",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_792365-MLA101671519747_122025-O.webp",
    "link": "https://meli.la/2KNmq2u",
    "cupom": "BateuDesconto"
  },
  {
    "id": 265,
    "nome": "Kit 2 Tapetes Felpudos Banheiro Antiderrapantes 60x40cm Cinza Geométrico",
    "preco": "R$35,68",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_699085-MLB111333990596_052026-O.webp",
    "link": "https://meli.la/1NSJPuw",
    "cupom": "BateuDesconto"
  },
  {
    "id": 266,
    "nome": "Kit 2 Terminal Direção Ford Fiesta Ecosport Ka 2002 A 2014",
    "preco": "R$76,50",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_684773-MLB90928355501_082025-O.webp",
    "link": "https://meli.la/2nPcgPA",
    "cupom": "BateuDesconto"
  },
  {
    "id": 267,
    "nome": "Vinho Chileno Branco Seco Reserva Casillero Del Diablo Chardonnay 750ml",
    "preco": "R$43,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_623124-MLA112425393988_062026-O.webp",
    "link": "https://meli.la/1yttJrY",
    "cupom": "BateuDesconto"
  },
  {
    "id": 268,
    "nome": "Tapete Magico Desenho Pintura Infantil Base Água Doodle A833",
    "preco": "R$48,99",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953945-MLA105574645585_012026-O.webp",
    "link": "https://meli.la/1jiBeFn",
    "cupom": "BateuDesconto"
  },
  {
    "id": 269,
    "nome": "Tabua De Carne Personalizada",
    "preco": "R$116,33",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_672649-MLB118518573709_092026-O.webp",
    "link": "https://meli.la/1hACLx3",
    "cupom": "BateuDesconto"
  },
  {
    "id": 270,
    "nome": "Slide Feminino Com Palmilha Macia E Detalhes Elegante Casual",
    "preco": "R$49,66",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819208-MLB108023349357_032026-O.webp",
    "link": "https://meli.la/1b6xhrK",
    "cupom": "BateuDesconto"
  },
  {
    "id": 271,
    "nome": "Kit Sabre Saibro Barra Facão Para Motosserra Husqvarna 120 125 236 240 + 2 Correntes 28 Dentes 16\" Polegadas Tilimaq Profissional",
    "preco": "R$105",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_827971-MLA118056883491_092026-O.webp",
    "link": "https://meli.la/2RxXKwJ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 272,
    "nome": "Válvula Click Dourada Aço Inox Cuba Pia Banheiro Lavabo Ralo",
    "preco": "R$44",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_885925-MLB89890271635_082025-O.webp",
    "link": "https://meli.la/29RWbcq",
    "cupom": "BateuDesconto"
  },
  {
    "id": 273,
    "nome": "Vinho Chileno Branco Frisante Concha Y Toro Spritzer Moscato 750ml",
    "preco": "R$24,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_930484-MLA111959285213_052026-O.webp",
    "link": "https://meli.la/2vHtXgQ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 274,
    "nome": "Kit 7 Pincel E Escova Antiestático Esd P/ Limpeza De Placas",
    "preco": "R$37",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_986999-MLB72182275285_102023-O.webp",
    "link": "https://meli.la/2Fpr8d1",
    "cupom": "BateuDesconto"
  },
  {
    "id": 275,
    "nome": "Descascador De Alho Eletrico Descasca Frutas Pequenas Azul",
    "preco": "R$59,49",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_857497-MLA110244031841_042026-O.webp",
    "link": "https://meli.la/15zV5Ns",
    "cupom": "BateuDesconto"
  },
  {
    "id": 276,
    "nome": "Vara Telescopica Gomo Longo Traira 3,00 M (3003) Jaú Pesca",
    "preco": "R$43,64",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_682911-MLA99610024086_122025-O.webp",
    "link": "https://meli.la/1XkK2C3",
    "cupom": "BateuDesconto"
  },
  {
    "id": 277,
    "nome": "Vinho Chileno Tinto Concha Y Toro Reservado Carménère 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_820085-MLA115086066187_072026-O.webp",
    "link": "https://meli.la/2H2Fqfu",
    "cupom": "BateuDesconto"
  },
  {
    "id": 278,
    "nome": "Escova Prancha Para Alisar E Modelar Barba E Cabelo Bivolt Cerâmica Pente Anti Frizz Portátil Masculina Branca Branco Sngames",
    "preco": "R$22,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_871320-MLA105711262758_012026-O.webp",
    "link": "https://meli.la/1QQuc6S",
    "cupom": "BateuDesconto"
  },
  {
    "id": 279,
    "nome": "Creme Hidratante Para Pele Com Dermatite Psoríase 60g Natural",
    "preco": "R$29,49",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_673280-MLB114301224883_072026-O.webp",
    "link": "https://meli.la/1Sntf5x",
    "cupom": "BateuDesconto"
  },
  {
    "id": 280,
    "nome": "Power Bank 20000mah Portátil Rápida 22.5w Com Cabo Embutido",
    "preco": "R$128,52",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_846074-MLB97743195756_112025-O.webp",
    "link": "https://meli.la/14FhjKL",
    "cupom": "BateuDesconto"
  },
  {
    "id": 281,
    "nome": "Calça Jeans Masculina Country Lycra Promoção",
    "preco": "R$119,37",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_731689-MLB88534145944_072025-O.webp",
    "link": "https://meli.la/2W35Vj4",
    "cupom": "BateuDesconto"
  },
  {
    "id": 282,
    "nome": "Vinho Chileno Rosé Frisante Concha Y Toro Spritzer 750ml",
    "preco": "R$23,99",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_774476-MLA111955113757_052026-O.webp",
    "link": "https://meli.la/1Kkz2sF",
    "cupom": "BateuDesconto"
  },
  {
    "id": 283,
    "nome": "Creme Facial Retinal Shot 0.1% Korean Anti Idade Rugas Verde",
    "preco": "R$97,07",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_661959-MLB116751747588_092026-O.webp",
    "link": "https://meli.la/2Mfk1GF",
    "cupom": "BateuDesconto"
  },
  {
    "id": 284,
    "nome": "Óleo Vegetal Jojoba Ferarte 100ml - Cuidado Corporal/capilar Neutra",
    "preco": "R$39,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_788261-MLA108375221471_032026-O.webp",
    "link": "https://meli.la/2LKdPUZ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 285,
    "nome": "Jaleco Feminino Acinturado Oxford Manga Curta Gola Padre",
    "preco": "R$48,96",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_921020-MLB79195745197_092024-O.webp",
    "link": "https://meli.la/2TUpg6J",
    "cupom": "BateuDesconto"
  },
  {
    "id": 286,
    "nome": "Válvula Ralo Lavatório Cuba 7/8 Metal Preta Inox Escoamento Cor Preto",
    "preco": "R$19,64",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_933309-MLA103599561602_012026-O.webp",
    "link": "https://meli.la/2qsYCoK",
    "cupom": "BateuDesconto"
  },
  {
    "id": 287,
    "nome": "Vinho Chileno Branco Seco Reserva Casillero del Diablo Sauvignon Blanc 750 ml",
    "preco": "R$43,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_784761-MLA113399355583_062026-O.webp",
    "link": "https://meli.la/1fv4EDf",
    "cupom": "BateuDesconto"
  },
  {
    "id": 288,
    "nome": "Kit 3 Quadros Decorativos 60x40cm Borboletas Delicadas Rosa-claro Rosa",
    "preco": "R$34",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_947140-MLB95159306946_102025-O.webp",
    "link": "https://meli.la/13EWGzr",
    "cupom": "BateuDesconto"
  },
  {
    "id": 289,
    "nome": "Balm Fox For Man Para Barba 6 Un Atacado Frete Grátis Em 12x",
    "preco": "R$132",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_629297-MLB74627650938_022024-O.webp",
    "link": "https://meli.la/19ArXBd",
    "cupom": "BateuDesconto"
  },
  {
    "id": 290,
    "nome": "Par Terminal Direção Sandero Logan 2007 Á 2020",
    "preco": "R$105,49",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628626-MLB90928400645_082025-O.webp",
    "link": "https://meli.la/1kRJumt",
    "cupom": "BateuDesconto"
  },
  {
    "id": 291,
    "nome": "Cinto Metal Elástico Modelo Hl-23-folha Moda Feminina Full",
    "preco": "R$18,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_902891-MLB80534633867_112024-O.webp",
    "link": "https://meli.la/1GMPj4y",
    "cupom": "BateuDesconto"
  },
  {
    "id": 292,
    "nome": "Par Bieleta Dianteira Estabilizadora 206, C3 E Aircross",
    "preco": "R$49,76",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_852095-MLB117306503938_102026-O.webp",
    "link": "https://meli.la/2wZzAU2",
    "cupom": "BateuDesconto"
  },
  {
    "id": 293,
    "nome": "Vinho Chileno Tinto Concha Y Toro Reservado Malbec 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_715169-MLA113099015935_062026-O.webp",
    "link": "https://meli.la/2sJJopA",
    "cupom": "BateuDesconto"
  },
  {
    "id": 294,
    "nome": "Oculos Polarizado Masculino De Sol Esportivo Pesca Uv400 Top Preto",
    "preco": "R$42,68",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_945947-MLB108562790553_032026-O.webp",
    "link": "https://meli.la/1sCC5hw",
    "cupom": "BateuDesconto"
  },
  {
    "id": 295,
    "nome": "6 Espetos Para Churrasco Churrasqueira 50cm + Grelha Inox",
    "preco": "R$112,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_673803-MLB84516836294_052025-O.webp",
    "link": "https://meli.la/1nqVRpn",
    "cupom": "BateuDesconto"
  },
  {
    "id": 296,
    "nome": "Plug Tomada Conector Soquete 4 Vias Fio 4mm Com 5 Unidades",
    "preco": "R$47,12",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_850915-MLA99855566207_112025-O.webp",
    "link": "https://meli.la/1VDwPDq",
    "cupom": "BateuDesconto"
  },
  {
    "id": 297,
    "nome": "Camisa Camiseta Pesca Padroeira Nossa Senhora Ref 04 - Uv50",
    "preco": "R$98,80",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_604331-MLB111566223136_062026-O.webp",
    "link": "https://meli.la/1cL4RoE",
    "cupom": "BateuDesconto"
  },
  {
    "id": 298,
    "nome": "Vinho Chileno Branco Concha Y Toro Reservado Chardonnay 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676795-MLA114453477461_072026-O.webp",
    "link": "https://meli.la/2qAwifh",
    "cupom": "BateuDesconto"
  },
  {
    "id": 299,
    "nome": "Óleo Neem Puro 100ml Natural Formigas PuLGão Cochonilhas",
    "preco": "R$31",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953491-MLA110011318310_042026-O.webp",
    "link": "https://meli.la/1En3eJm",
    "cupom": "BateuDesconto"
  },
  {
    "id": 300,
    "nome": "Conector De Extensão Portátil 3 Universal Plug Carregador Tomada De 4 Tomadas",
    "preco": "R$42,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_914142-MLA110099095188_042026-O.webp",
    "link": "https://meli.la/2bFNFXL",
    "cupom": "BateuDesconto"
  },
  {
    "id": 301,
    "nome": "Arejador Embutir Cache Tj 18,5x1mm 00402500 Docol Semelhante Cinza Polido",
    "preco": "R$28,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_871774-MLB112458280485_052026-O.webp",
    "link": "https://meli.la/1SCsXJu",
    "cupom": "BateuDesconto"
  },
  {
    "id": 302,
    "nome": "Placa Splash Promoção 18,5x14,5cm 100 Un.",
    "preco": "R$39,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_640292-MLB43226842904_082020-O.webp",
    "link": "https://meli.la/1kYZss9",
    "cupom": "BateuDesconto"
  },
  {
    "id": 303,
    "nome": "Vinho Chileno Tinto Doce Concha Y Toro Reservado Sweet Red 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_638666-MLA113447185838_072026-O.webp",
    "link": "https://meli.la/2haU2pN",
    "cupom": "BateuDesconto"
  },
  {
    "id": 304,
    "nome": "Rosa Mosqueta Rubiginosa 100% Puro Ação Nutritiva Rosas",
    "preco": "R$26,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_844231-MLA117957187747_092026-O.webp",
    "link": "https://meli.la/233yJDH",
    "cupom": "BateuDesconto"
  },
  {
    "id": 305,
    "nome": "Aliança Avulsa Ouro 18k Anatômica Tungstênio 4mm Ouro 18k 16",
    "preco": "R$34,51",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_660485-MLB110426659125_042026-O.webp",
    "link": "https://meli.la/1JZWobc",
    "cupom": "BateuDesconto"
  },
  {
    "id": 306,
    "nome": "Trava Cinto De Segurança Cadeirinha Bebe Conforto Infantil",
    "preco": "R$31,80",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819198-MLB95387911150_102025-O.webp",
    "link": "https://meli.la/1ZEtgoQ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 307,
    "nome": "Kit 10 Cake Board 23cm Tabuleiro Bolo Em Mdf 3mm Redondo Branco",
    "preco": "R$25,99",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819278-MLB81649088492_012025-O.webp",
    "link": "https://meli.la/2Cmv38T",
    "cupom": "BateuDesconto"
  },
  {
    "id": 308,
    "nome": "Vinho Chileno Tinto Suave Casillero Del Diablo Carnaval Fantastic 750ml",
    "preco": "R$36,99",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_831936-MLA110626615669_042026-O.webp",
    "link": "https://meli.la/2dDw39X",
    "cupom": "BateuDesconto"
  },
  {
    "id": 309,
    "nome": "Escova Silicone Esfoliante Limpeza Corpo Costas Banho Roxo",
    "preco": "R$21,33",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_998413-MLB113328812796_072026-O.webp",
    "link": "https://meli.la/12A2gut",
    "cupom": "BateuDesconto"
  },
  {
    "id": 310,
    "nome": "Corda de Pular Ajustável Black Raipe com Rolamento 360º para CrossFit e Fitness",
    "preco": "R$19,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_790377-MLA115392763920_082026-O.webp",
    "link": "https://meli.la/1MzFYTB",
    "cupom": "BateuDesconto"
  },
  {
    "id": 311,
    "nome": "Kit 2 Vitamina D3 K2 Gotas Sublingual 2000 UI 120 mcg Mk7 Sabor Morango 30ml Menaquinona 7 Colecalciferol Oleo Linhaça Rápida Absorção Fortalecimento Ósseo Muscular D K Ellym Nutrition",
    "preco": "R$73,83",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_998116-MLA111828909768_062026-O.webp",
    "link": "https://meli.la/2jZ9vKg",
    "cupom": "BateuDesconto"
  },
  {
    "id": 312,
    "nome": "Óleo Vegetal De Abacate 100% Puro Vegano  100ml Neutro",
    "preco": "R$27,80",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970555-MLB92701432563_092025-O.webp",
    "link": "https://meli.la/2JeJBbE",
    "cupom": "BateuDesconto"
  },
  {
    "id": 313,
    "nome": "Vinho chileno tinto Concha y Toro Gran Reserva Cabernet Sauvignon 750ml",
    "preco": "R$56",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_872856-MLA99926493411_112025-O.webp",
    "link": "https://meli.la/1vReFQ9",
    "cupom": "BateuDesconto"
  },
  {
    "id": 314,
    "nome": "Kit Treino Black Raipe com Corda de Pular e 5 Faixas Elásticas de Resistência",
    "preco": "R$31,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_692954-MLA116784058263_082026-O.webp",
    "link": "https://meli.la/22ZgrV6",
    "cupom": "BateuDesconto"
  },
  {
    "id": 315,
    "nome": "Cabeçote Novo Vw Polo 1.6 8v Power Ea111 2003 A 2018",
    "preco": "R$200,60",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_911038-MLB105619945652_012026-O.webp",
    "link": "https://meli.la/2k1QRk3",
    "cupom": "BateuDesconto"
  },
  {
    "id": 316,
    "nome": "1000pçs Macho Isolado Fêmea De Fio Terminais 2,8/4,8/6,3mm Dourado",
    "preco": "R$45",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_657569-MLB89322619859_082025-O.webp",
    "link": "https://meli.la/1kqKkxm",
    "cupom": "BateuDesconto"
  },
  {
    "id": 317,
    "nome": "Pelucia Bonecos Bt21 Bts Fofos Kpop Anime Kawaii Super Star Cor Chimmy",
    "preco": "R$57,99",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_704959-MLA95742263280_102025-O.webp",
    "link": "https://meli.la/2od2no5",
    "cupom": "BateuDesconto"
  },
  {
    "id": 318,
    "nome": "Óleo Vegetal De Rícino 100% Puro Vegano 100ml Neutra",
    "preco": "R$27,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_632801-MLB116280939840_092026-O.webp",
    "link": "https://meli.la/1BMj6eu",
    "cupom": "BateuDesconto"
  },
  {
    "id": 319,
    "nome": "Vinho Chileno Rosé Doce Concha Y Toro Reservado Sweet 750ml",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_618841-MLA113099020391_062026-O.webp",
    "link": "https://meli.la/2MPw9dW",
    "cupom": "BateuDesconto"
  },
  {
    "id": 320,
    "nome": "Kit Martelo Unha 29mm 700g + Alicate Universal 8” em Aço para Construção Manutenção Reparos Marcenaria Oficina Uso Profissional e Doméstico",
    "preco": "R$46,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_852969-MLA116543426443_082026-O.webp",
    "link": "https://meli.la/2VirxL3",
    "cupom": "BateuDesconto"
  },
  {
    "id": 321,
    "nome": "Torneira De Parede Flexível Teraprata Cozinha Emborrachada Preto Fosco",
    "preco": "R$43,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_716855-MLB110511302918_052026-O.webp",
    "link": "https://meli.la/1dphwUc",
    "cupom": "BateuDesconto"
  },
  {
    "id": 322,
    "nome": "Filtro De Café V60 Cônico 102 Papel Branco 100 Unidades",
    "preco": "R$27,93",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_871617-MLB117881121087_092026-O.webp",
    "link": "https://meli.la/1w3bAFg",
    "cupom": "BateuDesconto"
  },
  {
    "id": 323,
    "nome": "Ralador Manual 4 Faces E Alça Aço Inox Para Legumes Queijos Frutas E Verduras Com Gourmet Cozinha,cabo Ergonômico Base Estável Es 9x6.7x19cm,cortador Fatiador Legumes Verduras Prime Prateado",
    "preco": "R$21,59",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_933941-MLA105980667897_012026-O.webp",
    "link": "https://meli.la/11GsAoX",
    "cupom": "BateuDesconto"
  },
  {
    "id": 324,
    "nome": "10 Ventosas 40mm (4cm) Pvc Silicone/redonda",
    "preco": "R$20,27",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_670285-MLB106688373670_022026-O.webp",
    "link": "https://meli.la/2Jgr1jP",
    "cupom": "BateuDesconto"
  },
  {
    "id": 325,
    "nome": "Vinho Chileno Tinto Concha Y Toro Diablo Dark Red 750ml",
    "preco": "R$64,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_927114-MLA114993689399_072026-O.webp",
    "link": "https://meli.la/2tPd92F",
    "cupom": "BateuDesconto"
  },
  {
    "id": 326,
    "nome": "Kit 30 Adesivos Snoopy À Prova D'água Garrafa Kindle",
    "preco": "R$19,90",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_665602-MLB110781832110_052026-O.webp",
    "link": "https://meli.la/2okNHrb",
    "cupom": "BateuDesconto"
  },
  {
    "id": 327,
    "nome": "Aditivo Concentrado Para Radiador Paraflu Long Life Rosa",
    "preco": "R$30,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_715223-MLA99910442745_112025-O.webp",
    "link": "https://meli.la/1AuJ3Ns",
    "cupom": "BateuDesconto"
  },
  {
    "id": 328,
    "nome": "Kit Com 20 Unid Cantoneira L 3x3 Cm Cinza P/ Móveis + Paraf",
    "preco": "R$39,49",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_972669-MLB110459293515_042026-O.webp",
    "link": "https://meli.la/16SQgxm",
    "cupom": "BateuDesconto"
  },
  {
    "id": 329,
    "nome": "Capa Case Pasta Maleta Notebook Espumada 13,3  14,1  15,6",
    "preco": "R$38,90",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858991-MLB112363724532_062026-O.webp",
    "link": "https://meli.la/2q51jbh",
    "cupom": "BateuDesconto"
  },
  {
    "id": 330,
    "nome": "Caderno De Discos Personalizado Refilável B5 Linha Premium Rosa",
    "preco": "R$36,99",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_976707-MLB106748673342_022026-O.webp",
    "link": "https://meli.la/2ByTVvP",
    "cupom": "BateuDesconto"
  },
  {
    "id": 331,
    "nome": "Vinho Chileno Tinto Meio Seco Casillero Del Diablo Carnaval Spectacular 750ml",
    "preco": "R$37",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_847844-MLA114993451825_072026-O.webp",
    "link": "https://meli.la/2Hm9LJD",
    "cupom": "BateuDesconto"
  },
  {
    "id": 332,
    "nome": "Par Manicoto Freio E Embreagem Honda Cg 125 150 Titan Fan",
    "preco": "R$31,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_745732-MLB96411064793_102025-O.webp",
    "link": "https://meli.la/1b3VARH",
    "cupom": "BateuDesconto"
  },
  {
    "id": 333,
    "nome": "Água Saborizada com gás Premium Lindoia Flavors 355ml Sabor Maracujá 6u Zero Calorias Zero Açúcar 100% Natural",
    "preco": "R$23,03",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_910596-MLA118793524839_102026-O.webp",
    "link": "https://meli.la/1VtXsge",
    "cupom": "BateuDesconto"
  },
  {
    "id": 334,
    "nome": "Kit 2pçs Porta Copos Carro Suporte Silicone Antiderrapante Preto",
    "preco": "R$26,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_829592-MLB116871726870_092026-O.webp",
    "link": "https://meli.la/2vQ4RBL",
    "cupom": "BateuDesconto"
  },
  {
    "id": 335,
    "nome": "2026 Câmera Lâmpada Inteligente Seguranca Wifi Interna/Externa com Luz LED, PTZ 360° Full HD 1080p, APP ICSEE Soquete E27 com Visão Noturna Áudio Bidirecional Câmera Residencial Ip66 À Prova D'água",
    "preco": "R$159,20",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_701931-MLA109528440545_032026-O.webp",
    "link": "https://meli.la/1x88DwB",
    "cupom": "BateuDesconto"
  },
  {
    "id": 336,
    "nome": "Wap Motor Para Aspirador De Pó E Água Gtw10 Gtw12 Gtw20 Até 1600w Fw005242",
    "preco": "R$183",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_654243-MLA95501770732_102025-O.webp",
    "link": "https://meli.la/1Pajc15",
    "cupom": "BateuDesconto"
  },
  {
    "id": 337,
    "nome": "Sulfato De Cobre 500 Gramas Fertilizantes",
    "preco": "R$24,70",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_691800-MLB103917088081_012026-O.webp",
    "link": "https://meli.la/1JoSFV4",
    "cupom": "BateuDesconto"
  },
  {
    "id": 338,
    "nome": "Abraçadeira De Cortina Magnética Par Prendedor Enfeite Lindo",
    "preco": "R$28,53",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_921234-MLB75393407928_042024-O.webp",
    "link": "https://meli.la/2ydbxnU",
    "cupom": "BateuDesconto"
  },
  {
    "id": 339,
    "nome": "Kit 10 Cake Board 18cm Tabuleiro Bolo Em Mdf 3mm Redondo Branco",
    "preco": "R$21,29",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_983422-MLB81921248663_012025-O.webp",
    "link": "https://meli.la/2SytyyZ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 340,
    "nome": "Correia Para Batedeira Planetária Britânia Bbp515 Turbo",
    "preco": "R$24,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_831177-MLB70492551410_072023-O.webp",
    "link": "https://meli.la/2fsWKYR",
    "cupom": "BateuDesconto"
  },
  {
    "id": 341,
    "nome": "Vinho Concha Y Toro Diablo Velvet Merlot Chileno Tinto 750ml",
    "preco": "R$64,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_611041-MLA112212343326_062026-O.webp",
    "link": "https://meli.la/31s2vsJ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 342,
    "nome": "Placa Banheiro Masculino E Feminino Wc Sanitário 20x15 Ps  Masculino E Feminino (wc Sanitário)",
    "preco": "R$18,50",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_883362-MLB102869724207_122025-O.webp",
    "link": "https://meli.la/1ytxZCe",
    "cupom": "BateuDesconto"
  },
  {
    "id": 343,
    "nome": "Lipo Bari - 30 Cápsulas - Original Sem Sabor",
    "preco": "R$199",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_840066-MLB118294960107_092026-O.webp",
    "link": "https://meli.la/31AKxyB",
    "cupom": "BateuDesconto"
  },
  {
    "id": 344,
    "nome": "Ventilador de Teto Qfun 42\" Com Luz LED, Controle Remoto e Motor DC Silencioso",
    "preco": "R$370",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_989717-MLA95791259325_102025-O.webp",
    "link": "https://meli.la/2bTom51",
    "cupom": "BateuDesconto"
  },
  {
    "id": 345,
    "nome": "Veda Porta Protetor De Porta Poeira Insetos 70/80/90/100cm Marrom-80cm",
    "preco": "R$32,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_693077-MLB106971405992_022026-O.webp",
    "link": "https://meli.la/1s2gT45",
    "cupom": "BateuDesconto"
  },
  {
    "id": 346,
    "nome": "Polimero Liquido Azul Vapor Farol 100%puro 1litro Azul",
    "preco": "R$178,59",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_995643-MLB111601399843_052026-O.webp",
    "link": "https://meli.la/2dkZK5k",
    "cupom": "BateuDesconto"
  },
  {
    "id": 347,
    "nome": "Vinho Chileno Branco Suave Casillero Del Diablo Carnaval Phenomenal 750ml",
    "preco": "R$38",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_901125-MLA114993819361_072026-O.webp",
    "link": "https://meli.la/1Ychm6P",
    "cupom": "BateuDesconto"
  },
  {
    "id": 348,
    "nome": "Kit 10 Avental Vinil Impermeável Plástico Transparente Epi Transparente",
    "preco": "R$113",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_914941-MLB82613663599_022025-O.webp",
    "link": "https://meli.la/331Ld2z",
    "cupom": "BateuDesconto"
  },
  {
    "id": 349,
    "nome": "Microsoft Office 2026 Original Digital - Envio Imediato",
    "preco": "R$89",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_872379-MLB116842379049_082026-O.webp",
    "link": "https://meli.la/1nR8xeY",
    "cupom": "BateuDesconto"
  },
  {
    "id": 350,
    "nome": "Kit 20un Fosco Sacola Para Presente Transparente Com Alça Branco 15x20x7cm",
    "preco": "R$53,58",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_727561-MLA113964213479_062026-O.webp",
    "link": "https://meli.la/17yeWNE",
    "cupom": "BateuDesconto"
  },
  {
    "id": 351,
    "nome": "Camiseta Oversized One Estilosa Confortavel Camisa Grande",
    "preco": "R$49,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_732137-MLB117939953110_102026-O.webp",
    "link": "https://meli.la/1J2YD3J",
    "cupom": "BateuDesconto"
  },
  {
    "id": 352,
    "nome": "10 Toalha Cobre Mancha 75cm X 75cm Oxford P Eventos Atacado",
    "preco": "R$54,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_921670-MLB51370307382_092022-O.webp",
    "link": "https://meli.la/1WgoQzc",
    "cupom": "BateuDesconto"
  },
  {
    "id": 353,
    "nome": "Vinho Chileno Tinto Concha y Toro Diablo Deep Carménère 750ml",
    "preco": "R$54,13",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_703794-MLA113353119643_062026-O.webp",
    "link": "https://meli.la/2mjwWnT",
    "cupom": "BateuDesconto"
  },
  {
    "id": 354,
    "nome": "Inova Mini Caixa Caixinha De Som Bluetooth Portátil, Potente Tws Com Rádio Fm E Luzes Rgb, Ipx6 À Prova D'água, Longa Duração Caixa De Som Bluetooth",
    "preco": "R$72,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_832145-MLA115277268011_072026-O.webp",
    "link": "https://meli.la/2sjn5WP",
    "cupom": "BateuDesconto"
  },
  {
    "id": 355,
    "nome": "Cubos Filtro Uv 36w Com Revestimento Interno De Aço Inox",
    "preco": "R$800",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_818917-MLA96865094655_102025-O.webp",
    "link": "https://meli.la/2st9GfX",
    "cupom": "BateuDesconto"
  },
  {
    "id": 356,
    "nome": "2 Protetores Salva Porta Pvc Contra Água 60/70/80/90 Cm Branco 80 Cm Salva Porta Liso",
    "preco": "R$85,21",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676081-MLB116122581411_082026-O.webp",
    "link": "https://meli.la/13Tgzxy",
    "cupom": "BateuDesconto"
  },
  {
    "id": 357,
    "nome": "Cortina Blackout Em Tecido 6,00x2,80 Corta Luz Branco Gelo",
    "preco": "R$154,55",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_775723-MLB80499333637_112024-O.webp",
    "link": "https://meli.la/1AJwrgL",
    "cupom": "BateuDesconto"
  },
  {
    "id": 358,
    "nome": "Maca Para Massagem Portátil Profissional 180x80 De Largura",
    "preco": "R$116,61",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_883126-MLB88872099630_082025-O.webp",
    "link": "https://meli.la/1P9VErE",
    "cupom": "BateuDesconto"
  },
  {
    "id": 359,
    "nome": "Filtro Uv Cubos 36w com revestimento de aço inox, para Lagos Até 10000l",
    "preco": "R$800",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_879755-MLA108011052915_032026-O.webp",
    "link": "https://meli.la/1Q4TjpD",
    "cupom": "BateuDesconto"
  },
  {
    "id": 360,
    "nome": "Cadeira Escritório Presidente Ergonômica Preta Giratória 360 Graus Tecido Mesh Premium Suporte Lombar Apoio Cabeça Assento Ampliado Regulagem Altura Home Office Winda 1",
    "preco": "R$459",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_859890-MLA115781174776_092026-O.webp",
    "link": "https://meli.la/1vzUtkW",
    "cupom": "BateuDesconto"
  },
  {
    "id": 361,
    "nome": "Camisa Oversized Tamanho Grande Academia Treino Camisão",
    "preco": "R$49,70",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_713848-MLB98018037038_112025-O.webp",
    "link": "https://meli.la/2GuYmwC",
    "cupom": "BateuDesconto"
  },
  {
    "id": 362,
    "nome": "Kit 12 Pares Meias Infantil Feminino Menina Criança Sortida Desenho Un",
    "preco": "R$26,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_751515-MLB117720732159_092026-O.webp",
    "link": "https://meli.la/2VDrCop",
    "cupom": "BateuDesconto"
  },
  {
    "id": 363,
    "nome": "Perfil Magnético Adesivo 3m Fita Imã Flexível 14,5x2 - 5 Mts",
    "preco": "R$44,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_639665-MLB94575131557_102025-O.webp",
    "link": "https://meli.la/2jW5QR3",
    "cupom": "BateuDesconto"
  },
  {
    "id": 364,
    "nome": "Kit 20 Cumbucas Pretas Tigelas Sobremesa Sorvete Açai 300ml Preto",
    "preco": "R$35,26",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_716402-MLB94678292986_102025-O.webp",
    "link": "https://meli.la/11G2nQ4",
    "cupom": "BateuDesconto"
  },
  {
    "id": 365,
    "nome": "Fone de Ouvido Inova TWS Bluetooth 5.4 Sport Branco Com Gancho e IPX5",
    "preco": "R$59,66",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_877743-MLA104943728643_012026-O.webp",
    "link": "https://meli.la/1idvtY6",
    "cupom": "BateuDesconto"
  },
  {
    "id": 366,
    "nome": "Suporte Guia de Corte para Serra Circular 4/5 Pol com Nível Embutido, Cortes Precisos em Madeira",
    "preco": "R$98,63",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_871867-MLA114712586198_082026-O.webp",
    "link": "https://meli.la/25uYB9H",
    "cupom": "BateuDesconto"
  },
  {
    "id": 367,
    "nome": "Pino Plástico Fix Pin P/ Etiquetadeira Tag 40mm- 10.000pinos Kit2-tp40mm-westpress",
    "preco": "R$37,19",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_678825-MLB89549333938_082025-O.webp",
    "link": "https://meli.la/29kFKvr",
    "cupom": "BateuDesconto"
  },
  {
    "id": 368,
    "nome": "Kit 400 Barquetes Barquinhas P/ Rechear P/ Festas Incopal",
    "preco": "R$151,40",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_710143-MLA99929524081_112025-O.webp",
    "link": "https://meli.la/1qnWeao",
    "cupom": "BateuDesconto"
  },
  {
    "id": 369,
    "nome": "Vinho Chileno Tinto Meio Seco Casillero Del Diablo Carnaval Fabulous Red 750ml",
    "preco": "R$49,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_640101-MLA109749926113_032026-O.webp",
    "link": "https://meli.la/1ESCeyQ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 370,
    "nome": "Kit 0,61x0,61 Painel Canaletado Mdf Branco 20 Ganchos Branco",
    "preco": "R$158,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_946894-MLB89539906899_082025-O.webp",
    "link": "https://meli.la/2U1KWAu",
    "cupom": "BateuDesconto"
  },
  {
    "id": 371,
    "nome": "Mamadeira Classica Anti-colic 125ml Azul Philips Avent",
    "preco": "R$49,98",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875023-MLA99586576068_122025-O.webp",
    "link": "https://meli.la/12LtW8k",
    "cupom": "BateuDesconto"
  },
  {
    "id": 372,
    "nome": "Capa Para Galaxy S23 Ultra Anti Impacto E Suporte Retrátil Preto Micro-mate",
    "preco": "R$95,40",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_616697-MLB108650572406_032026-O.webp",
    "link": "https://meli.la/11XUukQ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 373,
    "nome": "Tubulação Cano De Cobre 1/4 Flexível Panqueca Com 10 Metros",
    "preco": "R$224",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_718799-MLB69928786537_062023-O.webp",
    "link": "https://meli.la/31bDGqH",
    "cupom": "BateuDesconto"
  },
  {
    "id": 374,
    "nome": "Ômega 3 Dha 1000 Easyboost Epa 400mg Dha 1000mg 120cap Kit2x Neutro",
    "preco": "R$134,97",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973820-MLA107832294008_032026-O.webp",
    "link": "https://meli.la/1FeRmdA",
    "cupom": "BateuDesconto"
  },
  {
    "id": 375,
    "nome": "Placa Pvc/ps 2mm Vende-se/aluga/imobiliaria/corr_60x40cm Branco",
    "preco": "R$45",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_627150-MLB113525091849_062026-O.webp",
    "link": "https://meli.la/1gUH2ZR",
    "cupom": "BateuDesconto"
  },
  {
    "id": 376,
    "nome": "Perfil Magnético Adesivo 3m Imã Flexível 14,5x2 - 1 Metro",
    "preco": "R$18,67",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_947752-MLB94147080632_102025-O.webp",
    "link": "https://meli.la/1ihSFnk",
    "cupom": "BateuDesconto"
  },
  {
    "id": 377,
    "nome": "Garrafa Térmica Wolff De Aço Inox Marrom",
    "preco": "R$203,60",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953454-MLA96149166851_102025-O.webp",
    "link": "https://meli.la/2cF2eKR",
    "cupom": "BateuDesconto"
  },
  {
    "id": 378,
    "nome": "Zabcon Fecho Infantil Criança Janela Geladeira Vaso Sanitário Travamento Gavetas E Portas Transparência",
    "preco": "R$22,37",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858674-MLA100087139577_122025-O.webp",
    "link": "https://meli.la/1M7GKmN",
    "cupom": "BateuDesconto"
  },
  {
    "id": 379,
    "nome": "Suporte Coador De Café Grande + Filtro De Pano",
    "preco": "R$35,80",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_741144-MLB117743686405_092026-O.webp",
    "link": "https://meli.la/2c515C8",
    "cupom": "BateuDesconto"
  },
  {
    "id": 380,
    "nome": "Nauber Desempenadeira Nbr Berox 60cm",
    "preco": "R$134,55",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_708089-MLA99954627755_112025-O.webp",
    "link": "https://meli.la/1oYvhFW",
    "cupom": "BateuDesconto"
  },
  {
    "id": 381,
    "nome": "Vitamina D3 2000 UI FDC 100 Cápsulas Colecalciferol",
    "preco": "R$60,64",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_971396-MLA110591244188_052026-O.webp",
    "link": "https://meli.la/1KguF49",
    "cupom": "BateuDesconto"
  },
  {
    "id": 382,
    "nome": "Prancha De Natação Multifunções E Pullbouy Nabaiji Pull Kick",
    "preco": "R$129,99",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_680394-MLA111028639664_052026-O.webp",
    "link": "https://meli.la/12Va4Ru",
    "cupom": "BateuDesconto"
  },
  {
    "id": 383,
    "nome": "Mangueira De Silicone 200 Atóxica Flexível 3mm X 5mm 2mt Transparente",
    "preco": "R$19,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_760846-MLA108661094986_032026-O.webp",
    "link": "https://meli.la/1Kbta3J",
    "cupom": "BateuDesconto"
  },
  {
    "id": 384,
    "nome": "Escova Removedora De Pelos Pet Magica Gato Cao Automatica Rasqueadeira Cor Azul Homeroarte",
    "preco": "R$26,90",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_958394-MLA100093876357_122025-O.webp",
    "link": "https://meli.la/2cGF9Ck",
    "cupom": "BateuDesconto"
  },
  {
    "id": 385,
    "nome": "Kit de Ferramentas EVOFIX com Martelo, Alicates e Chaves (10 Peças)",
    "preco": "R$127,49",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_952566-MLA109777835328_042026-O.webp",
    "link": "https://meli.la/2c8b1gH",
    "cupom": "BateuDesconto"
  },
  {
    "id": 386,
    "nome": "Mio Inositol 2g - 30 Sachês - Equilíbrio Metabólico Feminino Sem Sabor",
    "preco": "R$62,92",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_960759-MLA115639261404_092026-O.webp",
    "link": "https://meli.la/1tc58UY",
    "cupom": "BateuDesconto"
  },
  {
    "id": 387,
    "nome": "10 Refil Filtro Caixa Dagua Cavalete Pp Liso 9 3/4 - 1 Micra Branco",
    "preco": "R$78,80",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_828937-MLA107204741072_032026-O.webp",
    "link": "https://meli.la/1VREZdq",
    "cupom": "BateuDesconto"
  },
  {
    "id": 388,
    "nome": "Kit 2 Óleos Rosa Rubiginosa 100% Puro Vegano 20ml Ferarte",
    "preco": "R$35",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_715933-MLB106846682518_022026-O.webp",
    "link": "https://meli.la/1apdZ1S",
    "cupom": "BateuDesconto"
  },
  {
    "id": 389,
    "nome": "Borrachinhas Borracha Para Fone De Ouvido 3 Pares P M G Preto",
    "preco": "R$19,02",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838054-MLB93123455300_092025-O.webp",
    "link": "https://meli.la/1pqnGLF",
    "cupom": "BateuDesconto"
  },
  {
    "id": 390,
    "nome": "Basike Smart Tag Rastreador GPS Compatível com Apple Find My (Apenas iOS) com Localizador Alarme Sonoro e Bateria Substituível, Localiza Crianças e Pets, GPS para veicular Chaves Mala Mochila(2 kits)",
    "preco": "R$95,63",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_977509-MLA111888135345_052026-O.webp",
    "link": "https://meli.la/1dT8FHU",
    "cupom": "BateuDesconto"
  },
  {
    "id": 391,
    "nome": "Power Bank Magnético 10000mah Sem Fio Para iPhone 15 14 13 Branco",
    "preco": "R$74,92",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_755171-MLB118281974205_092026-O.webp",
    "link": "https://meli.la/1q8HVHC",
    "cupom": "BateuDesconto"
  },
  {
    "id": 392,
    "nome": "Bermuda Feminina Fitness Suplex Poliamida Com Bolso Corrida",
    "preco": "R$58,90",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_960770-MLB103868491971_012026-O.webp",
    "link": "https://meli.la/1auaqNi",
    "cupom": "BateuDesconto"
  },
  {
    "id": 393,
    "nome": "Rolo Adesivo Alumínio Metálico Protetor Fogão Parede 5mx40cm",
    "preco": "R$49,39",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_703877-MLB107632069888_032026-O.webp",
    "link": "https://meli.la/16rrDGa",
    "cupom": "BateuDesconto"
  },
  {
    "id": 394,
    "nome": "Livro De Colorir Flores Adulto Antiestress 50 Desenhos A5 Folha De 120 Gramas",
    "preco": "R$40,91",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892057-MLB110890030987_042026-O.webp",
    "link": "https://meli.la/2vUaJCJ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 395,
    "nome": "Barra De Apoio Aço Inoxidável Alça 40cm Idoso E Deficiente",
    "preco": "R$27,93",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_654566-MLB72001908430_102023-O.webp",
    "link": "https://meli.la/2qpaeN7",
    "cupom": "BateuDesconto"
  },
  {
    "id": 396,
    "nome": "C1 Clean Eliminador De Odores 5 Litros Linha Pet Fragrância Limão",
    "preco": "R$49,40",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_980601-MLA111696776113_052026-O.webp",
    "link": "https://meli.la/2ygmZJ4",
    "cupom": "BateuDesconto"
  },
  {
    "id": 397,
    "nome": "Meia Antiderrapante Futebol ProSocks UltraGrip Cano Alto Meião Futebol Grip para Chuteira Meia Esportiva com Alta Estabilidade, Conforto e Tecnologia Profissional | Azul Marinho, Tamanho 38-44",
    "preco": "R$79,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_951158-MLA115728743125_082026-O.webp",
    "link": "https://meli.la/1vSexfK",
    "cupom": "BateuDesconto"
  },
  {
    "id": 398,
    "nome": "Conj. 7 Em Vidro P/ Sobremesa - Casart",
    "preco": "R$59",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875992-MLA110452988906_052026-O.webp",
    "link": "https://meli.la/2hVGdKe",
    "cupom": "BateuDesconto"
  },
  {
    "id": 399,
    "nome": "Peel Gel Esfoliante Facial Hidramais 100g Peeling Mecânico",
    "preco": "R$29,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_930979-MLA89289890529_082025-O.webp",
    "link": "https://meli.la/2i1v4xg",
    "cupom": "BateuDesconto"
  },
  {
    "id": 400,
    "nome": "Torneira Banheiro Monocomando Misturador Lavatorio Casacata Preto Fosco Yesop",
    "preco": "R$102",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_862136-MLA103085385784_012026-O.webp",
    "link": "https://meli.la/1r42by1",
    "cupom": "BateuDesconto"
  },
  {
    "id": 401,
    "nome": "Caneta Touch Tantsa Recarregável Universal para iPad, Tablet e Celular com Rejeição de Palma",
    "preco": "R$99,99",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_658223-MLA114825597786_082026-O.webp",
    "link": "https://meli.la/2b78Npn",
    "cupom": "BateuDesconto"
  },
  {
    "id": 402,
    "nome": "30 Vela Sparkle 60 Cm Casamento Link Abaixo Frete Merc.livre",
    "preco": "R$102,60",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_895581-MLB74330249163_012024-O.webp",
    "link": "https://meli.la/1s7LbP6",
    "cupom": "BateuDesconto"
  },
  {
    "id": 403,
    "nome": "Kit Ecologico Sustentavel Shampoo Condicionador Sabonete 15g",
    "preco": "R$71,20",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_918715-MLA99434328500_112025-O.webp",
    "link": "https://meli.la/1hxJEJj",
    "cupom": "BateuDesconto"
  },
  {
    "id": 404,
    "nome": "Marcador Ponteiro Velocimetro Gasolina Biz 125 100 Par",
    "preco": "R$34,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_706492-MLA99370918092_112025-O.webp",
    "link": "https://meli.la/1nodtMg",
    "cupom": "BateuDesconto"
  },
  {
    "id": 405,
    "nome": "Tapete Higienico para Cães Ultra Pads Lavanda 60x60 30 Un Petlike",
    "preco": "R$41",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_763162-MLA112576565979_062026-O.webp",
    "link": "https://meli.la/2MWdWp6",
    "cupom": "BateuDesconto"
  },
  {
    "id": 406,
    "nome": "Lâmpada Filamento De Carbono G95 40w E27 Retrô Vintage Decorativa Branco Quente - Green Age",
    "preco": "R$23,18",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894754-MLA99991186075_112025-O.webp",
    "link": "https://meli.la/2xJXTuA",
    "cupom": "BateuDesconto"
  },
  {
    "id": 407,
    "nome": "4 Gel Dental Clareador Sorriso Branco E Perfeito 16 Brinde",
    "preco": "R$73,89",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_681901-MLB110941663777_042026-O.webp",
    "link": "https://meli.la/1iHv9UA",
    "cupom": "BateuDesconto"
  },
  {
    "id": 408,
    "nome": "Kit 100 Puxadores De Zíper Para Reposição Roupas E Bolsas Cor Colorido",
    "preco": "R$38,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_898704-MLA113943962517_062026-O.webp",
    "link": "https://meli.la/2f1jpTz",
    "cupom": "BateuDesconto"
  },
  {
    "id": 409,
    "nome": "Máscara nasal com orifício - Dreamwear Full Respironics",
    "preco": "R$344,97",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858353-MLA81988709278_022025-O.webp",
    "link": "https://meli.la/1HTkWYc",
    "cupom": "BateuDesconto"
  },
  {
    "id": 410,
    "nome": "Esquadro, Aluminio Fundido, 16pol., 400mm, 1pc // Mtx",
    "preco": "R$37,15",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_829174-MLB117735011712_102026-O.webp",
    "link": "https://meli.la/2DDE4c6",
    "cupom": "BateuDesconto"
  },
  {
    "id": 411,
    "nome": "Fone de Ouvido Bluetooth Basike TWS Esportivo Com Cancelamento de Ruído e Gancho IPX4",
    "preco": "R$119",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_881947-MLA116528741041_082026-O.webp",
    "link": "https://meli.la/24g5fCU",
    "cupom": "BateuDesconto"
  },
  {
    "id": 412,
    "nome": "Correia Z935 Amassadeira Semirápida Braesi Ali-05/520 Zx935",
    "preco": "R$49,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_709553-MLB49284528162_032022-O.webp",
    "link": "https://meli.la/1FbFkd7",
    "cupom": "BateuDesconto"
  },
  {
    "id": 413,
    "nome": "Par Cadarço Achatado Flat Air Force 1 adidas 140cm Branco Marrom-escuro",
    "preco": "R$19",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_773656-MLA116662993531_082026-O.webp",
    "link": "https://meli.la/2rGs3BL",
    "cupom": "BateuDesconto"
  },
  {
    "id": 414,
    "nome": "Kit 20 Toucas/toca De Cetim Seda Anti Frizz Atacado Sortidas",
    "preco": "R$37,49",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_890068-MLU74976779541_032024-O.webp",
    "link": "https://meli.la/1GFpRK4",
    "cupom": "BateuDesconto"
  },
  {
    "id": 415,
    "nome": "Protetor Saia De Porta Facilit 82cm Cor Mogno",
    "preco": "R$49",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_619058-MLA97741642413_112025-O.webp",
    "link": "https://meli.la/1LhMYBc",
    "cupom": "BateuDesconto"
  },
  {
    "id": 416,
    "nome": "Cabelo Aplique Fio Magico Ondulado 100% Orgânico 70cm Cor Castanho",
    "preco": "R$35,09",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_658890-MLA111108566477_052026-O.webp",
    "link": "https://meli.la/2x2jhuF",
    "cupom": "BateuDesconto"
  },
  {
    "id": 417,
    "nome": "Insulfilm Pelicula Filme Para Vidros 6m X 1m + Brinde",
    "preco": "R$75,04",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_997958-MLB118730915187_102026-O.webp",
    "link": "https://meli.la/2cwdTaJ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 418,
    "nome": "Pino Adaptador De Tomada Universal Bob Esponja 100 Pçs",
    "preco": "R$94,02",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_911495-MLA96422818125_102025-O.webp",
    "link": "https://meli.la/1Eiq7qR",
    "cupom": "BateuDesconto"
  },
  {
    "id": 419,
    "nome": "Pedestal Tripé Profissional para Microfone Universal: Reforçado, Ajustável a 2,10m e em Metal",
    "preco": "R$59,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807121-MLA112414696387_052026-O.webp",
    "link": "https://meli.la/1tCFpSs",
    "cupom": "BateuDesconto"
  },
  {
    "id": 420,
    "nome": "Kit 2 Calça Legging Bailarina Zero Transparência Grossa",
    "preco": "R$61",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_914038-MLB117203303563_092026-O.webp",
    "link": "https://meli.la/2CH82U1",
    "cupom": "BateuDesconto"
  },
  {
    "id": 421,
    "nome": "Porta Shampoo Reforcado Em Vidro Premium Mons Shop 60cm Fumê",
    "preco": "R$59,99",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_710819-MLA113358550239_062026-O.webp",
    "link": "https://meli.la/291NZsV",
    "cupom": "BateuDesconto"
  },
  {
    "id": 422,
    "nome": "Caneta Pincel Marcador Quadro Branco Recarregável 12un Preto",
    "preco": "R$29,06",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_923713-MLA113177244463_062026-O.webp",
    "link": "https://meli.la/2o3wHUL",
    "cupom": "BateuDesconto"
  },
  {
    "id": 423,
    "nome": "Embalagem Para Trufas E Bombom 15x16cm 100 Unidades Aliança Cor Azul-claro",
    "preco": "R$19",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_743501-MLA113586996365_062026-O.webp",
    "link": "https://meli.la/24xiRiT",
    "cupom": "BateuDesconto"
  },
  {
    "id": 424,
    "nome": "Copo P/ Multiprocessador Pmp1600 Preto Philco",
    "preco": "R$69,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858374-MLA82245450366_022025-O.webp",
    "link": "https://meli.la/2ibnkAZ",
    "cupom": "BateuDesconto"
  },
  {
    "id": 425,
    "nome": "Micro Retífica Perfin 135W com 6 Velocidades e 87 Acessórios Para Madeira e Metal",
    "preco": "R$118,68",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_758055-MLA96155424303_102025-O.webp",
    "link": "https://meli.la/1FQFpz7",
    "cupom": "BateuDesconto"
  },
  {
    "id": 427,
    "nome": "Embalagem Para Trufas E Bombom 15x16cm 100 Unidades Aliança Cor Maracujá",
    "preco": "R$19",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_849222-MLA113588327063_062026-O.webp",
    "link": "https://meli.la/2t59PNS",
    "cupom": "BateuDesconto"
  },
  {
    "id": 428,
    "nome": "Tupia Manual Laminadora 900w 6mm 33000rpm,Kit Tupia Manual Laminadora,Tupia Manual Elétrica Laminados Jogo Fresa 20 Peça",
    "preco": "R$236,55",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_790706-MLA99436996300_112025-O.webp",
    "link": "https://meli.la/1rUL31S",
    "cupom": "BateuDesconto"
  },
  {
    "id": 429,
    "nome": "Cuba Banheiro Branca Redonda 30*30cm Cerâmica Premium Moldada Em Peça Única Alto Brilho Com Ladrão E Bordas Arredondadas Winda",
    "preco": "R$212",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_638070-MLA113663168483_062026-O.webp",
    "link": "https://meli.la/1NE6Wks",
    "cupom": "BateuDesconto"
  },
  {
    "id": 430,
    "nome": "Jogo de Panelas Ceramik 8 Peças com Antiaderente Revestimento Cerâmico Nível A INMETRO PFOA Free com Bistequeira Grill e Fervedor",
    "preco": "R$395,67",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675340-MLA112313952710_062026-O.webp",
    "link": "https://meli.la/343HMHh",
    "cupom": "BateuDesconto"
  },
  {
    "id": 431,
    "nome": "Mala de Viagem 24\" 23kg Zipper Antifurto Roda Dupla 360 ABS Premium Allabard Pisa Rosa",
    "preco": "R$283",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_992774-MLA111617472256_062026-O.webp",
    "link": "https://meli.la/2vWkQkC",
    "cupom": "BateuDesconto"
  },
  {
    "id": 432,
    "nome": "COLÁGENO TIPO 2 com 45mg - Fórmula Exclusiva com Máxima Concentração e Biodisponibilidade - 60 Cápsulas",
    "preco": "R$42,10",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_932274-MLA113497076692_072026-O.webp",
    "link": "https://meli.la/1YAgvAK",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 433,
    "nome": "Suporte De Painel Veicular Starlink Mini Ventosas Antimulta Preto",
    "preco": "R$80,06",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_796951-MLB117006092422_102026-O.webp",
    "link": "https://meli.la/2LLUMtD",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 434,
    "nome": "Suporte Articulado Tv Parede 14 A 55 Pol Até 50kg Preto Tv Smart Plasma Led Lcd Com Parafusos Preto",
    "preco": "R$49,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_684097-MLB116973892568_102026-O.webp",
    "link": "https://meli.la/1kPeEa2",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 435,
    "nome": "Kit 4 Caixas Organizadoras Dobráveis De Guarda Roupa Caixa Organizadora Padrão Xadrez Ideal para Roupas, Closet, Armário e Quarto",
    "preco": "R$73,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_737334-MLA112057082190_062026-O.webp",
    "link": "https://meli.la/1EPN9Xj",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 436,
    "nome": "Palmilha Ortopedica Arco Plantar Esportiva Esporao Fascite S-35-40 Preto",
    "preco": "R$39,99",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_773664-MLB116739210891_082026-O.webp",
    "link": "https://meli.la/1DJkvK8",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 437,
    "nome": "FENO GREGO 450mg - Fórmula Avançada com Máxima Concentração e Pureza - 60 Cápsulas",
    "preco": "R$54,32",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_836372-MLA113496672282_072026-O.webp",
    "link": "https://meli.la/1mHARz4",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 438,
    "nome": "Interruptor Inteligente Matter Compativel Com iPhone Siri Wi-fi 2.4 Ghz Alexa Google Tuya 2 Botões 4x2 Bivolt Preto Ekaza",
    "preco": "R$64,99",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_814006-MLA116823976129_082026-O.webp",
    "link": "https://meli.la/1ZoAujE",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 439,
    "nome": "Vinho Argentino Branco Seco La Linda Chardonnay 750ml",
    "preco": "R$60,80",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_744596-MLA99451385070_112025-O.webp",
    "link": "https://meli.la/2LcVCd8",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 440,
    "nome": "Kit 5 Cuecas Boxer Polo Star Algodão Sem Costura Sortido",
    "preco": "R$89,92",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_781311-MLB82722766474_032025-O.webp",
    "link": "https://meli.la/1S4oUA2",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 441,
    "nome": "Plus do Brasil Cabo Usb C Carregador e Dados Turbo Tipo C Duplo Para Samsung S26 S25 Ultra S24 S23 Fe S22 S21 S20 Chromebook 4 Galaxy Book S Xiaomi Apple Iphone 17 16 15 Blindado Fabricado no Brasil",
    "preco": "R$26,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_995361-MLA110157953034_042026-O.webp",
    "link": "https://meli.la/2iYn3WV",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 442,
    "nome": "Zinco Quelato 264% Máxima Concentração 120 Cápsulas - Forged Nutrition Sabor Sem Sabor",
    "preco": "R$50,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_831929-MLA114903015463_072026-O.webp",
    "link": "https://meli.la/2ieYzmg",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 443,
    "nome": "Capa Capinha Anti Shock Para Samsung + Película Cerâmica 3d Transparente E Película A57",
    "preco": "R$19,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_715786-MLB113958445217_062026-O.webp",
    "link": "https://meli.la/1qtmtj4",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 444,
    "nome": "Polímero Liquido Para Farois A Vapor 1litro 100% Puro Azul",
    "preco": "R$167,03",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819947-MLB111008128259_042026-O.webp",
    "link": "https://meli.la/24XpKq3",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 445,
    "nome": "3 Calcinha Pos Parto Segura Barriga Lingerie Luxo Especial",
    "preco": "R$45,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_717754-MLB85418348455_052025-O.webp",
    "link": "https://meli.la/2bLmGfy",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 446,
    "nome": "Kit 2 Tapetes De Pia Escorredor Louças Grande Em Microfibra Cinza-escuro",
    "preco": "R$43,26",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_672183-MLB115113159310_082026-O.webp",
    "link": "https://meli.la/1Lp7i1u",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 447,
    "nome": "Meia Longa Trifil Algodão 3 Pares Masculino Esportiva",
    "preco": "R$28,94",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_643016-MLB81736625309_012025-O.webp",
    "link": "https://meli.la/1eAbDXV",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 448,
    "nome": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "preco": "R$84,30",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_893236-MLA109232002618_042026-O.webp",
    "link": "https://meli.la/12sXQGD",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 449,
    "nome": "Tela Mosquiteiro Fibra Vidro Lavável Velcro Janela 1,50x1,20 Cinza",
    "preco": "R$67",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_645704-MLB107348868041_022026-O.webp",
    "link": "https://meli.la/1M6LbUm",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 450,
    "nome": "Porta Retrato 20x30 Moldura Preto Com Vidro Decoração Sala Preto Lisa",
    "preco": "R$31,75",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_995127-MLB88364503429_072025-O.webp",
    "link": "https://meli.la/2Ek1Zti",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 451,
    "nome": "Kit Com 3 Extensores Alongadores Magnético Bit Parafusadeira",
    "preco": "R$33,55",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_808581-MLB74043913895_012024-O.webp",
    "link": "https://meli.la/257orS4",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 452,
    "nome": "10/40 Plástico Pvc Para Presente Com Alça E Botão 20x20x8cm Branco 40/unidades",
    "preco": "R$90",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_719350-MLB108845083133_032026-O.webp",
    "link": "https://meli.la/2kjyoY3",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 453,
    "nome": "Bobina Papel Forrar Gaiola Aviário Bobinas 40cm X 200 Metros",
    "preco": "R$74,90",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_969991-MLB114642011633_072026-O.webp",
    "link": "https://meli.la/1TkFCxt",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 454,
    "nome": "COENZIMA Q10 200mg - Fórmula com Máxima Concentração e Pureza - 60 doses",
    "preco": "R$87,18",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_669969-MLA116157081835_082026-O.webp",
    "link": "https://meli.la/1hfR9jW",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 455,
    "nome": "Molinete De Pesca Alumínio Sougayilang Drag 15kg Preto",
    "preco": "R$78",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_691646-MLB119016765431_102026-O.webp",
    "link": "https://meli.la/1iUiiC7",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 456,
    "nome": "Kit 4 Capas De Almofada Estampa Naturalista Floral 40x40 Floral Moderna",
    "preco": "R$34,95",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_743020-MLB113480366917_062026-O.webp",
    "link": "https://meli.la/2QFWrW9",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 457,
    "nome": "Capa Capinha Para iPhone Magsafe Com Premium Suporte Lente Cinza For iPhone 16 Pro Max",
    "preco": "R$78",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_747511-MLB89267518099_082025-O.webp",
    "link": "https://meli.la/2aH7aSe",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 458,
    "nome": "Kit 2 Shorts Térmico Compressão  Antiassadura Com Bolso",
    "preco": "R$60,68",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_617462-MLB112118188334_062026-O.webp",
    "link": "https://meli.la/1jNk5UH",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 459,
    "nome": "Envelope De Segurança Personalizado 20x30 200 Peças Azul-claro",
    "preco": "R$59,99",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_696767-MLB107812566743_022026-O.webp",
    "link": "https://meli.la/32aEVVZ",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 460,
    "nome": "Citrulina Malato Pura 250g | Suplemento Vasodilatador Sem Sabor",
    "preco": "R$85,80",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_816117-MLB109210766873_032026-O.webp",
    "link": "https://meli.la/2Q5xKNS",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 461,
    "nome": "Kit Ferramentas Soquetes Multiuso 40 Peças Maleta Completa Preto",
    "preco": "R$26,59",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_911202-MLB105787146466_022026-O.webp",
    "link": "https://meli.la/1RkUDgR",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 462,
    "nome": "Kit De Colar Feminino Orgânico Choker Rígida Com Brincos Dourado",
    "preco": "R$50,08",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_699021-MLB112821962259_062026-O.webp",
    "link": "https://meli.la/2BKTp7j",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 463,
    "nome": "Tênis Feminino Academia Casual Confortável Mega Promoção Preto 34,0 Br",
    "preco": "R$48,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_662784-MLB110744696428_052026-O.webp",
    "link": "https://meli.la/291P7jV",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 464,
    "nome": "Capa Anti Impacto Para Moto Edge 30 Pro + Película Vidro 3d Transparente Anti Queda",
    "preco": "R$20,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_707988-MLB91555983549_092025-O.webp",
    "link": "https://meli.la/1dC7ofH",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 465,
    "nome": "MAGNÉSIO INOSITOL - Fórmula Exclusiva com Magnésio Bisglicinato, Inositol, Glicina, Melatonina, Treonato, Triptofano e Taurina - 240g",
    "preco": "R$78,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_703298-MLA113497830160_072026-O.webp",
    "link": "https://meli.la/1rGYLed",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 466,
    "nome": "Garrafinha Infantil Térmica Inox 450ml Escolar Copo + Alça",
    "preco": "R$37",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_879415-MLB117212911430_102026-O.webp",
    "link": "https://meli.la/2mkULb8",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 467,
    "nome": "Tampa Carter Do Golf 1.6 2.0 De 1999 Á 2004 Kit",
    "preco": "R$299,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953723-MLB72780631204_112023-O.webp",
    "link": "https://meli.la/1d56noi",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 468,
    "nome": "Kit 10 Lampadas 21/5w Bay15d 2 Polos 12v Vermelha P21/5w",
    "preco": "R$28",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_608544-MLB99704946314_122025-O.webp",
    "link": "https://meli.la/1cYxCYN",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 469,
    "nome": "Película De Lente De Cobertura Total Para iPhone 17 Pro Max iPhone 17 Pro Max Laranja",
    "preco": "R$15,19",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_673459-MLB110934978470_052026-O.webp",
    "link": "https://meli.la/2muCSxL",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 470,
    "nome": "Em Dobro Película Anti Impacto Vidro 3d Para A05 A05s A06",
    "preco": "R$19,80",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_653525-MLB119118046223_102026-O.webp",
    "link": "https://meli.la/2PPJWsY",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 471,
    "nome": "Kit 24 Talheres Inox Garfo E Faca P/ Restaurantes Buffet Bar Inox",
    "preco": "R$66,93",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_610812-MLB116609225799_082026-O.webp",
    "link": "https://meli.la/1WbG4ya",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 472,
    "nome": "Número Residencial Aço Inox Face Espelhada 10cm Corte Laser 3",
    "preco": "R$15,89",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_636447-MLB108477180635_032026-O.webp",
    "link": "https://meli.la/2Vc2Woy",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 473,
    "nome": "Kit - Aromatizador & Vela Crystal (chá Branco) Di Piettro",
    "preco": "R$90,14",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_814052-MLB116781090267_082026-O.webp",
    "link": "https://meli.la/1HnYVFE",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 474,
    "nome": "300ml Copo Térmico Inox Com Tampa Para Café E Chá Civago Café",
    "preco": "R$74,03",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_693038-MLB116407288380_092026-O.webp",
    "link": "https://meli.la/2z5ntZ1",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 475,
    "nome": "Película Privacidade Cerâmica Fosca Anti-espião Para iPhone iPhone 16 Pro",
    "preco": "R$19,30",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_937827-MLB117190101045_092026-O.webp",
    "link": "https://meli.la/2bmLNjs",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 476,
    "nome": "6 Protetor Alimentos Cobre Bolo Pudim Tela Rendada Kit 3p 3g",
    "preco": "R$77",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_649391-MLB75304617274_032024-O.webp",
    "link": "https://meli.la/24cnLiS",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 477,
    "nome": "Placa Tramontina 4x2 Cega C/ Suporte Liz - Kit 10un. 10 Un.",
    "preco": "R$63,55",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_806669-MLB90667892309_082025-O.webp",
    "link": "https://meli.la/1vovhgu",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 478,
    "nome": "Chaleira Em Alumínio Craqueado Capacidade 1,5lts. Preto",
    "preco": "R$50",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_946379-MLB107729870263_022026-O.webp",
    "link": "https://meli.la/32NHZEQ",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 479,
    "nome": "Pulverizador Manual 250ml Shopping Beleza Estética",
    "preco": "R$24,64",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628558-MLB111033811057_042026-O.webp",
    "link": "https://meli.la/1uhn9WX",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 480,
    "nome": "Kit 10 Lâmpadas T15 W16w Âmbar 12v Pingão Seta Automotiva",
    "preco": "R$20,18",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_725898-MLB107830943634_032026-O.webp",
    "link": "https://meli.la/2H6v9KW",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 481,
    "nome": "Em Dobro Película Cerâmica P/ Galaxy M51 M52 M53 M54 M55",
    "preco": "R$19,80",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_945665-MLB117513793832_102026-O.webp",
    "link": "https://meli.la/2ivuXLh",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 482,
    "nome": "Suporte De Placas Para Moto Universal Reforço Protetor Placa",
    "preco": "R$35,91",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_792589-MLB114142249486_082026-O.webp",
    "link": "https://meli.la/1bnp6Y8",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 483,
    "nome": "500 Unid Cartão Ponto Marcador Manual Cartografico Universal Branco N/a",
    "preco": "R$57,78",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_644819-MLB114207939943_072026-O.webp",
    "link": "https://meli.la/1dbreL7",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 484,
    "nome": "Cinta Para Elevação De Carga 3mts X 60mm 2 Toneladas - Verde Verde",
    "preco": "R$48,25",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_898587-MLB52048281607_102022-O.webp",
    "link": "https://meli.la/1mK8S1H",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 485,
    "nome": "Módulo Interruptor Paralelo Liz/lux2 Tramontina 57115/008 10 A 250v Branco",
    "preco": "R$18,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_699615-MLB91914843720_092025-O.webp",
    "link": "https://meli.la/14zhotf",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 486,
    "nome": "Luva Musculacao Academia Fitness Anti Calo Max Grip Treino Preto Liso Único",
    "preco": "R$22,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970633-MLB100772062297_122025-O.webp",
    "link": "https://meli.la/2Mo7F6r",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 487,
    "nome": "Diafragma Membrana Hidrovácuo New Civic 2017 2018 2019",
    "preco": "R$177,98",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_779374-MLB92358344750_092025-O.webp",
    "link": "https://meli.la/2uLw1Na",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 488,
    "nome": "Tomada Dupla 20a Branca + Vermelha Sob. Lizflex Tramontina Branco",
    "preco": "R$28,40",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_919851-MLB102498184814_122025-O.webp",
    "link": "https://meli.la/1p2D7tf",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 489,
    "nome": "Película De Vidro Anti Impacto Para iPad Selecione Seu Model iPad 10 2022",
    "preco": "R$27,12",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_725153-MLB89721327421_082025-O.webp",
    "link": "https://meli.la/2Ygz1h2",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 490,
    "nome": "Gel Lubrificante E Hidratante Para A Região Pélvica Dermosex",
    "preco": "R$63,58",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_622439-MLA81006621617_112024-O.webp",
    "link": "https://meli.la/2c9vhVd",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 491,
    "nome": "Tampão Uno Vivace 2011 Á 2017",
    "preco": "R$114",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_870280-MLB78473058548_082024-O.webp",
    "link": "https://meli.la/26biLo7",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 492,
    "nome": "Vara Para Molinete 5-10lb 1,80m Em 2 Partes Carbono Spincast",
    "preco": "R$78",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_681302-MLB104840840514_012026-O.webp",
    "link": "https://meli.la/1Z4Ndp4",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 493,
    "nome": "Kit Pote De Vidro Quadrado C/ Tampa De Bambu Moderno - 2und Transparente",
    "preco": "R$50,69",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_701937-MLB113063733680_072026-O.webp",
    "link": "https://meli.la/1yzTJAc",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 494,
    "nome": "Camisa De Pesca Premium Uv 50+ Dry Fit Proteção Solar Full Tucunare Azul Eg1",
    "preco": "R$34,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_728701-MLB116434867156_092026-O.webp",
    "link": "https://meli.la/1rjrWcH",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 495,
    "nome": "Ômega 3 120 Cápsulas Vita Nobre 540mg EPA 360mg DHA Selo IFOS Óleo de Peixe",
    "preco": "R$59,99",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_697987-MLA99366955564_112025-O.webp",
    "link": "https://meli.la/1Exh8dT",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 496,
    "nome": "Vaso De Planta Flores Polietileno Vietnamita 62cm Com Prato Bege",
    "preco": "R$160,40",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_706310-MLB111638000674_062026-O.webp",
    "link": "https://meli.la/16ZEErh",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 497,
    "nome": "Chapeira Porta Cartão De Ponto 15 Lugares Cinza N/a",
    "preco": "R$63,32",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_999634-MLB113762798713_062026-O.webp",
    "link": "https://meli.la/1f9MoWp",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 498,
    "nome": "Kit De Pesca Vara 1,80m Carbon E Molinete Alumínio 1000-5000",
    "preco": "R$169",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_751396-MLB111009467783_042026-O.webp",
    "link": "https://meli.la/2YPniqV",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 499,
    "nome": "Luminária De Teto Led Moderna, Para Quarto, 3 Em 1 110v-/220v Branco",
    "preco": "R$66,93",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_839558-MLB112297167014_062026-O.webp",
    "link": "https://meli.la/2tfDJC1",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 500,
    "nome": "Toalha Microfibra Alta Absorção Grande 150 X 80 Cm Com Bolsa Verde-limão",
    "preco": "R$39,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970415-MLB85788242672_062025-O.webp",
    "link": "https://meli.la/2LMAiEj",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 501,
    "nome": "Espiral Estelar Aromatizador Solar Veicular Cheirinho Azul Aroma De Limão",
    "preco": "R$37,76",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_899975-MLB110772501476_052026-O.webp",
    "link": "https://meli.la/27n5erM",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 502,
    "nome": "Vara De Pesca Sougayilang 1,80m 2 Partes Carbono Vara 12lbs",
    "preco": "R$78,80",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_731456-MLB100891408140_122025-O.webp",
    "link": "https://meli.la/12AaPYy",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 503,
    "nome": "Protetor Anti-poeira Usb-c Lightning Tampa Celular Kit 2pçs Tipo C - 2 Unidades",
    "preco": "R$16,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_681947-MLB112850205012_072026-O.webp",
    "link": "https://meli.la/1jXcMji",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 504,
    "nome": "Caneca Personalizada Porcelana Kpop Bts 11",
    "preco": "R$30",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_612799-MLB78825396548_092024-O.webp",
    "link": "https://meli.la/25CUCgY",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 505,
    "nome": "Álcool Swab 70% Lenços Umedecidos Kit 2 Cx 100un Cada Medix",
    "preco": "R$27,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_972117-MLB114973130515_072026-O.webp",
    "link": "https://meli.la/1QvUZ8C",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 506,
    "nome": "Almofada De Assento Para Cadeira E Poltrona 35x35 Oxford Preto",
    "preco": "R$14,68",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_728902-MLB119028713399_102026-O.webp",
    "link": "https://meli.la/2UoJFQ9",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 507,
    "nome": "Colete De Tricot Feminino Tranças",
    "preco": "R$51,30",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_751551-MLB110941886361_042026-O.webp",
    "link": "https://meli.la/1gJu4Hk",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 508,
    "nome": "Argamassa Polimérica 50kg Para/ Forno Fogão A Lenha Muros",
    "preco": "R$284,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_605205-MLB100747175823_122025-O.webp",
    "link": "https://meli.la/2SV8Wzk",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 509,
    "nome": "Carretilha Perfil Alto F47 3.8:1 Drag 25kg Esquerda Direito",
    "preco": "R$259",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_936388-MLB117607253428_102026-O.webp",
    "link": "https://meli.la/14E66Ew",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 510,
    "nome": "Capa Tablet Anti Shock Para Galaxy Tab A11/ A9 8.7 Polegadas",
    "preco": "R$159,91",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_600355-MLB110495609151_042026-O.webp",
    "link": "https://meli.la/1mUbzJM",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 511,
    "nome": "Tanque Cuba Lavanderia Aço Inox 304 Polido Com Ralo Sifão Flexível 34x40 Área de Serviço Stillus Home",
    "preco": "R$169,95",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_865368-MLA117529568595_092026-O.webp",
    "link": "https://meli.la/2RgkjyQ",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 512,
    "nome": "Kit 02 Organizador Prateleira Multiuso Branco, Preto, Cobre",
    "preco": "R$59,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_847232-MLB113671276580_072026-O.webp",
    "link": "https://meli.la/1LLQCj1",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 513,
    "nome": "Alça Para Sacola Cordão São Francisco 35cm Pct 100un",
    "preco": "R$36,95",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628964-MLB96312529748_102025-O.webp",
    "link": "https://meli.la/2Wj5yKL",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 514,
    "nome": "Pedal Comando Progressivo Para Equipo Odontológico",
    "preco": "R$100,46",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_662259-MLB69743730604_062023-O.webp",
    "link": "https://meli.la/1G7TBCY",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 515,
    "nome": "Caneta Corretiva Hazor - Marca: Toyota",
    "preco": "R$115,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_991529-MLB117656137744_102026-O.webp",
    "link": "https://meli.la/2JbnA5W",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 516,
    "nome": "Ombrelone Redondo Madeira 2,40m - V13 - Consulte - O - Frete",
    "preco": "R$279,18",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973607-MLB116462120094_092026-O.webp",
    "link": "https://meli.la/1uRjZcr",
    "cupom": "SALVAMEUBOLSO"
  },
  {
    "id": 517,
    "nome": "VITAMINA D3 + K2 Menaquinona-7 - Fórmula com Máxima Concentração e Biodisponibilidade - 60 Cápsulas",
    "preco": "R$46,33",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892120-MLA113496522576_072026-O.webp",
    "link": "https://meli.la/2rf66xH",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 518,
    "nome": "Estojo Grande Para Ferramentas Solze Verde-musgo",
    "preco": "R$23",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_806805-MLB78963725291_092024-O.webp",
    "link": "https://meli.la/1uVATop",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 519,
    "nome": "Quebra Sol Para Brisa Carro Protetor Solar Quebra Sol Eletro",
    "preco": "R$28",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_768391-MLB114357470047_072026-O.webp",
    "link": "https://meli.la/1NWk1Lk",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 520,
    "nome": "Tapete De Pilates Xpe Tapete De Yoga Com Redução De Ruído",
    "preco": "R$90,18",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837469-MLB118058213339_092026-O.webp",
    "link": "https://meli.la/2dsHunm",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 521,
    "nome": "Retrovisor Kawasaki Z400 /par Rosca Honda",
    "preco": "R$36,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_722846-MLB96086778712_102025-O.webp",
    "link": "https://meli.la/2xndKZN",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 522,
    "nome": "Palmilha Ortopedica Arco Plantar Esportiva Esporao Fascite 41-46 Preto",
    "preco": "R$39,99",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_668510-MLB116739386995_082026-O.webp",
    "link": "https://meli.la/17NJysZ",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 523,
    "nome": "COENZIMA Q10 UBIQUINOL 100mg por Cápsula - 60 Cápsulas - Fórmula Concentrada com Matéria-prima Importada",
    "preco": "R$71,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_879191-MLA113497076092_072026-O.webp",
    "link": "https://meli.la/11wobJA",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 524,
    "nome": "Camiseta Lisa Básica 100% Algodão Fio 30.1 Unissex",
    "preco": "R$34,10",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_958552-MLB115252184220_082026-O.webp",
    "link": "https://meli.la/1iHvdWs",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 525,
    "nome": "Colônia Giovanna Baby Blue 100ml",
    "preco": "R$128",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_776060-MLA107810101991_022026-O.webp",
    "link": "https://meli.la/2KX8TBW",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 526,
    "nome": "Estacao De Solda Pistola De Calor Lcd E Ferro De Solda 2 Em1 Preto 127v",
    "preco": "R$216,60",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_683492-MLB110478237714_052026-O.webp",
    "link": "https://meli.la/13PDm7h",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 527,
    "nome": "Óculos De Sol Esportivouv400 Espelhado Para Corrida Ciclismo Arco-íris Preto",
    "preco": "R$42,65",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_919934-MLB114647942270_082026-O.webp",
    "link": "https://meli.la/2jpPJcB",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 528,
    "nome": "Anel Solitário Tungstênio Zirconia Brilhante Ouro 18k Banho",
    "preco": "R$32,51",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_725135-MLB111647024571_052026-O.webp",
    "link": "https://meli.la/1fc5uKw",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 529,
    "nome": "Vitamina D3, Vitamina K2 Forged Nutrition Forged Clean em cápsula Sem sabor de 120 un",
    "preco": "R$48",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892486-MLA114478065090_082026-O.webp",
    "link": "https://meli.la/2cMazBy",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 530,
    "nome": "Fita Adesiva Veda Frestas Janela Porta Vedação 4mm 6 Metros Branco",
    "preco": "R$27,26",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676448-MLB107490491934_032026-O.webp",
    "link": "https://meli.la/1jg8o1A",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 531,
    "nome": "Calça Cargo Corta Vento Jogger Unisex Masculina Verde Skate",
    "preco": "R$64,50",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_888962-MLB84755157059_052025-O.webp",
    "link": "https://meli.la/2NSevJx",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 532,
    "nome": "Boneco 3d Motionbot Articulado Action Figure Lucky Dummy Preto",
    "preco": "R$59,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_842294-MLB94690475587_102025-O.webp",
    "link": "https://meli.la/2eUVnQJ",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 533,
    "nome": "Kit 3 Peças/mala Sacola De Viagem De Mão Esportiva Preto",
    "preco": "R$119,74",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_987772-MLB103873538903_012026-O.webp",
    "link": "https://meli.la/1g94dbu",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 534,
    "nome": "Picador Elétrico Usb 250ml Processador Para Alho Carne Verde 3.7v",
    "preco": "R$29,89",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_653743-MLB111977447087_052026-O.webp",
    "link": "https://meli.la/1SrAiKp",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 535,
    "nome": "Lindo Par De Alianças 2mm Abaulada Moeda Antiga + Solitário",
    "preco": "R$122,55",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_620460-MLB54918969962_042023-O.webp",
    "link": "https://meli.la/17HR8Mv",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 536,
    "nome": "Meia 3d Divertida Infantil Cano Alto Tamanho Único Mi 3d Cores Diversas Único Aleatorio Menina",
    "preco": "R$35,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_799700-MLB92096185478_092025-O.webp",
    "link": "https://meli.la/1iZakrC",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 537,
    "nome": "Calça Jeans Country Feminina Flare Boot Cut",
    "preco": "R$142,40",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_815982-MLB84461744976_052025-O.webp",
    "link": "https://meli.la/2nB9hWB",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 538,
    "nome": "Camisa De Pesca Premium Uv 50+ Dry Fit Proteção Solar Full Dourado Cinza G",
    "preco": "R$65,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_792647-MLB110504639655_042026-O.webp",
    "link": "https://meli.la/2RKbwoH",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 539,
    "nome": "Kit 2 Camisetas Feminina Running Sallada Mista Preto/verde",
    "preco": "R$62,60",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_710766-MLB110451292336_052026-O.webp",
    "link": "https://meli.la/1Z7noHm",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 540,
    "nome": "Body Bebê Manga Curta Estampado - 2 Peças Zig Mundi",
    "preco": "R$30,08",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_893774-MLB72127636179_102023-O.webp",
    "link": "https://meli.la/2h3BQ9p",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 541,
    "nome": "Mochila Térmica Cerveja Com Forro De Brinde - Não Vaza Gelo",
    "preco": "R$69,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_759678-MLB71589435151_092023-O.webp",
    "link": "https://meli.la/1dJDsjL",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 542,
    "nome": "Short Masculino Liso Bermuda Fit Malha Dry Cacau Esporte",
    "preco": "R$24,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_806601-MLB112015949825_052026-O.webp",
    "link": "https://meli.la/1mv2bQb",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 543,
    "nome": "Rolamento 6201 Ddu-c3 Nsk  Vedação Nitrílica 12x32x10 Prateado",
    "preco": "R$194,50",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819282-MLB115288616561_072026-O.webp",
    "link": "https://meli.la/12cxrgY",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 544,
    "nome": "Blusa Feminina Academia Fitness Action Marrom",
    "preco": "R$37,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_728917-MLB111462422255_052026-O.webp",
    "link": "https://meli.la/12vQfzh",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 545,
    "nome": "Blazer Masc Premium Slim Fit Bengaline Corte Italiano Social",
    "preco": "R$97,46",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_865994-MLA110127204650_042026-O.webp",
    "link": "https://meli.la/2yKKVvY",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 546,
    "nome": "Conjunto Masculino Slim Fit Blazer Calça Italiano Bengaline",
    "preco": "R$167,94",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_797019-MLB109637637067_032026-O.webp",
    "link": "https://meli.la/1UAAiQv",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 547,
    "nome": "Mixer Turbo 3 X 1 Turbo Inox Misturador Recarregavel Usb Preto 5v Alta Potência Bateria Longa Duração",
    "preco": "R$64",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_812604-MLB102141286422_122025-O.webp",
    "link": "https://meli.la/2eeAvJD",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 548,
    "nome": "Kit 5 Shorts Bermuda Lisos Masculino Malha Dry Cacau Esporte",
    "preco": "R$78,98",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_801508-MLB100969722913_122025-O.webp",
    "link": "https://meli.la/2LByaYc",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 549,
    "nome": "Kit 3 Pijamas - Brilha No Escuro Infantil Menino Menina",
    "preco": "R$103,52",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_722258-MLB82861122772_032025-O.webp",
    "link": "https://meli.la/2hs7U5V",
    "cupom": "ACHEINOMELI"
  },
  {
    "id": 550,
    "nome": "Papel Parede Adesivo 3d Lavável Pedra Canjiquinha Branco Com Tons De Marrom E Begê",
    "preco": "R$42,31",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_992741-MLB84204140425_042025-O.webp",
    "link": "https://meli.la/2y6eXzg",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 551,
    "nome": "Tênis On Running Cloud Leve Academia Promoção -70% Off",
    "preco": "R$232,80",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_624011-MLB106200794763_012026-O.webp",
    "link": "https://meli.la/1nwzKpQ",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 552,
    "nome": "Selante Pu40 Marrom Vedação E Colagem Multiuso Poliuretano",
    "preco": "R$26,35",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_651697-MLA99946926799_112025-O.webp",
    "link": "https://meli.la/2t6RNcZ",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 553,
    "nome": "Nattokinase 4000uf Sistema Circulatório | Natoquinase Vegano 180 Cápsulas",
    "preco": "R$249,97",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_989638-MLB116284370302_092026-O.webp",
    "link": "https://meli.la/1LR6zZz",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 554,
    "nome": "Kit 2 Capas Impermeável Protetora Banco Carro Mecânico Preto",
    "preco": "R$67,77",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_947453-MLB88767567442_082025-O.webp",
    "link": "https://meli.la/2iFDP7R",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 555,
    "nome": "Kombucha Kit Com 12un Sabores De 300ml",
    "preco": "R$139",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_859273-MLA112924100961_062026-O.webp",
    "link": "https://meli.la/32xu8cU",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 556,
    "nome": "Filtro Regulador Ar Compressor 1/4 Completo Com Espigão 3/8",
    "preco": "R$43,23",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838377-MLA99451646664_112025-O.webp",
    "link": "https://meli.la/22hxn8Z",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 557,
    "nome": "Bolsa Balde Para Ferramentas G Bolsos Externo Solze Verde Militar E Preto",
    "preco": "R$88,54",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_618539-MLB91916473662_092025-O.webp",
    "link": "https://meli.la/2DoFfgn",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 558,
    "nome": "Caixa Sifonada Mallton 10l Para Gordura Residual",
    "preco": "R$75",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_781015-MLB100759493689_122025-O.webp",
    "link": "https://meli.la/2ivgezz",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 559,
    "nome": "Escova Silicone Esfoliante Limpeza Corpo Costas Banho Azul",
    "preco": "R$24,30",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_976849-MLB114575405273_072026-O.webp",
    "link": "https://meli.la/1U7zCaM",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 560,
    "nome": "Gaveteiro Multiuso Organizador 3 Gavetas Jaguar Utilidades Preto",
    "preco": "R$43,81",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_928365-MLB117314963370_102026-O.webp",
    "link": "https://meli.la/1oCtCAd",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 561,
    "nome": "Smartwatch Eowihor X27 45 mm para Android e iOS, com Tela de 1.95\", À Prova D'Água IP68 e Pulseira Milanese Cinza",
    "preco": "R$139,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_794558-MLA117876450192_102026-O.webp",
    "link": "https://meli.la/2ypJEHo",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 562,
    "nome": "Kit 2 Pelicula Aplicador Privacidade 3d Premium Para iPhone iPhone 16 Normal",
    "preco": "R$49,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_936563-MLB112938400869_062026-O.webp",
    "link": "https://meli.la/2bJbKKk",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 563,
    "nome": "Berin Life 500ml - 2 Unidades Aubergine",
    "preco": "R$104,31",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676214-MLB116387429669_082026-O.webp",
    "link": "https://meli.la/1LzGVq3",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 564,
    "nome": "Kit 2 Pijamas Masculino Longo Botão Aberto Confortável",
    "preco": "R$117,98",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_817839-MLB70252594155_072023-O.webp",
    "link": "https://meli.la/2YCZsWm",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 565,
    "nome": "Cabo Aluminio Extensor Telescopio 5 Metros",
    "preco": "R$90,25",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_770481-MLB89023859856_082025-O.webp",
    "link": "https://meli.la/2Est476",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 566,
    "nome": "Refil 1250ml Tinta Compatível Epson L5190 L5590 L1250 L3250 Cmyk",
    "preco": "R$89,99",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_948230-MLB93746704865_092025-O.webp",
    "link": "https://meli.la/1LGi7Ms",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 567,
    "nome": "2 Protetores Salva Porta Pvc Contra Água 60/70/80/90 Cm Branco 90 Cm Salva Porta Liso",
    "preco": "R$62,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_690788-MLB116123916731_082026-O.webp",
    "link": "https://meli.la/1jnmpJs",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 568,
    "nome": "2x Película Cerâmica Fosca Privacidade Anti Spy Para Samsung S24 Ultra",
    "preco": "R$22,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_784745-MLB110073647077_042026-O.webp",
    "link": "https://meli.la/1hZMpTB",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 569,
    "nome": "Kit 3 Cinta Zero Barriga Abdominal Modeladora Compressão",
    "preco": "R$46,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_835447-MLB54282549041_032023-O.webp",
    "link": "https://meli.la/2pZMnoV",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 570,
    "nome": "Desk Pad Mouse Pad 90x45 Feroz Wf  Couro Sintético E Brinde",
    "preco": "R$48,90",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_624871-MLB116586213239_082026-O.webp",
    "link": "https://meli.la/1eSnV2A",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 571,
    "nome": "Capa Capinha Anti Shock Para Samsung + Película Cerâmica 3d Transparente E Película A15",
    "preco": "R$19,01",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_685685-MLB112764777040_062026-O.webp",
    "link": "https://meli.la/2D6oN8B",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 572,
    "nome": "Placa Sinalização Área Restrita Aviso 30x20cm Ps Vermelho, Branco E Preto",
    "preco": "R$18,59",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_978793-MLB114429877886_082026-O.webp",
    "link": "https://meli.la/2EJcodH",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 573,
    "nome": "Energético Paz Energy White Cat 473ml",
    "preco": "R$10,99",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_909050-MLA108199987553_032026-O.webp",
    "link": "https://meli.la/174Pw3F",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 574,
    "nome": "Teclado Gamer Mk32 75% 2.4ghz/usb-c/bt5.0, Inglês Us Laranja Inglês Us",
    "preco": "R$214",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_813467-MLA110735524668_052026-O.webp",
    "link": "https://meli.la/2BgAStx",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 575,
    "nome": "Semente De Cumaru (20g) - Fava Tonka | Baunilha Brasileira",
    "preco": "R$25,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_784009-MLA80754156974_112024-O.webp",
    "link": "https://meli.la/1wCXyTG",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 576,
    "nome": "Capa Capinha Magnética + Película Anti Spy Para iPhone Transparente iPhone 16 Normal",
    "preco": "R$29,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_956958-MLB111989837197_052026-O.webp",
    "link": "https://meli.la/2RHqfGX",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 577,
    "nome": "Relógio Smartwatch masculino redondo com GPS independente , 3ATM, tela AMOLED 1.43\", bateria 750mAh. Monitora batimento, SPO2 e sono, mais de 100 modos esportivos para corrida ao ar livre",
    "preco": "R$318",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_731861-MLA117072985219_092026-O.webp",
    "link": "https://meli.la/2CKuPBu",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 578,
    "nome": "10x Fita Compatível Tze 231 Brother Pt-h105 Pt-h110 Pt-d210 Branco",
    "preco": "R$132,85",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_882163-MLB95964902261_102025-O.webp",
    "link": "https://meli.la/2XN9gEZ",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 579,
    "nome": "Kit 500 Envelopes Segurança 15x20 Eco Saco Lacre Embalagem",
    "preco": "R$35,95",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_701411-MLA85124341120_052025-O.webp",
    "link": "https://meli.la/2A2vwSW",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 580,
    "nome": "Espátula Rejunte Raspador Calafetagem Silicone 3 Em 1 Preto-amarelado 2pcs",
    "preco": "R$32,52",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_639574-MLB111675160289_052026-O.webp",
    "link": "https://meli.la/1Bz1MbZ",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 581,
    "nome": "Roupa Bebê Kit 6 Pijama Longo Malha Rn Ao G Barato Atacado",
    "preco": "R$53,93",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_869855-MLB100768857869_122025-O.webp",
    "link": "https://meli.la/1JcowqQ",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 582,
    "nome": "Caixa Sobrepor Adaptador 4x2 Interruptor Inteligente Sonoff",
    "preco": "R$25,25",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_870550-MLA104704036710_012026-O.webp",
    "link": "https://meli.la/2Acfbae",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 583,
    "nome": "Kit 3 Quadros Decorativos  60x40 Safari Fundo Verde Com Nome Verde Marrom",
    "preco": "R$47,84",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_746607-MLB95599714911_102025-O.webp",
    "link": "https://meli.la/33Y3Tf5",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 584,
    "nome": "Kit 2 Ganchos Suporte Fone Ouvido Headset Mesa Setup Gamer",
    "preco": "R$24",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894010-MLB111065537283_042026-O.webp",
    "link": "https://meli.la/1Zyqi1x",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 585,
    "nome": "Capa Capinha Para Samsung Anti Impacto Suporte Anel Pedras",
    "preco": "R$32,62",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_870282-MLB106331951930_022026-O.webp",
    "link": "https://meli.la/2icAEVd",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 586,
    "nome": "Kit 2 Resistência Duo Shower Turbo Quadra 220v 7500w 35a",
    "preco": "R$37,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_762833-MLB94535813715_102025-O.webp",
    "link": "https://meli.la/2Ng4Mq7",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 587,
    "nome": "Camisa Henley Masculina De Malha Ecológica Mangas Compridas",
    "preco": "R$69,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787425-MLB98016945947_112025-O.webp",
    "link": "https://meli.la/2tz9T3J",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 588,
    "nome": "Película De Lente De Cobertura Total Para iPhone 17 Pro Max iPhone 17 Pro Max Azul Escuro",
    "preco": "R$20,17",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_946319-MLB112084148137_052026-O.webp",
    "link": "https://meli.la/11QPGtw",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 589,
    "nome": "Faixa Constellation Adesivo Quebra Sol Caminhão Volkswagen",
    "preco": "R$32,60",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_824698-MLB70907224104_082023-O.webp",
    "link": "https://meli.la/1BsGVid",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 590,
    "nome": "Maca Peruana 120 Capsulas Vitta&flora",
    "preco": "R$69,80",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_606773-MLA106049363550_022026-O.webp",
    "link": "https://meli.la/2S9LwNV",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 591,
    "nome": "Anel Aço Inoxidável Regulável Inox Cor Prata Ajustável",
    "preco": "R$19,09",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_957979-MLB102277518514_122025-O.webp",
    "link": "https://meli.la/2th3Coh",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 592,
    "nome": "Lanterna A Verdadeira Mais Forte Do Mundo 3km De Alcance A Mais Potente Recarregável Qualidade Alta Performance Com Zoom Telescópico Profissional Camping Trilha Emergência Pesca Militar Marca Popsy",
    "preco": "R$55,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_931612-MLA116512283750_092026-O.webp",
    "link": "https://meli.la/1Tt3aEQ",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 593,
    "nome": "Kit 2 Bisglicinato De Magnésio 120 Cápsulas Kyron",
    "preco": "R$56,99",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676616-MLA112699111745_062026-O.webp",
    "link": "https://meli.la/2HcN2Cg",
    "cupom": "SUPEROFERTA"
  },
  {
    "id": 594,
    "nome": "NAC 600 mg Acetilcisteina Molibdênio Selênio 120 Cápsulas 4 Meses N-acetil L-cisteína Máxima Concentração Pureza Essencial Precursor Glutationa Sem Sabor Ellym Nutrition",
    "preco": "R$61,19",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_836273-MLA112270986479_052026-O.webp",
    "link": "https://meli.la/1VoxVhv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 595,
    "nome": "Kit 2 Camisetas Feminina Fitness Academia Keep On",
    "preco": "R$56,90",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_721766-MLB111940825887_052026-O.webp",
    "link": "https://meli.la/1VKPLWW",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 596,
    "nome": "Motor Monofásico Para Betoneira 2CV 4 Pólos Bivolt Weg 127/220V",
    "preco": "R$100,86",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_974594-MLA99468177272_112025-O.webp",
    "link": "https://meli.la/2uxqcDm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 597,
    "nome": "Purificador de Água Leaf Pury Compact para Residências e Comércios, 7 Etapas de Filtragem",
    "preco": "R$933",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_735327-MLA117325861864_102026-O.webp",
    "link": "https://meli.la/2bKAToo",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 598,
    "nome": "Kit Multi Ferramentas Brushless 4 Em 1 Sem Fio: Furadeira, Chave De Impacto, Martelete E Esmerilhadeira Com 4 Baterias",
    "preco": "R$699,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_743669-MLA116961454171_082026-O.webp",
    "link": "https://meli.la/2jQHroc",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 599,
    "nome": "Super Colostro Collum para Cachorros 33g Proteína em Pó",
    "preco": "R$149,15",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_924885-MLA114324663434_082026-O.webp",
    "link": "https://meli.la/1vmDEK2",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 600,
    "nome": "Armário Multiuso Caixa Armazenamento Dobrável 55cm 5 Andares Marrom Transparente-creme Branco",
    "preco": "R$263,53",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_909175-MLA116809092245_082026-O.webp",
    "link": "https://meli.la/1eH176R",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 601,
    "nome": "Headphone Baseus Bass BH1 NC Cinza com ANC, Áudio Hi-Res e até 80h de Bateria",
    "preco": "R$239",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_648408-MLA115046010080_082026-O.webp",
    "link": "https://meli.la/2kTVdKV",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 602,
    "nome": "Kit 4 Capa de Travesseiro Repelente Protetoras com Zíper Impermeáveis Antiácaro Silenciosas Não Faz Barulho Laváveis Antialérgicas Proteção Poeira Suor Manchas - 50x70cm - Poliéster - Renova Enxovais",
    "preco": "R$52,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_928776-MLA110436855199_042026-O.webp",
    "link": "https://meli.la/2mvCWQZ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 603,
    "nome": "03 POTES do PRÓPOLIS VERDE com 1000mg por Dose - Extrato com Máxima Concentração e Biodisponibilidade - 60 Cápsulas",
    "preco": "R$119,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_647543-MLA107320330621_022026-O.webp",
    "link": "https://meli.la/2cBs6uN",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 604,
    "nome": "Interruptor Inteligente Matter Compativel Com iPhone Siri Wi-fi 2.4 Ghz Alexa Google Tuya 1 Botões 4x2 Bivolt Preto Ekaza",
    "preco": "R$58,49",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_634658-MLA116823919261_082026-O.webp",
    "link": "https://meli.la/1fVfU3g",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 605,
    "nome": "Tim Chip Kit 20 Unidades:  10 Sem Recarga E 10 Com Recarga 3 Em 1",
    "preco": "R$289,99",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_686406-MLB92303570040_092025-O.webp",
    "link": "https://meli.la/16sHuHX",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 606,
    "nome": "Kit 6 Capa de Travesseiro Repelente Protetoras com Zíper Impermeáveis Antiácaro Silenciosas Não Faz Barulho Laváveis Antialérgicas Proteção Poeira Suor Manchas - 50x70cm - Poliéster - Renova Enxovais",
    "preco": "R$69,83",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_972999-MLA108118884945_032026-O.webp",
    "link": "https://meli.la/2igvQ1f",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 607,
    "nome": "3x Frascos Diavanci Premium - Vitaminas 30ml Conta-gotas Natural",
    "preco": "R$92,99",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_667725-MLB96154072678_102025-O.webp",
    "link": "https://meli.la/2STPb8D",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 608,
    "nome": "Calda Bordalesa 1kg  Gf Agro-fungicida Agrícola E Jardinagem",
    "preco": "R$21",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892972-MLB93404181886_092025-O.webp",
    "link": "https://meli.la/1NWKNXU",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 609,
    "nome": "Torneira Cascata Monocomando para Cuba de Apoio Inox Escovado Bica Alta Água Quente e Fria",
    "preco": "R$193,03",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_881718-MLA114111685449_072026-O.webp",
    "link": "https://meli.la/28jwcXz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 610,
    "nome": "Dobradiça Vai e Vem de 3\" para Portas em Aço Inoxidável Escovado",
    "preco": "R$33",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_939892-MLA95844560795_102025-O.webp",
    "link": "https://meli.la/2EWK6bR",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 611,
    "nome": "Mixer Inox Hamilton Beach Aswe-013 Com 8 Velocidades Cor Preto/Prata",
    "preco": "R$169,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_612414-MLA99471992634_112025-O.webp",
    "link": "https://meli.la/2yPtCoi",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 612,
    "nome": "Óculos de Sol Quadrado Unissex UV400 Preto Fosco + Case",
    "preco": "R$68,75",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_886040-MLA114258992614_082026-O.webp",
    "link": "https://meli.la/1hYUGeZ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 613,
    "nome": "Enzimas Super Digestivas 1000mg - 60 Cápsulas - Star Shape Sem Sabor",
    "preco": "R$41",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_713229-MLA116536145989_082026-O.webp",
    "link": "https://meli.la/1BBbJhV",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 614,
    "nome": "Bandeira Personalizada 1.50x1.00 Dupla Face Sua Arte",
    "preco": "R$133,09",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_939918-MLB86725376027_062025-O.webp",
    "link": "https://meli.la/2aTMah9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 615,
    "nome": "Petseal Brilho A4 (220 X 307 X 0,07mm) Cx C/ 50 Pcs",
    "preco": "R$65",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_711718-MLB117732718702_102026-O.webp",
    "link": "https://meli.la/2ZmTgxz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 616,
    "nome": "Gatsby Moving Rubber Grunge Mat (80g) Cinza",
    "preco": "R$149,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_904575-MLA80156056179_102024-O.webp",
    "link": "https://meli.la/2NYrWod",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 617,
    "nome": "Suporte Ar Split Reforçado Galvanizado 7000 A 30000btu 500mm",
    "preco": "R$51,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837154-MLB97514264214_112025-O.webp",
    "link": "https://meli.la/1cU5jjV",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 618,
    "nome": "Percabonato De Sódio Premium  1kg",
    "preco": "R$28,80",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875628-MLB114804474099_072026-O.webp",
    "link": "https://meli.la/2r6s8Fv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 619,
    "nome": "Smartwatch Blackview W80PRO Tela 2.1 Bluetooth IP68 Preto Bateria 900mAh Militar",
    "preco": "R$352,45",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838744-MLA114265162535_072026-O.webp",
    "link": "https://meli.la/1dgCBGe",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 620,
    "nome": "Kit Bolsa Maternidade Menina E Menino Enxoval",
    "preco": "R$57,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_950238-MLB76539086423_052024-O.webp",
    "link": "https://meli.la/1jkN2kv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 621,
    "nome": "100 Cheirinho De Carro Personalizado Com Sua Logo Marca Amarelo Carro Novo",
    "preco": "R$83,30",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_658370-MLB93142178526_092025-O.webp",
    "link": "https://meli.la/1KfkEee",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 622,
    "nome": "Kit Shampoo + Condicionador Barba Jungle Boogie Sobrebarba",
    "preco": "R$128",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_666255-MLU70657227245_072023-O.webp",
    "link": "https://meli.la/2DbFh9g",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 623,
    "nome": "Viseira Cristal Capacete Pro Tork New Liberty 3 Transparente",
    "preco": "R$29",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628860-MLB89170746900_082025-O.webp",
    "link": "https://meli.la/1NWLzrz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 624,
    "nome": "Edredom Queen Bernadete Casa Reversível 400 Fios Grafite Hipoalergênico",
    "preco": "R$261,25",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_835007-MLA95845091541_102025-O.webp",
    "link": "https://meli.la/1n4xk8P",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 625,
    "nome": "Sérum De Crescimento De Sobrancelhas Rainha Nativa",
    "preco": "R$97",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_879089-MLA113185675846_072026-O.webp",
    "link": "https://meli.la/1bLyCjm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 626,
    "nome": "Suporte Para Pendurar Bicicleta De Parede Horizontal Preto Passador De Cadeado",
    "preco": "R$33,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_889313-MLB114593743115_072026-O.webp",
    "link": "https://meli.la/1W7zm2k",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 627,
    "nome": "Compre 1 Leve 2- Max Lashes Rímel Com Infusão De Sérum Preto",
    "preco": "R$94,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_703685-MLB91682072241_092025-O.webp",
    "link": "https://meli.la/25V8Tc2",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 628,
    "nome": "Swissport Bolsa Masculino Antifurto Saida USB Impermeável Moderna Escolar Faculdade Mochilas",
    "preco": "R$298,20",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_633470-MLA112969357217_062026-O.webp",
    "link": "https://meli.la/1kbfFjj",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 629,
    "nome": "Eleva Alcalinidade Para Manutenção Eficaz Em Piscina 8kg",
    "preco": "R$105,65",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_917523-MLB114808735839_072026-O.webp",
    "link": "https://meli.la/2q7Wx7b",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 630,
    "nome": "Papel Manteiga Kraft Marrom 50x70 C/200 Unidades",
    "preco": "R$90,96",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_608911-MLB111989884945_052026-O.webp",
    "link": "https://meli.la/2GpSuE2",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 632,
    "nome": "Kit 2 Acabamento Válvula Descarga Cromado Hydra Deca Docol",
    "preco": "R$34,46",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_610877-MLB109945005498_042026-O.webp",
    "link": "https://meli.la/2xFCtSt",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 633,
    "nome": "Leiteira Fervedor Antiaderente 1,5L Granito Alumínio para Indução Gás Elétrico Vitrocerâmico Cabo Amadeirado Branco Granito",
    "preco": "R$49,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_685387-MLA117042104366_102026-O.webp",
    "link": "https://meli.la/1iztTiW",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 634,
    "nome": "Inova Fone De Ouvido Bluetooth Bateria De Longa Todo Celular Branco",
    "preco": "R$57",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_717520-MLB100435276438_122025-O.webp",
    "link": "https://meli.la/1iT3s66",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 635,
    "nome": "Pomada Efeito Matte Seco Masculina Profissional Forte",
    "preco": "R$66",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_982337-MLB117153091885_092026-O.webp",
    "link": "https://meli.la/1RpFCKU",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 636,
    "nome": "10 Metros Mangueira Combustivel Tecalon 8mm X 6mm  Preto",
    "preco": "R$32,55",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_602380-MLB73903004345_012024-O.webp",
    "link": "https://meli.la/1sc63Vc",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 637,
    "nome": "Kit 5 Saco Organizador Multiuso Pmg Embalagem Pvc Cristal 100% Pvc Transoparente",
    "preco": "R$34,19",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_719773-MLB90421402005_082025-O.webp",
    "link": "https://meli.la/2fYV6DJ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 638,
    "nome": "Kit 20 Sacolas de Presente de PVC Transparente com Alça e Borda Preta Impermeáveis",
    "preco": "R$55,23",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_721515-MLA114702957961_072026-O.webp",
    "link": "https://meli.la/1LcYJdT",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 639,
    "nome": "Máscara Descartável Tripla Proteção 50 Und Azul 95% Eficácia Azul-celeste",
    "preco": "R$19",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_832549-MLB106496398855_022026-O.webp",
    "link": "https://meli.la/2teiQHG",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 640,
    "nome": "Spray De Rinite Limpeza Para Corrimento Por Alergia",
    "preco": "R$55",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_847846-MLA117808062930_102026-O.webp",
    "link": "https://meli.la/1fTFUX5",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 641,
    "nome": "Conj. 4x2 Tomada Dupla 20a Branca + Vermelha Liz Tramontina",
    "preco": "R$29",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_703524-MLB93402541457_092025-O.webp",
    "link": "https://meli.la/1YDU8u8",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 642,
    "nome": "2película Capa Capinha Para Xiaomi Poco X8 Pro Anti Impacto Preto",
    "preco": "R$30,64",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_694660-MLB114180394998_082026-O.webp",
    "link": "https://meli.la/2jfDcE1",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 643,
    "nome": "Protetor Colchão Impermeável Solteiro Matelado Ultrassônico",
    "preco": "R$47,44",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_630475-MLA95834263333_102025-O.webp",
    "link": "https://meli.la/1ctw2nd",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 644,
    "nome": "Viseira New Liberty 3 Cristal + Par Reparo Fixador Cristal",
    "preco": "R$35",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_695747-MLB89176331932_082025-O.webp",
    "link": "https://meli.la/2SPoQNf",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 645,
    "nome": "Kit Lavador Nasal Kreain Nature com 2 Sprays para Higiene e Conforto Diário",
    "preco": "R$121",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787497-MLA115627589359_082026-O.webp",
    "link": "https://meli.la/21qCDWH",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 646,
    "nome": "Tomada Dupla Usb Eletro Mex Espelho Parede Universal Duas portas USB 4x2 ABS 10A Embutir Dourado",
    "preco": "R$29,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_999720-MLA116747131295_082026-O.webp",
    "link": "https://meli.la/1fm4XBm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 647,
    "nome": "Capa Capinha Anti Shock Para Samsung + Película Cerâmica 3d Transparente E Película A35",
    "preco": "R$19,30",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_826535-MLB113956044181_062026-O.webp",
    "link": "https://meli.la/1YpBsWr",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 648,
    "nome": "Porta Guardanapo Folha Costela De Adão Decorativo Verde Verde",
    "preco": "R$24,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_932419-MLB114188256185_072026-O.webp",
    "link": "https://meli.la/2RJnBuz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 649,
    "nome": "Compressor de Ar Portátil AstroAI AIRUN L7S com Display Digital para Pneus de Carro",
    "preco": "R$120,02",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_859793-MLA110817269569_042026-O.webp",
    "link": "https://meli.la/2K1KFHa",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 650,
    "nome": "Okut Hub Usb C Hdmi Sd Extensor Tipo C Adaptador Macbook 3.0 Cinza-escuro",
    "preco": "R$49,50",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_765312-MLB110742603105_042026-O.webp",
    "link": "https://meli.la/1PmSLB4",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 651,
    "nome": "Mousepad Bullpad 70x30cm Fundo Emborrachado Antiderrapante Cor Caramelo",
    "preco": "R$72,08",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_855354-MLA94562554990_102025-O.webp",
    "link": "https://meli.la/2jdi3kN",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 652,
    "nome": "Kit 10 Organizadores de Gaveta Para Camiseta Roupa Plastico",
    "preco": "R$74",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_659172-MLA96139886451_102025-O.webp",
    "link": "https://meli.la/2ZuWYip",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 653,
    "nome": "Kit 6 Saquinho Saco Maternidade Bebê Organizador Tag Bordado",
    "preco": "R$69,33",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_725106-MLB88783681808_082025-O.webp",
    "link": "https://meli.la/2ovehxU",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 654,
    "nome": "Kit 6 Espalhador Fogão Esmaltec 6 Bocas Veneza Bali Caribe",
    "preco": "R$24,15",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_994868-MLB81125195693_122024-O.webp",
    "link": "https://meli.la/2ZavZp9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 655,
    "nome": "Plus Do Brasil Carregador Turbo Para Samsung Galaxy S26 S25 S24 S23 S22 S21 S20 Fe Ultra Motorola M22 M31 M32 M62 M63 M64 G15 Xiaomi Redmi Note 12 13 14 15 - Cabo Blindado Tipo Usb C",
    "preco": "R$49,99",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_697207-MLA110158339788_042026-O.webp",
    "link": "https://meli.la/1rURYm3",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 656,
    "nome": "Máscara Matizante Cinza Specialiste 250g Bio Extratus",
    "preco": "R$74,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_713895-MLA99391022600_112025-O.webp",
    "link": "https://meli.la/1bECNfC",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 657,
    "nome": "Relógio Manômetro Pressão Hidráulica 3500 Psi  1/4 Npt 63mm",
    "preco": "R$82,11",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_780968-MLB114606147049_072026-O.webp",
    "link": "https://meli.la/1Z9GxRN",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 658,
    "nome": "Óculos de Sol Quadrado Unissex UV400 Marrom + Case",
    "preco": "R$66",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_833734-MLA115656760209_082026-O.webp",
    "link": "https://meli.la/2MzE96a",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 659,
    "nome": "Bolsa Tote Feminina Tomi Mito Croco em Couro Sintético PU, Marrom Café com Alça Ajustável",
    "preco": "R$66,50",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970552-MLA114589672679_072026-O.webp",
    "link": "https://meli.la/2ckPBsC",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 660,
    "nome": "Manta De Fibra Cerâmica 2000x610x12,7mm Suporta Até 1260º",
    "preco": "R$69",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922646-MLB116611349668_092026-O.webp",
    "link": "https://meli.la/2QzfuNz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 661,
    "nome": "Calça Legging Montaria Flanelada Preta Tecido Premium",
    "preco": "R$39,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_967703-MLB88594060277_072025-O.webp",
    "link": "https://meli.la/14HywPs",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 662,
    "nome": "4 Túnel + 6 Placas De Cola Pega Rato Ratazana Forte Proteção",
    "preco": "R$71,15",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_968262-MLA116491561621_082026-O.webp",
    "link": "https://meli.la/1DjePjL",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 663,
    "nome": "Tonalizante Excllusiv Haskell - Castanho Medio Vermelho 466",
    "preco": "R$29,99",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973436-MLA100064129579_122025-O.webp",
    "link": "https://meli.la/1gY4gjb",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 664,
    "nome": "Tênis Infantil B2a Kids Meninas Bordado De Gatinho T004",
    "preco": "R$64,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_643626-MLB98666415975_112025-O.webp",
    "link": "https://meli.la/2MhEY4M",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 665,
    "nome": "Meião Cortado Sem Pé Futebol Canelito Prosocks Armor Compressão Profissional Cor Azul Escuro Tamanho Único",
    "preco": "R$64,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_925058-MLA111928186382_062026-O.webp",
    "link": "https://meli.la/1zzxoiN",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 666,
    "nome": "Kit2 Disco 9 Inch Lamina Corrente Para Roçadeira Corta Motoserra T20 Com Dente Anel De Redução 230mm",
    "preco": "R$58,19",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_916967-MLA113289558188_072026-O.webp",
    "link": "https://meli.la/13x5Wxg",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 667,
    "nome": "Pack 100 Protetores de Cabeça para Parafusos NiOFF, Tampas Selantes de Galvalume para Telhas Metálicas",
    "preco": "R$38,16",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_927236-MLA117042235618_102026-O.webp",
    "link": "https://meli.la/2AF7JJM",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 668,
    "nome": "Kit 3 Sutiã Em Renda Sem Bojo Com Aro Sigh Balconet Ref 462 Cores Variadas M (42)",
    "preco": "R$48,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_620108-MLB32104110377_092019-O.webp",
    "link": "https://meli.la/1rF6Wpe",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 669,
    "nome": "Bolsa De Ferramentas Forte Durável Lona Grossa Pequena Solze Preto",
    "preco": "R$50,49",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_912873-MLA116983308551_082026-O.webp",
    "link": "https://meli.la/1oZWGaq",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 670,
    "nome": "Sementes De Aipo Salsão Tall Utah 1250 Un 350mg Feltrin",
    "preco": "R$22,77",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_622198-MLA118920752769_102026-O.webp",
    "link": "https://meli.la/2otBcJ2",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 671,
    "nome": "1 Sciatieasy 60 Caps Uso Diário Sciati Easy Articulações Imediato",
    "preco": "R$40,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_950316-MLA109531409844_042026-O.webp",
    "link": "https://meli.la/1FnNSsA",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 672,
    "nome": "Brinquedo Com Ventosa Para Bebês Gruda No Vidro Kit 3 Peças Amarelo Borboleta",
    "preco": "R$39,99",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_779197-MLB118714423059_102026-O.webp",
    "link": "https://meli.la/2KBgCg1",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 673,
    "nome": "6 Cantoneira 70x50 Junção De Aço Para Telhado Viga Caibro L",
    "preco": "R$41,32",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973751-MLA115795300888_092026-O.webp",
    "link": "https://meli.la/27NbK7s",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 674,
    "nome": "Sal Rosa Do Himalaia Grosso 500g (granel) Bombay Herbs & Spi",
    "preco": "R$11,82",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_714466-MLA99887979455_112025-O.webp",
    "link": "https://meli.la/2BFJD9F",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 675,
    "nome": "Shampoo Em Barra Alecrim E Chá Verde Arte Dos Aromas 70g",
    "preco": "R$38",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_614483-MLA99361488854_112025-O.webp",
    "link": "https://meli.la/1fGsNaC",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 676,
    "nome": "CITRULINA (L-Citrulinilarginina) - Fórmula Avançada para o Desempenho Físico - 60 Cápsulas",
    "preco": "R$47,31",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_689468-MLA113497563226_072026-O.webp",
    "link": "https://meli.la/1U3i6NL",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 677,
    "nome": "Páprica Defumada Bombay Herbs & Spices Pouch 20g",
    "preco": "R$14,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_622395-MLA99816455519_112025-O.webp",
    "link": "https://meli.la/1Jb4gis",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 678,
    "nome": "Cartaz Oferta - Sulfite - 32x22cm - Cento",
    "preco": "R$26,19",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_669818-MLB117136660157_092026-O.webp",
    "link": "https://meli.la/2nZhqyk",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 679,
    "nome": "Chaveiro Acrílico 3x4 (100 Pçs)",
    "preco": "R$95",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_888538-MLB48354826550_112021-O.webp",
    "link": "https://meli.la/1gGcoi4",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 680,
    "nome": "Kaspersky Total Security. 1 Pc .. 2 Anos. Envio Imediato",
    "preco": "R$30",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_716074-MLB110296948382_052026-O.webp",
    "link": "https://meli.la/2quCFYU",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 681,
    "nome": "Kit Escovas Trio Raquete Flex, Escova Mágica E Escova Massag Cor Lilás",
    "preco": "R$38",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_687771-MLA113992330334_072026-O.webp",
    "link": "https://meli.la/29t4ibs",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 682,
    "nome": "Crucifixo de Mesa e Parede com Medalha São Bento 19cm Madeira e Metal",
    "preco": "R$28,08",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_798569-MLA99593691846_122025-O.webp",
    "link": "https://meli.la/1T8bRSz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 683,
    "nome": "Mata Barata Veneno Dedetizador E Inseticida Age 1l Bom",
    "preco": "R$32,87",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_634633-MLA99344320270_112025-O.webp",
    "link": "https://meli.la/1gkYNwh",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 684,
    "nome": "Sementes De Zinia Raras Gigante Cores Variadas+gotejador",
    "preco": "R$31,85",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_774494-MLB45795100646_052021-O.webp",
    "link": "https://meli.la/2ydVFTS",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 685,
    "nome": "Rebolo Copo Cônico 3\" Forcety C60 Porcelanato Mármore Granito",
    "preco": "R$28",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_708054-MLA100086848389_122025-O.webp",
    "link": "https://meli.la/1LqkuZY",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 686,
    "nome": "Partida Retratil Gerador 4t 4hp A 7hp Gx120/106/200",
    "preco": "R$31,26",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_874866-MLB114599607048_082026-O.webp",
    "link": "https://meli.la/2o7jmpY",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 687,
    "nome": "Adesivo Protetor De Tanque Nmax 2025",
    "preco": "R$29,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_733574-MLB87052831589_072025-O.webp",
    "link": "https://meli.la/1gJnjdm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 688,
    "nome": "Sementes De Tomate Cereja Amarelo Yashi 59 Un 100mg Feltrin",
    "preco": "R$26,16",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_673638-MLA99562181580_122025-O.webp",
    "link": "https://meli.la/2mEJXgh",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 689,
    "nome": "Rebolo Copo Cônico 3 Polegadas 120 Porcelanato Forcety Grão 120 Desbaste",
    "preco": "R$28,65",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_977969-MLA113350519005_062026-O.webp",
    "link": "https://meli.la/12pupsp",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 690,
    "nome": "Adubo Orquídeas Crescimento Granulado Hydrofert 30-09-10 200g",
    "preco": "R$25,89",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_856410-MLA110663178245_042026-O.webp",
    "link": "https://meli.la/23a66nB",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 691,
    "nome": "Película Câmera Strass Brilho Para iPhone 16 / 16 Plus",
    "preco": "R$21,84",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_778632-MLB88985268503_072025-O.webp",
    "link": "https://meli.la/1VRkhNx",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 692,
    "nome": "50 Parafusos Sextavados 8.8 Ri + 50 Porcas Zincadas 6x20",
    "preco": "R$21,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_939208-MLB95713088136_102025-O.webp",
    "link": "https://meli.la/1AWa8La",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 693,
    "nome": "Óleo De Neem Concentrado 250ml + Spray - Rende 75lt",
    "preco": "R$23,99",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_614234-MLB111614614486_062026-O.webp",
    "link": "https://meli.la/1LUJLZg",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 694,
    "nome": "2x Película Cerâmica Fosca Privacidade Anti Spy Para Samsung S20fe",
    "preco": "R$22,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_722277-MLB109226801676_042026-O.webp",
    "link": "https://meli.la/2N8ZApz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 695,
    "nome": "Touca Para Natação E Hidroginástica Adulto Unisex Em Helanca Cor Azul royal Tamanho U",
    "preco": "R$10,77",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_991883-MLA95962564069_102025-O.webp",
    "link": "https://meli.la/29P6Wry",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 696,
    "nome": "Caneta Touch Screen Stylus Universal 2 Em 1 Tablet Celular Preto",
    "preco": "R$19,27",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_788321-MLB112007642602_062026-O.webp",
    "link": "https://meli.la/2spi6Xe",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 697,
    "nome": "Carretilha Molinete Pesca,18+1 Rolamentos 7.2:1 Pescaria A23-left Esquerdo",
    "preco": "R$54,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_630021-MLB118100396271_092026-O.webp",
    "link": "https://meli.la/1cy4vy1",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 698,
    "nome": "Eros Blend Suplemento Nootrópico Masculino Sem Sabor",
    "preco": "R$147,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_646216-MLA107585538469_022026-O.webp",
    "link": "https://meli.la/2fSQUP7",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 699,
    "nome": "Splash Mini 9,5 X 9,8 Cm 100 Unidades",
    "preco": "R$24,25",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_930859-MLB46492549716_062021-O.webp",
    "link": "https://meli.la/1kznrHR",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 700,
    "nome": "Calda Sulfocálcica Pronta Em Pó 1 Kg -gf Agro",
    "preco": "R$19",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_844522-MLB111510666974_062026-O.webp",
    "link": "https://meli.la/1PRzTEb",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 701,
    "nome": "Sementes De Capuchinha Dobrada 8 Un 1g Feltrin",
    "preco": "R$23,46",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_638930-MLA110839803211_042026-O.webp",
    "link": "https://meli.la/1aAZ3ko",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 702,
    "nome": "Yoyo ( Ioio, Yo-yo) Profissional Champion Yin-yang Vermelho",
    "preco": "R$22,20",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_789442-MLA100070953767_122025-O.webp",
    "link": "https://meli.la/2dbYrp7",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 703,
    "nome": "License Office 365 Personal 2026 Original Digital",
    "preco": "R$89",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_749779-MLB116840837905_082026-O.webp",
    "link": "https://meli.la/2ZdHmXc",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 704,
    "nome": "Máquina de Cortar Cabelo Profissional Elétrica KiNVO Recarregável Sem Fio Com Tela Digital",
    "preco": "R$139",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_683672-MLA115381836610_082026-O.webp",
    "link": "https://meli.la/1rJnqe1",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 705,
    "nome": "Evlution Nutrition L-citrulline 2000 - 2000 Mg De Pó De L-ci Sem Sabor",
    "preco": "R$114,11",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_976430-CBT109806788455_032026-O.webp",
    "link": "https://meli.la/26mssH2",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 706,
    "nome": "Etiqueta Identificação Tomada Adesivo Voltagem Prova D'água 220v 110v - 100 Unidades",
    "preco": "R$19,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_645345-MLA106660694395_022026-O.webp",
    "link": "https://meli.la/1CMkbHR",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 707,
    "nome": "Envelope Segurança Plástico Preto 60x70 cm Kit com 100 Unidades",
    "preco": "R$78,89",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_647593-MLA96119972409_102025-O.webp",
    "link": "https://meli.la/2fQFFYH",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 708,
    "nome": "Corda Nr18 Tipo Bombeiro 12mm Em Poliamida Bobina 50 Metros",
    "preco": "R$174,80",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_763455-MLA93507128643_092025-O.webp",
    "link": "https://meli.la/2EETNwu",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 709,
    "nome": "Masseira Caixa Para Massa Pedreiro Construção 500 Litros",
    "preco": "R$369",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858386-MLB115352673986_082026-O.webp",
    "link": "https://meli.la/2P18pEh",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 710,
    "nome": "Kit 20 Sacolas Presente de PVC Transparente Com Borda para Festa",
    "preco": "R$55,23",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_734715-MLA113441110224_072026-O.webp",
    "link": "https://meli.la/252sqW6",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 711,
    "nome": "Máquina de Waffles Profissional Gaonas para 25 Mini Hotcakes e Panquecas Antiaderente 3000W",
    "preco": "R$99,80",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922088-MLA114940797249_072026-O.webp",
    "link": "https://meli.la/2WgorS8",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 712,
    "nome": "Envelope de Segurança Para Sangria De Caixa Com 1000 Unidades",
    "preco": "R$103",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892960-MLA107004053995_022026-O.webp",
    "link": "https://meli.la/1MtCVGE",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 713,
    "nome": "Porta Agulha Mayo Hegar Com Videa 15 Cm Tipo de alicate Reta",
    "preco": "R$126,41",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_783977-MLA84557686404_052025-O.webp",
    "link": "https://meli.la/15u43vi",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 714,
    "nome": "4 Cabos De Alumínio Para Rodos Ou Vassouras Azul",
    "preco": "R$74,99",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_673503-MLA100046597701_122025-O.webp",
    "link": "https://meli.la/2oBbHoU",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 715,
    "nome": "Cabo Extensor 6 metros Pr Limpeza De Lugres De Dificil Acesso",
    "preco": "R$90,96",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_983620-MLA99362496148_112025-O.webp",
    "link": "https://meli.la/1Pp3Uhv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 716,
    "nome": "3x Maca Peruana 100% Pura 500mg 120 Cápsulas Fusivitta Sem Sabor",
    "preco": "R$58,20",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_668183-MLB114535872012_082026-O.webp",
    "link": "https://meli.la/1ABt5xL",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 717,
    "nome": "Kit Carregador Para Relógio Apple Watch Series 9 8 7 6 5 4 3 Branco",
    "preco": "R$76",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_602827-MLB110347838606_052026-O.webp",
    "link": "https://meli.la/18qiZuJ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 718,
    "nome": "Edredom Super King Bege Veludo Dupla Face Algodão 250 Fios Bernadete Casa",
    "preco": "R$567,64",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_666938-MLA95399606786_102025-O.webp",
    "link": "https://meli.la/2Mukem6",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 719,
    "nome": "Ducha Cascata Piscina Sollux Alumínio Preto Fosco Redonda 30cm",
    "preco": "R$257,39",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_945539-MLA114253615391_072026-O.webp",
    "link": "https://meli.la/1kzCWMy",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 720,
    "nome": "Capa Capinha Case Clear Acrílica Premium Magnética Magsafe Compatível iPhone 14 Pro Max - Sunlover Beachwear",
    "preco": "R$54,65",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_832200-MLA113152642604_072026-O.webp",
    "link": "https://meli.la/1AtMSrH",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 721,
    "nome": "Cera Modeladora Efeito Teia Fox For Men 15 Unidades 80g",
    "preco": "R$139,65",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_992661-MLB78161197305_082024-O.webp",
    "link": "https://meli.la/1sJ7kbA",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 722,
    "nome": "Tenda Kit de Roteadores Sistema Mesh Wi-Fi 6 EX3 AX1500 2-Pack Dual-Band, Cobertura até 200m², Roaming Contínuo, Compatível com Vivo/Claro/TIM, Ideal para Casas Médias Brasileiras",
    "preco": "R$449,99",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787054-MLA100026560677_122025-O.webp",
    "link": "https://meli.la/31Q7KER",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 723,
    "nome": "Auscultadores Bluetooth V5.3 Para Capacete De Motocicleta, Headset Rgb Sem Fio Música GPS Chamadas Handsfree Alta Potência",
    "preco": "R$68,82",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_853140-MLA113659254032_072026-O.webp",
    "link": "https://meli.la/2wUeTvk",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 724,
    "nome": "Eros Hot Skin & Body Organic: Suplemento p/ Máxima Performance Masculina c/ 120 Cápsulas",
    "preco": "R$257,92",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_604608-MLA109924643783_042026-O.webp",
    "link": "https://meli.la/1KCTXbB",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 725,
    "nome": "Batom Matte Allso Vintage Rouge Cremoso Longa Duração Resistente Alta Fixação Alta Pigmentação Não Transfere Hidrata os Lábios Fórmula Leve Dia e Noite Maquiagem Lipstick Long Lasting Transfer Proof",
    "preco": "R$110,20",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_670929-MLA116139607764_092026-O.webp",
    "link": "https://meli.la/2ej676x",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 726,
    "nome": "Escorredor De Mamadeira E Acessórios Portátil - Clingo",
    "preco": "R$35,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_680346-MLA99634235800_122025-O.webp",
    "link": "https://meli.la/2BaVWGX",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 727,
    "nome": "Revitalizador Para Mármore E Granito Rock Star - 155ml",
    "preco": "R$24,85",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_992928-MLB113146656236_072026-O.webp",
    "link": "https://meli.la/23pKusQ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 728,
    "nome": "Par De Alianças 8mm Casamento Noivado Moedas Antigas + Anel",
    "preco": "R$122,55",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_701400-MLB71389472825_082023-O.webp",
    "link": "https://meli.la/2NJAKNB",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 729,
    "nome": "Saco De Lixo Perfumado Rosa 20l - 50 Unidades",
    "preco": "R$22,17",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973189-MLA111223823849_052026-O.webp",
    "link": "https://meli.la/2iSqLA7",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 730,
    "nome": "Protetor De Colchão Impermeável Casal Matelado Ultrassônico",
    "preco": "R$59,05",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_738368-MLA96153268753_102025-O.webp",
    "link": "https://meli.la/2HkXQ8r",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 731,
    "nome": "Suporte Articulado Parede Laje P/ Antena Starlink 3a Geração",
    "preco": "R$117",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_792429-MLA99767979546_122025-O.webp",
    "link": "https://meli.la/19cXhkb",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 733,
    "nome": "4 Placas Sinalização Banheiro Masculino E Feminino Regras",
    "preco": "R$24,11",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_930130-MLB80422347827_112024-O.webp",
    "link": "https://meli.la/11dY51C",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 734,
    "nome": "Kit Caneleira Futebol ImpactFly + Porta Caneleleira BagImpact Prosocks cor Branco Tamanho Único",
    "preco": "R$99,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_856912-MLA109591600824_042026-O.webp",
    "link": "https://meli.la/26fFu2r",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 735,
    "nome": "Armário Baixo Para Escritório Com 2 Portas Com Chave Com 1 Prateleira Regulável Cinza",
    "preco": "R$425",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_692314-MLA98090588417_112025-O.webp",
    "link": "https://meli.la/1fSDafT",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 736,
    "nome": "Nebulizador Portátil Recarregável Silencioso Infantil Adulto Branco 127/220v",
    "preco": "R$59,99",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_803742-MLB114539843016_082026-O.webp",
    "link": "https://meli.la/2k5qv4m",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 737,
    "nome": "Capa Capinha Clear Case Silicone P/ iPhone 14 15 16 Pro Max 17 Pro Max Liso",
    "preco": "R$26",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_967337-MLB100083133848_122025-O.webp",
    "link": "https://meli.la/2SE9v7e",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 738,
    "nome": "Kit 2 Película 3d Privacidade Para iPhone 12 13 14 15 16 Pro",
    "preco": "R$24,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_650816-MLB115946954291_082026-O.webp",
    "link": "https://meli.la/2vihguN",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 739,
    "nome": "Molho De Pimenta Sriracha Hot Chilli Thaiger 440 Ml",
    "preco": "R$52,80",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_755388-MLA116764109533_082026-O.webp",
    "link": "https://meli.la/2eRpY7B",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 740,
    "nome": "Case Resistente Impermeável Para Multímetro Fluke 179",
    "preco": "R$78,30",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_872250-MLB74583138342_022024-O.webp",
    "link": "https://meli.la/2ueeY4H",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 741,
    "nome": "Kit 2 Carretilha 9 Rolamentos Vara Carbono P Tucunaré 1,80m",
    "preco": "R$189,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_652993-MLB101613990173_122025-O.webp",
    "link": "https://meli.la/2M4PaSD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 742,
    "nome": "Creme Homeopast Tripla Ação, Hidratante para Pés Ressecados e Sensíveis com Toque Seco 100g",
    "preco": "R$74,20",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_830990-MLA106040523366_022026-O.webp",
    "link": "https://meli.la/2owq2Dm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 743,
    "nome": "Kit Cirúrgico Para Castração 19 Peças Completo-veterinário. Kit Instrumental",
    "preco": "R$570,40",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_820825-MLB91943245832_092025-O.webp",
    "link": "https://meli.la/1btNeec",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 744,
    "nome": "Fita De Aço Inox 430 Largura 1/2 X Esp. 0,5mm X Rolo C/ 25m Inox 430",
    "preco": "R$52,98",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_999361-MLA109947866824_042026-O.webp",
    "link": "https://meli.la/1nEHorZ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 745,
    "nome": "2 Criado Mudor C/ Gaveta E Prateleira Maravilho Quarto Decor Acabamento Fosco Cor Kit Max Cinza",
    "preco": "R$177,55",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_616770-MLA99435841972_112025-O.webp",
    "link": "https://meli.la/2TbHJvS",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 746,
    "nome": "Copo Long Drink Vidro 370ml Haüskraft Egeu Transparente 6 Peças",
    "preco": "R$65,03",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_936315-MLA110090234892_042026-O.webp",
    "link": "https://meli.la/2Pc1SQy",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 747,
    "nome": "Kit Caneleira Futebol ImpactFly + Porta Caneleleira BagImpact Prosocks cor Preto Tamanho Único",
    "preco": "R$99,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_699019-MLA110469832673_042026-O.webp",
    "link": "https://meli.la/2bZgcUk",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 748,
    "nome": "Moldura Painel para Volkswagen Polo Virtus T-Cross Tiguan de 9 Polegadas Black Piano",
    "preco": "R$43",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_767997-MLA104704608780_012026-O.webp",
    "link": "https://meli.la/1bdTFxT",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 749,
    "nome": "Batom Matte Allso Royal Bloom Cremoso Longa Duração Resistente Alta Fixação Alta Pigmentação Não Transfere Hidrata os Lábios Fórmula Leve Dia e Noite Maquiagem Lipstick Long Lasting Transfer Proof",
    "preco": "R$71,25",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_717003-MLA116139923010_092026-O.webp",
    "link": "https://meli.la/33rAugy",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 750,
    "nome": "Piercing Semijoias Fake Fios Banhado À Ouro 18k C/ Garantia Ouro",
    "preco": "R$22,99",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_946807-MLB114375307652_082026-O.webp",
    "link": "https://meli.la/1vPUQgX",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 751,
    "nome": "Gelatina Cachos System 250g Definição Nutritiva Aneethun",
    "preco": "R$172,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_751764-MLA99926484895_112025-O.webp",
    "link": "https://meli.la/2j8MKTp",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 752,
    "nome": "Acabamento De Registro Barcelona Preto Fosco Banheiro",
    "preco": "R$74,09",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_928340-MLA110080706648_042026-O.webp",
    "link": "https://meli.la/1nRTrRL",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 753,
    "nome": "Kit 10 passa fio fibra vidro Profissional Isolamento 4mm com estojo Puxa Fios Elétricos Por Conduítes Paredes E Tetos Conexão Rosqueável Fácil Estender Passa Facilmente Por Curva",
    "preco": "R$73,24",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_983689-MLA111521849261_052026-O.webp",
    "link": "https://meli.la/1GtKRyt",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 754,
    "nome": "Bastão Tripé Pau Selfie Bluetooth 130cm, Controle, Tripé Bastão De Selfie Extensível, Eletro Mex",
    "preco": "R$29,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_683322-MLA111026878489_042026-O.webp",
    "link": "https://meli.la/1ktZhZx",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 755,
    "nome": "Dobradiça de porta Vai e Vem 3 polegadas Coimbra",
    "preco": "R$72,19",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_911249-MLA77372560783_072024-O.webp",
    "link": "https://meli.la/1uxEyxV",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 756,
    "nome": "2 Pares Meia Antiderrapante Futebol Prosocks Grip Draft Cano Médio Profissional com 1 Par Preto e 1 Par Branco Tamanho 33-37",
    "preco": "R$94,40",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_977722-MLA111699525991_052026-O.webp",
    "link": "https://meli.la/29in72K",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 757,
    "nome": "Suplemento Cavalos Potros Atletas Crescimento Massa Corporal 1kg",
    "preco": "R$79,95",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_860508-MLA115890473471_082026-O.webp",
    "link": "https://meli.la/1cURsMY",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 758,
    "nome": "30 Logotipos Termocolantes Para Camiseta Uniforme Futebol",
    "preco": "R$44,23",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875747-MLA84900440698_052025-O.webp",
    "link": "https://meli.la/2oQB6ZQ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 759,
    "nome": "Kit Difusor E Vela - Gold 22k Vanilla Salt 100ml Di Piettro",
    "preco": "R$100",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_912658-MLB116785681095_082026-O.webp",
    "link": "https://meli.la/2K7nmCc",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 760,
    "nome": "Vestido Fantasia Minnie Princesa Infantil Carnaval Halloween",
    "preco": "R$97,84",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_896814-MLB116847007148_092026-O.webp",
    "link": "https://meli.la/1cHyAgT",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 761,
    "nome": "Bíblia Slim Premium Luxo Arc C/ Harpa Full Color - Minimalista Marrom",
    "preco": "R$58,41",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_663056-MLA98730639048_112025-O.webp",
    "link": "https://meli.la/2GkcqQC",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 762,
    "nome": "Kit 100 Flanelas De Microfibra Preta Para Limpeza De Óculos Cor Preto",
    "preco": "R$44",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_756159-MLA96655652031_102025-O.webp",
    "link": "https://meli.la/1KumPTj",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 763,
    "nome": "Kit Rebite De Repuxo Pop Em Alumínio 4,0 X 25mm Com 1000 Un",
    "preco": "R$98,25",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_613559-MLA96075166765_102025-O.webp",
    "link": "https://meli.la/2bQGhxm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 764,
    "nome": "Moldura Painel Corsa Wind Sedã 2003 Maxx Montana Classic Preto",
    "preco": "R$98",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_683809-MLA111761765567_052026-O.webp",
    "link": "https://meli.la/1vmavZv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 765,
    "nome": "1 Gel Cola P/ Fabricacao De Mega Hair 120 Gramas",
    "preco": "R$62",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_771202-MLB110179015977_042026-O.webp",
    "link": "https://meli.la/1vpTz9L",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 766,
    "nome": "Gel Crioterápico Hidramais 1kg Profissional",
    "preco": "R$92,89",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_990734-MLA53430246913_012023-O.webp",
    "link": "https://meli.la/1kY4Ufp",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 767,
    "nome": "2 Pares Meia Antiderrapante Futebol Prosocks Grip Draft Cano Médio Profissional com 2 Pares Branco Tamanho 38-44",
    "preco": "R$89,99",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_719263-MLA97776950884_112025-O.webp",
    "link": "https://meli.la/27n7auz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 768,
    "nome": "Moldura 9 2din Nissan Kicks 2016 A 2023 Preto Fosco Preto Fosco",
    "preco": "R$89,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_781230-MLA108246709250_032026-O.webp",
    "link": "https://meli.la/1mfcbf7",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 769,
    "nome": "Envelope Segurança 20x30 com 500 unidades, Saco Plástico Para Envios Correios, Embalagem para Ecommerce com Lacre Permanente, À prova d'água Envelopes Express",
    "preco": "R$61,04",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_816808-MLA101408014846_122025-O.webp",
    "link": "https://meli.la/31RHVMB",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 770,
    "nome": "Selante De Poliuretano Vilcom Pu 40 Bege 400ml Kit X 2 Unidades",
    "preco": "R$59,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_651725-MLA97354260089_112025-O.webp",
    "link": "https://meli.la/12RooE1",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 771,
    "nome": "Creatina Gummy em Gomas Zero Açúcar 60 Unidades 3g Tem Vida",
    "preco": "R$90,21",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_804497-MLA110641869018_052026-O.webp",
    "link": "https://meli.la/253Px4x",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 772,
    "nome": "Microtubo Cônico 0,38ml interno 0,5ml externo Lilás 1000 unidades Phitos Lab",
    "preco": "R$51,90",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_789115-MLA107170732743_022026-O.webp",
    "link": "https://meli.la/2GzSPSX",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 773,
    "nome": "Colete Refletivo Provistta 4 Bolso Segurança Hexpro Laranja XGG",
    "preco": "R$65,63",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_888498-MLA109231302186_042026-O.webp",
    "link": "https://meli.la/2wXQD2X",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 774,
    "nome": "Cx 2500un Copo Plástico 180ml Descartável Estriado Econopot",
    "preco": "R$185",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787932-MLA99937612993_112025-O.webp",
    "link": "https://meli.la/2uFe1qM",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 775,
    "nome": "Kit Força Pimenta Sh 350ml + Cond 200ml Bio Extratus",
    "preco": "R$61,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_763009-MLA109935838289_042026-O.webp",
    "link": "https://meli.la/1cHe8qa",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 776,
    "nome": "Kit Pintura Terapêutica - Quatro Estações",
    "preco": "R$89",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_734583-MLA110350102929_042026-O.webp",
    "link": "https://meli.la/2kTnAhx",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 777,
    "nome": "Valvula De Escoamento Para Lavatório Cuba 7/8 100% Metal",
    "preco": "R$20,79",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_710299-MLA111343546589_052026-O.webp",
    "link": "https://meli.la/1YChi1k",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 778,
    "nome": "Carregador Para Tablet Samsung N8000 Carga + Dados C/ Garant Cor Preto",
    "preco": "R$24,12",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_915896-MLA96637967634_112025-O.webp",
    "link": "https://meli.la/1LFYfmA",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 779,
    "nome": "Torneira De Cozinha Monocomando Fria 360° Giratória Ângulo Ajustável Cromado Aço Inox",
    "preco": "R$144,53",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_968069-MLA112626655486_062026-O.webp",
    "link": "https://meli.la/2kYE3t7",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 780,
    "nome": "Capa Capinha Case Clear Acrílica Premium Magnética Magsafe Compatível iPhone 14 Pro - Sunlover Beachwear",
    "preco": "R$54,65",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_846250-MLA113248743074_072026-O.webp",
    "link": "https://meli.la/1Dc9iSj",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 781,
    "nome": "Kit Acid Control Antiporosidade E Acidificante (4 Produtos)",
    "preco": "R$85,37",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_643573-MLA113581358040_072026-O.webp",
    "link": "https://meli.la/2XhaNWL",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 782,
    "nome": "100 Caixas De Papelão 8x8x3 Bijouterias Semi Jóias Casamento",
    "preco": "R$64,40",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_764261-MLA110627748809_042026-O.webp",
    "link": "https://meli.la/2A15yeD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 783,
    "nome": "Vinho Branco De Mesa Suave Seleçao Pergola 750ml Nacional",
    "preco": "R$25",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_853691-MLA99391001710_112025-O.webp",
    "link": "https://meli.la/2Yw8TGz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 784,
    "nome": "Capa Capinha Case Clear Acrílica Premium Magnética Magsafe Compatível iPhone 17 Pro - Sunlover Beachwear",
    "preco": "R$54,65",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_719115-MLA113152232164_072026-O.webp",
    "link": "https://meli.la/1zfXRRv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 785,
    "nome": "Cola De Madeira Amarela Extra 5kg",
    "preco": "R$133,14",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_885899-MLB75888958935_042024-O.webp",
    "link": "https://meli.la/2GMauQ6",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 786,
    "nome": "Cone Chines-cone Hindu Cone De Ouvido 50 Unidades =25 Pares",
    "preco": "R$125,69",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_749503-MLB54696197399_032023-O.webp",
    "link": "https://meli.la/1SFD2pV",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 787,
    "nome": "Capa Capinha Proteção Premium + Película 3d Para Samsung Preto A16",
    "preco": "R$26,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_746150-MLB112766390810_062026-O.webp",
    "link": "https://meli.la/1oFVr9y",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 788,
    "nome": "Kit 30 Chaveiros Personalizados Em  Acrílico Espelhado",
    "preco": "R$85,55",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_796998-MLB93337710762_092025-O.webp",
    "link": "https://meli.la/2xDqjHD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 789,
    "nome": "Pillow Top Para Cama Casal Grosso Extra Macio De 400 Fios Ho Branco Matelado Casal",
    "preco": "R$116,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_916953-MLA112070997198_062026-O.webp",
    "link": "https://meli.la/1yzducr",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 790,
    "nome": "Selante Adesivo Silicone Pu Acm Híbrido Azul Flex",
    "preco": "R$51,20",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_832011-MLA108916897138_032026-O.webp",
    "link": "https://meli.la/23L77iG",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 791,
    "nome": "Esguicho Nylon Lava Jato Auto Bico Regulável 4,6mm 1/2 Saida Lavadora Profissional",
    "preco": "R$28,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_998318-MLA97224278133_112025-O.webp",
    "link": "https://meli.la/2kMQc8y",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 792,
    "nome": "Luminária Homem Aranha Spider Man 3d Decorativo Preto",
    "preco": "R$57,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_697644-MLA96064474924_102025-O.webp",
    "link": "https://meli.la/2T4q1Ev",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 793,
    "nome": "Cabos de Alumínio para Vassoura e Rodo 1,60m Andrade Azul Kit com 3",
    "preco": "R$77,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_705505-MLA100109753211_122025-O.webp",
    "link": "https://meli.la/159gfrE",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 794,
    "nome": "Sementes De Melão Caipira Gaúcho Casca De Carvalho Melhorado 30 Un 1g Feltrin",
    "preco": "R$23,82",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_966180-MLA118788462295_102026-O.webp",
    "link": "https://meli.la/23ZhtHh",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 795,
    "nome": "Caixa Box De Som Universal Dutada 1x12 P/ Falante 12",
    "preco": "R$169,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_941501-MLA99411686406_112025-O.webp",
    "link": "https://meli.la/24CutVK",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 796,
    "nome": "Kit Haskell Cavalo Forte Shampoo 300ml + Condicionador 300ml",
    "preco": "R$98,70",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_833540-MLA111019123962_052026-O.webp",
    "link": "https://meli.la/2JaMCg8",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 797,
    "nome": "Dobradiça Coimbra Vai e Vem 3'' Aço Preto Estilo Faroeste P/ Porta",
    "preco": "R$72,19",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_984916-MLA95741514270_102025-O.webp",
    "link": "https://meli.la/1VCPK8N",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 798,
    "nome": "Cartaz Oferta - Duplex 250g - 63x44cm - Cento",
    "preco": "R$164",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_998634-MLB116973937881_082026-O.webp",
    "link": "https://meli.la/2LEKxSZ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 799,
    "nome": "Pistache Torrado Salgado Com Casca De Cicco 1kg Premium",
    "preco": "R$150,10",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_857392-MLB116514934296_092026-O.webp",
    "link": "https://meli.la/2qtr2u3",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 800,
    "nome": "Cápsulas De L-arginina E L-citrulina Da Evlution Nutrition P Without Flavors",
    "preco": "R$72,10",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_832940-CBT109806737123_032026-O.webp",
    "link": "https://meli.la/2cipnhC",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 801,
    "nome": "Máscara Para Cabelos Secos Silicon Treat 2,5kg",
    "preco": "R$132,60",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_817839-MLA108290964209_032026-O.webp",
    "link": "https://meli.la/1goKiNg",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 802,
    "nome": "Mola Aérea Para Fechamento De Porta Automático Até 45kg",
    "preco": "R$93,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_900201-MLB99742676945_112025-O.webp",
    "link": "https://meli.la/18Dx9Cv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 803,
    "nome": "Bolsa Balde para Ferramentas de Eletricista Solze, Cor Verde Militar e Preto",
    "preco": "R$103,53",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_800446-MLA99510362992_112025-O.webp",
    "link": "https://meli.la/1hET7VX",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 804,
    "nome": "Suporte Celular Carro Magnético Rotativo 360° Dobrável Ventosa Eletro Mex Branco",
    "preco": "R$25,90",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_609160-MLA114634924115_072026-O.webp",
    "link": "https://meli.la/2dNz1Ru",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 805,
    "nome": "Kit Tutano Bio Extratus Shampoo, Condicionador 500ml",
    "preco": "R$133,80",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_908666-MLA115156406892_082026-O.webp",
    "link": "https://meli.la/15Kd3sk",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 806,
    "nome": "Torneira Monocomando Banheiro Bica Baixa Preta Fosca com Arejador Água Quente e Fria",
    "preco": "R$125,13",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_660181-MLA119264436319_102026-O.webp",
    "link": "https://meli.la/2tKveL9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 807,
    "nome": "Kit 4 Dobradiça Móveis Amortecedor 35mm Slow Reta Parafusos",
    "preco": "R$22,08",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_834182-MLA99590973730_122025-O.webp",
    "link": "https://meli.la/1UeKHw9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 808,
    "nome": "Par Cadarço Achatado Flat Air Force 1 adidas 140cm Branco Preto",
    "preco": "R$19",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_880752-MLA115258637096_082026-O.webp",
    "link": "https://meli.la/1JPMF1C",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 809,
    "nome": "Pipoca Pronta Vivapop - Chocolate De Cinema",
    "preco": "R$8,80",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_729265-MLA103820302090_012026-O.webp",
    "link": "https://meli.la/1xvSGRD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 810,
    "nome": "Cartaz Splash Duplex Hortifruti Com Aba 18x14cm - 100 Un.",
    "preco": "R$28,12",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_641578-MLB46491818844_062021-O.webp",
    "link": "https://meli.la/2WkU9Vk",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 811,
    "nome": "Removedor De Risco Manchas Pisos Porcelanatos Mult Cremoso1l",
    "preco": "R$69,80",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_826289-MLA77952800310_082024-O.webp",
    "link": "https://meli.la/1HzxCc7",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 812,
    "nome": "Moldura 9 2 Din Black Piano Fiat Toro 2016-2021 Autonova Black Piano",
    "preco": "R$104,44",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_627142-MLA113183524622_072026-O.webp",
    "link": "https://meli.la/2ARsckZ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 813,
    "nome": "Capa Protetora Para Multímetro Digital Fluke",
    "preco": "R$64,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819289-MLB78531637254_082024-O.webp",
    "link": "https://meli.la/2jwqv2L",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 814,
    "nome": "Mousse Finalizador Widi Care Juba para Cachos Definidos e Brilho",
    "preco": "R$52,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_917916-MLA108568423664_032026-O.webp",
    "link": "https://meli.la/2soQF8v",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 815,
    "nome": "Licença Chave Office 365 Personal 2026 / Original Digital",
    "preco": "R$99",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_674885-MLB114294983195_072026-O.webp",
    "link": "https://meli.la/2b84YWW",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 816,
    "nome": "Moldura de Painel 9\" para Honda Fit e WRV (2015-2021) Black Piano",
    "preco": "R$99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_825153-MLA107567553940_032026-O.webp",
    "link": "https://meli.la/2SFVwqi",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 817,
    "nome": "Saco De Lixo Reforçado 100 Litros Rolo 10 Unidades Lixeira Resistente Grandes Volumes S Siqueira",
    "preco": "R$18,94",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_980401-MLA114954681261_072026-O.webp",
    "link": "https://meli.la/135mhuK",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 818,
    "nome": "Broca Forstner 26mm Strong Ferramentas P/ Madeira e MDF",
    "preco": "R$33,18",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_927630-MLA100083828543_122025-O.webp",
    "link": "https://meli.la/312Bkq6",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 819,
    "nome": "Pump Proteína Massa Muscular P/ Cães American Bully Pit Bull",
    "preco": "R$88,50",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_963100-MLB109419316744_042026-O.webp",
    "link": "https://meli.la/1H32d9R",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 820,
    "nome": "3x Maca Peruana Vermelha 100% Pura 500mg 120 Cápsulas Sem Sabor",
    "preco": "R$59,40",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_632966-MLB96412089641_102025-O.webp",
    "link": "https://meli.la/2JLnP8W",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 821,
    "nome": "Copo Garrafa Térmica Infantil Inox Canudo Rosa Clingo Cor Inox/Azul",
    "preco": "R$79,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_745184-MLA99484032952_112025-O.webp",
    "link": "https://meli.la/1oPkmzw",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 822,
    "nome": "Moldura de Painel Para Hyundai IX35 de 9\" 2 DIN Preto Fosco",
    "preco": "R$89",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_713060-MLA106599101380_022026-O.webp",
    "link": "https://meli.la/2gy236L",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 823,
    "nome": "Adubo Líquido Cálcio + Boro 1002 Fertilizer 1 Litro",
    "preco": "R$78,90",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_735980-MLB86352957062_062025-O.webp",
    "link": "https://meli.la/2DH2agj",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 824,
    "nome": "Bico Avent Pétala N1 0m Fluxo Extra Lento Original",
    "preco": "R$78,99",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_909837-MLB113407170409_062026-O.webp",
    "link": "https://meli.la/1eCn3jg",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 825,
    "nome": "Maca Peruana Pura 120 Cápsulas Vitta & Flora Sem Sabor",
    "preco": "R$33,99",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_753029-MLA109922356227_042026-O.webp",
    "link": "https://meli.la/2e9FBcg",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 826,
    "nome": "Difusor Aromatizador Ambiente Baunilha Premium 250ml Emev",
    "preco": "R$167,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_790811-MLB114775099459_072026-O.webp",
    "link": "https://meli.la/1Djxw2D",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 827,
    "nome": "Pulseira Oceano Para Apple Watch Ultra 49mm 45mm 44mm 42mm Silicone Preto",
    "preco": "R$19,09",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_614076-MLA111540407727_052026-O.webp",
    "link": "https://meli.la/1WRGuwa",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 828,
    "nome": "Kit 3 Colgate 30g Creme Dental Para Hospede Viagem Eventos",
    "preco": "R$24,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_757774-MLA105013254501_012026-O.webp",
    "link": "https://meli.la/2P5mYto",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 829,
    "nome": "Oruss Relogio Digital Masculino À Prova D'água Bq Preto Fundo BQ: Prata-Preto",
    "preco": "R$66,60",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_625994-MLA114912234299_072026-O.webp",
    "link": "https://meli.la/2ptxuN9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 830,
    "nome": "Colete Refletivo Provistta 4 Bolso Segurança Hexpro Amarelo M",
    "preco": "R$65,63",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_956017-MLA110242304537_042026-O.webp",
    "link": "https://meli.la/24J3ssK",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 831,
    "nome": "Bolsa Ferramentas Solze Poliéster Verde Eletricista Encanador",
    "preco": "R$77,76",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_641312-MLA99937541357_112025-O.webp",
    "link": "https://meli.la/1pARXPh",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 832,
    "nome": "Manipulo Botão Secadora Roupas Fischer 8kg Branco Original",
    "preco": "R$23,93",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_859119-MLB76657538890_062024-O.webp",
    "link": "https://meli.la/2thWGf9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 833,
    "nome": "Torneira Cozinha de Bancada Inox Escovada Água Fria Bica Alta Bico Articulável com Arejador",
    "preco": "R$147,13",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_803643-MLA119336535533_102026-O.webp",
    "link": "https://meli.la/2tjqCHm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 834,
    "nome": "Sementes De Rabanete Redondo Vip Crimson Seleção Especial 126 Un 1,4g Feltrin",
    "preco": "R$26,97",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_910146-MLA91739454650_092025-O.webp",
    "link": "https://meli.la/1Mb2Av9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 835,
    "nome": "Cola Para Rato 500g Controle De Roedores",
    "preco": "R$57",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_614217-MLB113033821472_072026-O.webp",
    "link": "https://meli.la/1iYWLms",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 836,
    "nome": "Carretilha De Pesca 7.2:1 Sougayilang 8kg Esquerda Carretel",
    "preco": "R$144",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_911676-MLB101099090692_122025-O.webp",
    "link": "https://meli.la/1wdWR1n",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 837,
    "nome": "Sementes De Cravina Da China Singela Sortida 120 Un 200mg Feltrin",
    "preco": "R$26,35",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_763450-MLA117379974435_092026-O.webp",
    "link": "https://meli.la/2J6Sh3J",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 838,
    "nome": "Cabo USB-C para MagSafe 3 Voltix 140W, de Nylon, para MacBook Pro Air",
    "preco": "R$134,38",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_673189-MLA112903699296_072026-O.webp",
    "link": "https://meli.la/1pXjyzL",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 839,
    "nome": "Capa Capinha Case Clear Acrílica Premium Magnética Magsafe Para iPhone 16 - Sunlover Beachwear",
    "preco": "R$54,65",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_773259-MLA114487494131_072026-O.webp",
    "link": "https://meli.la/33rZ87K",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 840,
    "nome": "Capinha Para iPhone 14 14pro 14plus 14promax + Kit Películas",
    "preco": "R$25,49",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_679485-MLB84200118305_042025-O.webp",
    "link": "https://meli.la/14KJS3k",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 841,
    "nome": "Corda De Pular Speed Rope Agilidaded Treino Fitnese Profissional Para Crossfit Boxe Academia Resistência Com Rolamento Freestyle Alegria Cor Azul",
    "preco": "R$19,90",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_860657-MLA107423872001_022026-O.webp",
    "link": "https://meli.la/1STFQ2G",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 842,
    "nome": "Cutisanol Baby Creme para assaduras 45g",
    "preco": "R$25,03",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_606289-MLA99827176751_112025-O.webp",
    "link": "https://meli.la/1VDmUe3",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 843,
    "nome": "Creme Pimenta Negra Hidramais 500g Massagem Profissional",
    "preco": "R$53,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_927587-MLA107002515067_022026-O.webp",
    "link": "https://meli.la/1x7mWwB",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 844,
    "nome": "Almofada Assento Elevação Para Criança Bailarina _kippy Baby",
    "preco": "R$52,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_659559-MLB47546831599_092021-O.webp",
    "link": "https://meli.la/1vaBTMg",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 845,
    "nome": "Carretilha De Pesca Sougayilang 19 Rolamentos 8,1:1 Premium",
    "preco": "R$128",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_733191-MLB119227172837_102026-O.webp",
    "link": "https://meli.la/2TUwWdC",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 846,
    "nome": "Porta Medalhas Personalizado Corrida Com Foto 24 Ganchos Preto",
    "preco": "R$49,90",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_620807-MLB47048195487_082021-O.webp",
    "link": "https://meli.la/2d3zhCT",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 847,
    "nome": "Creme De Pentear Meu Liso Kids Infantil Salon Line 250ml",
    "preco": "R$30,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_963235-MLA114219960331_072026-O.webp",
    "link": "https://meli.la/1J3QKif",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 848,
    "nome": "Torneira Para Cozinha Preta Fosca Pode Girar Água Fria Anti-salpicos E Econômica Em Água",
    "preco": "R$125,13",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819463-MLA113795356977_062026-O.webp",
    "link": "https://meli.la/1b91eJR",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 849,
    "nome": "Anel De Vedação Para Mamadeira Pétala Philips Avent",
    "preco": "R$22,99",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837492-MLB91615512278_092025-O.webp",
    "link": "https://meli.la/14tSU5A",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 850,
    "nome": "Cabide Suporte Porta Chapéu De Parede Em Aço Envio Imediato Preto",
    "preco": "R$42,30",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_687882-MLB86105974107_062025-O.webp",
    "link": "https://meli.la/1QZnSkj",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 851,
    "nome": "Máscara Óleo Melaleuca 500g Cães Gatos Hidratação Prolongada",
    "preco": "R$46,90",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_697267-MLB94648149392_102025-O.webp",
    "link": "https://meli.la/2hJZCbt",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 852,
    "nome": "Cartaz Splash Oferta Gondola / Etiqueta Pct C/ 100 Un.",
    "preco": "R$29,09",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_811810-MLB49568914968_042022-O.webp",
    "link": "https://meli.la/1U1C2GB",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 853,
    "nome": "Necessaire Algodão Cru Eco Friendly 20x13cm Com Tela Frontal Bege Lisa",
    "preco": "R$32,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_739872-MLA99734019075_112025-O.webp",
    "link": "https://meli.la/1vVxRVw",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 854,
    "nome": "Kit 10 Microcânulas Preenchimento 21g Com Agulha Auxiliar 50mm",
    "preco": "R$176,94",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892661-MLB116094886878_092026-O.webp",
    "link": "https://meli.la/16EXKc9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 855,
    "nome": "Parafuso Cabeça Chata Phillips M3 X 6mm Com 500 Peças",
    "preco": "R$41,99",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_907523-MLB74365504622_022024-O.webp",
    "link": "https://meli.la/2fkYEcG",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 856,
    "nome": "Pulseira Silicone Oceano Compatível Com Watch Series 7 8 Se Cor Verde Bandeira",
    "preco": "R$19,09",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_846887-MLA99979992623_112025-O.webp",
    "link": "https://meli.la/1MRUMUQ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 857,
    "nome": "Controle Tv Compatível Com LG Lcd Plasma Akb69680416 26lu50f",
    "preco": "R$19,01",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_963511-MLA79283501368_092024-O.webp",
    "link": "https://meli.la/29MSJAA",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 858,
    "nome": "Kit Tutano Presente Especial Bio Extratus",
    "preco": "R$105,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_815885-MLA114312094050_082026-O.webp",
    "link": "https://meli.la/1yz4uFv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 859,
    "nome": "Interruptor Pluzie 2 Teclas Simples 1 Paralela Com Placa Embutir 20A Branco",
    "preco": "R$23,19",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953843-MLA100088144481_122025-O.webp",
    "link": "https://meli.la/2wxJBxm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 860,
    "nome": "Kit Escovas Trio Raquete Flex, Escova Mágica E Escova Massag Cor pink/azul tiffany",
    "preco": "R$38",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_711363-MLA113993761344_072026-O.webp",
    "link": "https://meli.la/1Wzcs7x",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 861,
    "nome": "Kit Escovas Trio Raquete Flex, Escova Mágica E Escova Massag Cor Pink/Rosa Bebê",
    "preco": "R$38",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_801565-MLA115309509931_072026-O.webp",
    "link": "https://meli.la/1z1mmp5",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 862,
    "nome": "Parafuso Chato Allen M3 X 6mm Oxidado Preto Com  10 Peças",
    "preco": "R$19,97",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_981393-MLB47233785521_082021-O.webp",
    "link": "https://meli.la/2Kvko7E",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 863,
    "nome": "Kit 10 Escova Dente E Creme Dental 3gr Hotel Motel Doação",
    "preco": "R$26,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_833912-MLA99368321024_112025-O.webp",
    "link": "https://meli.la/2ZroGK9",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 864,
    "nome": "Kit 3 Itens Abacate Mega Hidratação Alho Therapy Nathydras",
    "preco": "R$127",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_815536-MLA109639900769_032026-O.webp",
    "link": "https://meli.la/2PArbzt",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 865,
    "nome": "Capa Capinha Case Clear Acrílica Premium Magnética Magsafe Compatível iPhone 13 - Sunlover Beachwear",
    "preco": "R$54,65",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_845263-MLA114488406909_072026-O.webp",
    "link": "https://meli.la/2Tdv5rm",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 866,
    "nome": "Óleo Vegetal De Abacate 100% Natural Puro 30ml Fragrância sem Tipo de embalagem Frasco",
    "preco": "R$19,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_890705-MLA83825442575_042025-O.webp",
    "link": "https://meli.la/2tPpbqE",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 867,
    "nome": "Béquer Becker De Vidro Graduado Forma Baixa Griffin 25ml",
    "preco": "R$10,85",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_947096-MLB112625695146_062026-O.webp",
    "link": "https://meli.la/1DkNXpf",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 868,
    "nome": "Kit Escovas Trio Raquete Flex, Escova Mágica E Escova Massag Cor Rosa Bebê/Pink",
    "preco": "R$38",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_786740-MLA115308068711_072026-O.webp",
    "link": "https://meli.la/2xo5f6X",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 869,
    "nome": "Skrw Esponja Bio. Ef-1881 64x12 45ppi Preta",
    "preco": "R$17,10",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_776949-MLA117415555393_092026-O.webp",
    "link": "https://meli.la/15TZQCD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 870,
    "nome": "Crucifixo São Bento Madeira Armazém Católico Parede e Mesa 12cm",
    "preco": "R$21",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_920158-MLA99569879452_122025-O.webp",
    "link": "https://meli.la/2aDm6uR",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 871,
    "nome": "Garrafa Térmica Inox - Rosa - Clingo",
    "preco": "R$66,60",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_672920-MLA99504456410_112025-O.webp",
    "link": "https://meli.la/2ZXvdJz",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 872,
    "nome": "Granola Tradicional Sem Glúten Vitao 250g Com Castanhas",
    "preco": "R$19,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_978412-MLB101084598944_122025-O.webp",
    "link": "https://meli.la/1qTN3BD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 873,
    "nome": "Kit Tampa E Anel Pedal Odontológico Progressivo",
    "preco": "R$37,36",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892570-MLB54980423230_042023-O.webp",
    "link": "https://meli.la/2WrnmEM",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 874,
    "nome": "Blusa Moletom Liso Feminino 100% Algodão De Frio Sem Capuz",
    "preco": "R$54,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922523-MLB113356735917_062026-O.webp",
    "link": "https://meli.la/15U2qoD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 875,
    "nome": "Sunga Cavada Ultra Slim Branco Off Opaco Ts",
    "preco": "R$92,05",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_772112-MLB101491709164_122025-O.webp",
    "link": "https://meli.la/2zaeMrw",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 876,
    "nome": "Cartaz Splash Amarelo Duplex 210g Com Aba 25x23cm - 100 Un.",
    "preco": "R$48,49",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_937989-MLB40495384993_012020-O.webp",
    "link": "https://meli.la/1n3uMGV",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 877,
    "nome": "Corrente Cordão Masculina 3mm Cor Prata Aço Inox",
    "preco": "R$25,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_980042-MLB90175874630_082025-O.webp",
    "link": "https://meli.la/33gdY95",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 878,
    "nome": "1 Progressiva Fashion Hair 300g Sem Formol Alisamento Fácil",
    "preco": "R$29",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_643159-MLA108750959761_032026-O.webp",
    "link": "https://meli.la/2WBz2oZ",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 879,
    "nome": "Bancada Em Aço Industrial Sem Tampo 2mt Estruturas Completa",
    "preco": "R$465",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_739041-MLB82885182126_032025-O.webp",
    "link": "https://meli.la/1kspbzn",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 880,
    "nome": "Pré Treino Com Pimenta E Beta Alanina - Pumonew 60 Doses",
    "preco": "R$147,98",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_778144-MLB114708596509_072026-O.webp",
    "link": "https://meli.la/1qZxvzn",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 881,
    "nome": "Manometro Vazão E Pressão Simultâneo De Bomba De Combustível",
    "preco": "R$314,72",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676201-MLB75005421227_032024-O.webp",
    "link": "https://meli.la/2sYpLrw",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 882,
    "nome": "Oruss Relógio Masculino Quartz Original Em Aço Inoxidável Wf Fundo Preto/Prateado",
    "preco": "R$87,20",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_964081-MLA114912990087_072026-O.webp",
    "link": "https://meli.la/19JK1sK",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 883,
    "nome": "Carrinho Para Motor De Popa Até 25 Hp 2 Rodas",
    "preco": "R$283,58",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_756050-MLB115504042868_082026-O.webp",
    "link": "https://meli.la/2KfzJtW",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 884,
    "nome": "Chaveiro Acrílico 3x4 - Coração P/ Foto3x4 ( 100unid. ) Transparente",
    "preco": "R$136,50",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837094-MLB96386095242_102025-O.webp",
    "link": "https://meli.la/28wAthr",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 885,
    "nome": "Lixadeira De Unha Elétrica Mercedes Para Unhas Manicure Pro Cor Rosa",
    "preco": "R$78,85",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_629033-MLA84534482137_052025-O.webp",
    "link": "https://meli.la/2XXm93E",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 886,
    "nome": "Escumadeira de Aço Inoxidável 18cm, com Cabo Longo para Fritura",
    "preco": "R$29,34",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_750642-MLA111963760328_062026-O.webp",
    "link": "https://meli.la/29KQSnL",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 887,
    "nome": "Trofeu 600060 Jogador De Futebol Vitória Festa Evento",
    "preco": "R$29,99",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_784678-MLA113623193923_062026-O.webp",
    "link": "https://meli.la/2F1gwrD",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 888,
    "nome": "Cooktop Indução Portátil Panda Plus 1 Boca Bivolt com Painel Touch Preto",
    "preco": "R$256,40",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_763773-MLA113294694240_072026-O.webp",
    "link": "https://meli.la/2DNPXwi",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 889,
    "nome": "Caneta Profissional Highload Pencil Para iPad Alta Precisão E Zero Atrasos Com Rejeição De Palma E Sensor De Inclinação - Branca",
    "preco": "R$99,12",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_814697-MLA113782108446_072026-O.webp",
    "link": "https://meli.la/1HLekMT",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 890,
    "nome": "Relógio Inteligente Feminino Aolon GTS3 1.85\" AMOLED Smartwatch Bluetooth Chamadas IP68 Saúde da Mulher Ciclo Menstrual +100 Esportes Frequência Cardíaca",
    "preco": "R$205",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_659559-MLA116102275127_082026-O.webp",
    "link": "https://meli.la/1D3TBdW",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 891,
    "nome": "Sifao Copo Cromado Metal Pia Cozinha Lavatório 1 1/2 7/8",
    "preco": "R$64,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_811152-MLA113467203083_062026-O.webp",
    "link": "https://meli.la/1h8YH9c",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 892,
    "nome": "Capa Anti-Impacto Kalvetix para Samsung Galaxy Tab A9+ e A11+ de 11\" Com Suporte, Correia e Porta Caneta, Preta",
    "preco": "R$97",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_920476-MLA112539511184_062026-O.webp",
    "link": "https://meli.la/2xpzjAt",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 893,
    "nome": "Caneta Profissional Highload Pencil Para iPad Alta Precisão E Zero Atrasos Com Rejeição De Palma E Sensor De Inclinação - Preta",
    "preco": "R$118",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_857217-MLA115077722867_072026-O.webp",
    "link": "https://meli.la/1qi1Crt",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 894,
    "nome": "Kit 2 Pelicula Vidro 9h Para Tablet Samsung Galaxy A9",
    "preco": "R$36",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_694019-MLA112849134905_062026-O.webp",
    "link": "https://meli.la/1bm4hec",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 895,
    "nome": "Jogo Pino Para Pistola Finca Pino 300 Peças 42mm Com Arruela",
    "preco": "R$129",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_612946-MLA112076887331_052026-O.webp",
    "link": "https://meli.la/1pB5j2g",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 896,
    "nome": "Kit 2 Magnésio Treonina 100% Puro 460mg 180 Capsulas 90 Porções 3 Meses Alto Teor Alta Concentração Máxima Absorçao Sem Sabor Neutro Ellym Nutrition",
    "preco": "R$123,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838456-MLA111715403554_062026-O.webp",
    "link": "https://meli.la/1phVaQv",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 897,
    "nome": "Óculos De Segurança Windpro Hexpro Proteção Lente Incolor cristal",
    "preco": "R$111,76",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894587-MLA112852917719_062026-O.webp",
    "link": "https://meli.la/1SAhonb",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 898,
    "nome": "Escumadeira Inox 14cm Com Cabo Longo Para Fritura Fritar Batata Pastel Salgados Escorrer Óleo Água Alimentos Cesto Peneira Utensílio De Cozinha",
    "preco": "R$27,64",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922022-MLA112848564171_062026-O.webp",
    "link": "https://meli.la/1SrbvmA",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 899,
    "nome": "Anti Cabelos Brancos Pqq + Metilfolato +b12 +b6 120 Cápsulas Sem Sabor",
    "preco": "R$117",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_947917-MLA113415891239_062026-O.webp",
    "link": "https://meli.la/1ekLtYK",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 900,
    "nome": "5 Virilplus 150g Para Vitalidade Masculina Viril Plus Viril Plus Th",
    "preco": "R$205,34",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_900418-MLA111729195246_062026-O.webp",
    "link": "https://meli.la/1K5M7Ht",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 901,
    "nome": "Quercetina 500mg 120 Capsulas Suplemento Sem Sabor",
    "preco": "R$115",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_958816-MLA113729793309_062026-O.webp",
    "link": "https://meli.la/2E5hGmr",
    "cupom": "MAISDESCONTO"
  },
  {
    "id": 902,
    "nome": "Painel Led Plafon Aluminio Sobrepor 30w 4000k Branco Neutro 40x40cm Quadrado Cod: ALUT002015 Alut By Avant",
    "preco": "R$78,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_638507-MLA116378245611_082026-O.webp",
    "link": "https://meli.la/1fErnpg",
    "cupom": "AVANT25"
  },
  {
    "id": 903,
    "nome": "Kit 10 Lâmpadas LED Bulbo 50W Alta Potência Branco Frio 6500K Bivolt E27 - Super Bulbo Econômica 4000 Lúmens Ideal Galpão Fábrica Comércio",
    "preco": "R$152,11",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_609866-MLA113929786632_072026-O.webp",
    "link": "https://meli.la/2rhp78C",
    "cupom": "AVANT25"
  },
  {
    "id": 904,
    "nome": "Interruptor Inteligente Wifi 4x2 Touch 3 Botões Alexa Google Cor Preto NEO by Avant",
    "preco": "R$70,11",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_816245-MLA110941397642_052026-O.webp",
    "link": "https://meli.la/1AWhGJt",
    "cupom": "AVANT25"
  },
  {
    "id": 905,
    "nome": "10 Metros Rodapé Liso De Poliestireno 7cm Altura Alut Barras Branco",
    "preco": "R$13,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_606785-MLB117185233172_102026-O.webp",
    "link": "https://meli.la/2Z4SJmQ",
    "cupom": "AVANT25"
  },
  {
    "id": 906,
    "nome": "Tomada Inteligente Wi-fi 2.4 GHz 10A 110v/220v Bivolt Branco Cod: 291990608 Neo Avant",
    "preco": "R$39,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_705914-MLA112385542999_052026-O.webp",
    "link": "https://meli.la/2WGPH2X",
    "cupom": "AVANT25"
  },
  {
    "id": 907,
    "nome": "Interruptor Inteligente Smart Wi-fi 2.4 GHz Alexa google 3 Botões 4x2 Bivolt Preto Cod: 291990400 Neo Avant",
    "preco": "R$70,11",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_655670-MLA111860767251_052026-O.webp",
    "link": "https://meli.la/2Y2vwHw",
    "cupom": "AVANT25"
  },
  {
    "id": 908,
    "nome": "Kit 10 Lampada Led Par20 7w 3000k Branco Quente E27 110v/220v Branco Cod: ALUT001201-10 Alut By Avant",
    "preco": "R$70,83",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_960285-MLA96112483653_102025-O.webp",
    "link": "https://meli.la/1R9ByeZ",
    "cupom": "AVANT25"
  },
  {
    "id": 909,
    "nome": "Fita Led Inteligente Wi-fi 2.4 Ghz 15w 5 Metros 2700k/6500k Rgb Colorido 12v + Controlador Inteligente + Driver Cod: Neo001757-k001 Neo Avant 127/220v",
    "preco": "R$179,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_669930-MLA117650824637_092026-O.webp",
    "link": "https://meli.la/2SKXNyS",
    "cupom": "AVANT25"
  },
  {
    "id": 910,
    "nome": "Interruptor Inteligente Smart Wi-fi 2.4 GHz Alexa google 6 Botões 4x4 Bivolt Preto Cod: 291990446 Neo Avant",
    "preco": "R$143,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_610622-MLA110888112554_052026-O.webp",
    "link": "https://meli.la/2PSyAGN",
    "cupom": "AVANT25"
  },
  {
    "id": 911,
    "nome": "Kit 128 Pilhas Alcalina Pequena Aa 1.5v Avant Use",
    "preco": "R$201,53",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970854-MLA109748672919_032026-O.webp",
    "link": "https://meli.la/1RMQ6Yz",
    "cupom": "AVANT25"
  },
  {
    "id": 912,
    "nome": "Interruptor Smart Inteligente Wi-fi 2.4 GHz Alexa google 1 Botão 4x2 Bivolt Preto Cod: 291990365 Neo Avant",
    "preco": "R$64,03",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_671641-MLA111852031863_052026-O.webp",
    "link": "https://meli.la/1iK5aaE",
    "cupom": "AVANT25"
  },
  {
    "id": 913,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 30w 4000k Branco Neutro 40x40cm Quadrado Cod: ALUT002015-10 Alut By Avant",
    "preco": "R$699",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_792656-MLA116486716339_082026-O.webp",
    "link": "https://meli.la/1J44vjb",
    "cupom": "AVANT25"
  },
  {
    "id": 914,
    "nome": "Kit 10 Lampada Led Dicróica Mr16 4,8w 4000k Gu10 Branco Alut",
    "preco": "R$54,65",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_674981-MLA107603257437_022026-O.webp",
    "link": "https://meli.la/2KzYSJg",
    "cupom": "AVANT25"
  },
  {
    "id": 915,
    "nome": "Kit 10 Refletor Led Slim Externo 200w 6500k Branco Frio Ip66 110v/220v Bivolt Preto Cod: ALUT000702-10 Alut By Avant",
    "preco": "R$584,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_667008-MLA115899479341_082026-O.webp",
    "link": "https://meli.la/2c74biJ",
    "cupom": "AVANT25"
  },
  {
    "id": 916,
    "nome": "Interruptor Inteligente Smart Wi-fi 2.4 GHz Alexa google 2 Botões 4x2 Bivolt Branco Cod: 291990374 Neo Avant",
    "preco": "R$98,87",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_745865-MLA111851604561_052026-O.webp",
    "link": "https://meli.la/17gTV4q",
    "cupom": "AVANT25"
  },
  {
    "id": 917,
    "nome": "Tomada Flex Trio 3 Saida 4x2 10a E 20a Preto Avant Neo",
    "preco": "R$69,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_990929-MLB114655048246_082026-O.webp",
    "link": "https://meli.la/1ZHwube",
    "cupom": "AVANT25"
  },
  {
    "id": 918,
    "nome": "Interruptor Inteligente Smart Neo Avant NEO 2 Botões Touch Wi-Fi Alexa Preto",
    "preco": "R$69,21",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_770507-MLA111910029115_052026-O.webp",
    "link": "https://meli.la/2dVxPLM",
    "cupom": "AVANT25"
  },
  {
    "id": 919,
    "nome": "Painel Led Sobrepor 60w 100x100cm Plafon Quadrado Bivolt 4000K Luz Branco Neutro Grande Formato - Avant",
    "preco": "R$220",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_912470-MLA106668372829_022026-O.webp",
    "link": "https://meli.la/1N6yJh3",
    "cupom": "AVANT25"
  },
  {
    "id": 920,
    "nome": "Lampada Led Smart Inteligente Wi-fi 2.4 Ghz Bulbo Hp 20w 2700k/6500k Rgb Colorido E27 110v/220v Cod: 291990301 Neo Avant",
    "preco": "R$48,58",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_625564-MLA113456269121_062026-O.webp",
    "link": "https://meli.la/11CrEKH",
    "cupom": "AVANT25"
  },
  {
    "id": 921,
    "nome": "Kit 2 Refletor Led 100w 6500k Branco Frio A Prova D'água Alut Cod: Alut000701-2 Alut By Avant",
    "preco": "R$46,79",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_896663-MLA115896645027_082026-O.webp",
    "link": "https://meli.la/1MiAZxh",
    "cupom": "AVANT25"
  },
  {
    "id": 922,
    "nome": "Interruptor Inteligente Smart Wifi 4 Botões Touch Branco Alexa Google Bivolt 4x2 Neo",
    "preco": "R$107,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_741117-MLA110895767180_052026-O.webp",
    "link": "https://meli.la/2SKoaYD",
    "cupom": "AVANT25"
  },
  {
    "id": 923,
    "nome": "Tomada Flex 1 Saida 4x2 10a E 20a Preto Avant Neo",
    "preco": "R$49,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_946148-MLB116018736175_082026-O.webp",
    "link": "https://meli.la/1hZbh3c",
    "cupom": "AVANT25"
  },
  {
    "id": 924,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado Par20 + Lâmpada Led 7w 3000k Branco Quente E27 Preto",
    "preco": "Confira no site",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_944997-MLA115552280680_082026-O.webp",
    "link": "https://meli.la/2DyYMgQ",
    "cupom": "AVANT25"
  },
  {
    "id": 925,
    "nome": "Kit 10 Lampada Led Pera Inteligente Wi Fi 10w 2700K/6500K Branco Quente/Frio E27 110v/220v Cod:290018079-10 Neo Avant",
    "preco": "R$199,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_873111-MLA114182161680_082026-O.webp",
    "link": "https://meli.la/14VB2WD",
    "cupom": "AVANT25"
  },
  {
    "id": 926,
    "nome": "Controlador De Fita Led Inteligente Smart Wi-fi 2.4 Ghz 2700k/6500k Rgb Colorido 994860046 Neo Avant",
    "preco": "R$78,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_708590-MLA114985534164_082026-O.webp",
    "link": "https://meli.la/2Yivztg",
    "cupom": "AVANT25"
  },
  {
    "id": 927,
    "nome": "Interruptor Inteligente Smart Wi-fi 2.4 GHz Alexa google 4 Botões 4x2 Bivolt Preto Cod: 291990428 Neo Avant",
    "preco": "R$107,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_847447-MLA111861407331_052026-O.webp",
    "link": "https://meli.la/2GM8a4b",
    "cupom": "AVANT25"
  },
  {
    "id": 928,
    "nome": "Kit 128 Pilhas Alcalina Palito Aaa 1.5v 3a Avant Use",
    "preco": "R$198,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_625708-MLA106730061322_022026-O.webp",
    "link": "https://meli.la/2Ez4PHF",
    "cupom": "AVANT25"
  },
  {
    "id": 929,
    "nome": "Interruptor Inteligente Wifi 3 Botões Branco Neo By Avant",
    "preco": "R$67,34",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_942131-MLB111764075355_052026-O.webp",
    "link": "https://meli.la/1adEogy",
    "cupom": "AVANT25"
  },
  {
    "id": 930,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir Quadrado 6500K Branco Frio 18w 22x22Cm",
    "preco": "R$134,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_868101-MLA117377920833_092026-O.webp",
    "link": "https://meli.la/28tUfCv",
    "cupom": "AVANT25"
  },
  {
    "id": 931,
    "nome": "Kit 10 Lâmpadas LED Bulbo 70W Alta Potência Branco Frio 6500K Bivolt E27 - Super Bulbo Econômica 5600 Lúmens Ideal Galpão Fábrica Comércio",
    "preco": "R$206,10",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_669125-MLA113252416986_072026-O.webp",
    "link": "https://meli.la/2K4hJek",
    "cupom": "AVANT25"
  },
  {
    "id": 932,
    "nome": "Controle Universal Ir Wifi 110v/220v Bivolt Branco Avant Neo",
    "preco": "R$78,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_830845-MLB111034170935_042026-O.webp",
    "link": "https://meli.la/2qKSsDw",
    "cupom": "AVANT25"
  },
  {
    "id": 933,
    "nome": "Interruptor Inteligente Smart Wi-fi 2.4 GHz Alexa google 8 Botões 4x4 Bivolt Branco Cod: 291990455 Neo Avant",
    "preco": "R$164,28",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_989080-MLA110888400006_052026-O.webp",
    "link": "https://meli.la/2uqcctw",
    "cupom": "AVANT25"
  },
  {
    "id": 934,
    "nome": "Kit 100 Baterias Alcalina Lr44 1.5v Cod: 408300018-10 Avant Use",
    "preco": "R$35,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_694145-MLA99844568633_112025-O.webp",
    "link": "https://meli.la/1SmzUpK",
    "cupom": "AVANT25"
  },
  {
    "id": 935,
    "nome": "Interruptor Com Tomada Smart Zigbee 2 Botão Br Neo Avant",
    "preco": "R$178,41",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_612540-MLB111992974195_052026-O.webp",
    "link": "https://meli.la/29kxvFa",
    "cupom": "AVANT25"
  },
  {
    "id": 936,
    "nome": "Kit 10 Painel Led Sobrepor 24w 26x26 6500k Quadrado Bivolt - Easy by Avant",
    "preco": "R$268,11",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_621276-MLA113000876850_072026-O.webp",
    "link": "https://meli.la/2hh4NMY",
    "cupom": "AVANT25"
  },
  {
    "id": 937,
    "nome": "Kit 5 Led Pera Smart Inteligente Wi Fi 2.4ghz Alexa Google 10w Rgb 2700k/6500k Branco Quente/neutro/frio E27 Cod: 290028177-5 Avant Neo",
    "preco": "R$134,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_730525-MLA99469500582_112025-O.webp",
    "link": "https://meli.la/22hxkWo",
    "cupom": "AVANT25"
  },
  {
    "id": 938,
    "nome": "Interruptor Inteligente Zigbee Alexa google 2 Botões 4x2 Bivolt Branco Cod: 291990509 Neo Avant",
    "preco": "R$67,50",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_991560-MLA111941954129_052026-O.webp",
    "link": "https://meli.la/1j5h9gG",
    "cupom": "AVANT25"
  },
  {
    "id": 939,
    "nome": "Kit 48 Pilhas Alcalina Pequena Aa 1.5v 2a Avant Use",
    "preco": "R$64",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_983314-MLA109741379179_032026-O.webp",
    "link": "https://meli.la/2R5pY4m",
    "cupom": "AVANT25"
  },
  {
    "id": 940,
    "nome": "Interruptor Smart Wi-fi 1 Botão Touch Branco Neo By Avant Preto",
    "preco": "R$107",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_617307-MLB110972537748_052026-O.webp",
    "link": "https://meli.la/1SH1H4r",
    "cupom": "AVANT25"
  },
  {
    "id": 941,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 18w 6500K Branco Frio 22cm Redondo Cod: ALUT001983-5 Alut By Avant",
    "preco": "R$107,12",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_943833-MLA115911080920_092026-O.webp",
    "link": "https://meli.la/1rYSkgj",
    "cupom": "AVANT25"
  },
  {
    "id": 942,
    "nome": "Kit 10 Lampada Led Dicróica Mr16 4,8w 3000k Branco Quente Gu10 110v/220v Branco Cod: Alut001203-10 Alut By Avant",
    "preco": "R$71,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973259-MLA107190526181_022026-O.webp",
    "link": "https://meli.la/2LapNgt",
    "cupom": "AVANT25"
  },
  {
    "id": 943,
    "nome": "Kit 10 Refletor Led 100w 6500k Branco Frio A Prova D'água Alut Cod: Alut000701-10 Alut By Avant",
    "preco": "R$314,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_810462-MLA114540938076_082026-O.webp",
    "link": "https://meli.la/31hrp7r",
    "cupom": "AVANT25"
  },
  {
    "id": 944,
    "nome": "Kit 80 Pilhas Alcalina Palito AAA 1.5v 3a Avant Use",
    "preco": "R$142,40",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_766090-MLA107397026819_022026-O.webp",
    "link": "https://meli.la/2MxRHPy",
    "cupom": "AVANT25"
  },
  {
    "id": 945,
    "nome": "Interruptor Com Tomada Smart Wi-fi 1 Botão Preto Neo Avant",
    "preco": "R$145,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_791761-MLB115721690141_082026-O.webp",
    "link": "https://meli.la/1MBbqq1",
    "cupom": "AVANT25"
  },
  {
    "id": 946,
    "nome": "Controlador De Fita Led Inteligente Smart Zigbee 3000k/6500k Branco Quente/frio Cod: 994860073 Neo Avant",
    "preco": "R$94,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838911-MLA114985749308_082026-O.webp",
    "link": "https://meli.la/1TViwWi",
    "cupom": "AVANT25"
  },
  {
    "id": 947,
    "nome": "Kit 15 Baterias Lítio 2032 3v Tipo Moeda Avant Use",
    "preco": "R$19,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_680798-MLA99373385178_112025-O.webp",
    "link": "https://meli.la/2zUu5vF",
    "cupom": "AVANT25"
  },
  {
    "id": 948,
    "nome": "Interruptor Inteligente Smart Zigbee Touch Screen Neo Avant Branco 1 Botão",
    "preco": "R$69,21",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_928048-MLA112635812353_062026-O.webp",
    "link": "https://meli.la/22bdoxB",
    "cupom": "AVANT25"
  },
  {
    "id": 949,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29x29cm Quadrado Cod: ALUT002010-3 Alut By Avant",
    "preco": "R$115,12",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_909840-MLA116370465857_082026-O.webp",
    "link": "https://meli.la/2ooPf3L",
    "cupom": "AVANT25"
  },
  {
    "id": 950,
    "nome": "Kit 10 Lâmpadas LED Bulbo 40W Alta Potência Branco Frio 6500K Bivolt E27 - Super Bulbo Econômica 3200 Lúmens Ideal Comércio Garagens Casa",
    "preco": "R$143,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_870759-MLA115238720597_072026-O.webp",
    "link": "https://meli.la/2CXeRtf",
    "cupom": "AVANT25"
  },
  {
    "id": 951,
    "nome": "Sensor Porta E Janela Inteligente Zigbee Sobrepor Branco Cod: 291100025 Avant Neo",
    "preco": "R$51,20",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_982007-MLA106458717740_022026-O.webp",
    "link": "https://meli.la/1CypP4N",
    "cupom": "AVANT25"
  },
  {
    "id": 952,
    "nome": "Refletor Led 100w 6500k Branco Frio A Prova D'água Alut Cod: Alut000701 Alut By Avant",
    "preco": "R$44,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_855043-MLA115641654911_082026-O.webp",
    "link": "https://meli.la/2k8yMmb",
    "cupom": "AVANT25"
  },
  {
    "id": 953,
    "nome": "Kit 200 Baterias Alcalina Lr44 1.5v Avant Use",
    "preco": "R$68,72",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_684440-MLA99441275310_112025-O.webp",
    "link": "https://meli.la/2T5o5WA",
    "cupom": "AVANT25"
  },
  {
    "id": 954,
    "nome": "Painel Central Inteligente Wifi Com Hub Zigbee Nexus Connecta 8 Smart Life Tuya Com Alexa e Google Bivolt Neo Avant",
    "preco": "R$849",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858446-MLA111044130757_042026-O.webp",
    "link": "https://meli.la/1iVcHQM",
    "cupom": "AVANT25"
  },
  {
    "id": 955,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 30w 3000k Branco Quente 40x40cm Quadrado Cod: ALUT002014-10 Alut By Avant",
    "preco": "R$542,42",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_859770-MLA116371732549_082026-O.webp",
    "link": "https://meli.la/2mHDkVq",
    "cupom": "AVANT25"
  },
  {
    "id": 956,
    "nome": "Kit 5 Lampadas Led Bulbo Hp 50w 6500k Branco Frio E27 110v/220v Bivolt Cod: ALUT000111-5 Alut By Avant",
    "preco": "R$79,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_969750-MLA114377324454_082026-O.webp",
    "link": "https://meli.la/28re2BH",
    "cupom": "AVANT25"
  },
  {
    "id": 957,
    "nome": "Kit 4 Poste Balizador Led Jardim 10w 4000k Ip65 Preto Alut",
    "preco": "R$300,60",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_974135-MLA95393199830_102025-O.webp",
    "link": "https://meli.la/2r1r35x",
    "cupom": "AVANT25"
  },
  {
    "id": 958,
    "nome": "Kit 5 Refletor Led 300w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010041-5 Alut By Avant",
    "preco": "R$595,71",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_748648-MLA115900307241_082026-O.webp",
    "link": "https://meli.la/1n8zYR5",
    "cupom": "AVANT25"
  },
  {
    "id": 959,
    "nome": "Kit 3 Baterias Pilha Alcalina 9v Cod: 408100014-3 Avant Use",
    "preco": "R$25,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_749200-MLA99821751491_112025-O.webp",
    "link": "https://meli.la/1zNkV7H",
    "cupom": "AVANT25"
  },
  {
    "id": 960,
    "nome": "Interruptor Inteligente Zigbee Alexa google 3 Botões 4x2 Bivolt Branco Cod: 291990527 Neo Avant",
    "preco": "R$89,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_778915-MLA110942950404_052026-O.webp",
    "link": "https://meli.la/1uPWWNk",
    "cupom": "AVANT25"
  },
  {
    "id": 961,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29x29cm Quadrado Cod: ALUT002010-5 Alut By Avant",
    "preco": "R$191,46",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_711180-MLA116370465835_082026-O.webp",
    "link": "https://meli.la/2gJ8pwQ",
    "cupom": "AVANT25"
  },
  {
    "id": 962,
    "nome": "Kit 10 Lâmpadas LED Bulbo 100W Alta Potência Branco Frio 6500K Bivolt E27 - Super Bulbo Econômica 8000 Lúmens Ideal Galpão Fábrica Comércio",
    "preco": "R$427,41",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_869420-MLA116308082588_092026-O.webp",
    "link": "https://meli.la/1PFu4Nu",
    "cupom": "AVANT25"
  },
  {
    "id": 963,
    "nome": "10 Metros Rodapé Poliestireno Liso 7cm Altura 5 Barras Branco",
    "preco": "R$15,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_732301-MLB117486321019_092026-O.webp",
    "link": "https://meli.la/1DGcuRp",
    "cupom": "AVANT25"
  },
  {
    "id": 964,
    "nome": "Kit 4 Refletor Led 200w 6500k Branco Frio 110v/220v Bivolt a prova d'água Alut Cod: ALUT000702-4 Alut By Avant",
    "preco": "R$350,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_602611-MLA115898870805_082026-O.webp",
    "link": "https://meli.la/22CLXdD",
    "cupom": "AVANT25"
  },
  {
    "id": 965,
    "nome": "Kit 5 Baterias Pilhas Alcalina 9v Cod: 408100014-5 Avant Use",
    "preco": "R$59,86",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_600246-MLA99824015707_112025-O.webp",
    "link": "https://meli.la/1YBFp2x",
    "cupom": "AVANT25"
  },
  {
    "id": 966,
    "nome": "Interruptor Inteligente Smart Wi-fi 2.4 GHz Alexa google 4 Botões 4x2 Bivolt Branco Cod: 291990419 Neo Avant",
    "preco": "R$107,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_944861-MLA110942978814_052026-O.webp",
    "link": "https://meli.la/29yUa8L",
    "cupom": "AVANT25"
  },
  {
    "id": 967,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 18w 3000k Branco Quente 22cm Redondo Cod: ALUT001981-3 Alut By Avant",
    "preco": "R$61,20",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_749864-MLA117378431471_092026-O.webp",
    "link": "https://meli.la/2s75PhR",
    "cupom": "AVANT25"
  },
  {
    "id": 968,
    "nome": "Kit 10 Lampada Led Dicróica MR16 4,8w 6500k Branco Frio GU10 110v/220v Branco Cod: ALUT001208-10 Alut By Avant",
    "preco": "R$78,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_631411-MLA107799712437_022026-O.webp",
    "link": "https://meli.la/2GjhdCn",
    "cupom": "AVANT25"
  },
  {
    "id": 969,
    "nome": "Kit 10 Balizador Led Embutido Solo Essence 5w 3000k Branco Quente Ip67 Preto Cod: Alut010024-10 Alut By Avant",
    "preco": "R$699",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_811583-MLA95649387954_102025-O.webp",
    "link": "https://meli.la/2YV3PsM",
    "cupom": "AVANT25"
  },
  {
    "id": 970,
    "nome": "Kit 5 Refletor Led 500w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010042-5 Alut By Avant",
    "preco": "R$595,71",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_797628-MLA114545154436_082026-O.webp",
    "link": "https://meli.la/16NA5Fg",
    "cupom": "AVANT25"
  },
  {
    "id": 971,
    "nome": "Kit 16 Pilhas Alcalina Aaa Palito 1.5v Avant Use",
    "preco": "R$39,80",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_927417-MLA113885120245_062026-O.webp",
    "link": "https://meli.la/2HAmmPE",
    "cupom": "AVANT25"
  },
  {
    "id": 972,
    "nome": "Tomada Inteligente Smart Zigbee 20a Vidro Temperado 3 Pinos Smart Alexa Tuya Smart Life Google 110v 220v Bivolt Branco - Avant Neo",
    "preco": "R$119,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_793813-MLA110981887984_052026-O.webp",
    "link": "https://meli.la/2QkFGwL",
    "cupom": "AVANT25"
  },
  {
    "id": 973,
    "nome": "Painel Led Plafon Smart Embutir Inteligente Wifi 18w 2700k A 6500k Quadrado Branco Avant Neo",
    "preco": "R$66,51",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_842426-MLA111234811175_052026-O.webp",
    "link": "https://meli.la/2KdPQ7B",
    "cupom": "AVANT25"
  },
  {
    "id": 974,
    "nome": "Lampada Smart Bulbo Hp 50w 2700k/6500k Rgb E27 Neo By Avant Rgb",
    "preco": "R$131",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_885431-MLA112306739556_062026-O.webp",
    "link": "https://meli.la/29DTsc6",
    "cupom": "AVANT25"
  },
  {
    "id": 975,
    "nome": "Luminária de Emergência Bloco LED 5w 1200 lm Bivolt com Autonomia de 4h 6500k Branco Frio Para Parede e Teto Cod: ALUT000802 Alut by Avant",
    "preco": "R$78,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_677649-MLA114592181373_072026-O.webp",
    "link": "https://meli.la/2BDAgCN",
    "cupom": "AVANT25"
  },
  {
    "id": 976,
    "nome": "Kit 5 Refletor Led Slim Externo 200w 6500k Branco Frio Ip66 110v/220v Bivolt Preto Cod: ALUT000702-5 Alut By Avant",
    "preco": "R$386,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_786511-MLA115899243749_082026-O.webp",
    "link": "https://meli.la/1Zh2ueP",
    "cupom": "AVANT25"
  },
  {
    "id": 977,
    "nome": "Kit 4 Pilhas Recarregável Palito AAA 3a 1.2v 1000mah Cod: 408180016 Avant",
    "preco": "R$26,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_664647-MLA99933990661_112025-O.webp",
    "link": "https://meli.la/2zUPBSJ",
    "cupom": "AVANT25"
  },
  {
    "id": 978,
    "nome": "Painel Central Inteligente Nexus 8 Wi-fi Zigbee Alexa Neo",
    "preco": "R$814,47",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875956-MLB110071806324_042026-O.webp",
    "link": "https://meli.la/1YeW1ML",
    "cupom": "AVANT25"
  },
  {
    "id": 979,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 30w 3000k Branco Quente 40x40Cm Quadrado Cod: ALUT190076-10 Alut By Avant",
    "preco": "R$581,97",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_881151-MLA116162374468_092026-O.webp",
    "link": "https://meli.la/16zU2NF",
    "cupom": "AVANT25"
  },
  {
    "id": 980,
    "nome": "Kit 2 Lampadas Led Pera Smart Inteligente Wi Fi 2.4ghz Alexa Google 10w Rgb 2700k/6500k Branco Quente/neutro/frio E27 Cod: 290028177-2 Avant Neo",
    "preco": "R$62,95",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_965728-MLA112439600241_052026-O.webp",
    "link": "https://meli.la/1mW7GgZ",
    "cupom": "AVANT25"
  },
  {
    "id": 981,
    "nome": "Kit 5 Refletor Led 100w 6500k Branco Frio A Prova D'água Alut Cod: Alut000701-5 Alut By Avant",
    "preco": "R$179,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_795894-MLA114540425210_082026-O.webp",
    "link": "https://meli.la/2wdUjVb",
    "cupom": "AVANT25"
  },
  {
    "id": 982,
    "nome": "Kit 16 Pilhas Recarregável Comum Aa 2700mah Avant Use",
    "preco": "R$179,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_840013-MLA99881783963_112025-O.webp",
    "link": "https://meli.la/33EVAya",
    "cupom": "AVANT25"
  },
  {
    "id": 983,
    "nome": "Interruptor Com Tomada Smart Zigbee Neo Preto 1 Botão",
    "preco": "R$121,61",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_998786-MLB111017113338_052026-O.webp",
    "link": "https://meli.la/2cGoatE",
    "cupom": "AVANT25"
  },
  {
    "id": 984,
    "nome": "Kit 2 Spot Led Smart Wi-fi Emb 5w Rgb Red Branco Neo Avant",
    "preco": "R$119,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_753291-MLA113460171909_062026-O.webp",
    "link": "https://meli.la/28PfYQ2",
    "cupom": "AVANT25"
  },
  {
    "id": 985,
    "nome": "Kit 2 Lampada Smart Inteligente Wi-fi Led Par20 7w Rgb E27 Neo Avant",
    "preco": "R$115,60",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_834152-MLA97998836876_112025-O.webp",
    "link": "https://meli.la/1wA2nTY",
    "cupom": "AVANT25"
  },
  {
    "id": 986,
    "nome": "Fita Led Cob 5 Metros 15w 2700k Branco Quente Cod: ALUT001778 Alut By Avant",
    "preco": "R$53,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_739453-MLA96993966380_112025-O.webp",
    "link": "https://meli.la/28ci2wA",
    "cupom": "AVANT25"
  },
  {
    "id": 987,
    "nome": "Kit 3 Refletor Led 100w 6500k Branco Frio A Prova D'água Alut Cod: Alut000701-3 Alut By Avant",
    "preco": "R$116,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_668624-MLA114540682154_082026-O.webp",
    "link": "https://meli.la/2bGRxgb",
    "cupom": "AVANT25"
  },
  {
    "id": 988,
    "nome": "Controle Universal de Infra Vermelho Inteligente Wi-fi 2.4 GHz 110v/220v Bivolt Cod: 291100052 Avant Neo",
    "preco": "R$63,12",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_811389-MLA110214925894_052026-O.webp",
    "link": "https://meli.la/2hGpf4c",
    "cupom": "AVANT25"
  },
  {
    "id": 989,
    "nome": "Sensor Presença Articulado 360 Inteligente Wi-Fi 2.4 GHz Bivolt Branco Cod: 291100034 Avant Neo",
    "preco": "R$69,21",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_934242-MLA102188360168_122025-O.webp",
    "link": "https://meli.la/1C1CMgN",
    "cupom": "AVANT25"
  },
  {
    "id": 990,
    "nome": "Kit 3 Painel Led Embutir 2700/6500k 24w 30x30 Neo Avant",
    "preco": "R$363",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_872748-MLA110305535408_052026-O.webp",
    "link": "https://meli.la/2QQTE6P",
    "cupom": "AVANT25"
  },
  {
    "id": 991,
    "nome": "Interruptor Inteligente Smart Zigbee 2 Botões Touch Branco Bivolt 4x2 Automação Casa Neo",
    "preco": "R$67,45",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_704611-MLA112008355709_052026-O.webp",
    "link": "https://meli.la/2NrpZGx",
    "cupom": "AVANT25"
  },
  {
    "id": 992,
    "nome": "Kit 2 Refletor Led 200w 6500k Branco Frio a prova d'água Alut Cod: ALUT000702-2 Alut By Avant",
    "preco": "R$161,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_931404-MLA114541590610_082026-O.webp",
    "link": "https://meli.la/1EF9KNC",
    "cupom": "AVANT25"
  },
  {
    "id": 993,
    "nome": "Fechadura Digital Inteligente Stark Sobrepor Wi-FI Biometria Preto Cod: 360535871 Neo Avant",
    "preco": "R$449,10",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_927747-MLA115526548457_082026-O.webp",
    "link": "https://meli.la/1xWsb9H",
    "cupom": "AVANT25"
  },
  {
    "id": 994,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 24w 4000k Branco Neutro 29x29Cm Quadrado Cod: ALUT190074-10 Alut By Avant",
    "preco": "R$346,50",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_940478-MLA116161734260_092026-O.webp",
    "link": "https://meli.la/1rohSwX",
    "cupom": "AVANT25"
  },
  {
    "id": 995,
    "nome": "Kit 10 Lampada Led Par20 7w 4000k Branco Neutro E27 Ip20 Branco Cod: Alut001202-10 Alut By Avant",
    "preco": "R$89,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_810785-MLA96103995537_102025-O.webp",
    "link": "https://meli.la/2PogLKa",
    "cupom": "AVANT25"
  },
  {
    "id": 996,
    "nome": "Interruptor Smart Wi-fi 6 Botões Touch Branco Neo By Avant",
    "preco": "R$159,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_915231-MLB118550959849_102026-O.webp",
    "link": "https://meli.la/1cnY2MR",
    "cupom": "AVANT25"
  },
  {
    "id": 997,
    "nome": "Refletor Led Slim Externo 200w 6500k Branco Frio Ip66 110v/220v Bivolt Preto Cod: ALUT000702 Alut By Avant",
    "preco": "R$76,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_777833-MLA115898905519_082026-O.webp",
    "link": "https://meli.la/2dqsqyg",
    "cupom": "AVANT25"
  },
  {
    "id": 998,
    "nome": "Sensor Presença Articulado 360 Inteligente Zigbee Bivolt Branco Cod: 291100043 Avant Neo",
    "preco": "R$59,40",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_836203-MLA101415849016_122025-O.webp",
    "link": "https://meli.la/2BZ7ZPc",
    "cupom": "AVANT25"
  },
  {
    "id": 999,
    "nome": "Câmera De Segurança Wi-fi Inteligente Full Hd 2k 360° Visão Noturna Optimus Pro Branco Avant Neo",
    "preco": "R$199,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_963079-MLA110124729432_042026-O.webp",
    "link": "https://meli.la/2bJfqBN",
    "cupom": "AVANT25"
  },
  {
    "id": 1000,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 18w 6500K Branco Frio 22cm Redondo Cod: ALUT001983-10 Alut By Avant",
    "preco": "R$242,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807693-MLA117379951319_092026-O.webp",
    "link": "https://meli.la/16qhD3b",
    "cupom": "AVANT25"
  },
  {
    "id": 1001,
    "nome": "Lampada Led Bulbo Hp 150w 6500k E27 110v/220v Bivolt - Alut",
    "preco": "R$116,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_653298-MLA113354622336_072026-O.webp",
    "link": "https://meli.la/14wVWuF",
    "cupom": "AVANT25"
  },
  {
    "id": 1002,
    "nome": "Kit 96 Pilhas Alcalina Pequena Aa 1.5v 2a Avant",
    "preco": "R$199,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_912583-MLA106728879468_022026-O.webp",
    "link": "https://meli.la/1iufBdy",
    "cupom": "AVANT25"
  },
  {
    "id": 1003,
    "nome": "Kit 4 Refletor Led 500w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010042-4 Alut By Avant",
    "preco": "R$955,04",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_846147-MLA115901656435_082026-O.webp",
    "link": "https://meli.la/2Dp7iWx",
    "cupom": "AVANT25"
  },
  {
    "id": 1004,
    "nome": "Placa Cega Espelho De Interruptor Liso 4x2 Branco Neo Avant",
    "preco": "R$59,89",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_634798-MLB111853063219_052026-O.webp",
    "link": "https://meli.la/28dyZdn",
    "cupom": "AVANT25"
  },
  {
    "id": 1005,
    "nome": "Tomada Flex Sesto 6 Saida 4x4 10a E 20a Branco Avant Neo",
    "preco": "R$119,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_913294-MLA101787648651_122025-O.webp",
    "link": "https://meli.la/2uLf4sW",
    "cupom": "AVANT25"
  },
  {
    "id": 1006,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 30w 4000k Branco Neutro 40x40cm Quadrado Cod: ALUT002015-5 Alut By Avant",
    "preco": "R$379,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628382-MLA115094781532_082026-O.webp",
    "link": "https://meli.la/2ZcUsBi",
    "cupom": "AVANT25"
  },
  {
    "id": 1007,
    "nome": "Kit 5 Lampada Led Smart Wifi 2.4Ghz Bulbo Hp 20w 2700k/6500k Rgb Colorido E27 110v/220v Neo Avant",
    "preco": "R$280",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_880228-MLA112304629510_062026-O.webp",
    "link": "https://meli.la/11CGPaU",
    "cupom": "AVANT25"
  },
  {
    "id": 1008,
    "nome": "Kit 16 Pilhas Alcalina Pequena AA 2A 1.5v Cod: 408030014 Avant Use",
    "preco": "R$39,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_716044-MLA106728785760_022026-O.webp",
    "link": "https://meli.la/1WgERwC",
    "cupom": "AVANT25"
  },
  {
    "id": 1009,
    "nome": "Refletor Led 500w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010042 Alut By Avant",
    "preco": "R$256,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_774186-MLA115902207097_082026-O.webp",
    "link": "https://meli.la/1mk3T4c",
    "cupom": "AVANT25"
  },
  {
    "id": 1010,
    "nome": "Kit 10 Balizador Led Embutido Solo Essence 5w 3000k Branco Quente Ip67 Aço Escovado Cod: Alut010023-10 Alut By Avant",
    "preco": "R$669,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_752390-MLA95671390584_102025-O.webp",
    "link": "https://meli.la/1Me77Cz",
    "cupom": "AVANT25"
  },
  {
    "id": 1011,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 24w 3000k Branco Quente 29x29cm Quadrado Cod: ALUT002008-3 Alut By Avant",
    "preco": "R$143,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_949739-MLA116370573259_082026-O.webp",
    "link": "https://meli.la/1vEdsQK",
    "cupom": "AVANT25"
  },
  {
    "id": 1012,
    "nome": "Kit 5 Lampada Led Bulbo Hp 150w 6500k Branco Frio 110v/220v Bivolt E27 Cod: ALUT000104-5 Alut By Avant",
    "preco": "R$539,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_641199-MLA113459506496_072026-O.webp",
    "link": "https://meli.la/1HocQ5k",
    "cupom": "AVANT25"
  },
  {
    "id": 1013,
    "nome": "Kit 3 Refletor Led 300w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010041-3 Alut By Avant",
    "preco": "R$341,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_782259-MLA115900536457_082026-O.webp",
    "link": "https://meli.la/1YK5bxx",
    "cupom": "AVANT25"
  },
  {
    "id": 1014,
    "nome": "Placa Cega Espelho De Interruptor Liso 4x2 Preto Neo Avant",
    "preco": "R$60",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_863832-MLB110887850576_052026-O.webp",
    "link": "https://meli.la/2fLpdHF",
    "cupom": "AVANT25"
  },
  {
    "id": 1015,
    "nome": "Modulo Interruptor Rele de Cortina e Persiana Wi-fi 2.4 GHz 10A Bivolt Branco Cod: 291990987 Avant Neo",
    "preco": "R$59,31",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_694027-MLA111283380372_052026-O.webp",
    "link": "https://meli.la/2g8wwKZ",
    "cupom": "AVANT25"
  },
  {
    "id": 1016,
    "nome": "Kit 4 Refletor Led 300w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010041-4 Alut By Avant",
    "preco": "R$482,31",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_805921-MLA115900390545_082026-O.webp",
    "link": "https://meli.la/2Mkyyhe",
    "cupom": "AVANT25"
  },
  {
    "id": 1017,
    "nome": "Fita Led Inteligente Wi-fi 2.4 Ghz 10w 5 Metros 4000k Branco Neutro 12v Cod: Neo001755-k001 Neo Avant",
    "preco": "R$159,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_971494-MLA117649478179_092026-O.webp",
    "link": "https://meli.la/2NJsfwh",
    "cupom": "AVANT25"
  },
  {
    "id": 1018,
    "nome": "Interruptor Inteligente Smart Zigbee 4 Botões Touch Screen Branco Bivolt 4x2 Digital Neo",
    "preco": "R$107,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_933880-MLA112681054513_062026-O.webp",
    "link": "https://meli.la/2skRAvW",
    "cupom": "AVANT25"
  },
  {
    "id": 1019,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 30w 3000k Branco Quente 40x40cm Quadrado Cod: ALUT002014-5 Alut By Avant",
    "preco": "R$331,65",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_855314-MLA114987876454_082026-O.webp",
    "link": "https://meli.la/225AiXD",
    "cupom": "AVANT25"
  },
  {
    "id": 1020,
    "nome": "Kit 10 Lampadas Led Bulbo Hp 30w 6500k E27 110v/220v - Alut 127/220v Branco-frio",
    "preco": "R$123,33",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_959581-MLB117664815059_092026-O.webp",
    "link": "https://meli.la/2S9BK1r",
    "cupom": "AVANT25"
  },
  {
    "id": 1021,
    "nome": "Kit 12 Baterias Alcalina 9v Cod: 408100014-12 Avant Use",
    "preco": "R$142,71",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_752496-MLA99932318701_112025-O.webp",
    "link": "https://meli.la/1eePzcr",
    "cupom": "AVANT25"
  },
  {
    "id": 1022,
    "nome": "Kit 3 Refletor Led 200w 6500k Branco Frio a prova d'água Alut Cod ALUT000702-3 Alut By Avant",
    "preco": "R$260,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_831962-MLA115898572347_082026-O.webp",
    "link": "https://meli.la/2S5gRSq",
    "cupom": "AVANT25"
  },
  {
    "id": 1023,
    "nome": "Kit 5 Barras 2m Rodapé Poliestireno Frisado 10cm Altura Alut Branco",
    "preco": "R$15,34",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_924231-MLB117485844143_092026-O.webp",
    "link": "https://meli.la/1Ln8o89",
    "cupom": "AVANT25"
  },
  {
    "id": 1024,
    "nome": "Modulo Passa Fio Espelho 4x2 Branco Cod: 291991010 Neo Avant",
    "preco": "R$63,12",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875275-MLB110118464382_042026-O.webp",
    "link": "https://meli.la/1m3CPkW",
    "cupom": "AVANT25"
  },
  {
    "id": 1025,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22x22cm Quadrado Cod: ALUT001999-10 Alut By Avant",
    "preco": "R$239,20",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_748665-MLA114809449616_082026-O.webp",
    "link": "https://meli.la/2hdnSnB",
    "cupom": "AVANT25"
  },
  {
    "id": 1026,
    "nome": "Kit 4 Lampadas Led Pera Smart Inteligente Wi Fi 2.4ghz Alexa Google 10w Rgb 2700k/6500k Branco Quente/neutro/frio E27 Cod: 290028177-4 Avant Neo",
    "preco": "R$127,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_758236-MLA112439600269_052026-O.webp",
    "link": "https://meli.la/1T4F2HE",
    "cupom": "AVANT25"
  },
  {
    "id": 1027,
    "nome": "Interruptor Smart Wi-fi 8 Botões Touch Branco Neo By Avant Branco",
    "preco": "R$163,76",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_651335-MLB118066756043_092026-O.webp",
    "link": "https://meli.la/1d2Fush",
    "cupom": "AVANT25"
  },
  {
    "id": 1028,
    "nome": "Kit 3 Refletor Led Slim 1000w 6500k 110v/220v Bivolt Alut - Preto - Branco-frio",
    "preco": "R$386,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_935066-MLA114545597920_082026-O.webp",
    "link": "https://meli.la/1PLVU1J",
    "cupom": "AVANT25"
  },
  {
    "id": 1029,
    "nome": "Kit 5 Baterias Lítio Cr2032 3v Tipo Moeda Avant Use",
    "preco": "R$12,72",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_658648-MLA99902812751_112025-O.webp",
    "link": "https://meli.la/2GCzrSA",
    "cupom": "AVANT25"
  },
  {
    "id": 1030,
    "nome": "Kit 5 Barras 2m Rodapé Poliestireno Liso 15cm Branco",
    "preco": "R$34,27",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_730719-MLB117185694594_102026-O.webp",
    "link": "https://meli.la/32xZAJB",
    "cupom": "AVANT25"
  },
  {
    "id": 1031,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 24w 3000k Branco Quente 29cm Redondo Cod: ALUT002011-10 Alut By Avant",
    "preco": "R$369,02",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_956113-MLA116371844285_082026-O.webp",
    "link": "https://meli.la/2QiSMaH",
    "cupom": "AVANT25"
  },
  {
    "id": 1032,
    "nome": "Kit 10 Lampada Led Dicróica Mr16 Smart Inteligente Wi-fi 5w 2700k/6500k Rgb Colorido Gu10 Branco Cod: 291990257-10 Neo Avant",
    "preco": "R$799,35",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_806070-MLA113469704227_062026-O.webp",
    "link": "https://meli.la/2d58qXY",
    "cupom": "AVANT25"
  },
  {
    "id": 1033,
    "nome": "Interruptor Inteligente Smart Zigbee 2 Botões Touch Preto Bivolt 4x2 Automação Casa Neo",
    "preco": "R$59,36",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_724905-MLA111513876676_062026-O.webp",
    "link": "https://meli.la/1jhRcVc",
    "cupom": "AVANT25"
  },
  {
    "id": 1034,
    "nome": "Refletor Led Slim 400w 30000lm 6500k Bivolt Ip65 Alut Preto Branco-frio",
    "preco": "R$237,67",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_879894-MLA114543907598_082026-O.webp",
    "link": "https://meli.la/2z9S2Xn",
    "cupom": "AVANT25"
  },
  {
    "id": 1035,
    "nome": "kit 48 Pilhas Alcalina Palito AAA 1.5v 3A Cod: 408070010-3 Avant Use",
    "preco": "R$84,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819916-MLA107394558473_022026-O.webp",
    "link": "https://meli.la/2vRwk2V",
    "cupom": "AVANT25"
  },
  {
    "id": 1036,
    "nome": "Câmera Inteligente Optimus Pro Full HD 2K Wi-fi 2.4 GHz 360° Com Visão Noturna Preto Cod: 395045817 Avant Neo",
    "preco": "R$224,10",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_981977-MLA111044013751_042026-O.webp",
    "link": "https://meli.la/2c9HRVf",
    "cupom": "AVANT25"
  },
  {
    "id": 1037,
    "nome": "Painel Led Plafon Aluminio Sobrepor 24w 4000k Branco Neutro 29x29cm Quadrado Cod: ALUT002009 Alut By Avant",
    "preco": "R$64,07",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_800832-MLA114320160564_082026-O.webp",
    "link": "https://meli.la/1Zjrbdw",
    "cupom": "AVANT25"
  },
  {
    "id": 1038,
    "nome": "Placa Cega Espelho De Interruptor Liso 4x4 Branco Neo Avant",
    "preco": "R$91,57",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_766432-MLB110888118114_052026-O.webp",
    "link": "https://meli.la/2bEdRtU",
    "cupom": "AVANT25"
  },
  {
    "id": 1039,
    "nome": "Kit 2 Refletor Led 300w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010041-2 Alut By Avant",
    "preco": "R$288,81",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_985986-MLA114543292960_082026-O.webp",
    "link": "https://meli.la/2eYDZMq",
    "cupom": "AVANT25"
  },
  {
    "id": 1040,
    "nome": "Modulo Interruptor Rele de Cortina e Persiana Zigbee 10A Bivolt Branco Cod: 291990988 Avant Neo",
    "preco": "R$71,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_971603-MLA111283345610_052026-O.webp",
    "link": "https://meli.la/1Moojmx",
    "cupom": "AVANT25"
  },
  {
    "id": 1041,
    "nome": "Câmera De Segurança Wi-fi Inteligente Vion Full Hd 1080p 2k 360° Visão Noturna - Branca - Avant Neo",
    "preco": "R$359,20",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_627824-MLA111044548699_042026-O.webp",
    "link": "https://meli.la/2sQeY8o",
    "cupom": "AVANT25"
  },
  {
    "id": 1042,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 18w 6500K Branco Frio 22cm Redondo Cod: ALUT002007-10 Alut By Avant",
    "preco": "R$248,40",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_690328-MLA114942599752_082026-O.webp",
    "link": "https://meli.la/2rNgwvm",
    "cupom": "AVANT25"
  },
  {
    "id": 1043,
    "nome": "Interruptor Inteligente Smart Zigbee 8 Botões Touch Branco Bivolt 4x2 Automação Casa Neo",
    "preco": "R$166,47",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_686809-MLA112680911759_062026-O.webp",
    "link": "https://meli.la/2YsotvJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1044,
    "nome": "Kit 4 Refletor Led 400w 6500k Branco Frio A Prova D'água Alut Cod: Alut000704-4 Alut By Avant",
    "preco": "R$820,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_874989-MLA114544790410_082026-O.webp",
    "link": "https://meli.la/2i81HLr",
    "cupom": "AVANT25"
  },
  {
    "id": 1045,
    "nome": "Kit 5 Lampada Led Par20 Smart Inteligente Zigbee 7w 2700/6500k Rgb Colorido E27 Branco Cod:291990294-5 Neo Avant",
    "preco": "R$270,30",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628343-MLA110043563256_042026-O.webp",
    "link": "https://meli.la/33BHj3T",
    "cupom": "AVANT25"
  },
  {
    "id": 1046,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 12w 6500K Branco Frio 17x17Cm Quadrado Cod: ALUT001977-10 Alut By Avant",
    "preco": "R$179,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_816701-MLA115753052592_092026-O.webp",
    "link": "https://meli.la/1GHsEdm",
    "cupom": "AVANT25"
  },
  {
    "id": 1047,
    "nome": "Kit 2 Pilhas Baterias Recarregável 9v Avant Use",
    "preco": "R$59,96",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_733464-MLA99882245695_112025-O.webp",
    "link": "https://meli.la/2uzcndN",
    "cupom": "AVANT25"
  },
  {
    "id": 1048,
    "nome": "Interruptor Smart Zigbee 8 Botões Touch Branco Neo Avant Branco 127/220v",
    "preco": "R$184,97",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_636357-MLB116559802122_092026-O.webp",
    "link": "https://meli.la/1MFwkUx",
    "cupom": "AVANT25"
  },
  {
    "id": 1049,
    "nome": "Kit 3 Lampada Led Bulbo Hp 150w 6500k Branco Frio 110v/220v Bivolt E27 Cod: ALUT000104-3 Alut By Avant",
    "preco": "R$336,48",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_799988-MLA114663876097_072026-O.webp",
    "link": "https://meli.la/1xpAU99",
    "cupom": "AVANT25"
  },
  {
    "id": 1050,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 24w 4000k Branco Neutro 29x29Cm Quadrado Cod: ALUT190074-5 Alut By Avant",
    "preco": "R$233,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_873081-MLA117646957735_092026-O.webp",
    "link": "https://meli.la/1hCeAj6",
    "cupom": "AVANT25"
  },
  {
    "id": 1051,
    "nome": "Interruptor Inteligente Smart Zigbee 3 Botões Touch Screen Branco Bivolt 4x2 Digital Neo",
    "preco": "R$89,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_995320-MLA111030812902_052026-O.webp",
    "link": "https://meli.la/1xWZ1kt",
    "cupom": "AVANT25"
  },
  {
    "id": 1052,
    "nome": "Tomada Inteligente Smart Wi-fi 20a Bivolt Preto Avant Neo",
    "preco": "R$119,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_944447-MLB111953367433_052026-O.webp",
    "link": "https://meli.la/1j6Xy3M",
    "cupom": "AVANT25"
  },
  {
    "id": 1053,
    "nome": "Interruptor Com Tomada Smart Zigbee Neo Branco 127/220v",
    "preco": "R$127,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_691547-MLB111992944763_052026-O.webp",
    "link": "https://meli.la/1PyPmwN",
    "cupom": "AVANT25"
  },
  {
    "id": 1054,
    "nome": "Kit 5 Lampada Led Pera Smart Wi-fi 15w Rgb E27 Neo Avant 127/220v Rgb",
    "preco": "R$184,80",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_774953-MLB113385485258_072026-O.webp",
    "link": "https://meli.la/26iypK4",
    "cupom": "AVANT25"
  },
  {
    "id": 1055,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 30w 4000k Branco Neutro 40x40cm Quadrado Cod: ALUT002015-3 Alut By Avant",
    "preco": "R$249,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_952982-MLA115094170628_082026-O.webp",
    "link": "https://meli.la/2fdNdhv",
    "cupom": "AVANT25"
  },
  {
    "id": 1056,
    "nome": "Placa Cega Espelho De Interruptor Liso 4x4 Preto Neo Avant",
    "preco": "R$91",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_797230-MLB110887854082_052026-O.webp",
    "link": "https://meli.la/2BpUJFs",
    "cupom": "AVANT25"
  },
  {
    "id": 1057,
    "nome": "Modulo Interruptor Rele Inteligente Wi-fi 1x10a Neo",
    "preco": "R$59,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_613314-MLB110583466342_052026-O.webp",
    "link": "https://meli.la/2McET7w",
    "cupom": "AVANT25"
  },
  {
    "id": 1058,
    "nome": "Kit 2 Lampada Led Par20 Smart Inteligente Zigbee 7w 2700/6500k Rgb Colorido E27 Branco Cod:291990294-2 Neo Avant",
    "preco": "R$149,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_699489-MLA110042301822_042026-O.webp",
    "link": "https://meli.la/1w69Voa",
    "cupom": "AVANT25"
  },
  {
    "id": 1059,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22x22cm Quadrado Cod: ALUT001999-3 Alut By Avant",
    "preco": "R$96,15",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_824044-MLA116181718903_082026-O.webp",
    "link": "https://meli.la/2Hwzfme",
    "cupom": "AVANT25"
  },
  {
    "id": 1060,
    "nome": "Interruptor Smart Wi-fi 6 Botões Touch Preto Neo By Avant Preto",
    "preco": "R$149,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_935269-MLB118551369381_102026-O.webp",
    "link": "https://meli.la/1dFn7bA",
    "cupom": "AVANT25"
  },
  {
    "id": 1061,
    "nome": "Kit 10 Baterias Lítio 2016 3v Tipo Moeda Avant Use",
    "preco": "R$15,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_650826-MLA99826472481_112025-O.webp",
    "link": "https://meli.la/2pGY5rb",
    "cupom": "AVANT25"
  },
  {
    "id": 1062,
    "nome": "Tomada Flex 1 Saida 4x2 10a E 20a  Branco Avant Neo",
    "preco": "R$49,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_902340-MLB114655606150_082026-O.webp",
    "link": "https://meli.la/2XT2fQu",
    "cupom": "AVANT25"
  },
  {
    "id": 1063,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29cm Redondo Cod: ALUT002013-5 Alut By Avant",
    "preco": "R$169,60",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_879931-MLA116654135761_082026-O.webp",
    "link": "https://meli.la/1q5ajRf",
    "cupom": "AVANT25"
  },
  {
    "id": 1064,
    "nome": "Interruptor Smart Zigbee 1 Botão Touch Neo By Avant Preto",
    "preco": "R$76,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_987458-MLB110882649812_052026-O.webp",
    "link": "https://meli.la/2DkXava",
    "cupom": "AVANT25"
  },
  {
    "id": 1065,
    "nome": "Kit 4 Baterias Lr44 A76 Ag13 Alcalina - 1 Cartela Brinquedo Relógio Calculadora Lanterna Avant Use",
    "preco": "R$13,87",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_782564-MLA99912305425_112025-O.webp",
    "link": "https://meli.la/2bqXAZH",
    "cupom": "AVANT25"
  },
  {
    "id": 1066,
    "nome": "Fita Led Inteligente Wi-fi 2.4 GHz 10w 5 Metros 6500k Branco Frio 12v Cod: NEO001756-k001 Neo Avant",
    "preco": "R$159,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_909500-MLA117649797391_092026-O.webp",
    "link": "https://meli.la/2Ge7GR5",
    "cupom": "AVANT25"
  },
  {
    "id": 1067,
    "nome": "Câmera Optimus Pro Full Hd 2k Wi-fi 355° Preto Avant Neo Preto",
    "preco": "R$199,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_888145-MLB110117903524_042026-O.webp",
    "link": "https://meli.la/1n9f8Db",
    "cupom": "AVANT25"
  },
  {
    "id": 1068,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 18w 6500K Branco Frio 22cm Redondo Cod: ALUT001983-3 Alut By Avant",
    "preco": "R$71,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_602664-MLA117379026843_092026-O.webp",
    "link": "https://meli.la/2PK8uxK",
    "cupom": "AVANT25"
  },
  {
    "id": 1069,
    "nome": "Kit 8 Baterias Botão Alcalina Lr44 1.5v Avant Use",
    "preco": "R$12,92",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_655289-MLA100074231827_122025-O.webp",
    "link": "https://meli.la/1u7rMB2",
    "cupom": "AVANT25"
  },
  {
    "id": 1070,
    "nome": "Fita Led Inteligente Zigbee 10w 5 Metros 4000k Branco Neutro 12v Cod: Neo001755-k002 Neo Avant",
    "preco": "R$179,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_908774-MLA117650094921_092026-O.webp",
    "link": "https://meli.la/1iAbjGr",
    "cupom": "AVANT25"
  },
  {
    "id": 1071,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir Quadrado 6500K Branco Frio 18w 22x22Cm",
    "preco": "R$65,61",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_865249-MLA117377920925_092026-O.webp",
    "link": "https://meli.la/2WCR7AD",
    "cupom": "AVANT25"
  },
  {
    "id": 1072,
    "nome": "Kit 5 Lampada Led Smart Wi-fi 2.4 Ghz Bulbo Hp 40w 2700k/6500k Rgb Colorido E27 110v/220v Cod: 291990329-5 Neo Avant",
    "preco": "R$551,76",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_830166-MLA112306736526_062026-O.webp",
    "link": "https://meli.la/2sGecCa",
    "cupom": "AVANT25"
  },
  {
    "id": 1073,
    "nome": "Kit 5 Refletor Led Slim 1000w 6500k 110v/220v Bivolt Alut Preto Branco-frio",
    "preco": "R$386,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_802579-MLA114545546928_082026-O.webp",
    "link": "https://meli.la/2guZP6c",
    "cupom": "AVANT25"
  },
  {
    "id": 1074,
    "nome": "Fita Led Inteligente Zigbee 10w 5 Metros 6500k Branco Frio 12v Cod: Neo001756-k002 Neo Avant",
    "preco": "R$180,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_690944-MLA117649630215_092026-O.webp",
    "link": "https://meli.la/1u8VYYZ",
    "cupom": "AVANT25"
  },
  {
    "id": 1075,
    "nome": "Kit 10 Plafon Led Embutir Quadrado 18w Branco Frio 6500k Bivolt Alut Painel Teto",
    "preco": "R$152,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_870841-MLA99508637688_112025-O.webp",
    "link": "https://meli.la/2pHFvKb",
    "cupom": "AVANT25"
  },
  {
    "id": 1076,
    "nome": "Kit 2 Lampada Pera Smart St64 6w 2700k/6500k/rgb Neo Avant 220v Rgb",
    "preco": "R$208,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953550-MLB112930889353_062026-O.webp",
    "link": "https://meli.la/2Y2bqXX",
    "cupom": "AVANT25"
  },
  {
    "id": 1077,
    "nome": "Tomada Flex Sesto 6 Saida 4x4 10a E 20a Preto Avant Neo",
    "preco": "R$119,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_864468-MLB113459120529_062026-O.webp",
    "link": "https://meli.la/2ji2nwp",
    "cupom": "AVANT25"
  },
  {
    "id": 1078,
    "nome": "Interruptor Smart Zigbee 6 Botões Touch Preto Neo By Avant",
    "preco": "R$169,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_653251-MLB118068190883_092026-O.webp",
    "link": "https://meli.la/2S91MCL",
    "cupom": "AVANT25"
  },
  {
    "id": 1079,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22cm Redondo Cod: ALUT002005-5 Alut By Avant",
    "preco": "R$175,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_734955-MLA116322703561_082026-O.webp",
    "link": "https://meli.la/1sF9ty4",
    "cupom": "AVANT25"
  },
  {
    "id": 1080,
    "nome": "Kit 4 Lampada Pera Smart St64 6w 2700k/6500k/rgb Neo Avant 127/220v Rgb",
    "preco": "R$258,41",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_851839-MLB111823712748_062026-O.webp",
    "link": "https://meli.la/33oHdEv",
    "cupom": "AVANT25"
  },
  {
    "id": 1081,
    "nome": "Kit 80 Pilhas Alcalina Pequena AA 1.5v 2a Avant Use",
    "preco": "R$159,12",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_681378-MLA110060347291_042026-O.webp",
    "link": "https://meli.la/1XAqEnh",
    "cupom": "AVANT25"
  },
  {
    "id": 1082,
    "nome": "Kit 2 Baterias 9v Recarregável + Carregador Rápido Avant Use 127/220v",
    "preco": "R$199,86",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922413-MLB112251810924_062026-O.webp",
    "link": "https://meli.la/29aHn8K",
    "cupom": "AVANT25"
  },
  {
    "id": 1083,
    "nome": "Fechadura Digital Smart Stark Handle Biometria Zigbee Neo Preto",
    "preco": "R$554,32",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_804921-MLB116054645212_092026-O.webp",
    "link": "https://meli.la/12daS3a",
    "cupom": "AVANT25"
  },
  {
    "id": 1084,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 18w 3000k Branco Quente 22cm Redondo Cod: ALUT001981-5 Alut By Avant",
    "preco": "R$116,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_730062-MLA117378606037_092026-O.webp",
    "link": "https://meli.la/1C8pSGB",
    "cupom": "AVANT25"
  },
  {
    "id": 1085,
    "nome": "Kit 4 Lampada Led Vela Smart Wi-fi 4w 1800k-2700k Neo Avant 127/220v",
    "preco": "R$268,57",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_830216-MLB112927335475_062026-O.webp",
    "link": "https://meli.la/2LTHTVj",
    "cupom": "AVANT25"
  },
  {
    "id": 1086,
    "nome": "Interruptor Smart Zigbee 4 Botões Touch Preto Neo By Avant Preto",
    "preco": "R$85,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_863891-MLB118068596467_092026-O.webp",
    "link": "https://meli.la/1kud36T",
    "cupom": "AVANT25"
  },
  {
    "id": 1087,
    "nome": "Kit 3 Spot Led + 1 Metro de Trilho Pop T1 de Sobrepor 15w 6500k Branco Frio 110v/220v Preto Cod: 251931414 Avant",
    "preco": "R$52,29",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_956495-MLA100971224611_122025-O.webp",
    "link": "https://meli.la/1mVpjMA",
    "cupom": "AVANT25"
  },
  {
    "id": 1088,
    "nome": "Kit 2 Lampada Led Vela Smart Wi-fi 5w 1800k-2700k Neo Avant",
    "preco": "R$123,19",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_785095-MLA112316638726_062026-O.webp",
    "link": "https://meli.la/1jXpcUi",
    "cupom": "AVANT25"
  },
  {
    "id": 1089,
    "nome": "Kit 3 Pilhas Baterias Recarregável 9v Avant Use",
    "preco": "R$82,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_747931-MLA99876999833_112025-O.webp",
    "link": "https://meli.la/2mMfav2",
    "cupom": "AVANT25"
  },
  {
    "id": 1090,
    "nome": "Kit 3 Fechadura Eletrônica Stark Digital Biometria Senha Wifi Sobrepor Preto minimalista Neo",
    "preco": "R$112,11",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_653446-MLA114193763890_082026-O.webp",
    "link": "https://meli.la/21Yvfm6",
    "cupom": "AVANT25"
  },
  {
    "id": 1091,
    "nome": "Tomada Inteligente Smart Zigbee 20a Bivolt Preto Avant Neo",
    "preco": "R$142,40",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_608159-MLB111953545581_052026-O.webp",
    "link": "https://meli.la/1yGgw9M",
    "cupom": "AVANT25"
  },
  {
    "id": 1092,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 12w 6500K Branco Frio 17x17Cm Quadrado Cod: ALUT001977-5 Alut By Avant",
    "preco": "R$116,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_755995-MLA117206643685_092026-O.webp",
    "link": "https://meli.la/2qcBj6B",
    "cupom": "AVANT25"
  },
  {
    "id": 1093,
    "nome": "Kit 4 Pilhas Alcalina Palito AAA 1.5v 408050012 Avant Use",
    "preco": "R$18,05",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_994445-MLA106728764218_022026-O.webp",
    "link": "https://meli.la/1BfqJv9",
    "cupom": "AVANT25"
  },
  {
    "id": 1094,
    "nome": "Kit 4 Refletor Led Slim 1000w 6500k 110v/220v Bivolt Alut Preto Branco-frio",
    "preco": "R$584,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_733689-MLA114545745574_082026-O.webp",
    "link": "https://meli.la/19Pdd5q",
    "cupom": "AVANT25"
  },
  {
    "id": 1095,
    "nome": "Kit 4 Lampada Led Pera Smart St64 6w 1800k/6500k Neo Avant 127/220v Branco-quente",
    "preco": "R$249,01",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_994045-MLB111823819394_062026-O.webp",
    "link": "https://meli.la/1s8dW87",
    "cupom": "AVANT25"
  },
  {
    "id": 1096,
    "nome": "Refletor Led Slim 1000w 6500k 110v/220v Bivolt Ip65 Alut 127/220v Preto Branco-frio",
    "preco": "R$685,60",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_995267-MLB115743113046_092026-O.webp",
    "link": "https://meli.la/2HWsLWJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1097,
    "nome": "Modulo Passa Fio Espelho 4x2 Preto Neo Avant Preto",
    "preco": "R$63,12",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_717204-MLB111036944795_042026-O.webp",
    "link": "https://meli.la/22UEijv",
    "cupom": "AVANT25"
  },
  {
    "id": 1098,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 6w 6500K Branco Frio 12cm Redondo Cod: ALUT001974-3 Alut By Avant",
    "preco": "R$53,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_729085-MLA115749775450_092026-O.webp",
    "link": "https://meli.la/2oqvCNW",
    "cupom": "AVANT25"
  },
  {
    "id": 1099,
    "nome": "Kit 10 Lâmpada 200w 6500k Branco Frio Alta Potência Led E27 Industrial Bivolt Alut",
    "preco": "R$427,41",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_656608-MLA113895187056_072026-O.webp",
    "link": "https://meli.la/2nAjecJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1100,
    "nome": "Kit 4 Pilha Aaa Palito Recarregável + Carregador Avant Use 127/220v",
    "preco": "R$142,71",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_982775-MLB110396663108_052026-O.webp",
    "link": "https://meli.la/13DXQQb",
    "cupom": "AVANT25"
  },
  {
    "id": 1101,
    "nome": "Interruptor Inteligente Smart Zigbee 8 Botões Touch Preto Bivolt 4x2 Automação Casa Neo",
    "preco": "R$153,08",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894130-MLA97351529243_112025-O.webp",
    "link": "https://meli.la/2ZDTpEz",
    "cupom": "AVANT25"
  },
  {
    "id": 1102,
    "nome": "Tomada Flex Trio 3 Saida 4x2 10a E 20a Branco Avant Neo",
    "preco": "R$69,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676282-MLB110981881696_052026-O.webp",
    "link": "https://meli.la/111sUTq",
    "cupom": "AVANT25"
  },
  {
    "id": 1103,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 6w 3000k Branco Quente 12x12Cm Quadrado Cod: ALUT001969-5 Alut By Avant",
    "preco": "R$79,92",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_666774-MLA115741658676_092026-O.webp",
    "link": "https://meli.la/1pQ29zg",
    "cupom": "AVANT25"
  },
  {
    "id": 1104,
    "nome": "Kit 10 Lampada Led Par20 Smart Inteligente Zigbee 7w 2700/6500k Rgb Colorido E27 Branco Cod:291990294-10 Neo Avant",
    "preco": "R$621,14",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_848541-MLA110297673380_052026-O.webp",
    "link": "https://meli.la/2DG1JYd",
    "cupom": "AVANT25"
  },
  {
    "id": 1105,
    "nome": "Interruptor Inteligente Smart Zigbee 3 Botões Touch Pto Neo Preto 127/220v",
    "preco": "R$81,12",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_814244-MLB112637892967_062026-O.webp",
    "link": "https://meli.la/2oz87MU",
    "cupom": "AVANT25"
  },
  {
    "id": 1106,
    "nome": "Kit 8 Pilha Aaa Palito Recarregável + Carregador Avant Use",
    "preco": "R$159,89",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_863126-MLB115649015643_082026-O.webp",
    "link": "https://meli.la/2J8R8UU",
    "cupom": "AVANT25"
  },
  {
    "id": 1107,
    "nome": "Interruptor Com Tomada Smart Zigbee 2 Botão Preto Neo Avant",
    "preco": "R$142,73",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_944016-MLB111993213373_052026-O.webp",
    "link": "https://meli.la/29ksXGj",
    "cupom": "AVANT25"
  },
  {
    "id": 1108,
    "nome": "Tomada Inteligente Smart Wi-fi 20a Bivolt Branco Avant Neo",
    "preco": "R$119,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_723756-MLB111952456263_052026-O.webp",
    "link": "https://meli.la/1C7WznJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1109,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 12w 3000k Branco Quente 17cm Redondo Cod: ALUT001978-3 Alut By Avant",
    "preco": "R$99,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_911140-MLA115894573762_092026-O.webp",
    "link": "https://meli.la/2UPLU8o",
    "cupom": "AVANT25"
  },
  {
    "id": 1110,
    "nome": "Kit 5 Lampada Smart Bulbo Hp 50w 2700k/6500k Rgb Neo Avant 220v Rgb",
    "preco": "R$523,06",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_688941-MLB113459245987_062026-O.webp",
    "link": "https://meli.la/2Bg77j5",
    "cupom": "AVANT25"
  },
  {
    "id": 1111,
    "nome": "Interruptor Smart Wi-fi 2.4 Ghz 8 Botões Touch Preto Neo Preto",
    "preco": "R$164,28",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_949160-MLB118068388823_092026-O.webp",
    "link": "https://meli.la/2Udm6ZL",
    "cupom": "AVANT25"
  },
  {
    "id": 1112,
    "nome": "Kit 2 Refletor Led 1000w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: ALUT000706-2 Alut By Avant",
    "preco": "R$595,71",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_716841-MLA105410403752_012026-O.webp",
    "link": "https://meli.la/2VYB2ww",
    "cupom": "AVANT25"
  },
  {
    "id": 1113,
    "nome": "Mini Modulo Interruptor Trio Rele Wi-fi 3x3,3a Neo Avant 3 A",
    "preco": "R$119,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_607424-MLB115718817011_082026-O.webp",
    "link": "https://meli.la/2Gt1RCr",
    "cupom": "AVANT25"
  },
  {
    "id": 1114,
    "nome": "Kit 8 Pilha Aa Comum Recarregável + Carregador Avant Use",
    "preco": "R$146,40",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_638982-MLB110396760530_052026-O.webp",
    "link": "https://meli.la/25uSqMi",
    "cupom": "AVANT25"
  },
  {
    "id": 1115,
    "nome": "Kit 10 Painel Led Plafon 50w 6500k Embutir 60x60 Quadrado Bivolt Alut",
    "preco": "R$189",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_895649-MLA99417495020_112025-O.webp",
    "link": "https://meli.la/2s5Eep4",
    "cupom": "AVANT25"
  },
  {
    "id": 1116,
    "nome": "Kit 3 Lampada Led Vela Smart Wi-fi 4w 1800k-2700k Neo Avant 127/220v",
    "preco": "R$186,76",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_805051-MLB112928066679_062026-O.webp",
    "link": "https://meli.la/1m3JAbg",
    "cupom": "AVANT25"
  },
  {
    "id": 1117,
    "nome": "Interruptor Smart Zigbee 6 Botões Touch Preto Neo Avant Preto 127/220v",
    "preco": "R$169,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_984569-MLB118068105843_092026-O.webp",
    "link": "https://meli.la/1nsErxv",
    "cupom": "AVANT25"
  },
  {
    "id": 1118,
    "nome": "Modulo Antena Espelho 4x2 Preto Cod: 291991065 Neo Avant",
    "preco": "R$78,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973719-MLB111036549947_042026-O.webp",
    "link": "https://meli.la/1vcvfAG",
    "cupom": "AVANT25"
  },
  {
    "id": 1119,
    "nome": "Mini Modulo Interruptor Quattro Rele Wi-fi 4x2,5a Neo Avant",
    "preco": "R$103,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_732118-MLB112620925127_062026-O.webp",
    "link": "https://meli.la/2phKcdo",
    "cupom": "AVANT25"
  },
  {
    "id": 1120,
    "nome": "Kit 4 Pilha Aa Comum Recarregável + Carregador Avant Use",
    "preco": "R$199,86",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628054-MLB110396669638_052026-O.webp",
    "link": "https://meli.la/2SCmJhV",
    "cupom": "AVANT25"
  },
  {
    "id": 1121,
    "nome": "Kit 10 Lampada Led Smart Wi-fi 2.4 Ghz Bulbo Hp 30w 2700k/6500k Rgb Colorido E27 110v/220v Cod: 291990310-10 Neo Avant",
    "preco": "R$779,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_792425-MLA112304532764_062026-O.webp",
    "link": "https://meli.la/1R8RNj2",
    "cupom": "AVANT25"
  },
  {
    "id": 1122,
    "nome": "Interruptor Inteligente Smart Zigbee 1 Botão Touch Bco Neo Branco 127/220v",
    "preco": "R$76,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_756623-MLB110884276216_052026-O.webp",
    "link": "https://meli.la/2nWybKd",
    "cupom": "AVANT25"
  },
  {
    "id": 1123,
    "nome": "Interruptor Smart Zigbee 3 Botões Touch Preto Neo By Avant",
    "preco": "R$72,98",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_940908-MLB111848375815_052026-O.webp",
    "link": "https://meli.la/34j2vzP",
    "cupom": "AVANT25"
  },
  {
    "id": 1124,
    "nome": "Kit 3 Refletor Led 500w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010042-3 Alut By Avant",
    "preco": "R$760,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_886838-MLA114544629758_082026-O.webp",
    "link": "https://meli.la/33qN1hJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1125,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 30w 6500K Branco Frio 40x40Cm Quadrado Cod: ALUT190078-10 Alut By Avant",
    "preco": "R$581,94",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_786079-MLA117650204001_092026-O.webp",
    "link": "https://meli.la/2fC8vqh",
    "cupom": "AVANT25"
  },
  {
    "id": 1126,
    "nome": "Kit 4 Lampada Led Vela Smart Wi-fi 5w 1800k-2700k Neo Avant",
    "preco": "R$249,01",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_775833-MLA113470505073_062026-O.webp",
    "link": "https://meli.la/17SYKCE",
    "cupom": "AVANT25"
  },
  {
    "id": 1127,
    "nome": "Interruptor Smart Zigbee 8 Botões Touch Preto Neo Avant Preto 127/220v",
    "preco": "R$147,15",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_770906-MLB118070217709_092026-O.webp",
    "link": "https://meli.la/1wrXCzh",
    "cupom": "AVANT25"
  },
  {
    "id": 1128,
    "nome": "Carregador De Tomada Para 4 Pilhas Recarregáveis AA / AAAA / 9V 110/220v Bivolt Cod: 408261012 Avant",
    "preco": "R$79,89",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_820142-MLA111341784619_052026-O.webp",
    "link": "https://meli.la/1sFBpGh",
    "cupom": "AVANT25"
  },
  {
    "id": 1129,
    "nome": "Interruptor Com Tomada Smart Zigbee 1 Botão Preto Neo Avant Preto",
    "preco": "R$158,59",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_660629-MLB111993122929_052026-O.webp",
    "link": "https://meli.la/1pUVErZ",
    "cupom": "AVANT25"
  },
  {
    "id": 1130,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29x29cm Quadrado Cod: ALUT002010-10 Alut By Avant",
    "preco": "R$332,12",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_791649-MLA114986694908_082026-O.webp",
    "link": "https://meli.la/1dJJ7Dx",
    "cupom": "AVANT25"
  },
  {
    "id": 1131,
    "nome": "Modulo Rele Interruptor Inteligente Duo Zigbee 2x5a Neo",
    "preco": "R$63,12",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_979227-MLB112453620081_052026-O.webp",
    "link": "https://meli.la/2bbYHS1",
    "cupom": "AVANT25"
  },
  {
    "id": 1132,
    "nome": "Kit 16 Pilha Aaa Palito Recarregável + Carregador Avant Use 127/220v",
    "preco": "R$189,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_647576-MLB110396668258_052026-O.webp",
    "link": "https://meli.la/1V85hVa",
    "cupom": "AVANT25"
  },
  {
    "id": 1133,
    "nome": "Mini Modulo  Interuptor Trio Rele Zigbee 3x3a Neo By Avant",
    "preco": "R$126",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_963115-MLB112618458011_062026-O.webp",
    "link": "https://meli.la/13FqQk5",
    "cupom": "AVANT25"
  },
  {
    "id": 1134,
    "nome": "Kit 4 Refletor Led 100w 6500k Bivolt A Prova D'água Alut 127/220v Preto Branco Frio 6500k",
    "preco": "R$149,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_810951-MLB117193233859_092026-O.webp",
    "link": "https://meli.la/1XjCQgt",
    "cupom": "AVANT25"
  },
  {
    "id": 1135,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir Quadrado 6500K Branco Frio 18w 22x22Cm",
    "preco": "R$223,85",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_668103-MLA117383083489_092026-O.webp",
    "link": "https://meli.la/1QCW7hi",
    "cupom": "AVANT25"
  },
  {
    "id": 1136,
    "nome": "Kit 2 Lampada Led Vela Smart Wi-fi 4w 1800k-2700k Neo Avant 127/220v",
    "preco": "R$124,50",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_823346-MLB112927917693_062026-O.webp",
    "link": "https://meli.la/25Tayjt",
    "cupom": "AVANT25"
  },
  {
    "id": 1137,
    "nome": "Modulo Rele Interruptor Inteligente Quattro Zigbee 4x2 Neo",
    "preco": "R$119,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_984193-MLB109964770161_042026-O.webp",
    "link": "https://meli.la/2K3qXVC",
    "cupom": "AVANT25"
  },
  {
    "id": 1138,
    "nome": "Modulo Antena Espelho 4x2 Branco Cod: 291991056 Neo Avant",
    "preco": "R$78,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_840012-MLB111036661549_042026-O.webp",
    "link": "https://meli.la/23XTqp5",
    "cupom": "AVANT25"
  },
  {
    "id": 1139,
    "nome": "Mini Interruptor Inteligente Rele Wifi 1 Canal 10a Neo Avant",
    "preco": "R$59,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_627374-MLB111529890247_052026-O.webp",
    "link": "https://meli.la/2BQecZJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1140,
    "nome": "Kit 5 Refletor Led 400w 6500k Branco Frio A Prova D'água Alut Cod: ALUT000704-5 Alut By Avant",
    "preco": "R$595,71",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_949456-MLA115901787005_082026-O.webp",
    "link": "https://meli.la/1YmGibp",
    "cupom": "AVANT25"
  },
  {
    "id": 1141,
    "nome": "Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29cm Redondo Cod: ALUT002013 Alut By Avant",
    "preco": "R$64,67",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_727581-MLA115091217778_082026-O.webp",
    "link": "https://meli.la/1bAXCXV",
    "cupom": "AVANT25"
  },
  {
    "id": 1142,
    "nome": "Kit 10 Lampada Led Smart Wi-fi 2.4 Ghz Bulbo Hp 40w 2700k/6500k Rgb Colorido E27 110v/220v Cod: 291990329-10 Neo Avant",
    "preco": "R$140,83",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_847298-MLA113459266831_062026-O.webp",
    "link": "https://meli.la/2Q2xT7n",
    "cupom": "AVANT25"
  },
  {
    "id": 1143,
    "nome": "Interruptor Inteligente Smart Zigbee 2 Botões Touch Pto Neo Preto 127/220v",
    "preco": "R$78,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_759762-MLB111848046223_052026-O.webp",
    "link": "https://meli.la/27AeAVy",
    "cupom": "AVANT25"
  },
  {
    "id": 1144,
    "nome": "Interruptor Smart Wi-fi 8 Botões Touch Preto Neo By Avant Preto",
    "preco": "R$151,06",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_643279-MLB118067918549_092026-O.webp",
    "link": "https://meli.la/1bpdfnD",
    "cupom": "AVANT25"
  },
  {
    "id": 1145,
    "nome": "Kit 2 Refletor Led 400w 6500k Branco Frio A Prova D'água Alut Cod: Alut000704-4 Alut By Avant",
    "preco": "R$454,41",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_906924-MLA114544495930_082026-O.webp",
    "link": "https://meli.la/1BhQ7C2",
    "cupom": "AVANT25"
  },
  {
    "id": 1146,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 6w 3000k Branco Quente 12x12Cm Quadrado Cod: ALUT001969-3 Alut By Avant",
    "preco": "R$45,15",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_783520-MLA117194676605_092026-O.webp",
    "link": "https://meli.la/1vFtRso",
    "cupom": "AVANT25"
  },
  {
    "id": 1147,
    "nome": "Kit 10 Lampada Led Smart Wi-fi 2.4 Ghz Bulbo Hp 20w 2700k/6500k Rgb Colorido E27 110v/220v Cod: 291990301-10 Neo Avant",
    "preco": "R$480",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675715-MLA113457094981_062026-O.webp",
    "link": "https://meli.la/15cKxjy",
    "cupom": "AVANT25"
  },
  {
    "id": 1148,
    "nome": "Interruptor Com Tomada Inteligente Wi-fi Neo Preto 127/220v",
    "preco": "R$129,72",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_994837-MLB115721807697_082026-O.webp",
    "link": "https://meli.la/2mv1yob",
    "cupom": "AVANT25"
  },
  {
    "id": 1149,
    "nome": "Kit 2 Fechadura Digital Stark Com Briometria Preto Neo Avant Preto",
    "preco": "R$699,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_780210-MLA115525879647_082026-O.webp",
    "link": "https://meli.la/1BfPrpa",
    "cupom": "AVANT25"
  },
  {
    "id": 1150,
    "nome": "Interruptor Com Tomada Smart Zigbee Neo Avant Branco",
    "preco": "R$145,57",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_812275-MLB111993119937_052026-O.webp",
    "link": "https://meli.la/1qKhntQ",
    "cupom": "AVANT25"
  },
  {
    "id": 1151,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 18w 3000k Branco Quente 22cm Redondo Cod: ALUT001981-10 Alut By Avant",
    "preco": "R$217,71",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_685079-MLA117378430573_092026-O.webp",
    "link": "https://meli.la/2uPjQd1",
    "cupom": "AVANT25"
  },
  {
    "id": 1152,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 24w 3000k Branco Quente 29x29cm Quadrado Cod: ALUT002008-10 Alut By Avant",
    "preco": "R$332,12",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_974592-MLA116324970403_082026-O.webp",
    "link": "https://meli.la/2DBcaWS",
    "cupom": "AVANT25"
  },
  {
    "id": 1153,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22cm Redondo Cod: ALUT002005-10 Alut By Avant",
    "preco": "R$276,59",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787601-MLA116323071403_082026-O.webp",
    "link": "https://meli.la/2KPSnb9",
    "cupom": "AVANT25"
  },
  {
    "id": 1154,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 24w 4000k Branco Neutro 29x29cm Quadrado Cod: ALUT002009-10 Alut By Avant",
    "preco": "R$369,02",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_831582-MLA114986349216_082026-O.webp",
    "link": "https://meli.la/1Nf1kuf",
    "cupom": "AVANT25"
  },
  {
    "id": 1155,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 30w 4000k Branco Neutro 40x40Cm Quadrado Cod: ALUT190077-10 Alut By Avant",
    "preco": "R$629,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_746796-MLA116163570004_092026-O.webp",
    "link": "https://meli.la/1xwLGRD",
    "cupom": "AVANT25"
  },
  {
    "id": 1156,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado + Lampada Led Dicróica MR16 4,8w 3000k Branco Quente GU10 Preto",
    "preco": "R$166,47",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_783834-MLA117038947445_092026-O.webp",
    "link": "https://meli.la/2tMJFGj",
    "cupom": "AVANT25"
  },
  {
    "id": 1157,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 24w 3000k Branco Quente 29cm Redondo Cod: ALUT002011-3 Alut By Avant",
    "preco": "R$147,95",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_808990-MLA116372192653_082026-O.webp",
    "link": "https://meli.la/2GiUqRJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1158,
    "nome": "Kit 10 Painel Led Plafon Easy 30w 39x39 6500k Sobrebor Quadrado Alut",
    "preco": "R$503,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_862094-MLA99890406939_112025-O.webp",
    "link": "https://meli.la/1pmUFLo",
    "cupom": "AVANT25"
  },
  {
    "id": 1159,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 24w 3000k Branco Quente 29x29cm Quadrado Cod: ALUT002008-5 Alut By Avant",
    "preco": "R$212,73",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892273-MLA114943339810_082026-O.webp",
    "link": "https://meli.la/2iPkNbw",
    "cupom": "AVANT25"
  },
  {
    "id": 1160,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado Duplo Par20 + Lâmpada Led 7w 3000k Branco Quente E27 Branco",
    "preco": "R$401,49",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_986479-MLA115638323290_092026-O.webp",
    "link": "https://meli.la/2gQxrzc",
    "cupom": "AVANT25"
  },
  {
    "id": 1161,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 24w 6500K Branco Frio 29x29Cm Quadrado Cod: ALUT190075-10 Alut By Avant",
    "preco": "R$347,31",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_829271-MLA117647269025_092026-O.webp",
    "link": "https://meli.la/2S5Kurn",
    "cupom": "AVANT25"
  },
  {
    "id": 1162,
    "nome": "Kit 3 Painel Led Plafon Easy 30w 39x39 6500k Branco Frio Bivolt sobrepor Quadrado Cod: ALUT000507-3 Alut By Avant",
    "preco": "R$179,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_768506-MLA112996979864_072026-O.webp",
    "link": "https://meli.la/1qptx6M",
    "cupom": "AVANT25"
  },
  {
    "id": 1163,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 18w 6500K Branco Frio 22x22cm Quadrado Cod: ALUT002004-10 Alut By Avant",
    "preco": "R$220,80",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_671332-MLA114821459378_082026-O.webp",
    "link": "https://meli.la/1EJvgQ2",
    "cupom": "AVANT25"
  },
  {
    "id": 1164,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 6w 6500K Branco Frio 12x12Cm Quadrado Cod: ALUT001971-10 Alut By Avant",
    "preco": "R$134,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894955-MLA117194676987_092026-O.webp",
    "link": "https://meli.la/2kT4JBj",
    "cupom": "AVANT25"
  },
  {
    "id": 1165,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 18w 4000k Branco Neutro 22x22cm Quadrado Cod: ALUT002003-10 Alut By Avant",
    "preco": "R$276",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_770271-MLA116194707289_082026-O.webp",
    "link": "https://meli.la/2Y63B4w",
    "cupom": "AVANT25"
  },
  {
    "id": 1166,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 24w 6500K Branco Frio 29cm Redondo Cod: ALUT001986-10 Alut By Avant",
    "preco": "R$357,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_956276-MLA116163526080_092026-O.webp",
    "link": "https://meli.la/1gVoEC4",
    "cupom": "AVANT25"
  },
  {
    "id": 1167,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22x22cm Quadrado Cod: ALUT001999-5 Alut By Avant",
    "preco": "R$151,92",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_726648-MLA116180780379_082026-O.webp",
    "link": "https://meli.la/2BtpTiC",
    "cupom": "AVANT25"
  },
  {
    "id": 1168,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 18w 6500K Branco Frio 22x22cm Quadrado Cod: ALUT002004-5 Alut By Avant",
    "preco": "R$151,92",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_630643-MLA116194737241_082026-O.webp",
    "link": "https://meli.la/2zpumRM",
    "cupom": "AVANT25"
  },
  {
    "id": 1169,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 24w 6500K Branco Frio 29x29Cm Quadrado Cod: ALUT190075-5 Alut By Avant",
    "preco": "R$207,92",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_984837-MLA117646938339_092026-O.webp",
    "link": "https://meli.la/1zQirkX",
    "cupom": "AVANT25"
  },
  {
    "id": 1170,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado + Lampada Led Dicróica MR16 4,8w 6500k Branco Frio GU10 Preto",
    "preco": "R$166,47",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_950695-MLA117085440049_092026-O.webp",
    "link": "https://meli.la/1iNT8Vz",
    "cupom": "AVANT25"
  },
  {
    "id": 1171,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 12w 3000k Branco Quente 17cm Redondo Cod: ALUT001978-10 Alut By Avant",
    "preco": "R$159,92",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_927543-MLA117362796869_092026-O.webp",
    "link": "https://meli.la/18dtW8C",
    "cupom": "AVANT25"
  },
  {
    "id": 1172,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 24w 6500K Branco Frio 29x29Cm Quadrado Cod: ALUT190075-3 Alut By Avant",
    "preco": "R$135,92",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675086-MLA117647486867_092026-O.webp",
    "link": "https://meli.la/1MZqpqm",
    "cupom": "AVANT25"
  },
  {
    "id": 1173,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 18w 6500K Branco Frio 22cm Redondo Cod: ALUT002007-5 Alut By Avant",
    "preco": "R$157,50",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_694972-MLA116323608319_082026-O.webp",
    "link": "https://meli.la/1e6Gice",
    "cupom": "AVANT25"
  },
  {
    "id": 1174,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 18w 4000k Branco Neutro 22x22cm Quadrado Cod: ALUT002003-5 Alut By Avant",
    "preco": "R$153,81",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_677350-MLA116194128987_082026-O.webp",
    "link": "https://meli.la/2CbtWsX",
    "cupom": "AVANT25"
  },
  {
    "id": 1175,
    "nome": "Kit 5 Painel Led Plafon Easy 30w 6500k Sobrepor Quad Alut",
    "preco": "R$289,71",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_894898-MLA113572920834_072026-O.webp",
    "link": "https://meli.la/2Jbw95W",
    "cupom": "AVANT25"
  },
  {
    "id": 1176,
    "nome": "Alut By Avant ALUT-KC-00007 - Kit - 10 Preto - Branco-quente",
    "preco": "R$401,49",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_805681-MLA117082579619_092026-O.webp",
    "link": "https://meli.la/1bvwL8h",
    "cupom": "AVANT25"
  },
  {
    "id": 1177,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado Duplo + Lampada Led Dicróica MR16 4,8w 2700k Branco Quente GU10 Branco",
    "preco": "R$246,68",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_645655-MLA115640299278_092026-O.webp",
    "link": "https://meli.la/2jGZhdZ",
    "cupom": "AVANT25"
  },
  {
    "id": 1178,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29cm Redondo Cod: ALUT002013-3 Alut By Avant",
    "preco": "R$105,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_759076-MLA115250183520_082026-O.webp",
    "link": "https://meli.la/1LucE7X",
    "cupom": "AVANT25"
  },
  {
    "id": 1179,
    "nome": "Kit 3 Spot Led + Trilho Smart 1m 60w Rgb Preto Neo Avant",
    "preco": "R$152,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_897150-MLB118401466005_092026-O.webp",
    "link": "https://meli.la/1KKRZYm",
    "cupom": "AVANT25"
  },
  {
    "id": 1180,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 12w 6500K Branco Frio 17x17Cm Quadrado Cod: ALUT001977-3 Alut By Avant",
    "preco": "R$79,92",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_896346-MLA115753460532_092026-O.webp",
    "link": "https://meli.la/1Nz8B5W",
    "cupom": "AVANT25"
  },
  {
    "id": 1181,
    "nome": "Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29x29cm Quadrado Cod: ALUT002010 Alut By Avant",
    "preco": "R$51,82",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_829910-MLA115393966753_072026-O.webp",
    "link": "https://meli.la/2uMaMvt",
    "cupom": "AVANT25"
  },
  {
    "id": 1182,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 30w 4000k Branco Neutro 40x40Cm Quadrado Cod: ALUT190077-5 Alut By Avant",
    "preco": "R$449,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_669007-MLA116163039894_092026-O.webp",
    "link": "https://meli.la/24XK2BL",
    "cupom": "AVANT25"
  },
  {
    "id": 1183,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 30w 3000k Branco Quente 40x40Cm Quadrado Cod: ALUT190076-5 Alut By Avant",
    "preco": "R$415,40",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_947733-MLA116163441146_092026-O.webp",
    "link": "https://meli.la/2hzV8wm",
    "cupom": "AVANT25"
  },
  {
    "id": 1184,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 18w 6500K Branco Frio 22cm Redondo Cod: ALUT002007-3 Alut By Avant",
    "preco": "R$116,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807425-MLA116323937405_082026-O.webp",
    "link": "https://meli.la/2wmH8A3",
    "cupom": "AVANT25"
  },
  {
    "id": 1185,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22cm Redondo Cod: ALUT002005-3 Alut By Avant",
    "preco": "R$116,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_717294-MLA114308924468_082026-O.webp",
    "link": "https://meli.la/1fkaJLy",
    "cupom": "AVANT25"
  },
  {
    "id": 1186,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 6w 6500K Branco Frio 12x12Cm Quadrado Cod: ALUT001971-3 Alut By Avant",
    "preco": "R$50,80",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_965367-MLA117194451837_092026-O.webp",
    "link": "https://meli.la/1RZmLC5",
    "cupom": "AVANT25"
  },
  {
    "id": 1187,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 18w 4000k Branco Neutro 22x22cm Quadrado Cod: ALUT002003-3 Alut By Avant",
    "preco": "R$116,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_990726-MLA114821429602_082026-O.webp",
    "link": "https://meli.la/1RuumAT",
    "cupom": "AVANT25"
  },
  {
    "id": 1188,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 24w 3000k Branco Quente 29cm Redondo Cod: ALUT002011-5 Alut By Avant",
    "preco": "R$212,73",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_886542-MLA114992811490_082026-O.webp",
    "link": "https://meli.la/2QC52yE",
    "cupom": "AVANT25"
  },
  {
    "id": 1189,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 12w 6500K Branco Frio 17cm Redondo Cod: ALUT001980-5 Alut By Avant",
    "preco": "R$129,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675411-MLA115896753998_092026-O.webp",
    "link": "https://meli.la/2ZNgXhq",
    "cupom": "AVANT25"
  },
  {
    "id": 1190,
    "nome": "Kit 2 Painel Led Plafon Easy 30w 6500k Branco Frio Bivolt sobrepor Quadrado Cod: ALUT000507-2 Alut By Avant",
    "preco": "R$108,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_682853-MLA114213492259_072026-O.webp",
    "link": "https://meli.la/15KSHS3",
    "cupom": "AVANT25"
  },
  {
    "id": 1191,
    "nome": "Alut By Avant ALUT-KC-00007 - Kit - 10 Preto - Branco-neutro",
    "preco": "R$413,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_889758-MLA115638293890_092026-O.webp",
    "link": "https://meli.la/21QfipN",
    "cupom": "AVANT25"
  },
  {
    "id": 1192,
    "nome": "Lustre Pendente Led Duquesa Floresta 5xg9 Preto Fosco Avant (Bivolt) Cod: 340155822",
    "preco": "R$181,62",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_614076-MLA100072323271_122025-O.webp",
    "link": "https://meli.la/2ruNgrW",
    "cupom": "AVANT25"
  },
  {
    "id": 1193,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 6w 6500K Branco Frio 12cm Redondo Cod: ALUT001974-5 Alut By Avant",
    "preco": "R$99,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_681964-MLA115749281078_092026-O.webp",
    "link": "https://meli.la/1Uw2mur",
    "cupom": "AVANT25"
  },
  {
    "id": 1194,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 6w 6500K Branco Frio 12x12Cm Quadrado Cod: ALUT001971-5 Alut By Avant",
    "preco": "R$89,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_759753-MLA115741808162_092026-O.webp",
    "link": "https://meli.la/1upSut6",
    "cupom": "AVANT25"
  },
  {
    "id": 1195,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 24w 3000k Branco Quente 29cm Redondo Cod: ALUT001984-10 Alut By Avant",
    "preco": "R$317,42",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_913985-MLA116162319900_092026-O.webp",
    "link": "https://meli.la/1aWh6CE",
    "cupom": "AVANT25"
  },
  {
    "id": 1196,
    "nome": "Kit 10 Painel Led Plafon 6500k Emb 30W 39x39 Quadrado Alut By Avant",
    "preco": "R$629,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_667634-MLA114208570571_072026-O.webp",
    "link": "https://meli.la/1FRdFFd",
    "cupom": "AVANT25"
  },
  {
    "id": 1197,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 24w 6500K Branco Frio 29cm Redondo Cod: ALUT002013-10 Alut By Avant",
    "preco": "R$369,02",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_938610-MLA116654368917_082026-O.webp",
    "link": "https://meli.la/2rqzM4g",
    "cupom": "AVANT25"
  },
  {
    "id": 1198,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 30w 6500K Branco Frio 40x40Cm Quadrado Cod: ALUT190078-3 Alut By Avant",
    "preco": "R$248,83",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675292-MLA117648860179_092026-O.webp",
    "link": "https://meli.la/18pdPFL",
    "cupom": "AVANT25"
  },
  {
    "id": 1199,
    "nome": "Painel Led Plafon Aluminio Sobrepor 18w 4000k Branco Neutro 22x22cm Quadrado Cod: ALUT002003 Alut By Avant",
    "preco": "R$54,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_689727-MLA116194128799_082026-O.webp",
    "link": "https://meli.la/2GhC57V",
    "cupom": "AVANT25"
  },
  {
    "id": 1200,
    "nome": "Kit 5 Painel Led Plafon 30w 6500k Branco Frio Embutir Quadrado Cod: ALUT000503-5 Alut By Avant",
    "preco": "R$224,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_642569-MLA114208491535_072026-O.webp",
    "link": "https://meli.la/1Y8sLYe",
    "cupom": "AVANT25"
  },
  {
    "id": 1201,
    "nome": "Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22x22cm Quadrado Cod: ALUT001999 Alut By Avant",
    "preco": "R$54,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_668629-MLA116181776697_082026-O.webp",
    "link": "https://meli.la/1TN9BL1",
    "cupom": "AVANT25"
  },
  {
    "id": 1202,
    "nome": "kit Trilho Eletrificado Click 1m + 3 Spots 5w 6500k Branco Frio Bivolt Branco Cod: ALUT001666 Alut By Avant",
    "preco": "R$68,71",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_724767-MLA100478131828_122025-O.webp",
    "link": "https://meli.la/2WsGS8t",
    "cupom": "AVANT25"
  },
  {
    "id": 1203,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado Par20 + Lâmpada Led 7w RGB E27 Zigbee Branco",
    "preco": "R$493,45",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_929883-MLA115679261242_092026-O.webp",
    "link": "https://meli.la/2RFk8qn",
    "cupom": "AVANT25"
  },
  {
    "id": 1204,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado + Lampada Led Inteligente Wi-fi 2.4 Par20 7w RGB E27 Branco",
    "preco": "R$477",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970559-MLA117130074859_092026-O.webp",
    "link": "https://meli.la/1Kvk8jf",
    "cupom": "AVANT25"
  },
  {
    "id": 1205,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado Par20 + Lâmpada Led 7w RGB E27 Preto",
    "preco": "R$536,62",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_696527-MLA115679260890_092026-O.webp",
    "link": "https://meli.la/2wVp2Nf",
    "cupom": "AVANT25"
  },
  {
    "id": 1206,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 6w 3000k Branco Quente 12x12cm Quadrado Cod: ALUT001987-3 Alut By Avant",
    "preco": "R$72,22",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_873017-MLA116321044043_082026-O.webp",
    "link": "https://meli.la/2Xs3bLC",
    "cupom": "AVANT25"
  },
  {
    "id": 1207,
    "nome": "Painel Led Plafon Aluminio Sobrepor 18w 3000k Branco Quente 22cm Redondo Cod: ALUT002005 Alut By Avant",
    "preco": "R$53,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922944-MLA115649690387_082026-O.webp",
    "link": "https://meli.la/2CdVZVx",
    "cupom": "AVANT25"
  },
  {
    "id": 1208,
    "nome": "Kit 5 Painel Led Smart Sob 18w 2700k/6500k 22cm Neo Avant 127/220v 39205163",
    "preco": "R$378,20",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858179-MLB110696660420_052026-O.webp",
    "link": "https://meli.la/2dZ7vqj",
    "cupom": "AVANT25"
  },
  {
    "id": 1209,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sobrepor 6w 4000k Branco Neutro 12x12cm Quadrado Cod: ALUT001988-5 Alut By Avant",
    "preco": "R$139,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_921504-MLA114940125604_082026-O.webp",
    "link": "https://meli.la/1imLLeH",
    "cupom": "AVANT25"
  },
  {
    "id": 1210,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 12w 6500K Branco Frio 17cm Redondo Cod: ALUT001980-3 Alut By Avant",
    "preco": "R$78,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858676-MLA115896610790_092026-O.webp",
    "link": "https://meli.la/1nquaL1",
    "cupom": "AVANT25"
  },
  {
    "id": 1211,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 30w 4000k Branco Neutro 40x40Cm Quadrado Cod: ALUT190077-3 Alut By Avant",
    "preco": "R$269,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_961502-MLA116163569738_092026-O.webp",
    "link": "https://meli.la/1KibuyE",
    "cupom": "AVANT25"
  },
  {
    "id": 1212,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 30w 3000k Branco Quente 40x40Cm Quadrado Cod: ALUT190076-3 Alut By Avant",
    "preco": "R$234",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_680613-MLA116163438744_092026-O.webp",
    "link": "https://meli.la/1d6nTvv",
    "cupom": "AVANT25"
  },
  {
    "id": 1213,
    "nome": "Painel Led Plafon Easy 6500k Branco Frio Bivolt Sobrepor Quadrado Cod: Alut000507 Alut By Avant",
    "preco": "R$50,32",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_642445-MLA112996980184_072026-O.webp",
    "link": "https://meli.la/2uCUvRh",
    "cupom": "AVANT25"
  },
  {
    "id": 1214,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 24w 3000k Branco Quente 29cm Redondo Cod: ALUT001984-5 Alut By Avant",
    "preco": "R$233,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_843475-MLA116162317298_092026-O.webp",
    "link": "https://meli.la/2nqP9UV",
    "cupom": "AVANT25"
  },
  {
    "id": 1215,
    "nome": "Painel Led Plafon Aluminio Sobrepor 18w 6500K Branco Frio 22x22cm Quadrado Cod: ALUT002004 Alut By Avant",
    "preco": "R$55,42",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_896985-MLA116194707387_082026-O.webp",
    "link": "https://meli.la/1LYwaco",
    "cupom": "AVANT25"
  },
  {
    "id": 1216,
    "nome": "Painel Led Plafon Aluminio Sobrepor 18w 6500K Branco Frio 22cm Redondo Cod: ALUT002007 Alut By Avant",
    "preco": "R$53,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_825390-MLA115721916189_082026-O.webp",
    "link": "https://meli.la/1vgcEKE",
    "cupom": "AVANT25"
  },
  {
    "id": 1217,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 6w 6500K Branco Frio 12x12cm Quadrado Cod: ALUT001989-10 Alut By Avant",
    "preco": "R$179,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_723119-MLA114939935224_082026-O.webp",
    "link": "https://meli.la/2vwQbYR",
    "cupom": "AVANT25"
  },
  {
    "id": 1218,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sobrepor 6w 4000k Branco Neutro 12x12cm Quadrado Cod: ALUT001988-10 Alut By Avant",
    "preco": "R$199,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_991828-MLA114939924176_082026-O.webp",
    "link": "https://meli.la/2AdXNoy",
    "cupom": "AVANT25"
  },
  {
    "id": 1219,
    "nome": "Kit 2 Painel Led Embutir 2700/6500k 18w 22x22 Neo Avant  127/220v",
    "preco": "R$159,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_606589-MLB110696421126_052026-O.webp",
    "link": "https://meli.la/1gpx68M",
    "cupom": "AVANT25"
  },
  {
    "id": 1220,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 12w 3000k Branco Quente 17cm Redondo Cod: ALUT001978-5 Alut By Avant",
    "preco": "R$129,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_900727-MLA115895225950_092026-O.webp",
    "link": "https://meli.la/27zYmLP",
    "cupom": "AVANT25"
  },
  {
    "id": 1221,
    "nome": "Kit 2 Spot Led Smart Wi-fi Emb 5w Rgb Quad Branco Neo Avant",
    "preco": "R$113",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_952369-MLA113461288169_062026-O.webp",
    "link": "https://meli.la/27viik6",
    "cupom": "AVANT25"
  },
  {
    "id": 1222,
    "nome": "Painel Led Sobrepor 24w 26x26 6500k Quadrado Bivolt 110/220v - Alut Branco Frio",
    "preco": "R$46,32",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_872723-MLA112997153958_072026-O.webp",
    "link": "https://meli.la/1pxSe3Z",
    "cupom": "AVANT25"
  },
  {
    "id": 1223,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 6w 6500K Branco Frio 12x12cm Quadrado Cod: ALUT001989-3 Alut By Avant",
    "preco": "R$72,22",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_990814-MLA116321053543_082026-O.webp",
    "link": "https://meli.la/33zbMzf",
    "cupom": "AVANT25"
  },
  {
    "id": 1224,
    "nome": "Kit 10 Spot Led Easy 7w 3000k Bivolt Embutir Quadrado Alut 127/220v Branco Quente",
    "preco": "R$56,61",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_819030-MLB117646275429_092026-O.webp",
    "link": "https://meli.la/19dTfxm",
    "cupom": "AVANT25"
  },
  {
    "id": 1225,
    "nome": "Kit 3 Lampada Led Vela Smart Wi-fi 5w 1800k-2700k Neo Avant 127/220v",
    "preco": "R$186,76",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_613527-MLB112927904901_062026-O.webp",
    "link": "https://meli.la/1rUozeQ",
    "cupom": "AVANT25"
  },
  {
    "id": 1226,
    "nome": "Kit 3 Lampada Led Pera Smart Inteligente Wi Fi St64 6w 2700k/6500k/rgb E27 110v/220v Bivolt Cod: 290812578-3 Neo Avant",
    "preco": "R$296,97",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_728285-MLA113470567903_062026-O.webp",
    "link": "https://meli.la/33UR4xj",
    "cupom": "AVANT25"
  },
  {
    "id": 1227,
    "nome": "Kit 2 Lampada Led Pera Smart St64 6w 1800k/6500k Neo Avant 127/220v Branco-quente",
    "preco": "R$113,06",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_798082-MLB112929031523_062026-O.webp",
    "link": "https://meli.la/2Qyd6JB",
    "cupom": "AVANT25"
  },
  {
    "id": 1228,
    "nome": "Kit 5 Lampada Smart Bulbo Hp 30w 2700k/6500k Rgb Neo Avant 220v Rgb",
    "preco": "R$534,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_683643-MLB112304747718_062026-O.webp",
    "link": "https://meli.la/2UFR6ov",
    "cupom": "AVANT25"
  },
  {
    "id": 1229,
    "nome": "Kit 10 Lampada Led Smart Wi-fi 2.4 Ghz Bulbo Hp 50w 2700k/6500k Rgb Colorido E27 110v/220v Cod: 291990338-10 Neo Avant",
    "preco": "R$126,19",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_824205-MLA108247598855_032026-O.webp",
    "link": "https://meli.la/24yfEzP",
    "cupom": "AVANT25"
  },
  {
    "id": 1230,
    "nome": "Kit 10 Lampada Led Pera Smart Inteligente Wi-fi 2.4 Ghz Embutir 15w Rgb Colorido E27 110v/220v Cod: 291990347-10 Neo Ava",
    "preco": "R$382,70",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_788331-MLA111397745862_052026-O.webp",
    "link": "https://meli.la/1McGR5Q",
    "cupom": "AVANT25"
  },
  {
    "id": 1231,
    "nome": "Kit 2 Lampada Led Pera Inteligente 10w 2700k /6500k E27 Neo 127/220v",
    "preco": "R$53,80",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_698283-MLB114062188347_072026-O.webp",
    "link": "https://meli.la/2sZsQAm",
    "cupom": "AVANT25"
  },
  {
    "id": 1232,
    "nome": "Kit 5 Lampadas Led Bulbo Hp 80w 6500k Branco Frio 110v/220v Bivolt E27 Cod: ALUT000102-5 Alut By Avant",
    "preco": "R$315,59",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_622074-MLA113259529816_072026-O.webp",
    "link": "https://meli.la/2Gt1Qqc",
    "cupom": "AVANT25"
  },
  {
    "id": 1233,
    "nome": "Modulo Rele Interruptor Inteligente Quattro Wi-fi 4x2,5a Neo Preto 127/220v",
    "preco": "R$103,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_989235-MLB109883784243_032026-O.webp",
    "link": "https://meli.la/2Cpu9FL",
    "cupom": "AVANT25"
  },
  {
    "id": 1234,
    "nome": "Interruptor Smart Zigbee 4 Botões Touch Branco Neo Avant Branco 127/220v",
    "preco": "R$110",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_877432-MLB111848494679_052026-O.webp",
    "link": "https://meli.la/2a2cK1d",
    "cupom": "AVANT25"
  },
  {
    "id": 1235,
    "nome": "Modulo Rele Interruptor Inteligente Trio Wi-fi 3x3,3a Neo",
    "preco": "R$95,92",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_620925-MLB112313265229_052026-O.webp",
    "link": "https://meli.la/2b9jZRq",
    "cupom": "AVANT25"
  },
  {
    "id": 1236,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 6w 4000k Branco Neutro 12x12cm Quadrado Cod: ALUT001988-3 Alut By Avant",
    "preco": "R$72,22",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_732539-MLA116320805543_082026-O.webp",
    "link": "https://meli.la/2PAS2PB",
    "cupom": "AVANT25"
  },
  {
    "id": 1237,
    "nome": "Kit 3 Spot Led + Trilho Smart 1m 36w Rgb Branco Neo Avant Preto",
    "preco": "R$125,91",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_945455-MLB118675314939_102026-O.webp",
    "link": "https://meli.la/2rifiCj",
    "cupom": "AVANT25"
  },
  {
    "id": 1238,
    "nome": "Modulo Rele Interruptor Inteligente Duo Wi-fi 2x5a Neo",
    "preco": "R$54,32",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_871790-MLB112314299593_052026-O.webp",
    "link": "https://meli.la/1AxN1Ti",
    "cupom": "AVANT25"
  },
  {
    "id": 1239,
    "nome": "Interruptor Smart Zigbee 4 Botões Touch Preto Neo Avant Preto 127/220v",
    "preco": "R$107,96",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_626544-MLB118067514483_092026-O.webp",
    "link": "https://meli.la/1xDsprT",
    "cupom": "AVANT25"
  },
  {
    "id": 1240,
    "nome": "Modulo Rele Interruptor Inteligente Zigbee 1x10a Neo",
    "preco": "R$69,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_687076-MLB109126706428_042026-O.webp",
    "link": "https://meli.la/2SegCCp",
    "cupom": "AVANT25"
  },
  {
    "id": 1241,
    "nome": "Kit 3 Spot Led + Trilho Eletrificado Pop 15w 6500k Pr Avant 127/220v Preto",
    "preco": "R$64,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_878380-MLB115719427603_082026-O.webp",
    "link": "https://meli.la/1rDwiEP",
    "cupom": "AVANT25"
  },
  {
    "id": 1242,
    "nome": "Interruptor Inteligente Smart Zigbee 1 Botão Touch Preto Neo Preto 127/220v",
    "preco": "R$76,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_935517-MLB111848184809_052026-O.webp",
    "link": "https://meli.la/257KkXR",
    "cupom": "AVANT25"
  },
  {
    "id": 1243,
    "nome": "Kit 10 Spot Led Smart Wi-fi Emb 5w Rgb Red Branco Neo Avant 127/220v",
    "preco": "R$656,02",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_859708-MLB111610684978_062026-O.webp",
    "link": "https://meli.la/1o7Fo2z",
    "cupom": "AVANT25"
  },
  {
    "id": 1244,
    "nome": "Kit 5 Painel Led Smart Sob 24w 2700k/6500k 30cm Neo Avant",
    "preco": "R$649",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_652581-MLA111237160223_052026-O.webp",
    "link": "https://meli.la/1gQddAd",
    "cupom": "AVANT25"
  },
  {
    "id": 1245,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 30w 6500K Branco Frio 40x40Cm Quadrado Cod: ALUT190078-5 Alut By Avant",
    "preco": "R$404,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_734087-MLA117648829755_092026-O.webp",
    "link": "https://meli.la/2iprApf",
    "cupom": "AVANT25"
  },
  {
    "id": 1246,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sob 6w 3000k 12cm Qua Alut",
    "preco": "R$129,45",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_959292-MLB114930551710_082026-O.webp",
    "link": "https://meli.la/1cB35Xf",
    "cupom": "AVANT25"
  },
  {
    "id": 1247,
    "nome": "Kit 10 Spot Recuado Duplo + Lampada Led Inteligente Zigbee Par20 7w RGB E27 Preto",
    "preco": "R$246,10",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_683398-MLA115549023536_082026-O.webp",
    "link": "https://meli.la/2C8yzyv",
    "cupom": "AVANT25"
  },
  {
    "id": 1248,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado + Lampada Led Inteligente Zigbee Par20 7w RGB E27 Preto",
    "preco": "R$493,45",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_654510-MLA115680706920_092026-O.webp",
    "link": "https://meli.la/1QQRDXS",
    "cupom": "AVANT25"
  },
  {
    "id": 1249,
    "nome": "Kit 3 Painel Led Plafon Smart Embutir 18w 2700k A 6500k 22cm 110v/220v Bivolt Quadrado Branco Cod:290118076-3 Neo Avant",
    "preco": "R$267,89",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_704608-MLA97902810110_112025-O.webp",
    "link": "https://meli.la/2Mhj1bY",
    "cupom": "AVANT25"
  },
  {
    "id": 1250,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 45w 4000k Branco Neutro 62x62Cm Quadrado Cod: ALUT190080-3 Alut By Avant",
    "preco": "R$429,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_754977-MLA116164696368_092026-O.webp",
    "link": "https://meli.la/2ALmSC1",
    "cupom": "AVANT25"
  },
  {
    "id": 1251,
    "nome": "Kit 4 Painel Led Plafon Smart Embutir 18w 2700k A 6500k 22cm 110v/220v Bivolt Quadrado Branco Cod:290118076-4 Neo Avant",
    "preco": "R$371",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_667217-MLA98371626069_112025-O.webp",
    "link": "https://meli.la/1opmiLZ",
    "cupom": "AVANT25"
  },
  {
    "id": 1252,
    "nome": "Kit 10 Painel Led Plafon Aluminio Sob 6w 3000k 12cm Qua Alut",
    "preco": "R$199,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_733338-MLB116312217195_082026-O.webp",
    "link": "https://meli.la/32YKykJ",
    "cupom": "AVANT25"
  },
  {
    "id": 1253,
    "nome": "Kit 5 Painel Led Plafon Aluminio Sob 6w 6500K 12cm Qua AlutKit 5 Painel Led Plafon Aluminio Sobrepor 6w 6500K Branco Frio 12x12cm Quadrado Cod: ALUT001989-5 Alut By Avant",
    "preco": "R$139,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_996809-MLA114939731994_082026-O.webp",
    "link": "https://meli.la/2xfkhwP",
    "cupom": "AVANT25"
  },
  {
    "id": 1254,
    "nome": "Kit 5 Spots LED Smart RGB Wi-Fi 5W Quadrado in Dimmable Neo Avant",
    "preco": "R$332,13",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_608464-MLA112307084236_062026-O.webp",
    "link": "https://meli.la/1Y4qMCe",
    "cupom": "AVANT25"
  },
  {
    "id": 1255,
    "nome": "Kit 10 Spot Recuado Duplo + Lampada Led Inteligente Wi-fi 2.4 Par20 7w RGB E27 Preto",
    "preco": "R$477",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_651985-MLA116985602073_082026-O.webp",
    "link": "https://meli.la/2AuyA9F",
    "cupom": "AVANT25"
  },
  {
    "id": 1256,
    "nome": "Kit 2 Painel Led Embutir 2700/6500k 24w 30x30 Neo Avant 127/220v",
    "preco": "R$239,49",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_808431-MLB110754304962_052026-O.webp",
    "link": "https://meli.la/1MiAJUQ",
    "cupom": "AVANT25"
  },
  {
    "id": 1257,
    "nome": "Kit 10 Painel Led Smart Sob 18w 2700k/6500k 22cm Neo Avant 127/220v 39205163",
    "preco": "R$789,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_826947-MLB110696600336_052026-O.webp",
    "link": "https://meli.la/26uwiWb",
    "cupom": "AVANT25"
  },
  {
    "id": 1258,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sob 18w 6500k 22cm Qua Alut",
    "preco": "R$129,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953681-MLB116317809183_082026-O.webp",
    "link": "https://meli.la/2AYNM1U",
    "cupom": "AVANT25"
  },
  {
    "id": 1259,
    "nome": "Kit 4 Painel Led Embutir 2700/6500k 24w 30x30 Neo Avant 127/220v Branco",
    "preco": "R$487,12",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_638366-MLB111713194933_052026-O.webp",
    "link": "https://meli.la/1LYKDih",
    "cupom": "AVANT25"
  },
  {
    "id": 1260,
    "nome": "Kit 5 Spot Led Smart Wi-fi Emb 5w Rgb Red Branco Neo Avant",
    "preco": "R$299,42",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_884743-MLA112307370746_062026-O.webp",
    "link": "https://meli.la/1PDT3cu",
    "cupom": "AVANT25"
  },
  {
    "id": 1261,
    "nome": "Painel Led Plafon Aluminio Sob 6w 6500K 12cm Qua AlutPainel Led Plafon Aluminio Sobrepor 6w 6500K Branco Frio 12x12cm Quadrado Cod: ALUT001989 Alut By Avant",
    "preco": "R$48,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838374-MLA115518158939_082026-O.webp",
    "link": "https://meli.la/2sv4xyp",
    "cupom": "AVANT25"
  },
  {
    "id": 1262,
    "nome": "Kit 10 Spot Embutido Quadrado Recuado Duplo + Lampada Led Dicróica MR16 4,8w 6500k Branco Frio GU10 Branco",
    "preco": "R$273,60",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_729574-MLA115639894294_092026-O.webp",
    "link": "https://meli.la/17evS1w",
    "cupom": "AVANT25"
  },
  {
    "id": 1263,
    "nome": "Kit 10 Spot Led Smart Wi-fi Emb 5w Rgb Quad Branco Neo Avant",
    "preco": "R$575,38",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_766073-MLA112307377228_062026-O.webp",
    "link": "https://meli.la/1HLYFuk",
    "cupom": "AVANT25"
  },
  {
    "id": 1264,
    "nome": "Kit 2 Refletor Led 500w 6500k Branco Frio Ip65 A Prova D'água Preto Cod: Alut010042-2 Alut By Avant",
    "preco": "R$548,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_973408-MLA115902268725_082026-O.webp",
    "link": "https://meli.la/2UrZDFy",
    "cupom": "AVANT25"
  },
  {
    "id": 1265,
    "nome": "Kit 3 Painel Led Plafon Aluminio Embutir 24w 3000k Branco Quente 29cm Redondo Cod: ALUT001984-3 Alut By Avant",
    "preco": "R$152,91",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_732678-MLA117648455825_092026-O.webp",
    "link": "https://meli.la/25a9epa",
    "cupom": "AVANT25"
  },
  {
    "id": 1266,
    "nome": "Kit 10 Painel Led Plafon Aluminio Embutir 45w 4000k Branco Neutro 62x62Cm Quadrado Cod: ALUT190080-10 Alut By Avant",
    "preco": "R$126,19",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875873-MLA116164526954_092026-O.webp",
    "link": "https://meli.la/16xaw8Q",
    "cupom": "AVANT25"
  },
  {
    "id": 1267,
    "nome": "Painel Led Plafon Aluminio Sobrepor 6w 4000k Branco Neutro 12x12cm Quadrado Cod: ALUT001988 Alut By Avant",
    "preco": "R$44,72",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_697697-MLA115304682283_072026-O.webp",
    "link": "https://meli.la/1GFTht6",
    "cupom": "AVANT25"
  },
  {
    "id": 1268,
    "nome": "Kit 3 Spot Led + Trilho Smart 1m 60w Rgb Br Neo Avant",
    "preco": "R$169,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_903441-MLB117199450156_102026-O.webp",
    "link": "https://meli.la/2xQLh8t",
    "cupom": "AVANT25"
  },
  {
    "id": 1269,
    "nome": "Kit 10 Spot Recuado Duplo + Lampada Led Inteligente Zigbee Par20 7w RGB Colorido E27 Branco",
    "preco": "R$493,45",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_862774-MLA117023543657_092026-O.webp",
    "link": "https://meli.la/2xkDnW5",
    "cupom": "AVANT25"
  },
  {
    "id": 1270,
    "nome": "Kit 3 Painel Led Plafon Aluminio Sobrepor 6w 6500K Branco Frio 12cm Redondo Cod: ALUT001992-3 Alut By Avant",
    "preco": "R$72,22",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_795217-MLA116321447293_082026-O.webp",
    "link": "https://meli.la/1XcPU6n",
    "cupom": "AVANT25"
  },
  {
    "id": 1271,
    "nome": "Kit 5 Painel Led Plafon Aluminio Embutir 45w 4000k Branco Neutro 62x62Cm Quadrado Cod: ALUT190080-5 Alut By Avant",
    "preco": "R$699,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_716227-MLA117650199901_092026-O.webp",
    "link": "https://meli.la/21pB5xB",
    "cupom": "AVANT25"
  },
  {
    "id": 1272,
    "nome": "Kit 10 Spot Recuado Duplo + Lampada Led Inteligente Wi-fi 2.4 Par20 7w RGB E27 Branco",
    "preco": "R$401,49",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_652995-MLA117023981589_092026-O.webp",
    "link": "https://meli.la/2QVEEBx",
    "cupom": "AVANT25"
  },
  {
    "id": 1273,
    "nome": "Painel Led Plafon Aluminio Sob 6w 3000k 12cm Qua Alut",
    "preco": "R$44,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_798111-MLB115896556687_082026-O.webp",
    "link": "https://meli.la/281Jvoa",
    "cupom": "AVANT25"
  },
  {
    "id": 1274,
    "nome": "Kit 5 Painel Led Plafon Aluminio Super Slim Embutir 18w 3000k Branco Quente 22x22 Quadrado Espessura Fina Branco Cod: Alut190070-5 Alut By Avant",
    "preco": "R$116,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_880216-MLA115899338572_092026-O.webp",
    "link": "https://meli.la/18X3U2i",
    "cupom": "AVANT25"
  },
  {
    "id": 1275,
    "nome": "Kit 3 Painel Led Plafon Aluminio Super Slim Embutir 18w 3000k Branco Quente 22x22 Quadrado Espessura Fina Branco Cod: Alut190070-3 Alut By Avant",
    "preco": "R$71,01",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953489-MLA115899629770_092026-O.webp",
    "link": "https://meli.la/1j3nfJs",
    "cupom": "AVANT25"
  },
  {
    "id": 1276,
    "nome": "Kit 10 Painel Led Plafon Aluminio Super Slim Embutir 18w 3000k Branco Quente 22x22 Quadrado Espessura Fina Branco Cod: Alut190070-10 Alut By Avant",
    "preco": "R$223,84",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_617245-MLA115899221788_092026-O.webp",
    "link": "https://meli.la/1WBKLHq",
    "cupom": "AVANT25"
  },
  {
    "id": 1277,
    "nome": "Kit 5 Lampadas Led Par20 Smart Wi-fi 7w Rgb E27 Neo Avant Rgb",
    "preco": "R$269",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_655907-MLA111792430440_062026-O.webp",
    "link": "https://meli.la/1QGx6C5",
    "cupom": "AVANT25"
  },
  {
    "id": 1278,
    "nome": "Fita Led Inteligente Zigbee 10w 5 Metros 2700k Branco Quente 12v Cod: Neo001753-k002 Neo Avant",
    "preco": "R$179,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807853-MLA117649250721_092026-O.webp",
    "link": "https://meli.la/2ooDWxD",
    "cupom": "AVANT25"
  },
  {
    "id": 1279,
    "nome": "Kit 10 Lampadas Led Par20 Smart Wi-fi 7w Rgb E27 Neo Avant Rgb",
    "preco": "R$779,89",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_853092-MLA111301205584_052026-O.webp",
    "link": "https://meli.la/1wK677r",
    "cupom": "AVANT25"
  },
  {
    "id": 1280,
    "nome": "Kit 6 Potes De Vidro Herméticos 200ml Com Tampa De Bambu E Colher Porta Mantimentos Café Açúcar Temperos Grãos Organizadores Cozinha",
    "preco": "R$59,95",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_610277-MLA114922613321_072026-O.webp",
    "link": "https://meli.la/2UF1s3S",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1281,
    "nome": "Esmerilhadeira Angular Several Importados Sem Fio 110mm com 2 Baterias e 25 Acessórios",
    "preco": "R$298,91",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_753561-MLA115583043122_092026-O.webp",
    "link": "https://meli.la/19z1bRg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1282,
    "nome": "Conversor Fonte Estabilizada 12v - 30v 65w P/ Starlink Mini Preto",
    "preco": "R$296,40",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_875188-MLA118918049049_102026-O.webp",
    "link": "https://meli.la/1LbLUHA",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1283,
    "nome": "Basike 1.43'' Ia Relógio Smartwatch Redondo Masculino E Feminino Com Gps, Chatgpt,assistente De Voz, Chamadas Bluetooth, Mercado De Ações,rfc,resistência À Água 3atm, 100 + Modos De Esporte Etc.",
    "preco": "R$199",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_889746-MLA99736814794_122025-O.webp",
    "link": "https://meli.la/1yfcHtg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1284,
    "nome": "Kit 3 Refletor Led 300w Holofote Bivolt Ip67 Externas 6500k 127/220v Preto Branco-frio",
    "preco": "R$90,59",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_781814-MLB88809721338_082025-O.webp",
    "link": "https://meli.la/33W61nW",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1285,
    "nome": "Calça Legging Capri Corsário Dry Feminina  Academia Fitness",
    "preco": "R$25,49",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_932407-MLB100004392188_122025-O.webp",
    "link": "https://meli.la/27o7Soj",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1286,
    "nome": "Kit Pia Estrutura Porcelanato Vidro Gabinete 1,50l X1,00a Cm",
    "preco": "R$171",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_767773-MLB118302871365_092026-O.webp",
    "link": "https://meli.la/1zMyBoD",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1287,
    "nome": "Extensão Elétrica 3 Metros Preto 3 Tomada Tripolar",
    "preco": "R$20,89",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_673564-MLA100058948183_122025-O.webp",
    "link": "https://meli.la/2ZDwS2K",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1288,
    "nome": "Smartwatch Aurafit G12, Gps, Resistência À Água 3atm, Preto Preto Mesh Verde-militar/preto",
    "preco": "R$335,20",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_634437-MLB114100775731_072026-O.webp",
    "link": "https://meli.la/336NZmx",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1289,
    "nome": "Bandeja Espelhada Decorativa Grande Bar Taças Café Aparador Rústico Amadeirado",
    "preco": "R$93,39",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_665132-MLB74426558077_022024-O.webp",
    "link": "https://meli.la/2Bh48Za",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1290,
    "nome": "Magnésio Bisglicinato Longa Duração: 2 Meses de Uso, 260mg Magnésio + Vitamina B6, 120 Cápsulas, Fortalvit",
    "preco": "R$67,93",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_704421-MLA114857826291_072026-O.webp",
    "link": "https://meli.la/2e5tzPc",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1291,
    "nome": "Kit 3 Tesouras Multiuso Costura Papel Tecido Cozinha Preto E Azul",
    "preco": "R$27,69",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_741954-MLB113937667734_072026-O.webp",
    "link": "https://meli.la/1Ms1MrN",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1292,
    "nome": "Coletor De Pó Para Aspirador Electrolux Stk 15/14b",
    "preco": "R$39,99",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_754707-MLB85159940514_052025-O.webp",
    "link": "https://meli.la/11kQtFC",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1293,
    "nome": "Guarnição Junta Tampa Válvula Honda Cb 300 Cb300 2010 A 2015",
    "preco": "R$53",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_726642-MLB114500798840_082026-O.webp",
    "link": "https://meli.la/1hFyJDm",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1294,
    "nome": "Perfil Magnético Imã Flexível Fita Imã Artesanato - 1 Metro Preto",
    "preco": "R$18,39",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_606924-MLB94576200511_102025-O.webp",
    "link": "https://meli.la/1wt8Dc1",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1295,
    "nome": "Bermudas Cargo Corta Vento Verão Masculina 5 Bolsos Skate",
    "preco": "R$57,85",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_726959-MLB107353986079_022026-O.webp",
    "link": "https://meli.la/2t2xX7r",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1296,
    "nome": "Calça De Brim Uniforme Profissional Com Faixa Refletiva",
    "preco": "R$45,45",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_715112-MLB113119732330_072026-O.webp",
    "link": "https://meli.la/2vZFJQH",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1297,
    "nome": "Kit 2 Pelicula 3d De Vidro Para iPhone Todos Os Modelos iPhone 13 Normal / 13 Pro",
    "preco": "R$19,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_724025-MLB115992862752_092026-O.webp",
    "link": "https://meli.la/2gi2LJX",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1298,
    "nome": "Bermuda Poliamida Tradicional Treino Academia",
    "preco": "R$63,71",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_943964-MLB101160361038_122025-O.webp",
    "link": "https://meli.la/2trmDP8",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1299,
    "nome": "Kit 02 Proteção Solar Para Janela Carro, Cortina Protetora",
    "preco": "R$25,89",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_910189-MLB108939756409_032026-O.webp",
    "link": "https://meli.la/1xmEz7e",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1300,
    "nome": "Polímero Liquido Para Farois 1l (cobre A Lixa 600) 100% Puro",
    "preco": "R$186,91",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787917-MLB111047515447_042026-O.webp",
    "link": "https://meli.la/1M9PhFM",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1301,
    "nome": "Tenis Feminino Via Marte Slip On - Calce Facil - Confortável",
    "preco": "R$140,07",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892098-MLB85168524141_052025-O.webp",
    "link": "https://meli.la/1t1RLFY",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1302,
    "nome": "Botinha Sapatilha Térmica Meia Macia Beach Tennis Areia Fria Preto M",
    "preco": "R$51,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_968696-MLB113719963555_062026-O.webp",
    "link": "https://meli.la/1dDd974",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1303,
    "nome": "Escova Limpeza Mamadeira Copos Espuma Macia Limpeza Completa Cor Azul Celeste",
    "preco": "R$24,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_994212-MLA115173947426_082026-O.webp",
    "link": "https://meli.la/2JfHSn5",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1304,
    "nome": "Kit 2 Sensor Presença Movimento Iluminação Soquete  Bivolt Branco",
    "preco": "R$31,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_829678-MLB110510120048_052026-O.webp",
    "link": "https://meli.la/2Mhg4L5",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1305,
    "nome": "3x Psyllium 120 Cápsulas 500mg Fusionvitta Sem Sabor",
    "preco": "R$56,89",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_788958-MLB96374393951_102025-O.webp",
    "link": "https://meli.la/2roD6iJ",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1306,
    "nome": "Bateria Pilha Murata Sony Original 394 Sr936sw 5 Unidades",
    "preco": "R$40,54",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_815558-MLB96186130506_102025-O.webp",
    "link": "https://meli.la/1X838Wk",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1307,
    "nome": "Sapato Social Masculino Bico Quadrado Bertelli",
    "preco": "R$121,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_662995-MLB97193857348_112025-O.webp",
    "link": "https://meli.la/29wYf6X",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1308,
    "nome": "Adubo Fertilizante Npk 10x10x10 Para Plantas E Flores | 1kg",
    "preco": "R$23,99",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_982923-MLB82741921109_022025-O.webp",
    "link": "https://meli.la/1GwhPrr",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1309,
    "nome": "Câmera Digital Retro Com Zoom Tela Flip Para Selfie Portátil Branco",
    "preco": "R$116,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_871314-MLB115824525498_092026-O.webp",
    "link": "https://meli.la/1qqPVVY",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1310,
    "nome": "Casca De Pinus Polida Grande 7 Litros 1,5kg Jardinagem Vasos",
    "preco": "R$25,19",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_844912-MLB105343693013_012026-O.webp",
    "link": "https://meli.la/1SBbCKy",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1311,
    "nome": "Kit Bota Feminina Cano Curto + Bolsinha Casual Com Zíper",
    "preco": "R$107,06",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_668972-MLB114457010861_072026-O.webp",
    "link": "https://meli.la/27XehF1",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1312,
    "nome": "Caixa Porta Chá Sachês 12 Divisórias Estojo Madeira Maciça",
    "preco": "R$94,02",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_713817-MLB102926753260_012026-O.webp",
    "link": "https://meli.la/1UzuDRz",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1313,
    "nome": "Repelente Anti Ratos Hortelã Motor Carro Spray 500ml",
    "preco": "R$49",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_825801-MLB112944534926_072026-O.webp",
    "link": "https://meli.la/13M4THG",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1314,
    "nome": "Refletor Led 400w Com Sensor De Presença Bivolt Ip67 Externa 127-220v Preto Branco-frio",
    "preco": "R$72,87",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_904337-MLB116203437192_092026-O.webp",
    "link": "https://meli.la/24aCVgq",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1315,
    "nome": "Removedor De Caseum + Limpador De Garganta E Ouvido Nariz",
    "preco": "R$43",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_849966-MLB112692227236_062026-O.webp",
    "link": "https://meli.la/2xjYP9F",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1316,
    "nome": "Extensão 5 Tomadas E  1 Pd 4 Usb Led Bivolt Power 127v/220v Preto 127/220v",
    "preco": "R$43,90",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_644631-MLB110783073975_042026-O.webp",
    "link": "https://meli.la/2z1tbH6",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1317,
    "nome": "Super Colostro Natural Para Cães Imunidade E Vitalidade",
    "preco": "R$157",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_856132-MLB101913039675_122025-O.webp",
    "link": "https://meli.la/2GVKR8n",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1318,
    "nome": "Cabo Usb Carregador Celular Usb C Tipo C 3 Metros Turbo 4.0 Branco",
    "preco": "R$27,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_838481-MLB89537708729_082025-O.webp",
    "link": "https://meli.la/1Gj16L5",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1319,
    "nome": "9 Sacos Aspirador Aguapó, Arno Ar12, H2po, Animal Care 1400w",
    "preco": "R$53,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_914302-MLB71670127053_092023-O.webp",
    "link": "https://meli.la/1PP7Hb7",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1320,
    "nome": "Eletroduto Corrugado Preto (1/2) Hidrolete 12mm",
    "preco": "R$48,20",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_639332-MLB111044238509_042026-O.webp",
    "link": "https://meli.la/1kQLMVQ",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1321,
    "nome": "Kit 4 Luminária Solar 600w Sensor Presença Controle Remoto Solar Preto",
    "preco": "R$139,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_952036-MLB91531485100_092025-O.webp",
    "link": "https://meli.la/2xNaKRx",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1322,
    "nome": "110 Peças De Decoração De Balões Azuis Para Aniversário Nevoeiro Azul",
    "preco": "R$45,74",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_945049-MLB117923852715_092026-O.webp",
    "link": "https://meli.la/25PFahe",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1323,
    "nome": "Massa Eva 20 Cores Arte Massinha Modelar 250g Menino Menina Coloridas",
    "preco": "R$34,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_737971-MLB90789910031_082025-O.webp",
    "link": "https://meli.la/2ToBXpw",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1324,
    "nome": "Fita Eva Vedação Autoadesiva 20mm X 6mm X 10mts Espuma Preto",
    "preco": "R$33,30",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_821497-MLB110696014546_052026-O.webp",
    "link": "https://meli.la/141g46H",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1325,
    "nome": "Base Suporte Com Rodinhas Máquina De Lavar, Geladeira Etc",
    "preco": "R$45,90",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_821595-MLB92621763526_092025-O.webp",
    "link": "https://meli.la/1RRRwNT",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1326,
    "nome": "Lumisorris Base Stick Dual 2 Em 1 À Prova D'água Natural",
    "preco": "R$32",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_930642-MLB115154844271_072026-O.webp",
    "link": "https://meli.la/1K9ifRp",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1327,
    "nome": "Óculos De Sol Polarizado Tendência Unissex Quadrado + Case",
    "preco": "R$74,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_909883-MLB116207368840_092026-O.webp",
    "link": "https://meli.la/2BuBJ1P",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1328,
    "nome": "Vestido Preto Tule Transparencia Inverno 2 Pçs Modelo Corpo",
    "preco": "R$66",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_617896-MLB110468099990_052026-O.webp",
    "link": "https://meli.la/2DpP1bi",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1329,
    "nome": "Forma De Alumínio Pizza 35 Cm Natural",
    "preco": "R$22",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_784065-MLB117913353013_092026-O.webp",
    "link": "https://meli.la/2uwoLFd",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1330,
    "nome": "Porta Retrato 15x21 Moldura Super Luxo Com Vidro Marrom Rústico",
    "preco": "R$38,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_696841-MLB73677540404_012024-O.webp",
    "link": "https://meli.la/1eNUMFc",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1331,
    "nome": "Kit 4 Blusa Feminina Baby Tee Casual Ribana Canelada Slimfit Baby Tee Preto Marrom Branco E Nude M",
    "preco": "R$63",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_611259-MLB113705944011_062026-O.webp",
    "link": "https://meli.la/1FPAgRr",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1332,
    "nome": "Maquininha Aparador De Pelos Cortador De Cabelo Profissional Prateado 127/220v",
    "preco": "R$58,10",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_645937-MLB111538294020_062026-O.webp",
    "link": "https://meli.la/16rREex",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1333,
    "nome": "Varal Aço Inox 40 Prendedores Suspenso Multiuso Inox Prateado",
    "preco": "R$24,14",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_751203-MLB117205505475_092026-O.webp",
    "link": "https://meli.la/13ybL2h",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1334,
    "nome": "Maca Peruana Negra Revitalize Black Ultra",
    "preco": "R$25,54",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_892020-MLA118776876421_102026-O.webp",
    "link": "https://meli.la/2WCAU6Z",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1335,
    "nome": "Saia Jeans Feminina Evangelica Cintura Alta Midi",
    "preco": "R$48,49",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_874039-MLB87175206682_072025-O.webp",
    "link": "https://meli.la/1mN6cii",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1336,
    "nome": "Kit Bolsas Saída Maternidade Bebê 4 Peças Coroa Dourada",
    "preco": "R$135,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_941932-MLB114982097726_082026-O.webp",
    "link": "https://meli.la/2EBMCAK",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1337,
    "nome": "Antena Corta Pipa Moto Bicicleta Retrátil Aço Inox Guidão Cromada",
    "preco": "R$23,99",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837501-MLB117109926678_102026-O.webp",
    "link": "https://meli.la/1wPzoN3",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1338,
    "nome": "Piercing Titânio Argola Click Cravejada 8mm Dourado Addiesdive®",
    "preco": "R$19,99",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_731628-MLA99397245519_112025-O.webp",
    "link": "https://meli.la/1iij9M2",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1339,
    "nome": "Kit 2 Sacos Lavar Tênis Maquina Reutilizável Zíper + Brinde Sortido",
    "preco": "R$36,89",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_967482-MLB116915760909_082026-O.webp",
    "link": "https://meli.la/1tN85UM",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1340,
    "nome": "Camiseta Blusa Personalizada Com Sua Arte Logo Frase Foto Branco Sua Logo Arte Frase M Unissex",
    "preco": "R$34,45",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_810276-MLB110746395392_052026-O.webp",
    "link": "https://meli.la/13LwKqW",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1341,
    "nome": "Pistola De Agua Eletrica Automatica Com Mira E Led Infantil Azul",
    "preco": "R$51,40",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_974210-MLB113887405894_072026-O.webp",
    "link": "https://meli.la/1deaV2m",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1342,
    "nome": "Kit 3 Pares Joelheira Protetor De Joelho Infantil",
    "preco": "R$31,45",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_708061-MLB116829140860_092026-O.webp",
    "link": "https://meli.la/1HGt1Yg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1343,
    "nome": "Fone De Ouvido Clip-on Bluetooth 6.0 Esportivo 60hrs Duração Dourado",
    "preco": "R$69,30",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_905242-MLB111308268319_052026-O.webp",
    "link": "https://meli.la/2dgWAPc",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1344,
    "nome": "Kit 01 Esponja Nudreds Dupla Casca De Ovo + 01 Cera Modela",
    "preco": "R$34",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_845373-MLB113579240946_072026-O.webp",
    "link": "https://meli.la/24XXCMu",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1345,
    "nome": "30 Caixas De Papelão 15x15x15 Copos Caneca Envios Pardo Marrom-claro",
    "preco": "R$49,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_941124-MLB118133238017_092026-O.webp",
    "link": "https://meli.la/27BqXfX",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1346,
    "nome": "Kit 3 Blusa Academia Fitness Moviment Marrom/verde/marfim",
    "preco": "R$94,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_978560-MLB96646292702_112025-O.webp",
    "link": "https://meli.la/2Q5AdXL",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1347,
    "nome": "Capa Capinha Magnética Proteção Compatível Com iPhone Transparente iPhone 15 Normal",
    "preco": "R$19,30",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_771527-MLB116546917535_082026-O.webp",
    "link": "https://meli.la/2nDJQrV",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1348,
    "nome": "Kit 2 Top De Academia Feminina Forte Apoio Bojo Removíveis",
    "preco": "R$39",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_863833-MLB104191047764_012026-O.webp",
    "link": "https://meli.la/1kLVjEk",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1349,
    "nome": "Bobina Papel Jornal Pet Limpo 01 Bobinas 60cm 100mts Anipel",
    "preco": "R$63,90",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_698965-MLB73610837974_122023-O.webp",
    "link": "https://meli.la/33JZkpw",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1350,
    "nome": "Relógio De Parede Silencioso Redondo Cozinha Sala Escritório Cromado Branco",
    "preco": "R$66,40",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_694394-MLB115648522870_092026-O.webp",
    "link": "https://meli.la/1cjdW8p",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1351,
    "nome": "Óleo Essencial Tea Tree Melaleuca Via Aroma Aromaterapia",
    "preco": "R$33,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_976500-MLB119283619727_102026-O.webp",
    "link": "https://meli.la/2XAVTFw",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1352,
    "nome": "Capa Capinha Anti-impacto Compatível Samsung Armadura Preto S25 Ultra",
    "preco": "R$37",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_801314-MLB88808995146_082025-O.webp",
    "link": "https://meli.la/2t28tGg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1353,
    "nome": "Kit 2 Própolis Verde Extrato 70% Super Tradicional Vidro Natural",
    "preco": "R$44,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_726158-MLB113798682788_072026-O.webp",
    "link": "https://meli.la/2eWWzdb",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1354,
    "nome": "Kit 2 Sensor Presença E27 Movimento Iluminação Soquete Branco",
    "preco": "R$34,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_835455-MLB115594175895_082026-O.webp",
    "link": "https://meli.la/1ZzHpqP",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1355,
    "nome": "Kit 10 Calcinha Afina Barriga Cintura Alta Fio Dental Duplo",
    "preco": "R$72,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_844247-MLB85001917964_052025-O.webp",
    "link": "https://meli.la/28qHAfK",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1356,
    "nome": "Aplique Cantinho Do Café Mdf Alto Relevo 4 Peças 30cm Café",
    "preco": "R$23,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_846704-MLB52337767570_112022-O.webp",
    "link": "https://meli.la/1smqNjD",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1357,
    "nome": "Puxador Air Fryer Naf-03i Naf-05 Af 03 3,2l Mondial Adaptado",
    "preco": "R$79,99",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_736768-MLB87738467419_072025-O.webp",
    "link": "https://meli.la/1mPbvtE",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1358,
    "nome": "Kit Liturgia Diaria",
    "preco": "R$20,90",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_888656-MLB118184811315_092026-O.webp",
    "link": "https://meli.la/23dKSkm",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1359,
    "nome": "Kit 6 Pares Joelheira Protetor De Joelho Infantil",
    "preco": "R$31,45",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_741443-MLB111558697216_062026-O.webp",
    "link": "https://meli.la/11CkTSf",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1360,
    "nome": "CREATINA MONOHIDRATADA 100% Pura - Sabor Morango - 300g",
    "preco": "R$64,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_725322-MLA113497414762_072026-O.webp",
    "link": "https://meli.la/1t9paSP",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1361,
    "nome": "Kit Térmico 2 Luvas Para Forno + 2 Alças Para Cabo, Silicone Cinza",
    "preco": "R$29,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_769284-MLB100057470219_122025-O.webp",
    "link": "https://meli.la/2Wm7tYA",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1362,
    "nome": "Cabo Carregador 4 Em 1 Mola 1.8m Preto Turbo Usb-c Universal Preto",
    "preco": "R$28,86",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_829302-MLB114517757618_082026-O.webp",
    "link": "https://meli.la/13kFqes",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1363,
    "nome": "Fita Led Smart Inteligente Wifi Rgb Alexa Google 5m Agl Rgb",
    "preco": "R$52,58",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_846745-MLB110733446892_052026-O.webp",
    "link": "https://meli.la/1nnZCvm",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1364,
    "nome": "Flange Adaptadora Fiat Uno Mille Tldf P/carburador De Fusca",
    "preco": "R$62",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807447-MLB112108994878_062026-O.webp",
    "link": "https://meli.la/2yZ4k3F",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1365,
    "nome": "Papel Toalha Interfolha 100% Celulose 5000 Folhas 2 Dobras",
    "preco": "R$51",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_736406-MLB114210603043_072026-O.webp",
    "link": "https://meli.la/1HZYNPf",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1366,
    "nome": "NAC 600mg - Máxima Concetranção e Pureza - 60 Cápsulas",
    "preco": "R$45,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_959094-MLA106675868615_022026-O.webp",
    "link": "https://meli.la/1iYkTZT",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1367,
    "nome": "Sensor De Toque Interruptor Touch 12v 5a Para Madeira Preto 12v",
    "preco": "R$48,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_987787-MLB119657263279_102026-O.webp",
    "link": "https://meli.la/11DqHJG",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1368,
    "nome": "100 Gude Leiteira Bolinha Birosca Vidro Escaldapés Aquário",
    "preco": "R$42,90",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_903175-MLB113041854761_062026-O.webp",
    "link": "https://meli.la/1cKY6pw",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1369,
    "nome": "Kit Maiô Infantil/juvenil + 1 Touca Brinde",
    "preco": "R$45,24",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837863-MLB110363406436_052026-O.webp",
    "link": "https://meli.la/153Y8ud",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1370,
    "nome": "2 Pulseiras Elástica De Nylon Para Redmi Watch 5 Active Lite Preto/indigo 2.2 Cm",
    "preco": "R$38,95",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_956108-MLB101383446989_122025-O.webp",
    "link": "https://meli.la/2VhzyPv",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1371,
    "nome": "Bebedouro Água Automático Usb Para Gatos E Cães 1,5l Portáti 127/220v Branco",
    "preco": "R$44",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_980974-MLB116357590644_092026-O.webp",
    "link": "https://meli.la/1MVWtRw",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1372,
    "nome": "Blusa Plus Size Listrada Feminina Manga Curta Preto E Branco Preto G2",
    "preco": "R$35",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_854390-MLB100488682355_122025-O.webp",
    "link": "https://meli.la/2AKaTcS",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1373,
    "nome": "Calça Tactel Jogger Premium Fitness Academia 2 Bolsos 016 Preto Tactel G1(50/52",
    "preco": "R$38,99",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_846908-MLB111902440231_052026-O.webp",
    "link": "https://meli.la/2uF1a48",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1374,
    "nome": "Bracelete Gota Feminino Pulseira Das Blogueiras Elegante Dourado 3 Cm",
    "preco": "R$27",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_724624-MLB111470690327_052026-O.webp",
    "link": "https://meli.la/2u6E7jg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1375,
    "nome": "Controle Remoto Ar Condicionado Comfee 42mmcc12f5, Mss-28cr Preto",
    "preco": "R$26,99",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_883150-MLB73051428897_112023-O.webp",
    "link": "https://meli.la/26YJVqK",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1376,
    "nome": "Capa Capinha Proteção Premium + Película 3d Para Samsung Preto A57",
    "preco": "R$26,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_811544-MLB113958580147_062026-O.webp",
    "link": "https://meli.la/34bUk4J",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1377,
    "nome": "Coturno Bota Segurança Biqueira Reforçada Adventure",
    "preco": "R$209,78",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_997678-MLB117205154064_102026-O.webp",
    "link": "https://meli.la/1pay92D",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1378,
    "nome": "Capa De Chuva Com Capuz Infantil Criança Varias Cores Azul-celeste 1,50",
    "preco": "R$22,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_896939-MLB105252435353_012026-O.webp",
    "link": "https://meli.la/1AhGWNU",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1379,
    "nome": "Kit 3 Pastilhas Bactericidas Ar Condicionado Ba Clean Aromas Flor De Algodão - Chá Branco - Bambu",
    "preco": "R$69,70",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_945469-MLB111822577548_062026-O.webp",
    "link": "https://meli.la/1aFGW1G",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1380,
    "nome": "Água Desmineralizada Biosterra 5l 100% Pura E Limpa Incolor",
    "preco": "R$21,50",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_805391-MLB118034144324_102026-O.webp",
    "link": "https://meli.la/2HmXabt",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1381,
    "nome": "Blusa Feminina Plus Size Gola V Manga Curta Básica Versátil",
    "preco": "R$29,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_623744-MLB98366315305_112025-O.webp",
    "link": "https://meli.la/2THkc11",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1382,
    "nome": "Corrente Masculina Pingente Cruz Moeda Antiga Banhado Ouro  Dourado",
    "preco": "R$79",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_646735-MLB74938032597_032024-O.webp",
    "link": "https://meli.la/2SsJ8aw",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1383,
    "nome": "Coturno Acero Bota Adventure Sola Alta Couro Trilha Casual",
    "preco": "R$313,40",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_815721-MLB31208011368_062019-O.webp",
    "link": "https://meli.la/1CdyWCJ",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1384,
    "nome": "Tênis Olympikus  Clic Calçe Fácil Masculino Preto Casual",
    "preco": "R$274,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_793119-MLB111078072297_042026-O.webp",
    "link": "https://meli.la/2Eqhufb",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1385,
    "nome": "Kit C/ 20 - Rolamento Silencioso P/ Ventilador 608 Zz 8x22x7",
    "preco": "R$35",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_780712-MLB117193157487_092026-O.webp",
    "link": "https://meli.la/2TqXFzF",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1386,
    "nome": "Fotopolimerizador Odontológico Lex9 Xlite Com Led Violeta Preto 127/220v",
    "preco": "R$111,16",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_692088-MLB96525480741_102025-O.webp",
    "link": "https://meli.la/2CSGKoc",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1387,
    "nome": "Sacola Plástica 38x48  Branca Alta Qualidade Pacote C/1000 Branco",
    "preco": "R$74,90",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_898693-MLB118715302909_102026-O.webp",
    "link": "https://meli.la/2epyLkb",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1388,
    "nome": "Kit 2 Pares Tênis Confortável Leve Para Academia E Dia A Dia",
    "preco": "R$105",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_959083-MLB107116946209_022026-O.webp",
    "link": "https://meli.la/16xharb",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1389,
    "nome": "Conjunto Kimono Plus Size Short Verão Moda Elegante Casual",
    "preco": "R$54,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_980631-MLB116555384016_092026-O.webp",
    "link": "https://meli.la/2cntqfM",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1390,
    "nome": "Bolsa Feminina Sacola De Praia Palha",
    "preco": "R$69,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_754480-MLB108650357181_032026-O.webp",
    "link": "https://meli.la/2pFuFCG",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1391,
    "nome": "Cabo Tipo-c Para Macbook M4 M5 Magsafe 3 Carregador 1,8m Branco",
    "preco": "R$139,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_858659-MLB114012115299_072026-O.webp",
    "link": "https://meli.la/27XtS3P",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1392,
    "nome": "Kit Super Led Techone 8000k 12v 24v Sotcar H4 H7 Hb4 H4 Bege Branco-quente",
    "preco": "R$54",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_983720-MLB116411437613_082026-O.webp",
    "link": "https://meli.la/2W9vcbt",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1393,
    "nome": "Jogo 6 Xicaras Tulipa 120ml Decorada Branco Gratidão Fé Felicidade",
    "preco": "R$59,29",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_689231-MLB115910538320_092026-O.webp",
    "link": "https://meli.la/2FjTmMX",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1394,
    "nome": "Kit Com 2 Camisola Gestante Amamentação Idosas Pós Cirurgias",
    "preco": "R$70",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_857496-MLB119462042851_102026-O.webp",
    "link": "https://meli.la/32PPJrD",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1395,
    "nome": "Chinelo Slide Unissex Sola Grossa Confortável Preto 36/37",
    "preco": "R$21",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_942037-CBT112226964880_062026-O.webp",
    "link": "https://meli.la/18G4RYC",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1396,
    "nome": "Extensão Elétrica 25 Metros 2 Tomadas Cabo Pp 1,5mm Bivolt Preto 127/220v",
    "preco": "R$75,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_932844-MLB117152033324_102026-O.webp",
    "link": "https://meli.la/25MC2GE",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1397,
    "nome": "Melatonina em Gotas Sublingual 0,21mg 30ml Sabor Morango 360 Doses MindXP Nutrition",
    "preco": "R$28,80",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_647926-MLA115037170638_082026-O.webp",
    "link": "https://meli.la/1kfudi5",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1398,
    "nome": "Película De Vidro Temperado Para Xiaomi Redmi Pad 2 - Rhinow",
    "preco": "R$44,99",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_873589-MLB91615943462_092025-O.webp",
    "link": "https://meli.la/2ZjTsEK",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1399,
    "nome": "Gel De Sobrancelha Fixador Melu By Ruby Rose® Kit 2 Unidades",
    "preco": "R$28",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_984412-MLB109322125978_042026-O.webp",
    "link": "https://meli.la/19aDLZY",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1400,
    "nome": "Kit 4 Camisetas Masculina Dry Fit Treino Academia Esporte Preto-branco-marinho-cinza G - 40/42",
    "preco": "R$48,40",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837414-MLB115748708003_082026-O.webp",
    "link": "https://meli.la/2o6ySVC",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1401,
    "nome": "Luz Led Carro Teto Touch Usb Rgb, Entre Outros, Recarregável",
    "preco": "R$63",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_676725-MLB118913693983_102026-O.webp",
    "link": "https://meli.la/2RZyhWP",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1402,
    "nome": "Saboneteira Compacta Moderna Organizador Banheiro Branco",
    "preco": "R$20,37",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_719340-MLB113964035901_062026-O.webp",
    "link": "https://meli.la/1Tr1mBZ",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1403,
    "nome": "Mira Laser Para Carabina De Pressão Airsoft Paintball Co2",
    "preco": "R$58,23",
    "categoria": "Esportes & Lazer",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_698905-MLA115227038053_072026-O.webp",
    "link": "https://meli.la/1Rf1vKF",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1404,
    "nome": "PROHIBIDO FUEL Energy Drink Sabor: Bubble Gum - Pack Com 6 Unidades De 473ml - Fórmula Exclusiva E Inovadora Pré Treino em Lata",
    "preco": "R$69,99",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_744405-MLA99507662812_112025-O.webp",
    "link": "https://meli.la/2yLFh7d",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1405,
    "nome": "Pulseira Riviera Luxo Zircônia Branca Aço Unissex Social Branco 19 Cm",
    "preco": "R$31,90",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_618718-MLB115478226479_082026-O.webp",
    "link": "https://meli.la/1WGLVQC",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1406,
    "nome": "Caderno De Anotação Capa Couro Vintage Diário Maior, 19x14cm Marrom-escuro",
    "preco": "R$57,04",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_798858-MLB96239320751_102025-O.webp",
    "link": "https://meli.la/1sZH4xs",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1407,
    "nome": "VITAMINA C KIDS / INFANTIL Sabor Laranja - Fórmula Exclusiva com Máxima Concentração e Pureza - 60 Comprimidos Mastigáveis",
    "preco": "R$42,44",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_913295-MLA113498126200_072026-O.webp",
    "link": "https://meli.la/2Rsm3QT",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1408,
    "nome": "2 Água Destilada 5 Litros P/autoclave E Limpeza Cpap - Cpoh",
    "preco": "R$32,88",
    "categoria": "Utilidades Gerais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_698555-MLA119096792109_102026-O.webp",
    "link": "https://meli.la/2ZMdJtN",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1409,
    "nome": "Kit 4 Filtro Refil Polipropileno Liso 9 3/4 1 5 10 20 Ou 50 1 Micra",
    "preco": "R$35,96",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_896887-MLB115109306082_082026-O.webp",
    "link": "https://meli.la/1e7g4eL",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1410,
    "nome": "Compressa Quente P/dores Tamanho Perfeito Aromatizada C/erva",
    "preco": "R$58,98",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_975530-MLB115253397657_072026-O.webp",
    "link": "https://meli.la/1M6avgd",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1411,
    "nome": "Torre De Hanói Em Madeira Woodtoy Brinquedo Educativo Colorida",
    "preco": "R$22,02",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922077-MLB92317188773_092025-O.webp",
    "link": "https://meli.la/1EZwNKE",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1412,
    "nome": "Progressiva Sem Formol Zap All Time Organic 1 Litro",
    "preco": "R$109,90",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_996238-MLB90835246468_082025-O.webp",
    "link": "https://meli.la/2xdSoxJ",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1413,
    "nome": "Caneta Pincel Marcador Quadro Branco Recarregável 12un Azul",
    "preco": "R$27,39",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_843826-MLB71152027489_082023-O.webp",
    "link": "https://meli.la/2LNmnv2",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1414,
    "nome": "Camiseta Um Doce T-shirt Docinho Lindinha 100% Algodão",
    "preco": "R$28",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_982914-MLB81756968871_012025-O.webp",
    "link": "https://meli.la/1rqPKZy",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1415,
    "nome": "Película Vidro Compativel Com iPad 12 11 A18 Air 6 7 8 M4 M3 iPad 12/11/a16/a18/gen10 10.9",
    "preco": "R$60",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675941-MLB109980242218_042026-O.webp",
    "link": "https://meli.la/1WXwDio",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1416,
    "nome": "Cortina Rolo Blackout De Medida 1,40x1,40 Blecaute 0% Luz Cinza Largura 140 X Altura 140",
    "preco": "R$148",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_693991-MLB101580310669_122025-O.webp",
    "link": "https://meli.la/1MV2ZJe",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1417,
    "nome": "Kit 12 Garfos De Mesa Aço Inox Line Premium Original Line Cinza",
    "preco": "R$23,94",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_623450-MLB114129373115_072026-O.webp",
    "link": "https://meli.la/2h8fhPq",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1418,
    "nome": "2x Velmo Black Drink 150g - Única Loja Oficial - Envio Hoje Original",
    "preco": "R$123,40",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_697175-MLB112927367080_072026-O.webp",
    "link": "https://meli.la/2a1kSPW",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1419,
    "nome": "Capa Slim Fosca Antichoque Anel Magsafe iPhone 17 Pro Promax Preto iPhone 17 Pro Max",
    "preco": "R$52",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_982297-MLB112628751953_062026-O.webp",
    "link": "https://meli.la/2NoBgg2",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1420,
    "nome": "Jacaré Eletrodo Tens Eletropuntura 4 Unidades",
    "preco": "R$60,14",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_722466-MLB76901498128_062024-O.webp",
    "link": "https://meli.la/1G5LwDg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1421,
    "nome": "Case Pasta Maleta Capa Para Ultrabook Notebook 14,1/15,6 Pol Preto",
    "preco": "R$38,90",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_870616-MLB111619015090_062026-O.webp",
    "link": "https://meli.la/1gkbKwt",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1422,
    "nome": "Cabelo Longo Cacheado Orgânico 100cm Mariana Crochet Braids",
    "preco": "R$62,93",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_904286-MLB116553444871_082026-O.webp",
    "link": "https://meli.la/2FQ8rJV",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1423,
    "nome": "Chuteira De Quadra Infantil Quadra Antiderrapante",
    "preco": "R$78,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_687173-MLB106801652569_022026-O.webp",
    "link": "https://meli.la/2eGgzK5",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1424,
    "nome": "10 Aros Modelador Para Hamburgueria 10x3 Pães E Carnes Prateado",
    "preco": "R$38,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_826672-MLB111306836820_052026-O.webp",
    "link": "https://meli.la/2dfY3JH",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1425,
    "nome": "Caderno A5 Capa Couro 240 Páginas Pautado Com Fita Marcadora Cinza",
    "preco": "R$33,90",
    "categoria": "Livros & Papelaria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922485-MLB102840950430_012026-O.webp",
    "link": "https://meli.la/2Kz6kSe",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1426,
    "nome": "Camiseta Masculina Básica Ogochi Camisetas Camisas Algodão",
    "preco": "R$56",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_830312-MLB107910359301_032026-O.webp",
    "link": "https://meli.la/2UeKmHg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1427,
    "nome": "3 Saco Organizador Closet Coberta Transparente C/ziper Preto 100% Pvc Transparente",
    "preco": "R$29,57",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_715614-MLB71235222526_082023-O.webp",
    "link": "https://meli.la/29axikg",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1428,
    "nome": "Molho de Tomate com Linguiça e Vinho - Sugo Di Pomodoro & Salsiccia 525g FRENTANO Artesanal",
    "preco": "R$26,91",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_852843-MLA100065739685_122025-O.webp",
    "link": "https://meli.la/2vnjXKp",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1429,
    "nome": "Camisa Gola Polo Tricot Masculina Texturizada Turim Opus",
    "preco": "R$145,21",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_758501-MLB98350765853_112025-O.webp",
    "link": "https://meli.la/1v5MQQG",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1430,
    "nome": "Forminha Para Doces Brigadeiro N5 Cor Dentro E Fora 500un",
    "preco": "R$29,99",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_801093-MLB109263067436_042026-O.webp",
    "link": "https://meli.la/1kvzDKZ",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1431,
    "nome": "Lixeira Basculante 12 Litros Escritorio Chão Pia Cozinha",
    "preco": "R$28,51",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_660658-MLB117717263130_102026-O.webp",
    "link": "https://meli.la/2q17ABX",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1432,
    "nome": "Lâmpada Led Ventilador De Teto Com Controle Remoto Silence 127/220v",
    "preco": "R$39,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_941020-MLA106879028765_022026-O.webp",
    "link": "https://meli.la/27xakpc",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1433,
    "nome": "Tênis Casual Calçado Sola Alta Oversize Numerção Especial",
    "preco": "R$139,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_780869-MLB113254689336_072026-O.webp",
    "link": "https://meli.la/25fCzg3",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1434,
    "nome": "Cama Pet Gg 116x76 Impermeável Lavável Resistente Cão Grande Preto Estampas Variadas",
    "preco": "R$94,90",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_776287-MLB114757064617_072026-O.webp",
    "link": "https://meli.la/1fGVM76",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1435,
    "nome": "1kg Cascalho Para Aquários Pedra Natural Com Opções De Cores",
    "preco": "R$42,96",
    "categoria": "Pets",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_969239-MLB95387177124_102025-O.webp",
    "link": "https://meli.la/1Es7D86",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1436,
    "nome": "Camera Segurança Wifi 360 Graus Prova D'água Jortan C/alarme Cor Branco Branco",
    "preco": "R$113,49",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_749277-MLB109415307218_042026-O.webp",
    "link": "https://meli.la/1D8jWJt",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1437,
    "nome": "Kit 100 Pcs Pins Botons Para Crocs Aleatório Pronta Entrega Mistura",
    "preco": "R$47,99",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_621347-MLB103432275961_012026-O.webp",
    "link": "https://meli.la/2cv21S4",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1438,
    "nome": "Luva Anti Corte Epi Proteção Maxima Resistência Profissional M - 8",
    "preco": "R$26,06",
    "categoria": "Comércio & Indústria",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_962452-MLB107264334424_032026-O.webp",
    "link": "https://meli.la/2aLweCi",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1439,
    "nome": "2 Acabamento Registro Quadrado Padrão Deca Preto Barcelona",
    "preco": "R$128,71",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_654755-MLB107398154894_032026-O.webp",
    "link": "https://meli.la/1cEcc6D",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1440,
    "nome": "Desodorante Cristal Stick Stone Refil Vegano 90g Alva Livre De Perfume",
    "preco": "R$50,35",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_621586-MLA114683378054_082026-O.webp",
    "link": "https://meli.la/2iGNTa8",
    "cupom": "MELIOFFHJ"
  },
  {
    "id": 1441,
    "nome": "TESTO ESSENCIAL - Fórmula Exclusiva com Feno Grego + Boro + Arginina + ZMA + Vitamina B6 - 60 cápsulas",
    "preco": "R$56,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_949131-MLA114764498645_072026-O.webp",
    "link": "https://meli.la/1QPx62R",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1442,
    "nome": "Torneira Gourmet Cozinha 50cm Metal Spray Duo Monocomando Acabamento Cromo Polido Espelhado Cor Cromado Winda",
    "preco": "R$133,30",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_966817-MLA95497071988_102025-O.webp",
    "link": "https://meli.la/255T7nA",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1443,
    "nome": "aweshine Compressor Ar Portátil 150PSI Automotivo com Auxiliar Partida Portátil,5 Modos Inflagem,Auxiliar Partida Veicular Carro Moto Caminhão,Power Bank,digital duplo,lanterna emergência com 3 modos",
    "preco": "R$227",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_957986-MLA115648985729_082026-O.webp",
    "link": "https://meli.la/2gkUQ8o",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1444,
    "nome": "Kit 10 Pano De Chao Xadrez Azul 100 Algodao Limpeza 48x65 Cm Xadrez Azul",
    "preco": "R$29,90",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_625469-MLB118947970771_102026-O.webp",
    "link": "https://meli.la/2yYrYp4",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1445,
    "nome": "Maquina De Cortar Cabelo Barbear Profissional Com Visor Dourado-escuro 127/220v",
    "preco": "R$55,82",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_966217-MLB92243812078_092025-O.webp",
    "link": "https://meli.la/2qZPT25",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1446,
    "nome": "Coenzima Q10 200mg Pura Alta Concentração 60 Cápsulas - Forged Nutrition Sem Sabor",
    "preco": "R$69,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_637238-MLA107348538091_022026-O.webp",
    "link": "https://meli.la/2MRCotw",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1447,
    "nome": "Arame Solda Mig Uso Sem Gás 0.8mm Rolo De 1kg Prata",
    "preco": "R$39,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_685517-MLB118940194403_102026-O.webp",
    "link": "https://meli.la/2Y1Frh6",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1448,
    "nome": "Jardim Vertical Madeira Pinus Estante P/ Hortalicias Treliça Madeira Pinus Madeira Natural",
    "preco": "R$54,99",
    "categoria": "Jardim & Agricultura",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_995755-MLB110437623011_042026-O.webp",
    "link": "https://meli.la/1byyB3e",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1449,
    "nome": "2 Valvula De Escoamento Para Lavatório Cuba 7/8 100% Metal Cor Prateado",
    "preco": "R$35,89",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_628532-MLA115073754835_072026-O.webp",
    "link": "https://meli.la/1Bre7Lq",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1450,
    "nome": "Fones De Ouvido Baseus Eli Sport 2 Open-ear Sem Fio Ip57 Preto",
    "preco": "R$375",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_820453-MLB111347934856_052026-O.webp",
    "link": "https://meli.la/14auBAh",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1451,
    "nome": "Kit 2 Blusa Academia Feminina Life Style",
    "preco": "R$66,40",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_742431-MLB112260417030_062026-O.webp",
    "link": "https://meli.la/1Emi3X4",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1452,
    "nome": "Kit 5 Unidades De Robo Dummy Montado Com Kit De Acessórios",
    "preco": "R$62,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_842945-MLA107591602477_022026-O.webp",
    "link": "https://meli.la/1zr8M7n",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1453,
    "nome": "Mini Umidificador Portátil De Ar Egg Uso Doméstico Pequeno",
    "preco": "R$27,70",
    "categoria": "Eletrodomésticos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_806664-MLB118032040460_102026-O.webp",
    "link": "https://meli.la/1y5eAC3",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1454,
    "nome": "Microcânulas Lovbeauty 22g Para Preenchimento 50mm",
    "preco": "R$102,60",
    "categoria": "Beleza & Cuidados Pessoais",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_951871-MLB117576094649_092026-O.webp",
    "link": "https://meli.la/32k5ZcU",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1455,
    "nome": "Mochila Masculina Lona 50 Litros Viagem Passeio Motoboy Espo Preta",
    "preco": "R$49,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_881597-MLB116590540889_082026-O.webp",
    "link": "https://meli.la/1K8VXjF",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1456,
    "nome": "NAC 600mg - Fórmula Exclusiva com Máxima Concentração e Pureza - N-Acetil L-Cisteína - 60 Cápsulas",
    "preco": "R$46,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_690214-MLA113495617962_072026-O.webp",
    "link": "https://meli.la/2Xa4u71",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1457,
    "nome": "Kit Higiene Bucal Bebe Buba Care Escova Gel Dental Infantil",
    "preco": "R$29,90",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_645525-MLB115089464787_072026-O.webp",
    "link": "https://meli.la/1SSuYD5",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1458,
    "nome": "Capa Para Samsung Com Tampa Câmera Deslizante E Suporte",
    "preco": "R$55,30",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_963192-MLB117551610192_102026-O.webp",
    "link": "https://meli.la/2p7iraT",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1459,
    "nome": "Alicate Eletricista Amarelo Profissional Isolado 8'' Sata",
    "preco": "R$63,22",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_839480-MLB115290224649_072026-O.webp",
    "link": "https://meli.la/2jPar4i",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1460,
    "nome": "Tesoura Iris Curva 9 Cm Fina/fina.",
    "preco": "R$21,99",
    "categoria": "Artesanato & Artes",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_877848-MLB90639013969_082025-O.webp",
    "link": "https://meli.la/12sWDHE",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1461,
    "nome": "PENTA MAGNÉSIO - Bisglicinato + Dimalato + Citrato + Taurato + Óxido de Magnésio - A Combinação Perfeita com Máxima Pureza e Biodisponibilidade - 60 Cápsulas",
    "preco": "R$54,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_604175-MLA113496610054_072026-O.webp",
    "link": "https://meli.la/2LrSj41",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1462,
    "nome": "Kit 6 Xícaras Vidro Duplo Térmico Café 80ml Premium Luxo Transparente",
    "preco": "R$104,60",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_771272-MLB109463584960_042026-O.webp",
    "link": "https://meli.la/2XELwey",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1463,
    "nome": "Kit 50 Seringas HiPodérmica 10ml Sem Agulha Luer Estéril",
    "preco": "R$49,80",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_944712-MLB117666723871_092026-O.webp",
    "link": "https://meli.la/2eyfnTH",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1464,
    "nome": "Kit Mascara Descartável 100 Unidades Azul Tripla Proteção",
    "preco": "R$22,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_801507-MLB112454883889_052026-O.webp",
    "link": "https://meli.la/1xir3yS",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1465,
    "nome": "Macadâmia Natural Inteira Tipo 2 Graúda - 500g Premium",
    "preco": "R$76,95",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_951239-MLB114388677204_082026-O.webp",
    "link": "https://meli.la/1utMbUU",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1466,
    "nome": "2un Aumento P/ Torneira Prolongador Curto Rosca 1/2 Dourado Dourado",
    "preco": "R$19,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_701308-MLB100380477359_122025-O.webp",
    "link": "https://meli.la/1Us7ZJA",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1467,
    "nome": "Amassador De Batatas Inox Legumes Feijão Tomate Espremedor Preto",
    "preco": "R$18,89",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_786252-MLB112784118304_062026-O.webp",
    "link": "https://meli.la/2jeZmv2",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1468,
    "nome": "Poste Balizador De Jardim 60 Cm Branco Quente 12w Promoção Branco Quente Preto",
    "preco": "R$72,58",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_775138-MLB96314806926_102025-O.webp",
    "link": "https://meli.la/1g4LZ8F",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1469,
    "nome": "Botinha Sapatilha Térmica Meia Macia Beach Tennis Areia Fria Preto P",
    "preco": "R$52,79",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_968696-MLB113719963555_062026-O.webp",
    "link": "https://meli.la/2kXzinU",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1470,
    "nome": "CÚRCUMA 130mg + COLÁGENO Tipo Ii 45mg - Fórmula com Máxima Concentração e Pureza - 60 Cápsulas",
    "preco": "R$47",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_647967-MLA114761117319_072026-O.webp",
    "link": "https://meli.la/2nfZdNo",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1471,
    "nome": "Kit 4 Blusa Feminina Baby Tee Casual Ribana Canelada Slimfit Baby Tee Preto Marrom Branco E Nude G",
    "preco": "R$65,47",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_611259-MLB113705944011_062026-O.webp",
    "link": "https://meli.la/1WkMoAM",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1472,
    "nome": "Kit 2 Pelicula Cerâmica Privacidade Fosca Para iPhone 7 A 17 iPhone 16 Normal",
    "preco": "R$23,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_869625-MLB116314525635_082026-O.webp",
    "link": "https://meli.la/2dQ4K8m",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1473,
    "nome": "Adaptador Tipo C P/ Fone P2 Áudio Premium Dac Xiaomi Samsung Cinza",
    "preco": "R$149,80",
    "categoria": "Eletrônicos & Áudio",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_873474-MLB96272412005_102025-O.webp",
    "link": "https://meli.la/1G9HEpX",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1474,
    "nome": "COMPLEXO B - Fórmula com Máxima Concentração e Biodisponibilidade - 60 Cápsulas Softgel",
    "preco": "R$42,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_712426-MLA114761517915_072026-O.webp",
    "link": "https://meli.la/1PTqK24",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1475,
    "nome": "Tampão De Ouvido Protetor Auricular Dormir Natação Antiruído Preto",
    "preco": "R$15,13",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_648750-MLB117735591474_102026-O.webp",
    "link": "https://meli.la/217R6pY",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1476,
    "nome": "Tapete Infantil Lona Para Brincar Pista De Corrida 1m Polícia",
    "preco": "R$19,61",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_854499-MLB115894996878_092026-O.webp",
    "link": "https://meli.la/13YodTL",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1477,
    "nome": "Cesto De Roupa Suja 82l Grande Dobrável Brinquedos Banheiro Cinza Liso",
    "preco": "R$43,65",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_898716-MLB114922398714_082026-O.webp",
    "link": "https://meli.la/1wJ793L",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1478,
    "nome": "Kit 2 Tapete Banheiro Antiderrapante Absorvente Magico 40x60 Cinza-escuro-quadrado",
    "preco": "R$27,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_814082-MLB105639092211_012026-O.webp",
    "link": "https://meli.la/26edqZZ",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1479,
    "nome": "Chinelo Slide Unissex Sola Grossa Confortável Rosa 36/37",
    "preco": "R$21",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_772410-CBT112226790352_062026-O.webp",
    "link": "https://meli.la/1vHunjo",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1480,
    "nome": "5 Pares De Bojo Confecção De Roupas Biquini Sutiã Macio Moda Chocolate Liso M",
    "preco": "R$16,90",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_809048-MLB107643298746_032026-O.webp",
    "link": "https://meli.la/14oVBaM",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1481,
    "nome": "Microcânula Lovbeauty 25g Para Preenchimento 50mm",
    "preco": "R$95,75",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_970301-MLB116094885878_092026-O.webp",
    "link": "https://meli.la/2f5Erre",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1482,
    "nome": "Mousepad Extra Grande Preto 90x40 cm Deskpad Couro Antiderrapante Mesa Computador Notebook - KingPad",
    "preco": "R$139,90",
    "categoria": "Informática",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_891302-MLA99989795193_112025-O.webp",
    "link": "https://meli.la/19j6Qo2",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1483,
    "nome": "Glucomannan E Psyllium 120 Cápsulas Suplemento Ryco Sem Sabor",
    "preco": "R$36",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_988692-MLB110657623035_042026-O.webp",
    "link": "https://meli.la/31tegcT",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1484,
    "nome": "Kit 2 Suporte Trava Porta Gatinho Aparador Peso De Porta Branco",
    "preco": "R$19,99",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_991314-MLB112767003964_062026-O.webp",
    "link": "https://meli.la/2L9yN3e",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1485,
    "nome": "Case Capa Com Película Para Redmi Watch 5 Lite Capinha",
    "preco": "R$21,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_601456-MLB111081806477_042026-O.webp",
    "link": "https://meli.la/2HqmMfp",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1486,
    "nome": "Pistola De Agua Eletrica Automatica Com Mira E Led Infantil Vermelho",
    "preco": "R$55,99",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_923832-MLB113886996520_072026-O.webp",
    "link": "https://meli.la/25phj6A",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1487,
    "nome": "Conjunto Feminino Pantalona E Camisa Sem Mangas Linho Misto",
    "preco": "R$220",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_728154-MLB78466786526_082024-O.webp",
    "link": "https://meli.la/2zuk1Qc",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1488,
    "nome": "VITAMINA B12 Metilcobalamina - Fórmula com Máxima Pureza e Concentração - 30 Doses",
    "preco": "R$41,16",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_680174-MLA114764067791_072026-O.webp",
    "link": "https://meli.la/2aCs4u8",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1489,
    "nome": "Adaptador Carburador De Fusca P/ Fiat Uno Mille Tldf",
    "preco": "R$62,64",
    "categoria": "Automotivo",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_807447-MLB112108994878_062026-O.webp",
    "link": "https://meli.la/1j9VYNy",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1490,
    "nome": "Sapato Social Infantil Masculino  Pajem Daminho",
    "preco": "R$119,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_953657-MLB101153964500_122025-O.webp",
    "link": "https://meli.la/1JtPpNc",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1491,
    "nome": "COLÁGENO VERISOL® - Fórmula Exclusiva com Ácido Hialurônico + Coenzima Q10 + Biotina + Silício + Zinco + Peptídeos Bioativos + Vitaminas - Sabor Abacaxi com Hortelã - 30 doses",
    "preco": "R$94,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_895515-MLA116554753373_082026-O.webp",
    "link": "https://meli.la/1hBaYEp",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1492,
    "nome": "Adaptador Carplay /android Auto Wireless Sem Fio Automático",
    "preco": "R$112,58",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_815914-MLB91079409477_082025-O.webp",
    "link": "https://meli.la/1S7gGuv",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1493,
    "nome": "Garrafa Térmica Infantil 500ml Escolar Vacumm Alça + Copo",
    "preco": "R$37",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_907396-MLB119224249909_102026-O.webp",
    "link": "https://meli.la/2Hbq5YB",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1494,
    "nome": "Boneco Super Herói Vingadores Liga Da Justiça Twist Heros",
    "preco": "R$21,23",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_677769-MLB115016212883_072026-O.webp",
    "link": "https://meli.la/13yRBNw",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1495,
    "nome": "Blusa Feminina Manga Curta Decote Quadrado Básica Baby Look",
    "preco": "R$22,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_718577-MLB96428864234_102025-O.webp",
    "link": "https://meli.la/1WW9RyK",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1496,
    "nome": "3x Glucomannan E Psyllium 360 Cápsulas Suplemento Ryco Sem Sabor",
    "preco": "R$75,72",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_787008-MLB96945277445_112025-O.webp",
    "link": "https://meli.la/2cs69Bd",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1497,
    "nome": "Tênis Infantil Masculino Leve Calce Fácil Com Cadarço As378",
    "preco": "R$55,21",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_767987-MLB111620070296_062026-O.webp",
    "link": "https://meli.la/1WDg8gb",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1498,
    "nome": "Kit Película Proteção Lente Câmera Para iPhone 16 16 Plus 17 Preto iPhone 16 / 16 Plus",
    "preco": "R$21,52",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_906506-MLB111452294636_052026-O.webp",
    "link": "https://meli.la/2vfJ1Hm",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1499,
    "nome": "2 Placas Proibido Estacionar Carga E Descarga Sinalização",
    "preco": "R$28,95",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_705657-MLA106310707021_012026-O.webp",
    "link": "https://meli.la/2spXMtj",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1500,
    "nome": "Painel Para Tv Até 40 Polegadas Estante Rack Sala Off White Off White/nature",
    "preco": "R$248,10",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_730193-MLB109161739799_032026-O.webp",
    "link": "https://meli.la/2GvpHrM",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1501,
    "nome": "Blusa Plus Size Listrada Feminina Manga Curta Preto E Branco Preto G4",
    "preco": "R$29",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_854390-MLB100488682355_122025-O.webp",
    "link": "https://meli.la/2mYJoFd",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1502,
    "nome": "Capa Capinha Para Samsung De Celular Com Acessório Urso Cute",
    "preco": "R$32,62",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_987605-MLB100862961974_122025-O.webp",
    "link": "https://meli.la/15fiR3T",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1503,
    "nome": "02 POTES do MAGNÉSIO TREONATO - Fórmula com Máxima Concentração e Pureza - 60 Cápsulas",
    "preco": "R$78,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_750980-MLA114832854796_082026-O.webp",
    "link": "https://meli.la/2BC121T",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1504,
    "nome": "Óleo De Manteiga Para Pipoca - Saúde",
    "preco": "R$18",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_643666-MLB111294615116_052026-O.webp",
    "link": "https://meli.la/1YnrBcc",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1505,
    "nome": "Blusa Feminina Algodão Gola Alta Manga Curta Casual Básica",
    "preco": "R$25,90",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_739999-MLB91205169048_092025-O.webp",
    "link": "https://meli.la/2xqZStV",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1506,
    "nome": "MAGNÉSIO TREONATO - Fórmula com Máxima Concentração e Biodisponibilidade - 60 Cápsulas",
    "preco": "R$51,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_944450-MLA113478417300_072026-O.webp",
    "link": "https://meli.la/1GGDySt",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1507,
    "nome": "Kit 4000 Papel Toalha Interfolha Branco Puro Para Secar Mãos",
    "preco": "R$39,87",
    "categoria": "Casa & Decoração",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_998245-MLB111471535632_052026-O.webp",
    "link": "https://meli.la/31jH5YF",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1508,
    "nome": "Chaveiro Calendário Personalizado Com Foto Em Aço Inox Aço Inox Frente E Verso",
    "preco": "R$61,76",
    "categoria": "Joias & Acessórios",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_724437-MLB104753879937_012026-O.webp",
    "link": "https://meli.la/1dEosmo",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1509,
    "nome": "Kit 2un Película Vidro 3d Todos Modelos iPhone Resistente iPhone 17 Pro Max",
    "preco": "R$34,90",
    "categoria": "Celulares & Telefonia",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_854516-MLB116596047258_092026-O.webp",
    "link": "https://meli.la/27HAhE9",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1510,
    "nome": "Kit 3 Macacões  Bebê Canelados Com Botões 3061-k3-c4",
    "preco": "R$162,24",
    "categoria": "Bebês & Crianças",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_919331-MLB69928409466_062023-O.webp",
    "link": "https://meli.la/18uoFkF",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1511,
    "nome": "PRÓPOLIS VERDE com 1000mg por dose - Extrato com Máxima Absorção e Concentração - 60 Cápsulas",
    "preco": "R$45,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_717186-MLA114763248565_072026-O.webp",
    "link": "https://meli.la/2hpa6V7",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1512,
    "nome": "Água Desmineralizada/deionizada Para Arrefecimento 20l Incolor",
    "preco": "R$59,83",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_945196-MLA117493016960_102026-O.webp",
    "link": "https://meli.la/2vfe5dA",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1513,
    "nome": "Chinelo Slide Masculino Ajustável Conforto Tira Larga Casual",
    "preco": "R$82,09",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_675378-MLB115199208353_072026-O.webp",
    "link": "https://meli.la/2VjBMoP",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1514,
    "nome": "Blusa Feminina Plus Size Gola Alta Manga Longa Lisa Malha Marrom Liso G1 (52/54)",
    "preco": "R$38",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_768341-MLB110935007586_052026-O.webp",
    "link": "https://meli.la/28PZB6M",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1515,
    "nome": "TRI MAGNÉSIO - Dimalato + Bisglicinato + Óxido - A Combinação Perfeita de 3 Magnésios com Máxima Pureza e Concentração - 30 Doses",
    "preco": "R$48,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_773177-MLA113496734576_072026-O.webp",
    "link": "https://meli.la/24QR81m",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1516,
    "nome": "Óculos De Sol Redondo Tendência Da Moda 2025/2026 Tik Tok Cinza-escuro Cinza",
    "preco": "R$65,88",
    "categoria": "Moda & Calçados",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_627365-MLB92102067708_092025-O.webp",
    "link": "https://meli.la/29FqJBe",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1517,
    "nome": "MAGNÉSIO DIMALATO - Fórmula 100% Pura com Máxima Concentração e Pureza - 60 Comprimidos",
    "preco": "R$47",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_821845-MLA114763188765_072026-O.webp",
    "link": "https://meli.la/2fTbZie",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1518,
    "nome": "1 Gh Drol - Ghmuscle Sem Sabor",
    "preco": "R$147,90",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_880443-MLB116647113984_092026-O.webp",
    "link": "https://meli.la/1CKvVUb",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1519,
    "nome": "2 Gh - Ghmuscle Sem Sabor",
    "preco": "R$226",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_837594-MLB91279026672_092025-O.webp",
    "link": "https://meli.la/2mPuTzk",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1520,
    "nome": "1 Halitol = Melhora Fim Do Mau Hálito Bom Rápido Eficaz Sem Sabor",
    "preco": "R$43,27",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_641526-MLB92653755079_092025-O.webp",
    "link": "https://meli.la/1xSFQRd",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1521,
    "nome": "1 Gh - Crie Músculos Sem Sabor",
    "preco": "R$140,50",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_936700-MLB116776561870_092026-O.webp",
    "link": "https://meli.la/29HSyus",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1522,
    "nome": "10 Ghdr0l - Ghmuscle Sem Sabor",
    "preco": "R$750",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_655838-MLB116777177752_092026-O.webp",
    "link": "https://meli.la/2GSgkSH",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1523,
    "nome": "Gummy Vinagre De Maça Com Canela Nutrir Célula Goma Vinagre Maca canela",
    "preco": "R$140,02",
    "categoria": "Alimentos & Bebidas",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_699109-MLA110419074131_042026-O.webp",
    "link": "https://meli.la/2deEUWL",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1524,
    "nome": "3x Maca Peruana Negra + Boro 500mg 100% Pura 120 Cápsulas Sem Sabor",
    "preco": "R$58,80",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_922906-MLB95972515170_102025-O.webp",
    "link": "https://meli.la/19VrSCc",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1525,
    "nome": "Óleo de Avestruz Amazon Struthio 60 Cápsulas Sabor Natural",
    "preco": "R$77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_600654-MLA113775687321_062026-O.webp",
    "link": "https://meli.la/1NAHRg1",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1526,
    "nome": "2 Gh - Ganho De Massa E Performance Nos Treinos Sem Sabor",
    "preco": "R$237,90",
    "categoria": "Ferramentas & Construção",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_845442-MLB118329490613_092026-O.webp",
    "link": "https://meli.la/2ECfHhQ",
    "cupom": "MELITEMCUPOM"
  },
  {
    "id": 1527,
    "nome": "TESTO ESSENCIAL para MULHERES - Fórmula Exclusiva com Feno Grego + Boro + Arginina + ZMA + Biotina + Vitaminas B6 e B12 - 60 Cápsulas",
    "preco": "R$57,77",
    "categoria": "Saúde & Suplementos",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_772877-MLA118613528991_102026-O.webp",
    "link": "https://meli.la/25rzk32",
    "cupom": "MELITEMCUPOM"
  }
];
document.addEventListener('DOMContentLoaded', () => {
    const categoryFilters = document.getElementById('category-filters');
    const couponFilters = document.getElementById('coupon-filters');
    const productsGrid = document.getElementById('products-grid');
    const searchInput = document.getElementById('search-input');
    let activeCategory = 'Todos';
    let activeCoupon = 'Todos';
    let searchQuery = '';
    let priceSort = 'default';
    let minPrice = '';
    let maxPrice = '';
    const priceSortInput = document.getElementById('price-sort');
    const minPriceInput = document.getElementById('price-min');
    const maxPriceInput = document.getElementById('price-max');

    const normalize = value => String(value ?? '')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase('pt-BR').trim();

    function renderCategories() {
        categoryFilters.replaceChildren();
        const seenCategories = new Set();
        const uniqueCategories = categories.filter(Boolean).filter(category => {
            const key = normalize(category);
            if (!key || key === 'todos' || seenCategories.has(key)) return false;
            seenCategories.add(key);
            return true;
        }).sort((a, b) => a.localeCompare(b, 'pt-BR'));

        ['Todos', ...uniqueCategories].forEach(category => {
            const button = document.createElement('button');
            const selected = activeCategory === category;
            button.type = 'button';
            button.className = `px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${selected ? 'bg-[#ffe600] text-black font-semibold' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`;
            button.textContent = category;
            button.setAttribute('aria-pressed', String(selected));
            button.addEventListener('click', () => {
                activeCategory = category;
                renderCategories();
                filterAndRenderProducts();
            });
            categoryFilters.appendChild(button);
        });
    }

    function renderCoupons() {
        if (!couponFilters) return;
        couponFilters.replaceChildren();
        const seenCoupons = new Set();
        const uniqueCoupons = products.map(product => String(product.cupom ?? '').trim()).filter(code => {
            const key = normalize(code);
            if (!key || key === 'sem cupom' || seenCoupons.has(key)) return false;
            seenCoupons.add(key);
            return true;
        }).sort((a, b) => a.localeCompare(b, 'pt-BR'));

        ['Todos', ...uniqueCoupons].forEach(coupon => {
            const button = document.createElement('button');
            const selected = normalize(activeCoupon) === normalize(coupon);
            button.type = 'button';
            button.textContent = coupon === 'Todos' ? 'Todos os cupons' : coupon;
            button.setAttribute('aria-pressed', String(selected));
            button.addEventListener('click', () => {
                activeCoupon = coupon;
                renderCoupons();
                filterAndRenderProducts();
            });
            couponFilters.appendChild(button);
        });
    }

    function getNumericPrice(product) {
        const raw = String(product.preco ?? '').replace(/[^0-9,.-]/g, '').replace(/\.(?=\d{3}(?:\D|$))/g, '').replace(',', '.');
        const value = Number.parseFloat(raw);
        return Number.isFinite(value) ? value : null;
    }

    const couponDiscounts = {
        'vemde cupom': 25,
        'vemdecupon': 25,
        'vemdecu pom': 25,
        'especialdescontos': 25,
        'bateudesconto': 25,
        'salvameubolso': 30,
        'acheinomeli': 25,
        'avant25': 25,
        'melioffhj': 25,
        'melitemcupom': 30,
        'paravc': 30,
        'pravc': 30,
        'seucupom': 25,
        'maisdesconto': 30,
        'superoferta': 25
    };

    function getCouponDiscount(code) {
        const key = normalize(code).replace(/\s+/g, '');
        const normalizedDiscounts = Object.fromEntries(Object.entries(couponDiscounts).map(([k, v]) => [k.replace(/\s+/g, ''), v]));
        return normalizedDiscounts[key] ?? null;
    }

    function formatBRL(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function createProductCard(product) {
        const card = document.createElement('article');
        card.className = 'product-card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200';

        const imageArea = document.createElement('div');
        imageArea.className = 'product-image-area relative w-full bg-white flex items-center justify-center p-4';
        const image = document.createElement('img');
        image.className = 'product-image';
        image.src = product.foto || 'https://placehold.co/400x400?text=Sem+Foto';
        image.alt = product.nome || 'Produto';
        image.loading = 'lazy';
        image.onerror = () => {
            image.onerror = null;
            image.src = 'https://placehold.co/400x400?text=Sem+Foto';
        };
        imageArea.appendChild(image);

        const category = document.createElement('span');
        category.className = 'absolute top-2 left-2 right-2 w-fit max-w-[calc(100%-1rem)] bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded';
        category.textContent = product.categoria || 'Oferta';
        category.title = product.categoria || 'Oferta';
        imageArea.appendChild(category);

        const content = document.createElement('div');
        content.className = 'product-card-content p-4 flex flex-col flex-grow';
        const name = document.createElement('h3');
        name.className = 'product-name text-gray-800 font-medium text-sm mb-3';
        name.textContent = product.nome || 'Produto sem nome';
        name.title = product.nome || 'Produto sem nome';

        const bottom = document.createElement('div');
        bottom.className = 'mt-auto';
        const price = document.createElement('div');
        price.className = 'product-price text-lg font-bold mb-3';
        price.textContent = product.preco || 'Confira no site';
        const numericPrice = getNumericPrice(product);
        const discount = getCouponDiscount(product.cupom);
        if (numericPrice !== null && discount !== null) {
            const calculated = document.createElement('span');
            calculated.className = 'coupon-calculated';
            const rawDiscount = numericPrice * (discount / 100);
            const discountCap = ['bateudesconto', 'salvameubolso', 'acheinomeli'].includes(normalize(product.cupom).replace(/\s+/g, '')) ? 500 : Infinity;
            const appliedDiscount = Math.min(rawDiscount, discountCap);
            const finalPrice = Math.max(0, numericPrice - appliedDiscount);
            calculated.textContent = `Com cupom: ${formatBRL(finalPrice)}`;
            const detail = document.createElement('small');
            detail.textContent = `${discount}% OFF · economia de ${formatBRL(appliedDiscount)}`;
            calculated.appendChild(detail);
            price.appendChild(document.createElement('br'));
            price.appendChild(calculated);
        }

        const couponBox = document.createElement('div');
        couponBox.className = 'bg-dashed border border-gray-300 rounded-lg p-2 mb-3 bg-gray-50 text-center';
        const couponLabel = document.createElement('span');
        couponLabel.className = 'block text-xs text-gray-500 uppercase font-semibold';
        couponLabel.textContent = 'Cupom';
        const couponCode = document.createElement('span');
        couponCode.className = 'block text-sm font-bold text-blue-600 uppercase tracking-wide select-all break-words';
        couponCode.textContent = product.cupom || 'Sem cupom';
        const copyButton = document.createElement('button');
        copyButton.type = 'button';
        copyButton.className = 'w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-2 rounded transition-colors';
        copyButton.textContent = 'Copiar cupom';
        copyButton.addEventListener('click', () => copyCoupon(product.cupom || '', copyButton));
        couponBox.append(couponLabel, couponCode, copyButton);

        const offerLink = document.createElement('a');
        offerLink.href = product.link || '#';
        offerLink.target = '_blank';
        offerLink.rel = 'noopener noreferrer';
        offerLink.className = 'block text-center bg-[#ffe600] hover:bg-[#ebd500] text-black font-semibold py-2.5 px-3 rounded-lg text-sm transition-colors duration-200';
        offerLink.textContent = 'Aproveitar oferta';
        offerLink.setAttribute('aria-label', `Aproveitar oferta: ${product.nome || 'produto'}`);

        bottom.append(price, couponBox, offerLink);
        content.append(name, bottom);
        card.append(imageArea, content);
        return card;
    }

    function filterAndRenderProducts() {
        const query = normalize(searchQuery);
        const filtered = products.filter(product => {
            const matchesCategory = activeCategory === 'Todos' || normalize(product.categoria) === normalize(activeCategory);
            const matchesCoupon = activeCoupon === 'Todos' || normalize(product.cupom) === normalize(activeCoupon);
            const numericPrice = getNumericPrice(product);
            const matchesMin = minPrice === '' || (numericPrice !== null && numericPrice >= Number(minPrice));
            const matchesMax = maxPrice === '' || (numericPrice !== null && numericPrice <= Number(maxPrice));
            return matchesCategory && matchesCoupon && normalize(product.nome).includes(query) && matchesMin && matchesMax;
        });
        if (priceSort === 'asc') filtered.sort((a, b) => (getNumericPrice(a) ?? Infinity) - (getNumericPrice(b) ?? Infinity));
        if (priceSort === 'desc') filtered.sort((a, b) => (getNumericPrice(b) ?? -Infinity) - (getNumericPrice(a) ?? -Infinity));

        const resultsCount = document.getElementById('results-count');
        if (resultsCount) {
            resultsCount.textContent = filtered.length === products.length
                ? `${filtered.length.toLocaleString('pt-BR')} ofertas disponíveis`
                : `${filtered.length.toLocaleString('pt-BR')} ${filtered.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}`;
        }

        const fragment = document.createDocumentFragment();
        if (filtered.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'col-span-full text-center py-12';
            const message = document.createElement('p');
            message.className = 'text-gray-500 text-lg';
            message.textContent = 'Nenhum produto encontrado. Tente outro termo ou categoria.';
            empty.appendChild(message);
            fragment.appendChild(empty);
        } else {
            filtered.forEach(product => fragment.appendChild(createProductCard(product)));
        }
        productsGrid.replaceChildren(fragment);
    }

    searchInput.addEventListener('input', event => {
        searchQuery = event.target.value;
        filterAndRenderProducts();
    });
    priceSortInput?.addEventListener('change', event => { priceSort = event.target.value; filterAndRenderProducts(); });
    minPriceInput?.addEventListener('input', event => { minPrice = event.target.value; filterAndRenderProducts(); });
    maxPriceInput?.addEventListener('input', event => { maxPrice = event.target.value; filterAndRenderProducts(); });

    renderCategories();
    renderCoupons();
    filterAndRenderProducts();
});

async function copyCoupon(text, button) {
    if (!text) return;
    const originalText = button.textContent;
    let copied = false;
    try {
        await navigator.clipboard.writeText(text);
        copied = true;
    } catch (error) {
        const temporary = document.createElement('textarea');
        temporary.value = text;
        temporary.style.position = 'fixed';
        temporary.style.opacity = '0';
        document.body.appendChild(temporary);
        temporary.select();
        copied = document.execCommand('copy');
        temporary.remove();
    }

    button.textContent = copied ? '✓ Copiado!' : 'Não foi possível copiar';
    if (copied) button.classList.add('bg-green-100', 'text-green-800');
    window.setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-100', 'text-green-800');
    }, 1800);
}
