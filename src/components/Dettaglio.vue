<template>
  <div class="page-container">
    <div v-for="s in Servizio" :key="s.id">
      <p>
        Nome:
      </p>
      <p >
        {{s.nome}}
      </p>
    </div>
  </div>
</template>

<script>
import db from '../main'

export default  {
  data: function () {
    return{
      idServizio: this.$route.params.id,
      Servizio: [],
    }
  },

created: function () {
    db.collection ('Servizi')
    .doc(this.idServizio)
    .get()
    .then (doc => {
          const data =  {
            'id': doc.data().id,
            'immagine': doc.data().immagine,
            'nome': doc.data().nome,
            'costo': doc.data().costo,
            'descrizione': doc.data().descrizione,
            'orari': doc.data().orari,
          }
          this.Servizio.push(data)
          console.log(this.Servizio)
        })
    }
}
</script>


<style scoped>
</style>
