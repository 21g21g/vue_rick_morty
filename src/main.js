import { createApp, provide, h } from "vue";
import { createPinia } from "pinia";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { InMemoryCache, ApolloClient } from "@apollo/client";
import CharacterPage from "./pages/CharacterPage.vue";
import EpisodePage from "./pages/EpisodePage.vue";
import LocationPage from "./pages/LocationPage.vue";
import HomePage from "./pages/HomePage.vue"


import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://rickandmortyapi.com/graphql",
  // uri: "https://countries.trevorblades.com",
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/episode/:id",
      component: EpisodePage,
    },
    {
      path:"/character/:id",
      component:CharacterPage,
    },
    {
      path:"/location/:id",
      component:LocationPage,
    },
  ],
});
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
