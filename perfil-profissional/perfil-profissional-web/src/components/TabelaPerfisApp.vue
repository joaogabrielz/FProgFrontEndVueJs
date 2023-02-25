<template>
  <table border="1">
          <thead>
            <th>Nome</th>
            <th>Disponibilidade de Mudança</th>
            <th>Disponibilidade de horário</th>
            <th>Ações</th>
          </thead>
          <tbody>
            <tr v-for="item in ultimosPerfis" v-show="item._id != usuarioLogado.perfil">
              <td>{{ item.nome }}</td>
              <td>{{ item.disponibilidadeMudanca ? "Sim" : "Não" }}</td>
              <td>{{ item.disponibilidadeHorario }}</td>
              <td>
                <a href="" @click.prevent="conectar(item._id)">Conectar</a>
              </td>
            </tr>
          </tbody>
      </table>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';


export default {
  computed: {
    ...mapState(usePerfilStore, ['usuarioLogado', 'ultimosPerfis']),
  },
  methods: {
  ...mapActions(usePerfilStore, ['conectarPerfis']),
    conectar(idPerfilDestinatario) {
      this.conectarPerfis(idPerfilDestinatario);
    }
  }
}
</script>

