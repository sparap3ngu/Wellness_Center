<template>
  <div class="altro">

<!--Tabs di navigazione tra le due sezioni di trattamenti -->
     <md-tabs class="md-primary" md-alignment="fixed" md-active-tab="tab-altro">
            <md-tab id="tab-massaggi" md-label="Massaggi" to="/trattamenti/massaggi"> </md-tab>
            <md-tab id="tab-altro" md-label="Altro" to="/trattamenti/altro" exact> </md-tab>
          </md-tabs>

<!--Contenuto della pagina-->
      <h1> Altri trattamenti </h1>

<!--Impostazione del layout di cards-->
    <div class="md-layout" >
      <div class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-xsmall-size-100" 
      v-for="t in Trattamenti" :key="t.id">

<!--Impostazione della card-->
    <div >
      <md-card id="cards">
        <md-card-media class="immagini">
          <img id="immagini" :src="t.immagine" alt="People" >
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{t.nome}} </div>
          <div class="md-subhead"> {{t.costo}}</div>
        </md-card-header>

<!--Navigazione al dettaglio-->
          <md-card-actions md-alignment="right">
              <md-button :to="{name: 'dettaglioAltro', params: {id: t.id}}">Dettagli</md-button>
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
  name: "altro",
  data: function () {
    return{
//Array che raccoglie tutti i trattamenti del db
        Trattamenti: []
    }
  },

  created () {
//Funzione che, nonappena viene creata la pagina, prende i dati dal db e li passa all'array Trattamenti
  db.collection ('Trattamenti')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc => {
        const data =  {
          'id': doc.data().id,
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
/* CSS per la pagina */
h1{
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
