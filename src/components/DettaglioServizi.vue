<template>
  <div class="page-container">
    <div v-for="s in Servizio" :key="s.id">
    <div class="md-layout md-gutter">

      <div class="md-layout-item md-xsmall-size-0 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
        <div class="imgContainer">
          <img class="img" :src="s.immagine" alt="immagine servizio" />
        </div>
      </div>

      <div class="md-layout-item md-xsmall-size-100 md-medium-size-75 md-large-size-75 md-xlarge-size-75">
        <img class="img2" :src="s.immagine" alt="immagine servizio" />
        <h1>{{s.nome}}</h1>
        <h3>Informazioni utili:</h3>
        <p>Costo: {{s.costo}}</p>
        <p>Orari:</p>
        <ul>
          <li>{{s.orari_feriali}}</li>
          <li>{{s.orari_festivi}}</li>
        </ul>
        <h3>Benefici:</h3>
        <p>{{s.descrizione}}</p>
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
            'orari_feriali': doc.data().orari_feriali,
            'orari_festivi': doc.data().orari_festivi,
          }
          this.Servizio.push(data)
        })
    }
}
</script>


<style scoped>

  .imgContainer {
    height: 100%; 
    width: 100%; 
    position: relative;
    overflow: hidden;
    align-content: center;
}
.img {
    height: 100%;
    min-width: 1000px;
    position: absolute;
    top: 0;
    left:-50%;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
}

@media only screen and (min-width: 599px){
  .img2 {
    display: none;
  }
}



h1, p, h3  {
  margin: 20px;
}

h1{
  text-align: center;
}
</style>
