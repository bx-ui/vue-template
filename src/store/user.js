import { trim } from "@/utils/delSpace.js";
import Cookie from "js-cookie";
export default {
  namespaced: true,
  state: {
    isLogin: false,
    token: ""
  },
  mutations: {
    changeLoginState(state, flag) {
      state.isLogin = flag;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    asyncLogin({ commit }, loginForm) {
      return new Promise((resolve, reject) => {
        let username = trim(loginForm.username);
        let password = trim(loginForm.password);

        if (username == "jerry" && password == "123") {
          commit("changeLoginState", true);
          commit("setToken", "token");
          // 在cookies中保存一份
          Cookie.set("token", "token");
          resolve();
        } else {
          reject();
        }
      });
    }
  }
};
