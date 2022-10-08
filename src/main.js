import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import router from "./router";
app.use(router);

import { createPinia } from "pinia";
app.use(createPinia());

import lodash from 'lodash';
app.config.globalProperties.$_ = lodash

import "./assets/main.css";
app.mount("#app");
