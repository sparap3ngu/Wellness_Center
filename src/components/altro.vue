<template>
  <div class="page-container">

      <h1> Altri trattamenti </h1>

    <div class="md-layout" >
      <div class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-xsmall-size-100" 
      v-for="t in Trattamenti" :key="t.id">
        <div >
      <md-card id="cards">
        <md-card-media class="immagini">
          <img id="immagini" :src="t.immagine" alt="People" >
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{t.nome}} </div>
          <div class="md-subhead"> {{t.costo}}</div>
        </md-card-header>

          <md-card-actions md-alignment="right">
              <md-button to="/dettaglio">Dettagli</md-button>
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
         Trattamenti: []
      }
    },

  created () {
  db.collection ('Trattamenti')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc => {
        const data =  {
          'immagine': doc.data().immagine,
          'nome': doc.data().nome,
          'costo': doc.data().costo,
        }
        this.Trattamenti.push(data)
      })
    }) 

  }
}
</script>


<style scoped>
h1{
    text-align: center;
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

#immagini {
  /*height:100%;*/
}




</style>
