<template>
  <div class="container">
  <h1 class="text-center">Paises API</h1>
  <Continente />
  <Buscador />
  <CardList />
  </div>
</template>

<script>
import CardList from './components/CardList'
import Continente from './components/Continente'
import Buscador from './components/Buscador'


export default {
  name: 'App',
  components: {
    CardList, Continente, Buscador
    
  }
}
</script>

