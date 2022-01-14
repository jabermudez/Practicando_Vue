<template>
  <form @submit.prevent="procesarFormulario">
    <input type="text"
           class="form-control my-2"
           placeholder="Ingrese nombre"
           v-model.trim="tarea.nombre"
    >

    <div class="form-check form-check-inline">
      <input 
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="tarea.categorias"
        value="Node Js"
    >
    <label for="check-1" class="form-check-label">JavaScript</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="tarea.categorias"
        value="JavaScript"
    >
    <label for="check-2" class="form-check-label">Node Js</label>
    </div>
      <div>
        <div class="mt-2 form-check form-check-inline">
          <input 
            type="radio"
            id="radio-1"
            class="form-check-input"
            v-model="tarea.estado"
            value="Urgente"
        >
        <label for="radio-1" class="form-check-label">Urgente</label>
        </div>
      
        <div class="mt-2 form-check form-check-inline">
          <input 
            type="radio"
            id="radio-2"
            class="form-check-input"
            v-model="tarea.estado"
            value="Relax"
        >
        <label for="radio-2" class="form-check-label">Relax</label>
      </div>
    </div>

    <div class="mt-2">
      <input 
        type="number"
        class="form-control"
        v-model="tarea.numero"
      >
    </div>

    <button class="btn btn-dark mt-2" 
      type="submit"
      :disabled="bloquear"
    >
      procesar
    </button>
  </form>
  <hr>
  <p>
    {{ tarea }}
  </p>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }, 
  data() {
    return {
      tarea: {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
  }
},
  methods: {
    procesarFormulario() {
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === "") {
        console.log('Campo vacío')
        return
      }
      console.log('Campo no está Vacío')
      //envian los datos

      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  computed: {
    bloquear(){
      return this.tarea.nombre.trim() === "" ? true : false
    }
  }
}
</script>
