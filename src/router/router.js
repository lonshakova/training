import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import CaesarPage from "../pages/CaesarPage.vue";
import AtbashPage from "../pages/AtbashPage.vue";
import CodewordPage from "../pages/CodewordPage.vue";
import PlayfairPage from "../pages/PlayfairPage.vue";
import VernamPage from "../pages/VernamPage.vue";

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/caesar',
    component: CaesarPage
  },
  {
    path: '/atbash',
    component: AtbashPage
  },
  {
    path: '/codeword',
    component: CodewordPage
  },
  {
    path: '/playfair',
    component: PlayfairPage
  },
  {
    path: '/vernam',
    component: VernamPage
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;