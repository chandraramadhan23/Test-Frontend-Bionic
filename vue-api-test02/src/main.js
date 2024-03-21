import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Post from './components/Post.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
