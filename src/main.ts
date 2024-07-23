import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./shared/router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import VueApexCharts from "vue3-apexcharts";
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueApexCharts);
app.component("VueApexCharts", VueApexCharts);

app.mount("#app");
