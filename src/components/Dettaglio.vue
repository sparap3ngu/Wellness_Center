<template>
  <div class="page-container">
    <span>{{s.nome}}</span>
    <span>{{s.costo}}</span>
    <img :src="s.immagine" alt="immagine del servizio">
  </div>
</template>

<script>
import db from '../main'

export default  {
  data: function (){
    return {
      s: null,
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
        this.s.push(data)
        this.$route.id.then(data => {
          this.s = data.data;
        })
      })
    }) 
  }

  }
</script>


<style scoped>
</style>
