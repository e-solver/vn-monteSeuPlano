// Estrutura de dados

const PRESETS = [
  {
    id: "gestante",
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
    id: "2a9meses",
    nome: "2 a 9 meses",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156758-320-320/Plano-Herois2.png?v=637951574533370000",
    grupos: [
      {
        id: "2meses",
        nome: "2 meses",
        skus: [261, 249, 245],
      },
      {
        id: "3meses",
        nome: "3 meses",
        skus: [257, 255],
      },
      {
        id: "4meses",
        nome: "4 meses",
        skus: [261, 249, 245],
      },
      {
        id: "5meses",
        nome: "5 meses",
        skus: [257, 255],
      },
      {
        id: "6meses",
        nome: "6 meses",
        skus: [261, 249, 245, 282],
      },
      {
        id: "7meses",
        nome: "7 meses",
        skus: [282],
      },
      {
        id: "9meses",
        nome: "9 meses",
        skus: [284],
      },
    ],
  },
  {
    id: "12a18meses",
    nome: "12 a 18 meses",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156765-320-320/Plano-herois-3.png?v=637951603838200000",
    grupos: [
      {
        id: "12meses",
        nome: "12 meses",
        skus: [235, 231, 271, 249],
      },
      {
        id: "13ou14meses",
        nome: "13 ou 14 meses",
        skus: [257, 255],
      },
      {
        id: "15meses",
        nome: "15 meses",
        skus: [235, 231, 252],
      },
      {
        id: "18meses",
        nome: "18 meses",
        skus: [271],
      },
    ],
  },
  {
    id: "15a49anos",
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
    id: "50+anos",
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
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156695-100-100/Icones-GSK-dTpa.png?v=637921056148230000",
    sku: 236,
  },
  {
    nome: "Gripe Quadrivalente Infantil e Adulto",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156699-100-100/Icones-GSK-Gripe.png?v=637921056612900000",
    sku: 282,
  },
  {
    nome: "Hepatite B Adulto",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156697-100-100/Icones-GSK-HepB-Adt.png?v=637921056385470000",
    sku: 269,
  },
  {
    nome: "Hexavalente (DTPa-VIP-Hib-HepB)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156704-100-100/Icones-GSK-Hexa.png?v=637921062641170000",
    sku: 261,
  },
  {
    nome: "Pneumocócica Conjugada 13-Valente",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156567-100-100/ic.-VPC.13-PFIZER.jpg?v=637440787281770000",
    sku: 249,
  },
  {
    nome: "Rotavírus Humano Pentavalente",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156565-100-100/ic.-Rota.5V-MSD.jpg?v=637440784296800000",
    sku: 245,
  },
  {
    nome: "Meningocócica ACWY",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156696-100-100/Icones-GSK-ACWY.png?v=637921056326600000",
    sku: 257,
  },
  {
    nome: "Meningocócica B Recombinante",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156703-100-100/Icones-GSK-MeningoB.png?v=637921062383000000",
    sku: 255,
  },
  {
    nome: "Tríplice Viral (SCR)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156556-100-100/ic.-Triplice.Viral-MSD.jpg?v=637440776082770000",
    sku: 235,
  },
  {
    nome: "Hepatite A Infantil",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156584-100-100/ic.-Hep.A.Inf-MSD.jpg?v=637440799246030000",
    sku: 271,
  },
  {
    nome: "Pentavalente (DTPa-VIP-Hib)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156692-100-100/Icones-GSK-Penta.png?v=637921055813830000",
    sku: 252,
  },
  {
    nome: "Varicela (Catapora)",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156553-100-100/ic.-Catapora-MSD.jpg?v=637440773621900000",
    sku: 231,
  },
  {
    nome: "HPV Quadrivalente",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156572-100-100/ic.-HPV.4V-MSD.jpg?v=637440792276600000",
    sku: 259,
  },
  {
    nome: "Hepatite A+B",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156690-100-100/Icones-GSK---Hep-A-B.png?v=637921054017670000",
    sku: 270,
  },
  {
    nome: "Herpes Zóster Recombinante",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156705-100-100/Icones-GSK-HerpesZoster.png?v=637921063766900000",
    sku: 301,
  },
  {
    nome: "Febre Amarela",
    thumbnail:
      "https://vacinasnet.vteximg.com.br/arquivos/ids/156748-100-100/Febre-Amarela.png?v=637934943289100000",
    sku: 284,
  },
];

const carregarPresets = (presets) => {
  const wrapper = document.querySelector(".presets");
  let html = "";

  presets.forEach(({ nome, id, thumbnail }) => {
    html += `
    <label for="preset-gestante" class="preset preset__title">
      <img src="${thumbnail}" alt="Plano ${nome}" class="preset__thumb" />
      <input type="radio" name="preset__option" id="preset-${id}" class="preset__option" value="${id}" />
      ${nome}
    </label>
    `;
  });

  return (wrapper.innerHTML = html);
};

carregarPresets(PRESETS);

let presetEscolhido;

const handlePreset = (e) => {
  e.preventDefault();
  let formData = new FormData(e.target.form);
  let option = formData.get("preset__option");

  presetEscolhido = PRESETS.find((elem) => elem.id == option);
  presetEscolhido && carregarItens(presetEscolhido);
};

document
  .getElementById("submit-preset")
  .addEventListener("click", handlePreset);

