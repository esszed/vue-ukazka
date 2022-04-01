import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ButtonPrime from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css"; // core css
import Markdown from "vue3-markdown-it";
import MessagePrime from "primevue/message";

const app = createApp(App).use(router).use(PrimeVue);
app.component("ButtonPrime", ButtonPrime);
app.component("MessagePrime", MessagePrime);

app.use(Markdown);
app.mount("#app");
