export default {
    namespaced: true,
    state: {
      data: []
    },
    actions: {
      SETFILES: (context, filesLite) => {
        context.commit("setFiles", filesLite);
      }
    },
    mutations: {
      setFiles: (state, filesLite) => {
        if(filesLite.length<=0){
          state.data = {message: "No hay coincidencias en el sistema"}
        }else{
          state.data = filesLite;
        }
      }
    }
  };