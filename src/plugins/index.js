import Vue from "vue";
import "./directives";
import xlButton from "./xl-button";
import xlDialog from "./xl-dialog";
import log from "./log";
import errorBoundary from "./error-boundary";

Vue.use(xlButton, {});
Vue.use(xlDialog, {});
Vue.use(log, { log: true });
Vue.use(errorBoundary, { errorBoundary: true });
