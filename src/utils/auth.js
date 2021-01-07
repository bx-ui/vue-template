import router from "@/router";
import store from "@/store";
// const whiteRoute = ["login"]; //白名单
router.beforeEach((to, from, next) => {
  if (store.state.user.isLogin) {
    // 已经登录了
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    // 没有登录
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