const botaoQuantidade = (vacina, idGrupo) => {
  let { sku, quantidade } = vacina;
  let html = "";
  let newQuantidade = quantidade;

  html += `
    <div class="ajusteQuantidade">
      <input type="number" name="quantidade__${idGrupo}-${sku}" id="quantidade__${idGrupo}-${sku}" class="ajusteQuantidade__valor" min="1" max="${quantidade}" placeholder=${newQuantidade}>
      <button class="ajusteQuantidade__diminuir" id="diminuir-vacina-${sku}">-</button>
      <button class="ajusteQuantidade__aumentar" id="aumentar-vacina-${sku}">+</button>
    </div>
  `;

  return html;
};

const carregarItens = (preset) => {
  const wrapper = document.querySelector(".grupos");
  let html = "";

  preset.grupos.forEach((grupo) => {
    let nome = !!grupo.nome ? grupo.nome : preset.nome;
    let nomeId = !!grupo.id ? grupo.id : preset.id;
    let arrVacinas = retornarVacinas(grupo.skus, VACINAS);
    let htmlVacinas = "";

    arrVacinas.forEach((vacina) => {
      htmlVacinas += `
        <label for="${nomeId}-${vacina.sku}" class="vacina">
            <input type="checkbox" name="vacina__option" value=${nomeId}-${
        vacina.sku
      }  id="${nomeId}-${vacina.sku}" />
            <img class="vacina__thumb" src="${
              vacina.thumbnail
            }" alt="Ícone Vacina ${vacina.nome}" />
            ${vacina.nome}
            ${vacina.quantidade > 1 ? botaoQuantidade(vacina, nomeId) : ""}
        </label>
        `;
    });

    let htmlGrupo = `
    <fieldset class="grupo">
        <label for="${nomeId}" class="grupo__option">
        <input type="checkbox" class="grupo__option" name="grupo__option" value="${nomeId}" id="${nomeId}" />
            ${nome}
        </label>
        <div class="vacinas">
            ${htmlVacinas}
        </div>
    </fieldset>
    `;

    html += htmlGrupo;
  });

  wrapper.innerHTML = html;
  let options = [
    ...document.querySelectorAll(
      "[name='vacina__option'], [name='grupo__option']"
    ),
  ];
  options.forEach((option) => {
    option.addEventListener("change", handleOption);
  });

  let botoesQuantidade = [
    ...document.querySelectorAll(
      ".ajusteQuantidade__aumentar, .ajusteQuantidade__diminuir"
    ),
  ];

  botoesQuantidade.forEach((botao) => {
    botao.addEventListener("click", handleQuantidade);
  });
};

const handleQuantidade = (e) => {
  e.preventDefault();

  let elQuantidade = e.target.parentElement.querySelector(
    ".ajusteQuantidade__valor"
  );

  if (
    e.target.textContent == "-" &&
    elQuantidade.value != elQuantidade.attributes.min.value
  ) {
    elQuantidade.value = --elQuantidade.placeholder;
  } else if (
    e.target.textContent == "+" &&
    elQuantidade.value != elQuantidade.attributes.max.value
  ) {
    elQuantidade.placeholder == elQuantidade.attributes.max.value
      ? (elQuantidade.value = elQuantidade.placeholder)
      : (elQuantidade.value = ++elQuantidade.placeholder);
  }
};

const matchIds = (idGrupo, idVacina) => {
  return idGrupo.split("-")[0] == idVacina.split("-")[0];
};

const toggleVacina = (elVacina, checked) => {
  let elBotao =
    !!elVacina.parentElement.querySelector(".ajusteQuantidade") &&
    elVacina.parentElement.querySelector(".ajusteQuantidade");

  let elQuantidade =
    elBotao && elBotao.querySelector(".ajusteQuantidade__valor");

  if (checked) {
    elVacina.checked = true;
    if (elBotao) {
      elBotao.style.display = "inline-flex";
      elQuantidade.value = elQuantidade.placeholder;
    }
  } else {
    elVacina.checked = false;
    if (elBotao) {
      elBotao.style.display = "none";
      elQuantidade.value = "";
    }
  }
};

const handleOption = (e) => {
  if (e.target.name.split("__")[0] != "preset") {
    let vacinasCorrespondentes = [...e.target.form].filter(
      (el) => matchIds(e.target.id, el.id) && el.name == "vacina__option"
    );
    let grupoCorrespondente = [...e.target.form].find(
      (el) => matchIds(e.target.id, el.id) && el.name == "grupo__option"
    );
    let vacinasSelecionadas = vacinasCorrespondentes.filter(
      (e) => e.checked == true
    ).length;

    if (e.target.name.split("__")[0] == "grupo") {
      vacinasCorrespondentes.forEach((vacina) =>
        toggleVacina(vacina, e.target.checked)
      );
    }

    if (e.target.name.split("__")[0] == "vacina") {
      toggleVacina(e.target, e.target.checked);

      if (
        (e.target.checked && !grupoCorrespondente.checked) ||
        (!e.target.checked && grupoCorrespondente.checked)
      ) {
        grupoCorrespondente.indeterminate = true;
      }

      if (vacinasSelecionadas == vacinasCorrespondentes.length) {
        grupoCorrespondente.checked = true;
        grupoCorrespondente.indeterminate = false;
      } else if (vacinasSelecionadas == 0) {
        grupoCorrespondente.checked = false;
        grupoCorrespondente.indeterminate = false;
      }
    }
  }
};

const retornarVacinas = (skus, source) => {
  let arrVacinas = [];
  let temQuantidade = (sku) => typeof sku == "object" && !!sku[1];

  skus.forEach((el) => {
    let vacina = source.find((elem) => {
      return temQuantidade(el) ? elem.sku == el[0] : elem.sku == el;
    });

    let quantidade = temQuantidade(el) ? el[1] : 1;

    arrVacinas.push({ ...vacina, quantidade });
  });

  return arrVacinas;
};
