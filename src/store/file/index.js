import moment from "moment";
moment.locale("en", {
  months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
    "_"
  ),
  monthsShort: "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split(
    "_"
  ),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")
});

export default {
  state: {
    name: "Frank Castle",
    id: 2856,
    identification: "X4388998899",
    antecedentes: []
  },
  actions: {
    TOGGLESTATUS: (context, status) => {
      context.commit("toggleStatus", status);
    },
    ADDFINE: (context, fine) => {
      if (fine.arts.length > 0) {
        context.commit("addFine", fine);
      }
    }
  },
  mutations: {
    toggleStatus: (state, status) => {
      state[status] = !state[status];
    },
    addFine: (state, fine) => {
      state.antecedentes.unshift(fine);
    }
  }
};
