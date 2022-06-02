<template>
  <div class="page-container">
    <div v-for="s in Servizio" :key="s.id">
    <div class="md-layout md-gutter">
      <div class="imgContainer md-layout-item md-xsmall-size-100 md-medium-size-50">
        <img class="img" :src="s.immagine" alt="immagine servizio" />
      </div>
      <div class="md-layout-item md-xsmall-size-100 md-medium-size-50">
        <h1>{{s.nome}}</h1>
        <h3>Informazioni utili:</h3>
        <p>Costo: {{s.costo}}</p>
        <p>Orari:</p>
        <ul>
          <li>{{s.orari_feriali}}</li>
          <li>{{s.orari_festivi}}</li>
        </ul>
      </div>
      <div class="md-layout-item md-xsmall-size-100 md-medium-size-100">
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
    height: 300px; 
    width: 300px; 
    position: relative;
}
.img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    margin:10px;
}

h1, p, h3  {
  margin: 20px;
}

h1{
  text-align: center;
}
</style>
