<template>
  <div class="page-container">

    <div class="md-layout" >
      <div class="md-layout-item md-large-size-20 md-medium-size-33 md-xsmall-size-100" 
      v-for="s in Servizi" :key="s.id">
        <div >
      <md-card id="cards">
        <md-card-media>
          <img :src="s.immagine" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{s.nome}} </div>
          <div class="md-subhead"> {{s.costo}}</div>
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
         Servizi: [
        /*{
          id: 1,
          nome: 'Acqua termale',
          costo: '70€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/a/3/csm__DSC4366_2af557342e.jpg',
        },*/

      ]
      }
    },

  created () {
  db.collection ('Servizi')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc => {
        const data =  {
          'immagine': doc.data().immagine,
          'nome': doc.data().nome,
          'costo': doc.data().costo,
        }
        this.Servizi.push(data)
      })
    }) 

  }
}



</script>


<style scoped>

#cards{
  margin-top:40px;
}
 .md-card-header {
  height:100px;
}  



</style>
