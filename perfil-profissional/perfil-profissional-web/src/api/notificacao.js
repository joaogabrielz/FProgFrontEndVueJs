import { mande } from 'mande';
import { usePerfilStore } from '../stores/perfilStore';

const notificacao  = mande('http://localhost:3000/notificacao', {});
const notificacaoPerfil  = mande('http://localhost:3000/notificacao/perfil', {});


function setToken() {
  const store = usePerfilStore();

  notificacaoPerfil.options.headers.token = store.usuarioLogado.token;
  notificacao.options.headers.token = store.usuarioLogado.token;
}

export function buscarNotificacoesPerfil(perfilId) {
  setToken();
  return notificacaoPerfil.get(perfilId);
}

export function buscarNotificacao(notificacaoId) {
  setToken();
  return notificacao.get(notificacaoId);
}

export function marcarNotificacaoLida(notificacaoId) {
  setToken();
  return notificacao.put(`/lida/${notificacaoId}`);
}


