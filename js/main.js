// Estrutura de dados

const PRESETS = [
  {
    nome: "Gestante",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156756-320-320/PlanoGestanteThumb.png",
    grupos: [
      {
        skus: [236, 282, [269, 3]],
      },
    ],
  },
  {
    nome: "2 a 9 meses",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156758-320-320/Plano-Herois2.png?v=637951574533370000",
    grupos: [
      {
        nome: "2 meses",
        skus: [261, 249, 245],
      },
      {
        nome: "3 meses",
        skus: [257, 255],
      },
      {
        nome: "4 meses",
        skus: [261, 249, 245],
      },
      {
        nome: "5 meses",
        skus: [257, 255],
      },
      {
        nome: "6 meses",
        skus: [261, 249, 245, 282],
      },
      {
        nome: "7 meses",
        skus: [282],
      },
      {
        nome: "9 meses",
        skus: [284],
      },
    ],
  },
  {
    nome: "12 a 18 meses",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156765-320-320/Plano-herois-3.png?v=637951603838200000",
    grupos: [
      {
        nome: "12 meses",
        skus: [235, 231, 271, 249],
      },
      {
        nome: "13 ou 14 meses",
        skus: [257, 255],
      },
      {
        nome: "15 meses",
        skus: [235, 231, 252],
      },
      {
        nome: "18 meses",
        skus: [271],
      },
    ],
  },
  {
    nome: "15 a 49 anos",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156771-320-320/PlanoVacinaemDia.png?v=637951611308470000",
    grupos: [
      {
        skus: [257, [231, 2], [270, 3], 259, 236, [255, 2]],
      },
    ],
  },
  {
    nome: "50+ anos",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156769-320-320/PlanoSenior.png?v=637951605753600000",
    grupos: [
      {
        skus: [[301, 2], 249, [270, 3], 236, 282],
      },
    ],
  },
];

const VACINAS = [
  {
    nome: "Tríplice Bacteriana Acelular (dTpa)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156695-55-55/Icones-GSK-dTpa.png?v=637921056148230000",
    sku: 236,
  },
  {
    nome: "Gripe Quadrivalente Infantil e Adulto",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156699-55-55/Icones-GSK-Gripe.png?v=637921056612900000",
    sku: 282,
  },
  {
    nome: "Hepatite B Adulto",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156697-55-55/Icones-GSK-HepB-Adt.png?v=637921056385470000",
    sku: 269,
  },
  {
    nome: "Hexavalente (DTPa-VIP-Hib-HepB)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156704-55-55/Icones-GSK-Hexa.png?v=637921062641170000",
    sku: 261,
  },
  {
    nome: "Pneumocócica Conjugada 13-Valente",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156567-55-55/ic.-VPC.13-PFIZER.jpg?v=637440787281770000",
    sku: 249,
  },
  {
    nome: "Rotavírus Humano Pentavalente",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156565-55-55/ic.-Rota.5V-MSD.jpg?v=637440784296800000",
    sku: 245,
  },
  {
    nome: "Meningocócica ACWY",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156696-55-55/Icones-GSK-ACWY.png?v=637921056326600000",
    sku: 257,
  },
  {
    nome: "Meningocócica B Recombinante",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156703-55-55/Icones-GSK-MeningoB.png?v=637921062383000000",
    sku: 255,
  },
  {
    nome: "Tríplice Viral (SCR)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156556-55-55/ic.-Triplice.Viral-MSD.jpg?v=637440776082770000",
    sku: 235,
  },
  {
    nome: "Hepatite A Infantil",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156584-55-55/ic.-Hep.A.Inf-MSD.jpg?v=637440799246030000",
    sku: 271,
  },
  {
    nome: "Pentavalente (DTPa-VIP-Hib)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156692-55-55/Icones-GSK-Penta.png?v=637921055813830000",
    sku: 252,
  },
  {
    nome: "Varicela (Catapora)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156553-55-55/ic.-Catapora-MSD.jpg?v=637440773621900000",
    sku: 231,
  },
  {
    nome: "HPV Quadrivalente",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156572-55-55/ic.-HPV.4V-MSD.jpg?v=637440792276600000",
    sku: 259,
  },
  {
    nome: "Hepatite A+B",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156690-55-55/Icones-GSK---Hep-A-B.png?v=637921054017670000",
    sku: 270,
  },
  {
    nome: "Herpes Zóster Recombinante",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156705-55-55/Icones-GSK-HerpesZoster.png?v=637921063766900000",
    sku: 301,
  },
  {
    nome: "Febre Amarela",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156748-55-55/Febre-Amarela.png?v=637934943289100000",
    sku: 284,
  },
];
