<template>
  <div class="servizi">

<!--Contenuto della pagina-->
    <h1> Scopri tutti i nostri servizi! </h1>

<!--Impostazione del layout di cards-->
    <div class="md-layout" >
      <div class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-xsmall-size-100" 
      v-for="s in Servizi" :key="s.id">

<!--Impostazione della card-->
    <div>
      <md-card id="cards">
        <md-card-media class="immagini">
          <img id="immagini" :src="s.immagine" alt="People" >
        </md-card-media>

        <md-card-header>
          <div class="md-title"><span class="nome">{{s.nome}} </span></div>
          <div class="md-subhead"> <span class="costo">{{s.costo}}</span></div>
        </md-card-header>

<!--Navigazione al dettaglio-->
          <md-card-actions md-alignment="right">
              <md-button :to="{name: 'dettaglioServizi', params: {id: s.id}}"> Dettagli </md-button>
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
  name: "Servizi",
  data: function () {
      return{
//Array che raccoglie tutti i servizi del db
         Servizi: []
      }
    },

    created: function () {
//Funzione che, nonappena viene creata la pagina, prende i dati dal db e li passa all'array Servizi
      db.collection ('Servizi')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach (doc => {
            const data =  {
              'id': doc.data().id,
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
/* CSS per la pagina */
h1 {
  text-align: center;
  margin-top: 50px;
}

#cards{
  margin-top:40px;

}

/* CSS per le cards */
.immagini  {
  height: 200px;
  overflow: hidden;
}

.md-title {
  overflow: hidden;
  text-overflow:ellipsis;  
}
</style>
