<template>
  <div class="page-container">

<!--Tabs di navigazione tra le due sezioni di trattamenti -->
     <md-tabs class="md-primary" md-alignment="fixed" md-active-tab="tab-massaggi" >
            <md-tab id="tab-massaggi" md-label="Massaggi" to="/trattamenti/massaggi"> </md-tab>
            <md-tab id="tab-altro" md-label="Altro" to="/trattamenti/altro"> </md-tab>
          </md-tabs>

<!--Contenuto della pagina-->
    <h1> Massaggi </h1>

<!--Impostazione del layout di cards-->
    <div class="md-layout" >
      <div class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-xsmall-size-100" 
      v-for="m in Massaggi" :key="m.id">

<!--Impostazione della card-->
    <div >
      <md-card id="cards">
        <md-card-media class="immagini">
          <img id="immagini" :src="m.immagine" alt="People" >
        </md-card-media>

        <md-card-header> 
          <div class="md-title">{{m.nome}} </div>
          <div class="md-subhead"> {{m.costo}}</div>
        </md-card-header>

<!--Navigazione al dettaglio-->
          <md-card-actions md-alignment="right">
              <md-button :to="{name: 'dettaglioMassagi', params: {id: m.id}}">Dettagli</md-button>
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
//Array che raccoglie tutti i massaggi del db
         Massaggi: []
      }
    },

  created () {
//Funzione che, nonappena viene creata la pagina, prende i dati dal db e li passa all'array Massaggi
  db.collection ('Massaggi')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc => {
        const data =  {
          'id': doc.data().id,
          'immagine': doc.data().immagine,
          'nome': doc.data().nome,
          'costo': doc.data().costo,
        }
        this.Massaggi.push(data)
      })
    }) 

  }
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
