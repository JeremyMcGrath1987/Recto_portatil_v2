export default {
  namespaced: true,
  state: {
    data: [

      {
        numero: 1,
        titulo: "Saltarse un semáforo",
        texto: "Saltarse un semáforo en rojo",
        multa: 100,
        pena: 0
      },
      {
        numero: 2,
        titulo: "Exceso de velocidad en vías urbanas",
        texto: "Conducir a más de 70 km/h por vías urbanas",
        multa: 300,
        pena: 0
      },
      {
        numero: 3,
        titulo: "Exceso de velocidad en vías urbanas + 100 km/h",
        texto: "Conducir a más de 100 km/h por vías urbanas",
        multa: 500,
        pena: 10
      },
      {
        numero: 3.1,
        titulo: "Conducción imprudente",
        texto:
          "Acumulación de 2 o más delitos de tráfico (se suma a la multa de esos delitos)",
        multa: 500,
        pena: 0
      },
      {
        numero: 3.2,
        titulo: "Conducción temeraria",
        texto:
          "Acumulación de 4 o más delitos de tráfico (se suma a la multa de esos delitos)",
        multa: 1000,
        pena: 15
      },
      {
        numero: 4,
        titulo: "Robo de vehículo",
        texto: "Robar un vehículo por la fuerza o intimidación",
        multa: 1500,
        pena: 15
      }
    ]
  },
  actions: {
    SETARTICLESLIST: (context, articles) => {
      context.commit("setArticlesList", articles);
    }
  },
  mutations: {
    setArticlesList: (state, articles) => {
      state.data = articles;
    }


  }
};
