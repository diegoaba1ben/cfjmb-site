
import { createStore } from 'vuex';

const store = createStore({
  state: {
    // Estado inicial
    message: 'Welcome to the Home Page',
    notFoundMessage: 'Page Not Found'
  },
  mutations: {
    // Mutaciones para modificar el estado
    setMessage(state, payload) {
      state.message = payload;
    },
    setNotFoundMessage(state, payload) {
      state.notFoundMessage = payload;
    }
  },
  actions: {
    // Acciones para operaciones asíncronas
    updateMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    },
    updateNotFoundMessage({ commit }, newMessage) {
      commit('setNotFoundMessage', newMessage);
    }
  },
  getters: {
    // Getters para obtener datos calculados del estado
    message(state) {
      return state.message;
    },
    notFoundMessage(state) {
      return state.notFoundMessage;
    }
  }
});

export default store;
