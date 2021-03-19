import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const countreModule = {
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter += payload;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      setTimeout(function() {
        context.commit('increase', payload);
      }, 2000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    }
  }
};

const store = createStore({
  modules: {
    numbers: countreModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    userIsAuthenticated(state) {
      // console.log('isLoggedIn');
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);
app.use(store);

app.mount('#app');
