import { createApp } from 'vue'
import '../src/assets/styles/main.scss'
import App from './App.vue'


const app = createApp(App)
app.use(router)

app.mount('#app')
