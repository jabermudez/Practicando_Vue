<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">      
      <router-link :to="`/paises/${pais.name}`">
          {{ pais.name }}
      </router-link>
  </p>
</template>

<script>
import {userFetch} from '../hooks/userFetch'
export default {
    setup() {
        return {...userFetch('api.json')}
    }
}
</script>

