import Perfil from './../pages/Perfil.vue';
import Home from './../pages/Home.vue';
import Login from './../pages/Login.vue';
import NovaConta from './../pages/NovaConta.vue';
import Notificacoes from './../pages/Notificacoes.vue';
import Notificacao from './../pages/Notificacao.vue';

export default [
  { path: '/', component: Login, name: 'Login'},
  { path: '/home', component: Home, name: 'Home' },
  { path: '/perfil', component: Perfil, name: 'Perfil' },
  { path: '/novaConta', component: NovaConta, name: 'NovaConta' },
  { path: '/notificacoes', component: Notificacoes, name: 'Notificacoes' },
  { path: '/notificacao/:id', component: Notificacao, name: 'Notificacao' },
]