import { createApp } from "vue";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueClickAway)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
