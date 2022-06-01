<template>
  <div class="page-container">
    ciao
  </div>
</template>

<script>
import db from '../main'

export default  {
    data: function () {
      return{
         Servizio: []
      }
    },

  created: function () {
  db.collection ('Servizi')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc => {
        const data =  {
          'id': doc.id,
          'immagine': doc.data().immagine,
          'nome': doc.data().nome,
          'costo': doc.data().costo,
        }
        this.Servizi.push(data)
      })
    }) 
  },


  }
</script>


<style scoped>
</style>
