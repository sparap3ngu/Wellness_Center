import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'


import App from './App.vue'
import Contatti from './components/Contatti.vue'
import DettaglioServizi from './components/DettaglioServizi.vue'
import DettaglioMassaggi from  './components/DettaglioMassaggi.vue'
import DettaglioAltro from  './components/DettaglioAltro.vue'
import Home from './components/Home.vue'
import Servizi from './components/Servizi.vue'
import massaggi from './components/massaggi.vue'
import altro from './components/altro.vue'


Vue.use(VueCompositionAPI)
Vue.use(VueRouter)
Vue.use(VueMaterial)


const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', name: 'home', component: Home},
    { path: '/contatti', name: 'contatti', component: Contatti},
    { path: '/servizi', name: 'servizi', component: Servizi},
    { path: '/trattamenti/massaggi', name: 'trattamenti/massaggi', component: massaggi},
    { path: '/trattamenti/altro', name: 'trattamenti/altro', component: altro},
    { path: '/servizi/:id', name: 'dettaglioServizi', component: DettaglioServizi},
    { path: '/trattamenti/massaggi/:id', name: 'dettaglioMassagi', component: DettaglioMassaggi},
    { path: '/trattamenti/altro/:id', name: 'dettaglioAltro', component: DettaglioAltro},
  ],
})

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyCtvjVoc0KhG7eEh4W8N8AqoWKhiz4rYzs",
  authDomain: "info2022-b3181.firebaseapp.com",
  databaseURL: "https://info2022-b3181-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "info2022-b3181",
  appId: "1:965024957089:web:0021fa0319aaa998a566e0",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;

