<template>
  <div id="Contatti"> 

<!--Sezione contatti-->
    <h1>
      I nostri contatti
    </h1>

      <div class="md-layout">
<!--Primo elemento (telefono)-->
        <div class="md-layout-item  md-xlarge-size-50 md-xsmall-size-100">
          <md-list class="md-double-line">
            <md-subheader>Telefono</md-subheader>
            <md-list-item>
            <md-icon class="md-primary">phone</md-icon>
            <div class="md-list-item-text">
              <span> +39 0461 281111</span>
            </div>
            </md-list-item>
          </md-list>
        </div>
     
<!--Secondo elemento (email)-->
        <div class="md-layout-item  md-xlarge-size-50 md-xsmall-size-100">
          <md-list class="md-double-line">
          <md-subheader>E-mail</md-subheader>
            <md-list-item>
            <md-icon class="md-primary">email</md-icon>
            <div class="md-list-item-text">
              <span>info@wellnesscenter.it</span>
            </div>
            </md-list-item>
          </md-list>
        </div>
      </div>
      <md-divider></md-divider>

<!--Sezione del personale-->
    <h1>
      Conosci il nostro team!
    </h1>

<!--Impostazione del layout delle cards del personale-->
      <div class="md-layout" >
        <div class="md-layout-item md-xlarge-size-10 md-large-size-20 md-medium-size-25 md-xsmall-size-50" 
          v-for="s in Personale" :key="s.id">
          <div >
            <md-card id="cards" class="md-elevation-0">
              <md-card-media class="immagini">
                <img id="immagini" :src="s.immagine" alt="People" >
              </md-card-media>
              <md-card-header>
                <div class="md-title">{{s.nome}} <br> {{s.cognome}}</div>
                <div class="md-subhead"> {{s.ruolo}}</div>
              </md-card-header>
          </md-card>
        </div>
      </div>
    </div>
  </div>     
</template>
 
 
<script>
import db from '../main.js'
 
export default  {
  name:"Contatti",
  data: function () {
      return{
//Array che contiene tutto il personale
         Personale: []
      }
    },

created () {
//Funzione che passa tutti i dati dei dipendenti all'array Personale
  db.collection ('Personale')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc => {
        const data =  {
          'immagine': doc.data().immagine,
          'nome': doc.data().nome,
          'cognome': doc.data().cognome,
          'ruolo': doc.data().ruolo,
        }
        this.Personale.push(data)
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

/* CSS per le cards */
#cards{
  text-align:center;
  padding: 20px;
}

.md-title {
  overflow: hidden;
  text-overflow:ellipsis;  
}


</style>

 
