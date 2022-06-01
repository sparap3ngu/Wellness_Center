<template>
  <div class="page-container">
    <h1> Scopri tutti i nostri servizi! </h1>
    <div class="md-layout" >
      <div class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-xsmall-size-100" 
      v-for="s in Servizi" :key="s.id">
        <div >
      <md-card id="cards">
        <md-card-media class="immagini">
          <img id="immagini" :src="s.immagine" alt="People" >
        </md-card-media>

        <md-card-header>
          <div class="md-title"><span class="nome">{{s.nome}} </span></div>
          <div class="md-subhead"> <span class="costo">{{s.costo}}</span></div>
        </md-card-header>

          <md-card-actions md-alignment="right">
              <md-button :to="{name: 'dettaglio', params: {id: s.id}}"> Dettagli </md-button>
          </md-card-actions>
      </md-card>
        </div>
      
      </div>
    </div>
    
  </div>
</template>

<script>
import db from '../main'

export default  {
  data: function () {
      return{
         Servizi: []
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

h1 {
  text-align: center;
  margin-top: 50px;
}

#cards{
  margin-top:40px;

}
 .md-card-header {
  height:100px;
}  

.immagini  {
  height: 200px;
  overflow: hidden;
}
</style>
