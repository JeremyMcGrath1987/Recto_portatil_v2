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
        state.data = filesLite;
      }
    }
  };