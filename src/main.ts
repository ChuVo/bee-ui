import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BeeToast from "@/components/toast/index";

const app = createApp(App)
    .use(router)
    .use(BeeToast)

app.mount('#app')
