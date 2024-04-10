import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App);

// Use
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.use(vuetify);
app.mount("#app");

//Api UrlBase
axios.defaults.baseURL = "http://localhost:8888/tourism-peru/wp-json";
