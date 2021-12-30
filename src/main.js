import Vue from "vue";
import App from "./App.vue";
import Check from "@allnulled/check-that";
import i18next from "i18next";
import VueI18Next from "@panter/vue-i18next";
import i18nResources from "./i18n/resources.js";
import LanguageDetector from "i18next-browser-languagedetector";
import VueRouter from "vue-router";
import Push from "push.js";
import routerFactory from "./routes/factory.js";
import metadata from "./metadata.js";
import components from "./components/all.js";
import storage from "./database/storage.js";
import database from "./database/database.js";
import dialogs from "./components/dialogs/dialogs.js";
import badges from "./components/badges/badges.js";
import utils from "./utils/all.js";

Vue.config.productionTip = false

/* INTERNATIONALIZATION */
Vue.use(VueI18Next);
i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  resources: i18nResources,
});
const i18n = new VueI18Next(i18next);

/* FRAMEWORK */
Vue.prototype.$check = Check;
Vue.prototype.$storage = storage;
Vue.prototype.$database = database;
Vue.prototype.$pushNotifications = Push;
Vue.prototype.$dialogs = dialogs;
Vue.prototype.$badges = badges;
Vue.prototype.$metadata = metadata;
Vue.prototype.$utils = utils;
Vue.prototype.$noop = () => 0;
Vue.prototype.$window = window;

/* COMPONENTS */
for (let componentId in components) {
  Vue.component(componentId, components[componentId]);
}

/* ROUTER */
Vue.use(VueRouter);
const router = new VueRouter({ routes: routerFactory(components) });

/* VUE */
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount("#app");