import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BeeToast from "@/components/toast/index";
import BeeModal from "@/components/modal/index";

const app = createApp(App)
    .use(router)
    .use(BeeToast)
    .use(BeeModal)

app.mount('#app')
