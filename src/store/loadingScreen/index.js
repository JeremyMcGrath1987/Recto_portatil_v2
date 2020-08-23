export default {
    namespaced: true,
    state: {
        loading: false
    },
    actions: {
        ISLOADING: (context, toggle) => {
            context.commit("toggleLoading", toggle);
        }
    },
    mutations: {
        toggleLoading: (state, toggle) => {
            state.loading = toggle;
        }
    }
};
