export default {
    namespaced: true,
    state: {
        lspd: false,
        peligroso: false,
        embargado: false,
        byc: false
    },
    actions: {
        UPDATE_SEARCH: (context, query) => {
            context.commit("updateSearch", query);
        }
    },
    mutations: {
        "updateSearch": (state, query) => {
            state[query] = !state[query];
        }
    }
};
