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
    data:
    {}
  },
  actions: {
    SETFILE: (context, file) => {
      context.commit("setFile", file);
    },
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
    setFile: (state, file) => {
      state.data = file;
    },
    /* toggleStatus: (state, status) => {
      state.data[status] = !state.data[status];
      let statusId = {
        userId: state.data.id,
        status: status
      };
      // eslint-disable-next-line no-undef
      mp.trigger("toggleStatusPDA", JSON.stringify(statusId));

    }, */
    addFine: (state, fine) => {
      state.data.antecedentes.unshift(fine);
      let fineId = {
        userId: state.data.id,
        fine: fine
      };
      // eslint-disable-next-line no-undef
      mp.trigger("addReportPDA", JSON.stringify(fineId));
    }
  }
};
