<template>
  <table border="1">
          <thead>
            <th>Tipo</th>
            <th>Titulo</th>
            <th>Lida</th>
            <th>Ações</th>
          </thead>
          <tbody>
            <tr v-for="notificacao in notificacoes">
              <td>{{ notificacao.tipo }}</td>
              <td>{{ notificacao.titulo}}</td>
              <td>{{ notificacao.lida ? "SIm" : "Não"}}</td>
              <td>
                <router-link :to="`/notificacao/${notificacao._id}`">Detalhes</router-link>
              </td>
            </tr>
          </tbody>
      </table>
</template>

<script>
import { mapState } from 'pinia';
import { useNotificacaoStore } from '../stores/notificacaoStore';

export default {
  computed: {
    ...mapState(useNotificacaoStore, ['notificacoes']),
  }
}
</script>