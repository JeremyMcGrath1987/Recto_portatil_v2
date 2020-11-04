export default {
  namespaced: true,
  state: {
    data:{}
  },
  actions: {
    SETUSERDATA: (context, user) => {
      context.commit("setUserData", user);
    }
  },
  mutations: {
    setUserData: (state, user) => {
      state.data = user;
    }
  }
};