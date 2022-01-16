<template>
  <div class="card mb-2">
      <div class="card-body">
          <h5 class="text-center">{{pais.name}}</h5>
          <p class="text-center">
            <img :src="pais.flag" alt="`bandera-${pais.name}`" class="img-fluid w-50">
          </p>
          <p class="card-text">
              <span class="badge rounded-pill bg-primary d-block mb-1">Native Name: {{pais.nativeName}}</span>
              <span class="badge rounded-pill bg-danger  p-3 d-block mb-1">Population: {{numeroFormato(pais.population)}}</span>
              <span class="badge rounded-pill bg-success d-block mb-1">Capital: {{pais.capital}}</span>
              <span class="badge rounded-pill bg-info d-block mb-1">Región: {{pais.region}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['pais'],
    setup(){
        const numeroFormato = (num) => {
            return new Intl.NumberFormat("de-De").format(num)
        }
        return {numeroFormato}
    }

}
</script>
